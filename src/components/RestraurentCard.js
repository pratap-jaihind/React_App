import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./config";

const RestraurentCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} alt="restro" />
      <h2>{restaurant?.info?.name}</h2>
      <h3>{restaurant?.info?.avgRating}</h3>
      <h4>{restaurant?.info?.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestraurentCard;

