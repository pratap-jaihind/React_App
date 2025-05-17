import { useEffect, useState } from "react";
import { MENU_API_URL } from "../components/config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    try {
      const response = await fetch(MENU_API_URL + resId);
      const data = await response.json();
      setRestaurant(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return restaurant;
};

export default useRestaurant;
