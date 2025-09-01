import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { restaurantInfo, menuItems } = useRestaurantMenu(resId);

  if (!restaurantInfo) {
    return <Shimmer />;
  }
 return (
  <div className="flex justify-center px-4">
    <div className="w-full max-w-2xl p-6 m-6 bg-white rounded-2xl shadow-lg">
      {/* Restaurant Info */}
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-extrabold text-gray-800 text-center sm:text-left">
          {restaurantInfo.name}
        </h2>
        <h3 className="text-gray-600 mt-1 text-center sm:text-left">
          {restaurantInfo.cuisines?.join(", ")} •{" "}
          {restaurantInfo.costForTwoMessage}
        </h3>
      </div>

      {/* Menu */}
      <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center sm:text-left">
        Menu
      </h3>
      <ul className="space-y-3 h-96 overflow-y-auto pr-2 custom-scrollbar">
        {menuItems.map((item) => (
          <li
            key={item.card.info.id}
            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-3 rounded-lg shadow-sm transition"
          >
            <span className="text-gray-800 font-medium">
              {item.card.info.name}
            </span>
            <span className="text-gray-700 font-semibold">
              ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

  
};

export default RestaurantMenu;
