import { User } from "firebase/auth";
import { NavLink, Outlet } from "react-router-dom";
import SignOut from "../../components/SignOut";
import classes from "./layout.module.css";

const Layout = ({ user }: { user: User | null }) => {
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
              Home 🏡
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mailto:darylfindlay@gmail.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hi%20Daryl%2C%20I'm%20interested%20in%20your%20work.%20Let's%20connect!"
            >
              Contact ✉️
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/test" className={({ isActive }) => isActive ? classes.active : undefined}>Test</NavLink>
          </li> */}
        </ul>
        <ul>
          {user && (
            <>
              <li>Welcome {user.displayName || user.email?.split("@")[0]}</li>
              <li><SignOut /></li>
            </>
          )}
          {!user && <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? classes.active : undefined}>Sign In</NavLink></li>}
        </ul>
      </nav>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
