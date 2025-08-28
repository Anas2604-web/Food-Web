import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
   const [ListofRestaurants, setListofRestaurants] = useState([]);

   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchText, setSearchText] = useState("");

   const [noResults, setNoResults] = useState(false);

   useEffect(() => {
      fetchData();
   }, []);

  
   

   const fetchData = async () => {
  try {
    const data = await fetch(
      `/api/proxy?lat=12.9351929&lng=77.62448069999999`
    );
    const json = await data.json();

    //  find the restaurants
    const restaurants =
      json?.data?.cards
        ?.map(c => c.card?.card?.gridElements?.infoWithStyle?.restaurants)
        .find(r => r !== undefined) || [];


    setListofRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  if(ListofRestaurants.length === 0) {
    return <Shimmer />;
}


   return (
      <div className="body">
        <div className="filter">
        <div className="search-bar">
          <input 
          type="text" 
          placeholder="Search restaurants..." 
          className="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }
        }
         />
          <button
  onClick={() => {
    const filteredList = ListofRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredList.length > 0) {
      setFilteredRestaurants(filteredList);
      setNoResults(false);
    } else {
      setFilteredRestaurants([]);
      setNoResults(true);
    }
  }}
  className="btn"
>
  Search
</button>

        </div>

          <button onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setFilteredRestaurants(filteredList);
          }} className="btn">
            Top Rated Restaurants
          </button>
          
        </div>
        <div className="restaurant-container" >
          {noResults ? (
            <h1>No Results Found</h1> 
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} className="link"> 
             <RestaurantCard  resData={restaurant} />
             </Link>
            ))
          )}
        </div>
  
      </div>
    )
  }
 export default Body;