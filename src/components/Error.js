import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error("Route Error:", error);

  return (
    <div className="error-container">
      <h1>🚫 Oops!</h1>
      <p>
        Sorry, the page you’re looking for doesn’t exist or an error occurred.
      </p>
      <h2>
        {error?.status} — {error?.statusText || "Something went wrong"}
      </h2>
      <a href="/" className="home-link">
        🔙 Back to Home
      </a>
    </div>
  );
};

export default Error;
