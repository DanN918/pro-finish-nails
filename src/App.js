import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavHeader from "./Components/Header/navHeader";

import Footer from "./Components/Footer/footer";

import Home from "./Pages/home";
import About from "./Pages/redirects/about";
import Contact from "./Pages/redirects/contact";
import Services from "./Pages/services";
import Booking from "./Pages/booking";
import Blog from "./Pages/blog";

function App() {
  return (
    <Router>
      <div>
        <NavHeader />
        <Switch>
          <Route path="/home" component={Home} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />

          <Route path="/services" component={Services} />

          <Route path="/booking" component={Booking} />

          <Route path="/blog" component={Blog} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
