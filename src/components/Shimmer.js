const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill()
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img shimmer"></div>
            <div className="shimmer-title shimmer"></div>
            <div className="shimmer-text shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
