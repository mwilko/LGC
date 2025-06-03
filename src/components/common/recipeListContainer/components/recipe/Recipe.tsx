import { Link } from 'react-router-dom';
import { Recipe } from 'interfaces/recipes.d';
import './Recipe.css';

type Props = {
  recipe: Recipe;
};

export const RecipeItem = ({ recipe }: Props) => {
  const { id, title, img } = recipe;

  return (
    <Link to={`/recipe/${id}`}>
      <div className="recipe-card">
        <div className="rc-img">
          <img src={img} alt={title} />
        </div>
        <div className="rc-title">
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};
