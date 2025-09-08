import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
     
  };

  return (
  <ul className="space-y-3 px-2 sm:px-4 py-3 max-h-[32rem] overflow-y-auto custom-scrollbar">
    {items.map((item) => (
      <li
        key={item.id}
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white hover:bg-gray-50 p-4 rounded-lg shadow-sm transition"
      >
        {/* Left side */}
        <div className="flex-1 sm:pr-4 mb-3 sm:mb-0">
          <span className="block text-gray-800 text-base font-medium">
            {item.name}
          </span>
          <span className="block text-gray-500 text-sm mt-1 line-clamp-2">
            {item.description ?? "Delicious dish prepared with fresh ingredients."}
          </span>
          <span className="block text-gray-700 text-sm sm:text-base font-semibold mt-2">
            ₹{(item.price ?? item.defaultPrice) / 100}
          </span>
        </div>

        {/* Right side */}
        <div className="relative flex-shrink-0 self-center sm:self-auto">
          <img
            src={CDN_URL + item.imageId}
            alt={item.name}
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
          />

          {/* Show Add button only if prop is true */}
          {showAddButton && (
            <button
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                        bg-white text-green-600 font-bold text-xs sm:text-sm
                        px-2 py-0 rounded-md shadow-md border border-gray-200 
                        hover:bg-green-50 transition mb-2"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          )}
        </div>
      </li>
    ))}
  </ul>
);

};

export default ItemList;
