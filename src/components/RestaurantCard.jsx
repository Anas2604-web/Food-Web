import CDN_URL from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } = resData.info;


    return  (
      <div className="res-card">
        <img 
        className="res-imag"
        src={CDN_URL + cloudinaryImageId}
        alt="food" />
        <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
      </div>
    )
  }
 export default RestaurantCard;