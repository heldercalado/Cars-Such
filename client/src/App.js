import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
// import Contact from "./components/Contact";
// import Profile from "./components/Profile";

import Carousel from "./components/Carousel";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header>
            <Nav>
              <Switch />
            </Nav>
          </Header>

          <Main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Profile} /> */}
          </Main>

          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
