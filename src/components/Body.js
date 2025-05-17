import { useState, useEffect } from "react";
import RestraurentCard from "./RestraurentCard";
import { SWIGGY_API_URL, SWIGGY_REST_API_PATH, MENU_API_URL } from "./config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const FilterRestraunant = (searchTxt, allRestaurants) => {
  const filteredRestaurants = allRestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filteredRestaurants;
};

const Body = () => {
  useEffect(() => {
    getRestaurantsInfo();
  }, []);

  const getRestaurantsInfo = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const data = await response.json();
      const restaurants = eval("data?." + SWIGGY_REST_API_PATH) || [];
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error(error);
    }
  };

  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  return allRestaurants === 0 ? (
    <Shimmer />
  ) : (
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
            const data = FilterRestraunant(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestraurentCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

export default Body;
