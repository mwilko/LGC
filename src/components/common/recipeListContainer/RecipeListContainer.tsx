import React, { useEffect, useState } from 'react';
// Components
import { RecipeList } from './components/recipeList/RecipeList';
import { Loader } from 'components/common/loader/Loader';
// Icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Data
import { recipes as recipeData } from 'data/recipes';
// Interfaces
import { Recipe } from 'interfaces/recipes.d';
// Styles
import './RecipeListContainer.css';

type Props = {
  limit?: number;
};

export const RecipeListContainer = ({ limit }: Props) => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      let output = recipeData;

      if (limit !== undefined) {
        output = output.slice(0, limit);
      }

      setFilteredRecipes(output);
      setError(output.length === 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  if (loading) {
    return <div className="loader-error"><Loader /></div>;
  }

  if (error) {
    return (
      <div className="loader-error">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1em',
          color: '#6b6b6b'
        }}>
          <ErrorIcon style={{ width: '32px' }} />
          <h3 className="error-title">No recipes available</h3>
        </div>
      </div>
    );
  }

  return <RecipeList recipes={filteredRecipes} />;
};
