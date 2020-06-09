import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14690.342425755465!2d72.637538!3d23.002261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63b5222b7786c683!2sShree+Associates!5e0!3m2!1sen!2sin!4v1544868061320" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0"  
                    allowFullScreen>
                </iframe>
                <div className="location_tag">
                    <div>Our Location</div>
                </div>
        </div>
    );
};

export default Location;