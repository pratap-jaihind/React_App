const RestraurentCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/8/26/b69b7ab7-a054-4c9f-8047-38455403043d_d62034af-4b36-454a-bdba-f4d5302bcb02.jpg_compressed"
        alt="restro"
      />
      <h2>{restaurant.info.name}</h2>
      <h3>{restaurant.info.avgRating}</h3>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestraurentCard;
