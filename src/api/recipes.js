const BASE_URL = 'http://localhost:5555';

export async function fetchRecipes() {
  const res = await fetch(`${BASE_URL}/recipes`);
  return await res.json();
}

export async function fetchRecipeById(id) {
  const res = await fetch(`${BASE_URL}/recipes/${id}`);
  return await res.json();
}

export async function createRecipe(recipeData, token) {
  const res = await fetch(`${BASE_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(recipeData)
  });
  return await res.json();
}
