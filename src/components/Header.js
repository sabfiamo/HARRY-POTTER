import logoHarryPotter from "../images/harry-potter-logo.png";
function Header() {
  return (
    <header className="header">
      <img
        className="header--image"
        src={logoHarryPotter}
        alt="Logo de HarryPotter"
      />
    </header>
  );
}
export default Header;
