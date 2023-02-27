import { NavLink, Outlet } from "react-router-dom";
import classes from "./layout.module.css";

const Layout = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" className={({ isActive }) => isActive ? classes.active : undefined}>Test</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
