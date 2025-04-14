import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

function RecipesPage() {
  return (
    <div>
      <h1>All Recipes</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default RecipesPage;