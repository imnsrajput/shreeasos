import React from 'react';
import Description from "./Description";
import Customers from "./Customers";

const AboutUs = () => {
    return (
        <div className="highlight_wrapper">
            <Description/>
            <Customers/>
        </div>
    );
};

export default AboutUs;