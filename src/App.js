import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/dashboard">
              <Dashboard/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
