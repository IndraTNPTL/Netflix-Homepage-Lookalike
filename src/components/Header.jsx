const Header = ({ image }) => {
  return (
    <header className="container">
      <img className="logo" src={image} alt="logo Netflix" />
    </header>
  );
};

export default Header;
