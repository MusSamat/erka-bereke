import React from "react";
import './Products.css'
import {NavLink} from "react-router-dom";
import {addProductToWishlist} from "../../../store/actions/wishlistProducts";
import {toast} from "react-toastify";
import {addProductToCart} from "../../../store/actions/cartProducts";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const HotDealProducts = () => {
    const {t, i18n} = useTranslation();
    const products = useSelector(state => state.product.products.filter((item, index) => {
        if(item.percent > 0) {
            return item
        }
    }))
    const dispatch = useDispatch()
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    const wishlistProductsP =  useSelector(state => {
        return state.wishlistProd
    })

    const checkWishlist = (id) => {
        let  c = 0
        wishlistProductsP?.items?.map((item, i) => {
            if(item.product.id === id){
                c = 1
            }
        })
        return c
    }

    const checkCart = (id) => {
        let c = 0
        cartProductsP?.items?.map((item) => {
            if(item.product.id === id){
                c = 1
            }
        })
        return c
    }

    return(
        <div className='container' style={{paddingTop: 40}}>
            <div style={{borderBottom: "1px solid #ebebeb"}} className='CatBanner'>
                <h2 className='title'>Готовимся к Рамазану</h2>

                <a href="#"> <span>Посмотреть ещё</span> <i className='icon-angle-right'></i> </a>
            </div>

            <div className="row cat-banner-row clothing" style={{paddingTop: 40}}>
                <div className="col-xl-12 col-xxl-12">
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
                                                "items":5
                                            },
                                            "1600": {
                                                "items":6
                                            }
                                        }
                                    }'>

                        {
                            products.map((prod,i) => (
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
                            ))
                        }


                        {/*<div className="col-6 col-md-4 col-lg-3">*/}
                        {/*    <div className="product">*/}
                        {/*        <figure className="product-media">*/}
                        {/*            <span className="product-label label-sale">Sale</span>*/}
                        {/*            <a href="product.html">*/}
                        {/*                <img src="assets/images/demos/demo-13/products/3.jpg"*/}
                        {/*                     alt="Product image" className="product-image"/>*/}
                        {/*            </a>*/}

                        {/*            <div className="product-action-vertical">*/}
                        {/*                <a href="#"*/}
                        {/*                   className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>*/}
                        {/*                <a href="#" className="btn-product-icon btn-compare"*/}
                        {/*                   title="Compare"><span>Compare</span></a>*/}
                        {/*                <a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                        {/*                   title="Quick view"><span>Quick view</span></a>*/}
                        {/*            </div>*/}


                        {/*            <div className="product-action">*/}
                        {/*                <a href="#" className="btn-product btn-cart"*/}
                        {/*                   title="Add to cart"><span>add to cart</span></a>*/}
                        {/*            </div>*/}

                        {/*        </figure>*/}


                        {/*        <div className="product-body">*/}
                        {/*            <div className="product-cat">*/}
                        {/*                <a href="#">Furniture</a>*/}
                        {/*            </div>*/}

                        {/*            <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa {<br/>}frame*/}
                        {/*                charcoal</a></h3>*/}
                        {/*            <div className="product-price">*/}
                        {/*                <span className="new-price">$3.050.00</span>*/}
                        {/*                <span className="old-price">Was $3.200.00</span>*/}
                        {/*            </div>*/}

                        {/*            <div className="ratings-container">*/}
                        {/*                <div className="ratings">*/}
                        {/*                    <div className="ratings-val" style={{width: "60%"}}></div>*/}

                        {/*                </div>*/}

                        {/*                <span className="ratings-text">( 6 Reviews )</span>*/}
                        {/*            </div>*/}


                        {/*            <div className="product-nav product-nav-dots">*/}
                        {/*                <a href="#" className="active" style={{background: "#b58555"}}><span*/}
                        {/*                    className="sr-only">Color name</span></a>*/}
                        {/*                <a href="#" style={{background: "#93a6b0"}}><span*/}
                        {/*                    className="sr-only">Color name</span></a>*/}
                        {/*            </div>*/}

                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/3.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
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
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product">
                                <figure className="product-media">
                                    <span className="product-label label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-13/products/3.jpg"
                                             alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#"
                                           className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
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
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default HotDealProducts