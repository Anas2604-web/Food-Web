import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category, onToggle, isOpen }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <li className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition sm:mx-0">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition"
      >
        <span className="text-gray-800 font-semibold">
          {category.title}
          {category.items.length ? ` (${category.items.length})` : ""}
        </span>
        <span className="text-xl text-left font-bold text-gray-600 mr-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* ✅ Items with Add button */}
      {isOpen && <ItemList items={category.items} showAddButton={true} />}
    </li>
  );
};

export default RestaurantCategory;
