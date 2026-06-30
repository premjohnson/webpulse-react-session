import { useState } from "react";
import movies from "../data/movies";
import SeriesCard from "../components/SeriesCard";
//storage of the components
function Org() {
  const [search, setSearch] = useState("");
  const [showMovies, setShowMovies] = useState(true);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 p-8 text-white">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Netflix Series
      </h1>

      {/* Form */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 rounded-lg border border-gray-600 bg-gray-900 px-4 py-3 outline-none focus:border-red-500"
        />
      </div>

      {/* Event Handling */}
      <div className="mb-8 text-center">
        <button
          onClick={() => setShowMovies(!showMovies)}
          className="rounded-lg bg-red-600 px-6 py-3 hover:bg-red-700"
        >
          {showMovies ? "Hide Movies" : "Show Movies"}
        </button>
      </div>

      {/* Conditional Rendering */}
      {showMovies ? (
        filteredMovies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* List Rendering */}
            {filteredMovies.map((movie) => (
              <SeriesCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-2xl text-red-400">
            No Movie Found
          </h2>
        )
      ) : (
        <h2 className="text-center text-3xl">
          Movies Hidden
        </h2>
      )}
    </div>
  );
}

export default Org;