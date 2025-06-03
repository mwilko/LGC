import { Recipe } from '../interfaces/recipes.d';
import lgcLogo from 'assets/images/lgc_transparent.png'; // Fallback logo for products

export const recipes: Recipe[] = [ // Recipes array
  {
    id: '1',
    title: 'Wagyu Ribeye Steak',
    img: lgcLogo,
    description: 'A succulent wagyu ribeye steak, grilled to perfection.',
    ingredients: ['Wagyu Ribeye', 'Salt', 'Pepper'],
    instructions: 'Season the steak with salt and pepper, then grill for 6-8 minutes on each side.',
    category: 'wagyu'
  },
  {
    id: '2',
    title: 'Feedlot Sirloin Roast',
    img: lgcLogo,
    description: 'A hearty feedlot sirloin roast, perfect for family dinners.',
    ingredients: ['Feedlot Sirloin', 'Garlic', 'Rosemary'],
    instructions: 'Rub the roast with garlic and rosemary, then roast in the oven at 180°C for 1.5 hours.',
    category: 'feedlot'
  }
  ,
  {
    id: '3',
    title: 'Standard Chuck Stew',
    img: lgcLogo,
    description: 'A comforting standard chuck stew, slow-cooked with vegetables.',
    ingredients: ['Standard Chuck', 'Carrots', 'Potatoes', 'Onions'],
    instructions: 'Brown the chuck, then add vegetables and simmer for 2 hours.',
    category: 'standard'
  },
  {
    id: '4',
    title: 'BBQ Sauce Glazed Ribs',
    img: lgcLogo,
    description: 'Tender ribs glazed with a rich BBQ sauce.',
    ingredients: ['Ribs', 'BBQ Sauce'],
    instructions: 'Brush the ribs with BBQ sauce and grill for 30 minutes.',
    category: 'other'
  }
];