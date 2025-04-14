import { useParams } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";
import ReviewForm from "../components/ReviewForm";

function RecipeDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <RecipeDetail recipeId={id} />
      <ReviewForm recipeId={id} />
    </div>
  );
}

export default RecipeDetailPage;
