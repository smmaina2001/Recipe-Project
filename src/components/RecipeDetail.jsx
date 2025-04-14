import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5555/recipes/${id}`, { credentials: "include" })
      .then((res) => res.json())
      .then(setRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      
      <h3>Reviews</h3>
      <ul>
        {recipe.reviews?.map((review, index) => (
          <li key={index}>
            {review.comment} - {review.rating}/5
          </li>
        ))}
      </ul>

      <ReviewForm recipeId={recipe.id} />
    </div>
  );
}

export default RecipeDetail;
