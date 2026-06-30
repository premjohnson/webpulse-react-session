function SeriesCard({ movie }) {
  return (
    <div className="overflow-hidden rounded-xl bg-gray-900 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-2 p-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{movie.title}</h2>

          <span className="rounded bg-red-600 px-2 py-1 text-xs">
            {movie.type}
          </span>
        </div>

        <p className="text-sm text-gray-400">
          {movie.year} • {movie.duration}
        </p>

        <p className="text-yellow-400">
          ⭐ {movie.rating}
        </p>

        <p className="text-sm">{movie.description}</p>

        <div className="flex flex-wrap gap-2">
          {movie.genre.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-700 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeriesCard;