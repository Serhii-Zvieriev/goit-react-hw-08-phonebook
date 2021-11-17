import { NavLink } from "react-router-dom";
import { activeLink, link } from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      to="/register"
      className={({ isActive }) => (isActive ? activeLink : link)}
    >
      Register
    </NavLink>

    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? activeLink : link)}
    >
      Login
    </NavLink>

    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? activeLink : link)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
