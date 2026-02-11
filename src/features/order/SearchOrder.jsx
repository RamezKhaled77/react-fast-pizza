import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchQuery, setSearchQuery] =
    useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full bg-yellow-100/85 px-4 py-2 text-sm text-stone-700 outline-none transition-all duration-300 placeholder:text-stone-400 focus:outline-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Search orders #"
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(e.target.value)
        }
      />
    </form>
  );
}

export default SearchOrder;
