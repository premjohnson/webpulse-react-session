function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-[80vh] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Redux
      </h1>

      <p className="text-lg max-w-xl text-center">
        This simple application demonstrates Redux Toolkit,
        useSelector, useDispatch, auto authentication and logout.
      </p>

      <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
        Learn Redux
      </button>
    </section>
  );
}

export default Hero;