// Definition of Product Interface.
export type Product = {
  // Represents a product in the shop
  id: string;
  name: string;
  price: number;
  img: string;
  description?: string; // Optional description for the product
  category: 'venison' | 'poultry' | 'standard' | 'other';
};
