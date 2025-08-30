import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]); // add resId as dependency

  const fetchMenu = async () => {
    const data = await fetch(
      `/api/proxy?type=menu&restaurantId=${resId}&lat=12.9351929&lng=77.62448069999999`
    );

    const json = await data.json();
    console.log("FULL JSON:", json);

    // ✅ Restaurant info
    const info = json?.data?.cards?.find(c => c.card?.card?.info)?.card?.card?.info;
    setRestaurantInfo(info);

    // ✅ Menu items
    const allItems =
  json?.data?.cards
    ?.find(c => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.flatMap(c => c.card?.card?.itemCards || []) || [];

    const uniqueItems = Array.from(
    new Map(allItems.map(it => [it.card.info.id, it])).values()
    );

    setMenuItems(uniqueItems);

  };

  return { restaurantInfo, menuItems };
};

export default useRestaurantMenu;
