import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavHeader from "./Components/Header/navHeader";

import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Services from "./Pages/services";
import Booking from "./Pages/booking";
import Blog from "./Pages/blog";

function App() {
  return (
    <Router>
      <div>
        <div>
          <NavHeader />

          <Switch>
            <Route exact path="/home" component={Home} />

            <Route exact path="/about" component={About} />

            <Route exact path ="/contact" component={Contact}/>

            <Route exact path ="/services" component={Services}/>

            <Route exact path ="/booking" component = {Booking}/>

            <Route exact path ="/blog" component = {Blog}/>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
