import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";
import Header from "./Components/Header-Footer/Header";
import Featured from "./Components/Featured/Index";
import ContactUs from "./Components/ContactUs/index";
import AboutUs from "./Components/AboutUs/AboutUs";
import Products from "./Components/Products/Products";
import Location from "./Components/Location/Location";
import Footer from "./Components/Header-Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <Element name="aboutus">
          <AboutUs />
        </Element>
        <Element name="products">
          <Products />
        </Element>
        <Element name="locateus">
          <Location />
        </Element>
        <Element name="contactus">
          <ContactUs />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
