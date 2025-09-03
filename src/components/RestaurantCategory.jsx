import { useState } from "react";

const RestaurantCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition sm:mx-0">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 rounded-xl cursor-pointer transition"
      >
        <span className="text-gray-800 font-semibold">
          {category.title}{category.items.length ? ` (${category.items.length})` : ""}
        </span>
        <span className="text-gray-600">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <ul className="space-y-3 px-4 py-3 max-h-80 overflow-y-auto custom-scrollbar sm:mr-2">
          {category.items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white hover:bg-gray-50 p-3 rounded-lg shadow-sm transition"
            >
              <span className="text-gray-800 font-stretch-75% sm:ml-4">
                {item.name} 
              </span>
              <span className="text-gray-700 font-stretch-75% sm:ml-4">
                ₹{(item.price ?? item.defaultPrice) / 100}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default RestaurantCategory;
