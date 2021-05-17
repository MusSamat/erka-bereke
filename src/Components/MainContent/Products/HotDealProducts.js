import React from "react";
import './Products.css'

const HotDealProducts = () => {
    return(
        <div className="bg-light pt-3 pb-5">
            <div className="container">
                <div className="heading heading-flex heading-border mb-3">
                    <div className="heading-left">
                        <h2 className="title">Түрдүү азыктар</h2>
                    </div>

                    <div className="heading-right">
                        <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active " id="hot-all-link" data-toggle="tab" href="#hot-all-tab"
                                   role="tab" aria-controls="hot-all-tab" aria-selected="true" style={{fontSize: 20}}>Баардыгы</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="hot-elec-link" data-toggle="tab" href="#hot-elec-tab"
                                   role="tab" aria-controls="hot-elec-tab" aria-selected="false"> Мөмө-жемиштер</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="hot-furn-link" data-toggle="tab" href="#hot-furn-tab"
                                   role="tab" aria-controls="hot-furn-tab" aria-selected="false">Жума азыгы</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="hot-clot-link" data-toggle="tab" href="#hot-clot-tab"
                                   role="tab" aria-controls="hot-clot-tab" aria-selected="false">Арзандатуулар</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel"
                         aria-labelledby="hot-all-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                    "nav": false,
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1280": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'>
                            <div className="product">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/1.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist "></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Чоңойтуу"><span>Чоңойтуу</span></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Корзинкага кошуу"><span>Корзинкага кошуу</span></a>
                                    </div>
                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Furniture</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="new-price">$251.99</span>
                                        {/*<span className="old-price">Was $290.00</span>*/}
                                    </div>
                                    {/*<div className="ratings-container">*/}
                                    {/*    /!*<div className="ratings">*!/*/}
                                    {/*    /!*    <div className="ratings-val" style={{width: "100%;"}}></div>*!/*/}

                                    {/*    /!*</div>*!/*/}

                                    {/*    <span className="ratings-text">( 2 Reviews )</span>*/}
                                    {/*</div>*/}

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    {/*<span className="product-label label-top">Top</span>*/}
                                    {/*<span className="product-label label-sale">Sale</span>*/}
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/2.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Electronics</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless
                                        headphones</a></h3>
                                    {/*<div className="product-price">*/}
                                    {/*    <span className="new-price">$179.99</span>*/}
                                    {/*    <span className="old-price">Was $199.99</span>*/}
                                    {/*</div>*/}

                                    {/*<div className="ratings-container">*/}
                                    {/*    <span className="new-price">$179.99</span>*/}
                                    {/*    <span className="old-price">Was $199.99</span>*/}
                                    {/*</div>*/}


                                    <div className="product-nav product-nav-dots">
                                        <span className="new-price">$179.99</span>
                                        <span className="old-price">Was $199.99</span>
                                    </div>

                                </div>

                            </div>

                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/3.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Furniture</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa {<br/>}frame
                                        charcoal</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$3.050.00</span>
                                        <span className="old-price">Was $3.200.00</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>


                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#b58555"}}><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#93a6b0"}}><span
                                            className="sr-only">Color name</span></a>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/2.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Clothes</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="new-price">$240.00</span>
                                        <span className="old-price">Was $310.00</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>


                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#b58555"}}><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#93a6b0"}}><span
                                            className="sr-only">Color name</span></a>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-top">Top</span>
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-5.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-countdown" data-until="+7h" data-format="HMS"
                                         data-relative="true" data-labels-short="true"></div>


                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Electronics</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K
                                        Ultra HD</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$1699.99</span>
                                        <span className="old-price">Was $1999.99</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-6.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Appliances</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Neato Robotics</a>
                                    </h3>
                                    <div className="product-price">
                                        $399.00
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 12 Reviews )</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="tab-pane p-0 fade" id="hot-elec-tab" role="tabpanel"
                         aria-labelledby="hot-elec-link">
                        <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                             data-toggle="owl"
                             data-owl-options='{
                                    "nav": false,
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1280": {
                                            "items":5,
                                            "nav": true
                                        }
                                    }
                                }'>
                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-4.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Clothes</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="new-price">$240.00</span>
                                        <span className="old-price">Was $310.00</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>


                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#b58555"}}><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#93a6b0"}}><span
                                            className="sr-only">Color name</span></a>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-1.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Furniture</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="new-price">$251.99</span>
                                        <span className="old-price">Was $290.00</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width:" 100%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-top">Top</span>
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-2.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-countdown" data-until="+9h" data-format="HMS"
                                         data-relative="true" data-labels-short="true"></div>


                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Electronics</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless
                                        headphones</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$179.99</span>
                                        <span className="old-price">Was $199.99</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>


                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#69b4ff"}}><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#ff887f"}}><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333"}}><span
                                            className="sr-only">Color name</span></a>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-3.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Furniture</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa {<br/>}frame
                                        charcoal</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$3.050.00</span>
                                        <span className="old-price">Was $3.200.00</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>


                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background:"#b58555"}}><span
                                            className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#93a6b0"}}><span
                                            className="sr-only">Color name</span></a>
                                    </div>

                                </div>

                            </div>


                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-top">Top</span>
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/product-5.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-countdown" data-until="+7h" data-format="HMS"
                                         data-relative="true" data-labels-short="true"></div>


                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        <a href="#" className="btn-product-icon btn-compare"
                                           title="Compare"><span>Compare</span></a>
                                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                           title="Quick view"><span>Quick view</span></a>
                                    </div>


                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                    </div>

                                </figure>


                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Electronics</a>
                                    </div>

                                    <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K
                                        Ultra HD</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$1699.99</span>
                                        <span className="old-price">Was $1999.99</span>
                                    </div>

                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%"}}></div>

                                        </div>

                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/*<div className="tab-pane p-0 fade" id="hot-furn-tab" role="tabpanel"*/}
                    {/*     aria-labelledby="hot-furn-link">*/}
                    {/*    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"*/}
                    {/*         data-toggle="owl"*/}
                    {/*         data-owl-options='{*/}
                    {/*                "nav": false,*/}
                    {/*                "dots": true,*/}
                    {/*                "margin": 20,*/}
                    {/*                "loop": false,*/}
                    {/*                "responsive": {*/}
                    {/*                    "0": {*/}
                    {/*                        "items":2*/}
                    {/*                    },*/}
                    {/*                    "480": {*/}
                    {/*                        "items":2*/}
                    {/*                    },*/}
                    {/*                    "768": {*/}
                    {/*                        "items":3*/}
                    {/*                    },*/}
                    {/*                    "992": {*/}
                    {/*                        "items":4*/}
                    {/*                    },*/}
                    {/*                    "1280": {*/}
                    {/*                        "items":5,*/}
                    {/*                        "nav": true*/}
                    {/*                    }*/}
                    {/*                }*/}
                    {/*            }'>*/}
                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-3.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Furniture</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame*/}
                    {/*                    charcoal</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$3.050.00</span>*/}
                    {/*                    <span className="old-price">Was $3.200.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 60%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 6 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #b58555;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #93a6b0;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-top">Top</span>*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-5.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-countdown" data-until="+7h" data-format="HMS"*/}
                    {/*                     data-relative="true" data-labels-short="true"></div>*/}
                    {/*                <!-- End .product-countdown -->*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Electronics</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K*/}
                    {/*                    Ultra HD</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$1699.99</span>*/}
                    {/*                    <span className="old-price">Was $1999.99</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 10 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-new">New</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-6.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Appliances</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Neato Robotics</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    $399.00*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 12 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-4.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Clothes</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$240.00</span>*/}
                    {/*                    <span className="old-price">Was $310.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 4 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #b58555;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #93a6b0;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-1.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Furniture</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$251.99</span>*/}
                    {/*                    <span className="old-price">Was $290.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 100%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 2 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-top">Top</span>*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-2.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-countdown" data-until="+9h" data-format="HMS"*/}
                    {/*                     data-relative="true" data-labels-short="true"></div>*/}
                    {/*                <!-- End .product-countdown -->*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Electronics</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless*/}
                    {/*                    headphones</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$179.99</span>*/}
                    {/*                    <span className="old-price">Was $199.99</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 100%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 4 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #69b4ff;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #ff887f;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #333333;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}
                    {/*    </div>*/}
                    {/*    <!-- End .owl-carousel -->*/}
                    {/*</div>*/}

                    {/*<div className="tab-pane p-0 fade" id="hot-clot-tab" role="tabpanel"*/}
                    {/*     aria-labelledby="hot-clot-link">*/}
                    {/*    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"*/}
                    {/*         data-toggle="owl"*/}
                    {/*         data-owl-options='{*/}
                    {/*                "nav": false,*/}
                    {/*                "dots": true,*/}
                    {/*                "margin": 20,*/}
                    {/*                "loop": false,*/}
                    {/*                "responsive": {*/}
                    {/*                    "0": {*/}
                    {/*                        "items":2*/}
                    {/*                    },*/}
                    {/*                    "480": {*/}
                    {/*                        "items":2*/}
                    {/*                    },*/}
                    {/*                    "768": {*/}
                    {/*                        "items":3*/}
                    {/*                    },*/}
                    {/*                    "992": {*/}
                    {/*                        "items":4*/}
                    {/*                    },*/}
                    {/*                    "1280": {*/}
                    {/*                        "items":5,*/}
                    {/*                        "nav": true*/}
                    {/*                    }*/}
                    {/*                }*/}
                    {/*            }'>*/}
                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-1.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Furniture</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$251.99</span>*/}
                    {/*                    <span className="old-price">Was $290.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 100%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 2 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-3.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Furniture</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame*/}
                    {/*                    charcoal</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$3.050.00</span>*/}
                    {/*                    <span className="old-price">Was $3.200.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 60%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 6 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #b58555;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #93a6b0;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-4.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Clothes</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$240.00</span>*/}
                    {/*                    <span className="old-price">Was $310.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 4 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #b58555;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #93a6b0;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-top">Top</span>*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-2.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-countdown" data-until="+9h" data-format="HMS"*/}
                    {/*                     data-relative="true" data-labels-short="true"></div>*/}
                    {/*                <!-- End .product-countdown -->*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Electronics</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Bose - SoundSport wireless*/}
                    {/*                    headphones</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$179.99</span>*/}
                    {/*                    <span className="old-price">Was $199.99</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 100%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 4 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #69b4ff;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #ff887f;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #333333;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}
                    {/*    </div>*/}
                    {/*    <!-- End .owl-carousel -->*/}
                    {/*</div>*/}

                    {/*<div className="tab-pane p-0 fade" id="hot-acc-tab" role="tabpanel"*/}
                    {/*     aria-labelledby="hot-acc-link">*/}
                    {/*    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"*/}
                    {/*         data-toggle="owl"*/}
                    {/*         data-owl-options='{*/}
                    {/*                "nav": false,*/}
                    {/*                "dots": true,*/}
                    {/*                "margin": 20,*/}
                    {/*                "loop": false,*/}
                    {/*                "responsive": {*/}
                    {/*                    "0": {*/}
                    {/*                        "items":2*/}
                    {/*                    },*/}
                    {/*                    "480": {*/}
                    {/*                        "items":2*/}
                    {/*                    },*/}
                    {/*                    "768": {*/}
                    {/*                        "items":3*/}
                    {/*                    },*/}
                    {/*                    "992": {*/}
                    {/*                        "items":4*/}
                    {/*                    },*/}
                    {/*                    "1280": {*/}
                    {/*                        "items":5,*/}
                    {/*                        "nav": true*/}
                    {/*                    }*/}
                    {/*                }*/}
                    {/*            }'>*/}
                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-new">New</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-6.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Appliances</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Neato Robotics</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    $399.00*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 12 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-1.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Furniture</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$251.99</span>*/}
                    {/*                    <span className="old-price">Was $290.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 100%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 2 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-top">Top</span>*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-5.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-countdown" data-until="+7h" data-format="HMS"*/}
                    {/*                     data-relative="true" data-labels-short="true"></div>*/}
                    {/*                <!-- End .product-countdown -->*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Electronics</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K*/}
                    {/*                    Ultra HD</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$1699.99</span>*/}
                    {/*                    <span className="old-price">Was $1999.99</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 10 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-3.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Furniture</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br>frame*/}
                    {/*                    charcoal</a></h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$3.050.00</span>*/}
                    {/*                    <span className="old-price">Was $3.200.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 60%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 6 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #b58555;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #93a6b0;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}

                    {/*        <div className="product">*/}
                    {/*            <figure className="product-media">*/}
                    {/*                <span className="product-label label-sale">Sale</span>*/}
                    {/*                <a href="product.html">*/}
                    {/*                    <img src="assets/images/demos/demo-13/products/product-4.jpg"*/}
                    {/*                         alt="Product image" className="product-image">*/}
                    {/*                </a>*/}

                    {/*                <div className="product-action-vertical">*/}
                    {/*                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                    {/*                    <a href="#" className="btn-product-icon btn-compare"*/}
                    {/*                       title="Compare"><span>Compare</span></a>*/}
                    {/*                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                    {/*                       title="Quick view"><span>Quick view</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action-vertical -->*/}

                    {/*                <div className="product-action">*/}
                    {/*                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-action -->*/}
                    {/*            </figure>*/}
                    {/*            <!-- End .product-media -->*/}

                    {/*            <div className="product-body">*/}
                    {/*                <div className="product-cat">*/}
                    {/*                    <a href="#">Clothes</a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-cat -->*/}
                    {/*                <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a>*/}
                    {/*                </h3><!-- End .product-title -->*/}
                    {/*                <div className="product-price">*/}
                    {/*                    <span className="new-price">$240.00</span>*/}
                    {/*                    <span className="old-price">Was $310.00</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-price -->*/}
                    {/*                <div className="ratings-container">*/}
                    {/*                    <div className="ratings">*/}
                    {/*                        <div className="ratings-val" style="width: 80%;"></div>*/}
                    {/*                        <!-- End .ratings-val -->*/}
                    {/*                    </div>*/}
                    {/*                    <!-- End .ratings -->*/}
                    {/*                    <span className="ratings-text">( 4 Reviews )</span>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .rating-container -->*/}

                    {/*                <div className="product-nav product-nav-dots">*/}
                    {/*                    <a href="#" className="active" style="background: #b58555;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                    <a href="#" style="background: #93a6b0;"><span*/}
                    {/*                        className="sr-only">Color name</span></a>*/}
                    {/*                </div>*/}
                    {/*                <!-- End .product-nav -->*/}
                    {/*            </div>*/}
                    {/*            <!-- End .product-body -->*/}
                    {/*        </div>*/}
                    {/*        <!-- End .product -->*/}
                    {/*    </div>*/}
                    {/*    <!-- End .owl-carousel -->*/}
                    {/*</div>*/}

                </div>

            </div>

        </div>
    )
}

export default HotDealProducts