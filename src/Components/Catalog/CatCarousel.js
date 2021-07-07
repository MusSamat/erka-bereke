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
                    </div>
                    ))
            }

        </Carousel>
    )
}

export default CatCarousel