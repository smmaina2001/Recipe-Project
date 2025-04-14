import { useState } from "react";

function SearchBar({ setFiltered }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    fetch("http://localhost:5555/recipes", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((recipe) =>
          recipe.title.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filtered);
      });
  };

  return (
    <div>
      <input
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
