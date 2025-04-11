import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import MyRecipesPage from './pages/MyRecipesPage';
import CreateRecipePage from './pages/CreateRecipePage';
import FavoritesPage from './pages/FavoritesPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipesPage />} />
      <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      <Route path="/my-recipes" element={<MyRecipesPage />} />
      <Route path="/create-recipe" element={<CreateRecipePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

export default AppRoutes;
