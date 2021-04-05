import React, { useContext } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
// Import GLobal Store (Context)
import { LoginContext } from "../../store/login/LoginContextContainer";
// Components
import Login from "../login/Login";

const Nav: React.FC = () => {
  const { isAuth } = useContext(LoginContext);

  return (
    <div>
      <div id="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
            {isAuth[0] ? (
              <li>
                <Link to="/userdata">User Data</Link>
              </li>
            ) : null}
          </ul>
        </nav>
        <Login />
      </div>
    </div>
  );
};

export default Nav;
