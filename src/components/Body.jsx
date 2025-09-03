import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineConnection from "../utils/useOnlineConnection";




const Body = () => {
   const [ListofRestaurants, setListofRestaurants] = useState([]);

   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchText, setSearchText] = useState("");

   const [noResults, setNoResults] = useState(false);

   const isOnline = useOnlineConnection();

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

if(!isOnline) {
  return (
    <h1>🔴 Offline, Please check your internet connection!!</h1>
  )
}


   return (
  <div className="px-4 sm:px-6 lg:px-12 py-6 bg-gray-50 min-h-screen">
    {/* Filter Section */}
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white rounded-2xl shadow-md px-4 sm:px-6 py-4">
      {/* Search Bar */}
      <div className="flex items-center w-full sm:max-w-lg">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = ListofRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            if (filteredList.length > 0) {
              setFilteredRestaurants(filteredList);
              setNoResults(false);
            } else {
              setFilteredRestaurants([]);
              setNoResults(true);
            }
          }}
          className="ml-2 sm:ml-4 px-4 sm:px-5 py-2 bg-orange-100 text-orange-400 font-medium rounded-lg cursor-pointer hover:bg-orange-200 transition text-sm sm:text-base"
        >
          Search
        </button>
      </div>

      {/* Top Rated Button */}
      <button
        onClick={() => {
          const filteredList = filteredRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.5
          );
          setFilteredRestaurants(filteredList);
        }}
        className="w-full sm:w-auto px-4 sm:px-5 py-2 bg-orange-100 text-orange-400 font-medium rounded-lg cursor-pointer hover:bg-orange-200 transition text-sm sm:text-base "
      >
        Top Rated Restaurants
      </button>
    </div>

    {/* Restaurant Cards */}
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:px-4 lg:px-6">
      {noResults ? (
        <h1 className="col-span-full text-center text-lg sm:text-xl font-semibold text-gray-500">
          No Results Found
        </h1>
      ) : (
        filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="link"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))
      )}
    </div>
  </div>
);


  }
 export default Body;