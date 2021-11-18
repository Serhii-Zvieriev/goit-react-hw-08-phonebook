import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operetions";

import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

import { activeLink, link } from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const onClick = () => dispatch(logout());
  return (
    <nav>
      {!isLoggedIn && (
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          Register
        </NavLink>
      )}
      {!isLoggedIn ? (
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          Login
        </NavLink>
      ) : (
        <NavLink
          to="/logout"
          onClick={onClick}
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          Logout
        </NavLink>
      )}

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? activeLink : link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
