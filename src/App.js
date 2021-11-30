import './App.css';
import { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DoLogin from './components/Login/Login/DoLogin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Checkout from './components/Dashboard/Checkout/Checkout';
import Order from './components/Dashboard/Order/Order';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Contact from './components/Contact/Contact';
import AllProducts from './components/AllProducts/AllProducts';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <MessengerCustomerChat
            pageId="101340032265864"
            appId="612520889736567"
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <DoLogin />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/products">
              <AllProducts/>
            </Route>
            <PrivateRoute path="/checkout/:productID">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/order/:productID">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>


  );
}

export default App;
