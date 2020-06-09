import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Customers extends Component {
  state = {
    countdownStart: 1,
    countdownEnd: 1000000,
  };

  porcentage = () => {
    if (this.state.countdownStart < this.state.countdownEnd) {
      this.setState({
        countdownStart: this.state.countdownStart + 100000,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.countdownStart}+</span>
              <span>Happy Customers</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Who We Are</h3>
              <p>
                Shree Associates is considered as one of the leading supplier of
                Industrial Belts in Gujarat with 1000000+ Happy Customers across
                Gujarat. The company also has operations in other States of
                India.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Customers;
