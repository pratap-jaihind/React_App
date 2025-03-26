import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
  Title(logo)
  NavItem(Right side)
  Cart
Body
  Search Bar
  RestroList
     Lot of RestraurentCard
        Image
        Name
        Rating
        Cousine
Footer
  Links 
  Copyright        

*/

const title = (
  <h1 id="title" key="h1">
    This is a react element title!
  </h1>
);

const Title = () => {
  return <h1 id="title">This is a functional title</h1>;
};

const Container = () => {
  return (
    <div>
      {title}
      <Title />
      <h1>Heading one</h1>
      <h2>Heading two</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
