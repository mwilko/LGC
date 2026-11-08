import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import App from '../App';
import { NavBar } from 'components/layout/navbar/Navbar';
import { Item } from 'components/common/itemListContainer/components/item/Item';
import { products } from 'data/products';

jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: { init: jest.fn(), send: jest.fn() },
}));

jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }));

const sendEmail = emailjs.send as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
  window.scrollTo = jest.fn();
});

test('visitors can explore produce and filter the catalogue from the homepage', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Lincolnshire Game Company');

  userEvent.click(screen.getByRole('link', { name: 'Explore Our Produce' }));
  const venisonFilter = screen.getByRole('button', { name: /Venison/ });
  userEvent.click(venisonFilter);

  expect(venisonFilter).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('link', { name: /Venison Availability/ })).toHaveAttribute('href', '/product/1');
  expect(screen.queryByRole('link', { name: /Chicken Availability/ })).not.toBeInTheDocument();
});

test('navigation closes on Escape and when a destination is selected', () => {
  render(<MemoryRouter><NavBar /></MemoryRouter>);
  const toggle = screen.getByRole('button', { name: 'Open menu' });
  userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(toggle, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();

  userEvent.click(toggle);
  userEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Our Produce' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('the More disclosure can be opened by keyboard and dismissed with Escape', () => {
  render(<MemoryRouter><NavBar /></MemoryRouter>);
  const summary = screen.getByText('More');
  summary.focus();
  userEvent.keyboard('{Enter}');
  expect(summary.closest('details')).toHaveAttribute('open');
  fireEvent.keyDown(summary, { key: 'Escape' });
  expect(summary.closest('details')).not.toHaveAttribute('open');
  expect(summary).toHaveFocus();
});

test('product enquiries preserve the selected product in the form and email', async () => {
  sendEmail.mockResolvedValueOnce({ status: 200, text: 'OK' });
  render(<MemoryRouter initialEntries={['/product/1']}><App /></MemoryRouter>);

  userEvent.click(screen.getByRole('link', { name: 'Enquire About This Product' }));
  const message = screen.getByRole('textbox', { name: 'Message' });
  expect(message).toHaveValue("Hello, I'd like to enquire about Venison.\n\n");
  userEvent.type(screen.getByRole('textbox', { name: 'Name' }), 'Test Customer');
  userEvent.type(screen.getByRole('textbox', { name: 'Email' }), 'customer@example.com');
  userEvent.type(message, 'Please advise on pack sizes.');
  userEvent.click(screen.getByRole('button', { name: 'Send Enquiry' }));

  await waitFor(() => expect(sendEmail).toHaveBeenCalledWith(
    expect.any(String),
    expect.any(String),
    expect.objectContaining({
      subject: 'Website Enquiry: Venison',
      message: "Hello, I'd like to enquire about Venison.\n\nPlease advise on pack sizes.",
    }),
  ));
  expect(await screen.findByRole('status')).toHaveTextContent('Thank you for your enquiry');
  expect(message).toHaveValue('');
});

test('failed enquiries announce the error and keep the customer message', async () => {
  sendEmail.mockRejectedValueOnce(new Error('Service unavailable'));
  const errorLog = jest.spyOn(console, 'error').mockImplementation(() => {});
  try {
    render(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>);
    userEvent.type(screen.getByRole('textbox', { name: 'Name' }), 'Test Customer');
    userEvent.type(screen.getByRole('textbox', { name: 'Email' }), 'customer@example.com');
    const message = screen.getByRole('textbox', { name: 'Message' });
    userEvent.type(message, 'Please call me about availability.');
    userEvent.click(screen.getByRole('button', { name: 'Send Enquiry' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Unable to send message');
    expect(message).toHaveValue('Please call me about availability.');
    expect(screen.getByRole('button', { name: 'Send Enquiry' })).toBeEnabled();
  } finally {
    errorLog.mockRestore();
  }
});

test('unknown product enquiry parameters do not populate the form', () => {
  render(<MemoryRouter initialEntries={['/contact?product=unknown']}><App /></MemoryRouter>);
  expect(screen.getByRole('textbox', { name: 'Message' })).toHaveValue('');
  expect(screen.queryByText(/Enquiring about/)).not.toBeInTheDocument();
});

test('product cards remain a single usable link when photography fails', () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Item product={{ ...products[0], img: '/missing-photo.jpg' }} />} />
        <Route path="/product/1" element={<h1>Venison Details</h1>} />
      </Routes>
    </MemoryRouter>,
  );
  fireEvent.error(screen.getByRole('img', { name: 'Venison' }));
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  userEvent.click(screen.getByRole('link'));
  expect(screen.getByRole('heading', { name: 'Venison Details' })).toBeInTheDocument();
});
