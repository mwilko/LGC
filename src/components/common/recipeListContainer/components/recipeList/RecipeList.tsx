import { Recipe } from 'interfaces/recipes.d';
import { RecipeItem } from '../recipe/Recipe';
import './RecipeList.css';

type Props = {
  recipes: Recipe[];
};

export const RecipeList = ({ recipes }: Props) => {
  return (
    <section className="recipe-list" aria-label="Recipe list" role="list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};
