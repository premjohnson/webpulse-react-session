import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SongCard({ song }) {
  const { darkMode } = useContext(ThemeContext);

  const openSong = () => {
    window.open(
      `https://www.youtube.com/results?search_query=${song.title}+${song.artist}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={openSong}
      className={`group cursor-pointer overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={song.image}
          alt={song.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100"></div>

        <button className="absolute bottom-5 right-5 rounded-full bg-green-500 p-4 text-2xl text-white shadow-lg opacity-0 transition duration-300 group-hover:opacity-100">
          ▶
        </button>
      </div>

      {/* Details */}
      <div className="space-y-3 p-5">
        <h2 className="text-2xl font-bold">
          {song.title}
        </h2>

        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          🎤 {song.artist}
        </p>

        <div
          className={`flex justify-between text-sm ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <span>🎼 {song.genre}</span>
          <span>📅 {song.year}</span>
        </div>

        <div
          className={`flex justify-between text-sm ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <span>💿 {song.album}</span>
          <span>⏱ {song.duration}</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-300 pt-4 dark:border-gray-700">
          <span className="font-bold text-red-500">
            ❤️ {song.likes.toLocaleString()}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openSong();
            }}
            className="rounded-full bg-green-500 px-5 py-2 font-semibold text-white transition hover:bg-green-600"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongCard;