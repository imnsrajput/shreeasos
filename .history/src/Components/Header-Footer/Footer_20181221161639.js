import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return(
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_fatface">
                    SHREE ASSOCIATES
                </div>
                <div className="footer_copyright">
                    Specialist in Leathe Machine Belts       
                </div>
            </Fade>
            <div className="credit">
                - N.S.R
            </div>
        </footer>
    );
};

export default Footer;