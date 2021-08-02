import React from "react";
import Avatar from '@material-ui/core/Avatar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EnterYourShop from "../../components/EnterYourShop";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import './dashboard.scss'

const routes = [
  {
    path: "/",
    exact: true,
     main: () => <h2>Dashboard</h2>
  },
  {
    path: "/shops",
    main: () => <h2><EnterYourShop /></h2>
  },
  {
    path: "/login",
    main: () => <h2>Login</h2>
  },
  {
    path: "/register",
    main: () => <h2>Register</h2>
  }
];

export default function Dashboard() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            paddingLeft: "17px",
            width: "20%",
            background: "#f0f0f0",
            lineHeight: 2,
            fontSize: 21
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="avatar">
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <p>Mohsin Waheed</p>
            </li>
            <li >
              <Link className="link-flex active" to="/"><DashboardRoundedIcon />Dashboard</Link>
            </li>
            <li>
              <Link className="link-flex" to="/shops"><StoreRoundedIcon />Shops</Link>
            </li>
            <li>
              <Link className="link-flex" to="/login"><LockRoundedIcon />Login</Link>
            </li>
            <li>
              <Link className="link-flex" to="/register"><PersonAddRoundedIcon />Register</Link>
            </li>
          </ul>

        
        </div>

        <div style={{ flex: 1, padding: "10px", background: "white" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}