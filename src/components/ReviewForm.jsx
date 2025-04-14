import { useState } from "react";

function ReviewForm({ recipeId }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5555/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ comment, rating, recipe_id: recipeId }),
    });

    if (res.ok) {
      setComment("");
      setRating("");
      alert("Review submitted!");
    } else {
      alert("Failed to submit review.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Review</h4>
      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
