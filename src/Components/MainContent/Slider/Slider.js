import React, {useState} from "react";
import {Carousel} from "react-responsive-carousel";
import GetData from "../../../service/GetData";
import {useEffect} from "react";

const Slider = () => {
    const [bannerImages, setBannerImages] = useState([])

    const getBannerImage = () => {
        new GetData().getData("/views/banner/").then(res => {
            setBannerImages(res.filter((item => {
                if(item.is_published){
                    return item
                }
            })))
        })
    }



    useEffect(() => {
        getBannerImage()
        let loadScript = function(src) {
            let tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.getElementsByTagName('body')[0].appendChild(tag);
        }
        loadScript('assets/js/owl.carousel.min.js')
        loadScript('assets/js/bootstrap-input-spinner.js')
        loadScript('assets/js/main.js')
        loadScript('assets/js/demos/demo-13.js')
    }, [])


    return (
        <div className='container'>
            <div className="intro-slider-container">
                <Carousel autoPlay={true} infiniteLoop='true'>
                    {
                        bannerImages?.map((item, i) => (
                            <div className="intro-slide"
                                 style={{backgroundImage: `url(${item.image})`}}
                                key={i}
                            >
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Slider