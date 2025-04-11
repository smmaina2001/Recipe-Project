const API_URL = 'http://localhost:5000';

export async function fetchRecipes() {
  const res = await fetch(`${API_URL}/recipes`);
  return await res.json();
}

export async function fetchRecipeById(id) {
  const res = await fetch(`${API_URL}/recipes/${id}`);
  return await res.json();
}

export async function createRecipe(recipeData, token) {
  const res = await fetch(`${API_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(recipeData)
  });
  return await res.json();
}
