import React from 'react';
import Slider from "react-slick";

import img1 from '../../resources/images/img1.jpg';
import img2 from '../../resources/images/img2.jpg';
import img3 from '../../resources/images/img3.jpg';
import img4 from '../../resources/images/img4.jpg';
import img5 from '../../resources/images/img5.jpg';


const Carrousel = () => {
    
    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }   
    return (
        <div
        className="carousel_wrapper"
        style={{
            background:'red',
            height:`${window.innerHeight}px`,
            overflow:'hidden'
        }}
    >
    <Slider {...settings}>
        <div>
            <div className="carrousel_image"
            style={{
                background:`url(${img1})`,
                height:`${window.innerHeight}px`
            }}>
            </div>
        </div>
        <div>
        <div className="carrousel_image"
            style={{
                background:`url(${img2})`,
                height:`${window.innerHeight}px`
            }}>
            </div>
        </div>
        <div>
        <div className="carrousel_image"
            style={{
                background:`url(${img3})`,
                height:`${window.innerHeight}px`
            }}>
            </div>
        </div>
        <div>
        <div className="carrousel_image"
            style={{
                background:`url(${img4})`,
                height:`${window.innerHeight}px`
            }}>
            </div>    
        </div>
        <div>
        <div className="carrousel_image"
            style={{
                background:`url(${img5})`,
                height:`${window.innerHeight}px`
            }}>
            </div>  
        </div>
        </Slider>
        </div>
    );
};

export default Carrousel;