import { useState } from "react";
import RestraurentCard from "./RestraurentCard";
import { restaurantList } from "./config";

const FilterRestraunant = (searchTxt) => {
  const filteredRestaurants = restaurantList.filter((restaurant) =>
    restaurant.info.name.includes(searchTxt)
  );
  return filteredRestaurants;
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchTxt(e.target.value)}
          placeholder="Search for restaurants"
          value={searchTxt}
        />
        <button
          onClick={() => {
            const data = FilterRestraunant(searchTxt);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestraurentCard restaurant={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
