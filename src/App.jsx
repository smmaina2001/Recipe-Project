import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeForm from "./components/RecipeForm";
import ReviewForm from "./components/ReviewForm";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </>
  );
}

export default App;
