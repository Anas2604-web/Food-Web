const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 py-8">
      {Array(12).fill("").map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-4 w-full animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>

          {/* Text placeholders */}
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
