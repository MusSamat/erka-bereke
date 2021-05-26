import React, {useEffect} from "react";
import {Carousel} from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CatCarousel.css';


const CatCarousel = () => {

    useEffect(()=> {


    }, [])
    return (
        <Carousel>
            <div>
                <img src="/assets/images/banners/c1.jpg"/>
                <div className="banner-content banner-content-right">
                    <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>
                    <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></a>
                </div>
            </div>
            <div>
                <img src="/assets/images/banners/c2.jpg"/>
                <div className="banner-content banner-content-right">
                    <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>
                    <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></a>
                </div>
            </div>
            <div>
                <img src="/assets/images/banners/c1.jpg"/>
                <div className="banner-content banner-content-right">
                    <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>
                    <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></a>
                </div>
            </div>

        </Carousel>
    )
}

export default CatCarousel