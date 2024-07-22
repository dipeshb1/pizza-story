import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          placeholder="Search order..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="trasnsition-all w-40 rounded-md bg-yellow-100 px-3 py-1 text-sm duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
        <button className="absolute right-2 top-0.5">🔍</button>
      </div>
    </form>
  );
}

export default SearchOrder;
