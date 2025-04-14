const BASE_URL = 'http://localhost:5555';

export async function fetchReviewsForRecipe(recipeId) {
  const res = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`);
  return await res.json();
}

export async function postReview(recipeId, reviewData, token) {
  const res = await fetch(`${BASE_URL}/recipes/${recipeId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(reviewData)
  });
  return await res.json();
}
