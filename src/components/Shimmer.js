const Shimmer = () => {
  return (
    <>
      <div className="restaurant-list">
        {Array(10)
          .fill()
          .map((_, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
        <div className="shimmer-card"></div>
      </div>
    </>
  );
};

export default Shimmer;
