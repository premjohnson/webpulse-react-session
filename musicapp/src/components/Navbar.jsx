import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-xl ${
        darkMode
          ? "bg-gradient-to-r from-gray-950 via-gray-900 to-black"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-4xl font-extrabold">
            🎵 Music<span className="text-green-500">Hub</span>
          </h1>

          <p className="text-sm text-gray-400">
            Discover your favourite songs
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-green-600"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;