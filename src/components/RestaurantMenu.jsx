import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { restaurantInfo, menuItems } = useRestaurantMenu(resId);

  if (!restaurantInfo) {
    return <Shimmer />;
  }
 return (
  <div className="flex justify-center px-4">
    <div className="w-full max-w-3xl p-6 m-6 bg-white rounded-2xl shadow-lg">
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
        {menuItems.map((category) => (
          <RestaurantCategory key={category.title} category={category} />
        ))}
      </ul>

    </div>
  </div>
);

  
};

export default RestaurantMenu;
