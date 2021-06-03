import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/homepage";
import Takeout from "./pages/takeout";
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";
import EventInquiries from "./pages/eventInquiries";
import Chicken from "./pages/chicken";
import Steak from "./pages/steak";
import Seafood from "./pages/seafood";
import Wraps from "./pages/wraps";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/takeout">
            <Takeout />
          </Route>
          <Route exact path="/takeout/chicken">
            <Chicken />
          </Route>
          <Route exact path="/takeout/steak">
            <Steak />
          </Route>
          <Route exact path="/takeout/seafood">
            <Seafood />
          </Route>
          <Route exact path="/takeout/wraps">
            <Wraps />
          </Route>
          <Route exact path="/eventinquiries">
            <EventInquiries />
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
