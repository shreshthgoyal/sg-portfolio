import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

/**
 * Represents the header component containing the logo and navigation links.
 *
 * @component
 */

const Header = () => {
  return (
    <header className="header">
      {/* Link to the home page */}
      <NavLink to="/" />
      <NavLinks />
    </header>
  );
};

export default Header;
