const BASE_URL = 'http://localhost:5555';

export async function fetchFavorites(token) {
  const res = await fetch(`${BASE_URL}/favorites`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.json();
}

export async function addFavorite(recipeId, token) {
  const res = await fetch(`${BASE_URL}/favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ recipe_id: recipeId })
  });
  return await res.json();
}

export async function removeFavorite(favoriteId, token) {
  const res = await fetch(`${BASE_URL}/favorites/${favoriteId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return await res.json();
}
