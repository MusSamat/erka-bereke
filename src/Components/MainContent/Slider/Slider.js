import React from "react";

const Slider = () => {
    return (
        <div className='container'>
            <div className="intro-slider-container">
                <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options='{
                        "nav": false,
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'>
                    <div className="intro-slide"
                         style={{backgroundImage: "url(assets/images/demos/demo-13/slider/111.jpg)"}}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle"> 500 сомдон өйдө</h3>
                                    <h1 className="intro-title" style={{color: 'white'}}> 10% арзандатуу {<br/>}менен сатып ал
                                        <span>
                                            <span className="text-primary">$499<sup>,99</sup></span>
                                            <sup className="font-weight-light">баштап</sup>

                                        </span>
                                    </h1>

                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span style={{fontSize: 20}}>Тизмек</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="intro-slide"
                         style={{backgroundImage: "url(assets/images/banners/banner-22.jpg)"}}>
                    <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle">Дайыма</h3>
                                    <h1 className="intro-title">Жаңы жана {<br/>}Органикалык таза
                                        <h2>азыктар</h2>
                                    </h1>

                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span style={{fontSize: 20}}>Тизмек</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="intro-slide"
                         style={{backgroundImage: "url(assets/images/banners/banner-11.jpg)"}}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto offset-lg-3 intro-col">
                                    <h3 className="intro-subtitle"></h3>
                                    <h1 className="intro-title">Tan Suede {<br/>}Biker Jacket
                                        <span>
                                            <sup className="font-weight-light line-through">$240,00</sup>
                                            <span className="text-primary">$180<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span style={{fontSize: 20}}>Тизмеги</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="slider-loader"></span>
            </div>
        </div>
)
}

export default Slider