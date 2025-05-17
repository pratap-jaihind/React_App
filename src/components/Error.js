import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log;
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <h2>Error: {error.status + ":" + error.statusText}</h2>
    </div>
  );
};

export default Error;
