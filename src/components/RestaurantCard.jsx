import {CDN_URL} from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } = resData.info;
  

    return (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 w-full h-full flex flex-col">
    <img
      className="w-full h-40 object-cover"
      src={CDN_URL + cloudinaryImageId}
      alt="food"
    />
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <h4 className="text-sm text-gray-500 mb-2 truncate">{cuisines.join(", ")}</h4>
      <div className="mt-auto">
        <h4 className="text-sm font-medium">{avgRating} ⭐</h4>
        <h4 className="text-sm text-gray-600">{sla.slaString}</h4>
        <h4 className="text-green-600 font-semibold">{costForTwo}</h4>
      </div>
    </div>
  </div>
);

  }
 export default RestaurantCard;