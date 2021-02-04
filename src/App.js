import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/homepage";
import Lunch from "./pages/lunch";
import Dinner from "./pages/dinner";
import Takeout from "./pages/takeout";
import Catering from "./pages/catering";
import Team from "./pages/team";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/team">
            <Team />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
