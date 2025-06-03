export interface Recipe {
  id: string;
  title: string;
  img: string;
  description: string;
  ingredients?: string[];
  instructions?: string;
  category: 'wagyu' | 'feedlot' | 'standard' | 'other'; // Corrected from 'catagory' to 'category'
}