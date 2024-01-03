import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <>
      <div>
        <header className="header">
          <nav className="nav container">
            <NavLink to="/" className="nav-logo">              
              <i className="uil uil-estate nav_icon"></i>
              Home
            </NavLink>
            <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
              <ul className="nav_list gird">
                <li nav_item>
                  <NavLink to="/about" className="nav_link active-link">
                    <i className="uil uil-briefcase-alt nav_icon"></i>About
                  </NavLink>
                </li>

                <li nav_item>
                  <NavLink to="/contacts" className="nav_link">
                    <i className="uil uil-phone nav_icon"></i>Contacts
                  </NavLink>
                </li>
              </ul>
              <i
                className="uil uil-times nav_close"
                onClick={() => showMenu(!Toggle)}
              ></i>
            </div>
            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
              <i className="uil uil-apps"></i>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
