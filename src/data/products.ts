import { Product } from '../interfaces/product'; // Importing the Product type
import lgcLogo from 'assets/images/lgc_transparent.png'; // Fallback logo for products


export const products: Product[] = [ // Products array
  {
    id: '1',
    name: 'Wagyu Ribeye',
    price: 59.99,
    img: lgcLogo,
    category: 'wagyu',
  },
  {
    id: '2',
    name: 'Feedlot Sirloin',
    price: 34.5,
    img: lgcLogo,
    category: 'feedlot',
  },
  {
    id: '3',
    name: 'Standard Chuck',
    price: 19.0,
    img: lgcLogo,
    category: 'standard',
  },
  {
    id: '4',
    name: 'BBQ Sauce',
    price: 6.99,
    img: lgcLogo,
    category: 'other',
  }
];