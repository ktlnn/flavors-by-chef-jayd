import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/homepage";
import Takeout from "./pages/takeout";
import Catering from "./pages/catering";
import Team from "./pages/team";
import Portfolio from "./pages/portfolio";
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
          <Route exact path="/takeout">
            <Takeout />
          </Route>
          <Route exact path="/catering">
            <Catering />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
