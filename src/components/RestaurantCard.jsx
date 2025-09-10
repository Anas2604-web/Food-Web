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
        <h4 className="text-sm text-green-900 font-medium">{avgRating} ⭐</h4>
        <h4 className="text-sm text-gray-600">{sla.slaString}</h4>
        <h4 className=" font-semibold">{costForTwo}</h4>
      </div>
    </div>
  </div>
);

  }
  export const withOpenStatus = (RestaurantCard) => {
  return (props) => {
    const { isOpen } = props.resData.info;

    return (
      <div className="relative">
        <label
          className={`absolute text-white text-xs px-2 py-1 rounded-br-lg rounded-tl-lg z-10 ${
            isOpen ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {isOpen ? "OPEN" : "CLOSED"}
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};


  

 export default RestaurantCard;