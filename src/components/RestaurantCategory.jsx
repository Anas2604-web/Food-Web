import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ category, onToggle, isOpen }) => {
  

  return (
    <li className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition sm:mx-0">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition"
      >
        <span className="text-gray-800 font-semibold">
          {category.title}{category.items.length ? ` (${category.items.length})` : ""}
        </span>
        <span className="text-xl text-left font-bold text-gray-600 mr-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>

       { isOpen && ( <ul className="space-y-3 px-4 py-3 max-h-80 overflow-y-auto custom-scrollbar sm:mr-2">
          {category.items.map((item) => (
         <li
          key={item.id}
          className="flex justify-between items-center bg-white hover:bg-gray-50 p-3 rounded-lg shadow-sm transition"
         >
          {/* Left side (name + description + price) */}
          <div className="flex flex-col justify-between flex-1 pr-4">
            {/* Name */}
            <span className="text-gray-800 font-stretch-75% text-sm sm:text-base font-medium">
              {item.name}
            </span>
            {/* Description */}
            <span className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2">
              {item.description ?? "Delicious dish prepared with fresh ingredients."}
            </span>

            {/* Price */}
            <span className="text-gray-700 font-stretch-75% text-sm sm:text-base font-semibold mt-2">
              ₹{(item.price ?? item.defaultPrice) / 100}
            </span>
          </div>

          {/* Right side (image) */}
          <img
            src={CDN_URL + item.imageId}
            alt="op"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
          />
        </li>

          ))}
        </ul>
       )}
    </li>
  );
};

export default RestaurantCategory;
