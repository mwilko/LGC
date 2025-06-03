import { Link } from 'react-router-dom';
import { Recipe } from 'interfaces/recipes.d';
import './Recipe.css';

type Props = {
  recipe: Recipe;
};

export const RecipeItem = ({ recipe }: Props) => {
  const { id, title, img } = recipe;

  return (
    <article className="recipe-card" aria-label={`Recipe: ${title}`}>
      <Link to={`/recipe/${id}`} tabIndex={-1} aria-hidden="true">
        <div className="rc-img">
          <img
            src={img}
            alt={title}
            loading="lazy"
            width="300" // optional fixed size to prevent layout shift
            height="225" // match aspect ratio 4:3 from CSS
          />
          {/* Example overlay buttons */}
          <div className="rc-overlay">
          </div>
        </div>
      </Link>
      <div className="rc-name-price">
        <h4>{title}</h4>
        {/* You can add a price or subtitle here */}
      </div>
    </article>
  );
};
