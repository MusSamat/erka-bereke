import React from "react";
import './Product.css'

const CatBanner2 = () => {
    return (
        <div className='container' style={{paddingTop: 40}}>
            <div style={{borderBottom: "1px solid #ebebeb"}} className='CatBanner'>
                <h2 className='title'>Начнем весеннюю  уборку!</h2>

                <a href="#" style={{color: '#5e5d54'}}> Посмотреть ещё  <i className='icon-angle-right'></i> </a>
            </div>

            <div className="row cat-banner-row clothing" style={{paddingTop: 40}}>
                <div className="col-xl-3 col-xxl-4">
                    <div className="cat-banner row no-gutters">
                        <div className="cat-banner-list col-sm-6 d-xl-none d-xxl-flex"
                             style={{backgroundImage: "url(assets/images/demos/demo-13/banners/banner-bg-3.jpg)"}}>
                            <div className="banner-list-content">
                                <h2><a href="#">Clothing </a></h2>

                                <ul>
                                    <li><a href="#">Best Sellers</a></li>
                                    <li><a href="#">Trending</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Man</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li className="list-all-link"><a href="#">See All Departments</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-sm-6 col-xl-12 col-xxl-6">
                            <div className="banner banner-overlay">
                                <a href="#">
                                    <img src="assets/images/demos/demo-13/banners/banner-101.jpg" alt="Banner img desc"/>
                                </a>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle text-white"><a href="#">Best Deals</a>
                                    </h4>
                                    <h3 className="banner-title text-white"><a
                                        href="#">Clearance {<br/>}Outerwear{<br/>}<span>Up To 70% Off</span></a>
                                    </h3>
                                    <a href="#" className="banner-link">Shop Now <i
                                        className="icon-long-arrow-right"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-xl-9 col-xxl-8">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl"
                         data-owl-options='{
                                        "nav": true,
                                        "dots": false,
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
                                            "1200": {
                                                "items":3
                                            },
                                            "1600": {
                                                "items":4
                                            }
                                        }
                                    }'>


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
                                    <a href="#" className="btn-product btn-cart"
                                       title="Add to cart"><span>add to cart</span></a>
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
                                    <a href="#" className="btn-product btn-cart"
                                       title="Add to cart"><span>add to cart</span></a>
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
                                    <a href="#" className="btn-product btn-cart"
                                       title="Add to cart"><span>add to cart</span></a>
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
                                    <a href="#" className="btn-product btn-cart"
                                       title="Add to cart"><span>add to cart</span></a>
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
                                    <a href="#" className="btn-product btn-cart"
                                       title="Add to cart"><span>add to cart</span></a>
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

                        {/*<div className="product text-center">*/}
                        {/*    <figure className="product-media">*/}
                        {/*        <a href="product.html">*/}
                        {/*            <img src="assets/images/demos/demo-14/products/product-14.jpg" alt="Product image"*/}
                        {/*                 className="product-image"/>*/}
                        {/*        </a>*/}

                        {/*        <div className="product-action-vertical">*/}
                        {/*            <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>*/}
                        {/*            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                        {/*               title="Quick view"><span>Quick view</span></a>*/}
                        {/*            <a href="#" className="btn-product-icon btn-compare"*/}
                        {/*               title="Compare"><span>Compare</span></a>*/}
                        {/*        </div>*/}


                        {/*        <div className="product-action">*/}
                        {/*            <a href="#" className="btn-product btn-cart"*/}
                        {/*               title="Add to cart"><span>add to cart</span></a>*/}
                        {/*        </div>*/}
                        {/*    </figure>*/}


                        {/*    <div className="product-body">*/}
                        {/*        <div className="product-cat">*/}
                        {/*            <a href="#">Shoes</a>*/}
                        {/*        </div>*/}

                        {/*        <h3 className="product-title"><a href="product.html">Beige faux suede runner*/}
                        {/*            trainers</a></h3>*/}
                        {/*        <div className="product-price">*/}
                        {/*            $64.00*/}
                        {/*        </div>*/}

                        {/*        <div className="ratings-container">*/}
                        {/*            <div className="ratings">*/}
                        {/*                <div className="ratings-val" style={{width: "80%"}}></div>*/}

                        {/*            </div>*/}

                        {/*            <span className="ratings-text">( 12 Reviews )</span>*/}
                        {/*        </div>*/}

                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>

                </div>

            </div>

        </div>
    )
}


export default CatBanner2