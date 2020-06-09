import React from 'react';

import icon_call from '../../resources/images/icons/call.png';
import icon_location from '../../resources/images/icons/location.png';
import Slide from 'react-reveal/Slide';
// import { Slide } from '@material-ui/core';


const ContactUs = () => {
    return (
        <div className="bck_black">
        <div className="contactus pricing_section">
                    <h2>Contact Us</h2>
        </div>
            <div className="center_wrapper">
                <div className="vn_wrapper">
                <Slide left>
                    <div className="vn_item">
                        <div className="vn_outer">
                        <div className="vn_inner">
                        <div className="vn_icon_square bck_red"></div>
                            <div
                            className="vn_icon"
                            style={{
                                background:`url(${icon_call})`
                            }}></div>
                            <div className="vn_title">
                                Call Us
                            </div>
                            <div className="vn_desc">
                                9426050109
                                9033451192
                            </div>
                        </div>
                
                        </div>
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="vn_item">
                        <div className="vn_outer">
                        <div className="vn_inner">
                        <div className="vn_icon_square bck_red"></div>
                            <div
                            className="vn_icon"
                            style={{
                                background:`url(${icon_location})`
                            }}></div>
                            <div className="vn_title">
                                Address
                            </div>
                            <div className="vn_desc1">
                            C-1, Anup Estate Nr. Bharat Party Plot, N.H. 8, Rabari Colony, Amraiwadi, Ahmedabad, Gujarat - 380026
                            </div>
                        </div>
                        </div>  
                    </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;