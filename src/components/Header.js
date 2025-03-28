const Title = () => {
  return (
    <div>
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTKRFunqaUFSmy578bQDu0lhmRxAv0z57_8CwlyJp6uRDu5joa6YqBCt8vO56V-jxVg4"
          alt="logo"
        />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
