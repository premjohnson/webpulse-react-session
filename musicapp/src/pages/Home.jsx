import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SongCard from "../components/SongCard";

import songs from "../data/data";

function Home() {
  const { darkMode } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredSongs = useMemo(() => {
    console.log("Filtering Songs...");

    return songs.filter((song) => {
      const matchSearch = song.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchGenre =
        genre === "All" || song.genre === genre;

      return matchSearch && matchGenre;
    });
  }, [search, genre]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-black"
      }`}
    >
      <Navbar />

      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Hero Section */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold">
            🔥 Trending Songs
          </h1>

          <p className="mt-3 text-lg text-gray-400">
            Discover and enjoy your favourite artists from around the world.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterBar
            genre={genre}
            setGenre={setGenre}
          />
        </div>

        {/* Statistics */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-green-500 p-6 text-white shadow-xl">
            <h2 className="text-lg font-semibold">
              🎵 Total Songs
            </h2>

            <h1 className="mt-4 text-5xl font-bold">
              {filteredSongs.length}
            </h1>
          </div>

          <div className="rounded-3xl bg-pink-500 p-6 text-white shadow-xl">
            <h2 className="text-lg font-semibold">
              ❤️ Total Likes
            </h2>

            <h1 className="mt-4 text-5xl font-bold">
              {filteredSongs
                .reduce((sum, song) => sum + song.likes, 0)
                .toLocaleString()}
            </h1>
          </div>

          <div className="rounded-3xl bg-blue-500 p-6 text-white shadow-xl">
            <h2 className="text-lg font-semibold">
              🎼 Genres
            </h2>

            <h1 className="mt-4 text-5xl font-bold">
              {new Set(filteredSongs.map((song) => song.genre)).size}
            </h1>
          </div>

        </div>

        {/* Songs */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;