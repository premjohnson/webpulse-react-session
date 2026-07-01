function FilterBar({ genre, setGenre }) {
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className="rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg outline-none"
    >
      <option className="text-black">All</option>
      <option className="text-black">Pop</option>
      <option className="text-black">Rock</option>
      <option className="text-black">EDM</option>
      <option className="text-black">Romantic</option>
    </select>
  );
}

export default FilterBar;