import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import reportWebVitals from 'misc/reportWebVitals';
// Router
import { BrowserRouter } from 'react-router-dom';
// Contexts
// import { AuthContextProvider } from 'contexts/AuthContext';
import { CartContextProvider } from 'contexts/CartContext';
import { LSModalContextProvider } from 'contexts/LSModalContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <AuthContextProvider> */}
                <CartContextProvider>
                    <LSModalContextProvider>
                        <App />
                    </LSModalContextProvider>
                </CartContextProvider>
            {/* </AuthContextProvider> */}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
