import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
   const [ListofRestaurants, setListofRestaurants] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);
   

   const fetchData = async () => {
  try {
    const data = await fetch(
      "/api/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("Full JSON:", json);

    //  find the restaurants
    const restaurants =
      json?.data?.cards
        ?.map(c => c.card?.card?.gridElements?.infoWithStyle?.restaurants)
        .find(r => r !== undefined) || [];


    setListofRestaurants(restaurants);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  if(ListofRestaurants.length === 0) {
    return <Shimmer />;
}


   return (
      <div className="body">
        <div className="search-bar">
          <input 
          type="text" 
          placeholder="Search restaurants..." 
          className="search"
         />
        </div>
        <div className="filter">
          <button onClick={() => {
            const filteredList = ListofRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setListofRestaurants(filteredList);
          }} className="filter-btn">
            Top Rated Restaurants
          </button>
          
        </div>
        <div className="restaurant-container" >
          {ListofRestaurants.map((restaurant) => (
             <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))} 
        </div>
  
      </div>
    )
  }
 export default Body;