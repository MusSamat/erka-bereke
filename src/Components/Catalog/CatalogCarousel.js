import React, {useEffect} from "react";


const CatalogCarousel = () => {
    useEffect(() => {
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
    })
    return(
        <div className="category-banners-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl"
             data-owl-options='{
                                    "nav": false,
                                    "responsive": {
                                        "768": {
                                            "nav": true
                                        }
                                    }
                                }'>
            <div className="banner banner-poster">

                <a href="#">
                    <img src="/assets/images/banners/c1.jpg" alt="Banner"/>
                </a>

                <div className="banner-content banner-content-right">
                    <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>
                    <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></a>
                </div>

            </div>

            <div className="banner banner-poster">

                <a href="#">
                    <img src="/assets/images/banners/c2.jpg" alt="Banner"/>
                </a>

                <div className="banner-content banner-content-right">
                    <h3 className="banner-subtitle"><a href="#">Amazing Value</a></h3>
                    <h2 className="banner-title"><a href="#">High Performance 4K TVs</a></h2>
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></a>
                </div>

            </div>

        </div>
    )
}

export default CatalogCarousel