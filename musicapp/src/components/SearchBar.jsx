import { useRef } from "react";

function SearchBar({ search, setSearch }) {
  const inputRef = useRef();

  return (
    <div className="flex flex-wrap items-center gap-4">
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search songs..."
        className="w-96 rounded-full bg-white px-6 py-4 text-black shadow-lg outline-none ring-green-500 focus:ring-4"
      />

      <button
        onClick={() => inputRef.current.focus()}
        className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
      >
        Focus
      </button>

      <button
        onClick={() => {
          setSearch("");
          inputRef.current.focus();
        }}
        className="rounded-full bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;