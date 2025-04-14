import RecipeList from "../components/RecipeList";

function FavoritesPage() {
  return (
    <div>
      <h1>My Favorite Recipes</h1>
      <RecipeList filter="favorites" />
    </div>
  );
}

export default FavoritesPage;