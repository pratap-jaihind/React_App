import React, { useState, useEffect } from "react";
import { IMG_CDN_URL, MENU_API_URL } from "./config";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const FetchMenu = async () => {
    try {
      const response = await fetch(MENU_API_URL + resId);
      const data = await response.json();
      setRestaurantInfo(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const {
    cloudinaryImageId,
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};
  console.log(restaurantInfo?.cards[2]?.card?.card?.info);

  useEffect(() => {
    FetchMenu();
  }, [resId]);

  return (
    <div className="restaurant-menu">
      <img
        className="restaurant-img"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restro"
      />
      <h2>{name}</h2>
      <h3>{avgRating}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{locality}</h4>
      {/* <h4>{sla}</h4> */}
      <h1>Restaurant Menu</h1>
    </div>
  );
};

export default RestaurantMenu;
