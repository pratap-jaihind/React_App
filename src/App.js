import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
