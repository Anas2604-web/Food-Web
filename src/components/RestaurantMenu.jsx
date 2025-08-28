import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";



const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // taking resId from URL params
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []); // runs again if resId changes

  const fetchMenu = async () => {
    const data = await fetch(
      `/api/proxy?type=menu&restaurantId=${resId}&lat=12.9351929&lng=77.62448069999999`
    );

    const json = await data.json();
    console.log("FULL JSON:", json);

    // Restaurant info
    const info = json?.data?.cards?.find(c => c.card?.card?.info)?.card?.card?.info;
    setRestaurantInfo(info);

    // Menu items (flattened array of dishes)
    const items =
      json?.data?.cards
        ?.find(c => c.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.flatMap(c => c.card?.card?.itemCards || []) || [];

    setMenuItems(items);
  };

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
     <h2>{restaurantInfo.name}</h2>
      <h3>{restaurantInfo.cuisines?.join(", ")} - {restaurantInfo.costForTwoMessage}</h3>

      <h3>Menu</h3>
        <ul className="menu-items">
        {menuItems.map((item) => (
            <li key={item.card.info.id}>
            <span>{item.card.info.name}</span>
            <span>₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}</span>
            </li>
        ))}
        </ul>

    </div>
  );
};

export default RestaurantMenu;
