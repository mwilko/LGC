import { Recipe } from 'interfaces/recipes.d';
import { RecipeItem } from '../recipe/Recipe';
import './RecipeList.css';

type Props = {
  recipes: Recipe[];
};

export const RecipeList = ({ recipes }: Props) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
