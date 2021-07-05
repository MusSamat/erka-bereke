import React, {useEffect, useState} from "react";
import {Carousel} from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CatCarousel.css';
import GetData from "../../service/GetData";


const CatCarousel = () => {

    const [catCarouselImage, setCatCarouselImage] = useState([])
    const getCatCarouselImage = () => {
        new GetData().getData("/views/Page_ad").then(res => {
            setCatCarouselImage(res.filter((item => {
                if(item.status){
                    return item
                }
            })))
        })
    }

    useEffect(()=> {
        getCatCarouselImage()
    }, [])
    return (
        <Carousel>

            {
                catCarouselImage?.map((item, i) => (
                    <div key={i}>
                        <img src={item.image}/>
                        <div className="banner-content banner-content-right">
                            <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>
                            <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>
                            <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></a>
                        </div>
                    </div>
                    ))
            }

        </Carousel>
    )
}

export default CatCarousel