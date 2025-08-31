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
    <div className="menu">
      <h2>{restaurantInfo.name}</h2>
      <h3>
        {restaurantInfo.cuisines?.join(", ")} - {restaurantInfo.costForTwoMessage}
      </h3>

      <h3>Menu</h3>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            <span>{item.card.info.name}</span>
            <span>
              ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
