import './App.css';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Checkout from './components/Dashboard/Checkout/Checkout';
import Order from './components/Dashboard/Order/Order';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout/:productID">
            <Checkout/>
          </Route>
          <Route path="/order/:productID">
            <Order/>
          </Route>
          <PrivateRoute path="/dashboard">
              <Dashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>

  );
}

export default App;
