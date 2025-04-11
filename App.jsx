// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import MyRecipesPage from './pages/MyRecipesPage';
import CreateRecipePage from './pages/CreateRecipePage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="/my-recipes" element={<MyRecipesPage />} />
          <Route path="/create" element={<CreateRecipePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
