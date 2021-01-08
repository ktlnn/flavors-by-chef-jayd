
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/homepage";
import Lunch from "./pages/lunch";
import Dinner from "./pages/dinner";
import Takeout from "./pages/takeout";
import Catering from "./pages/catering";

function App() {
  return (
    
      <Router>
      <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/lunch">
            <Lunch />
          </Route>
          <Route exact path="/dinner">
            <Dinner />
          </Route>
          <Route exact path="/takeout">
            <Takeout />
          </Route>
          <Route exact path="/catering">
            <Catering />
          </Route>
        </Switch>
      </div>
      </Router>
      
     
   
  );
}

export default App;
