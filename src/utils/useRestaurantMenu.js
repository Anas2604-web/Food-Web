import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]); //  resId as dependency

  const fetchMenu = async () => {
    const data = await fetch(
      `/api/proxy?type=menu&restaurantId=${resId}&lat=12.9351929&lng=77.62448069999999`
    );

    const json = await data.json();
    //  Restaurant info
    const info = json?.data?.cards?.find(c => c.card?.card?.info)?.card?.card?.info;
    setRestaurantInfo(info);

    //  Menu items
    const categories =
  json?.data?.cards
    ?.find(c => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(c => 
      c.card?.card?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    ?.map(c => ({
      title: c.card.card.title,
      items: c.card.card.itemCards?.map(it => it.card.info) || []
    })) || [];

setMenuItems(categories);
console.log(categories);


  };

  return { restaurantInfo, menuItems };
};

export default useRestaurantMenu;
