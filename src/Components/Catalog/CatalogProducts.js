import React, {useEffect} from "react";
// import CatalogCarousel from "./CatalogCarousel";
import './Catalog.css'
import Toolbox from "./Toolbox";
import CatCarousel from "./CatCarousel";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/actions/product";



const CatalogProducts = (props) => {

    const products = useSelector(state => state)

    const dispatch = useDispatch()


    useEffect(() => {
      dispatch( getProducts())
    },[dispatch])




    return (
        <div className="col-lg-9 col-xl-4-5col">
            {/*<CatalogCarousel/>*/}
            <CatCarousel/>
            <Toolbox/>
            <div className="cat-blocks-container">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/1.jpg"
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

                    </div>


                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/2.jpg"
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

                    </div>


                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/3.jpg"
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

                    </div>


                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/1.jpg"
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

                    </div>


                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/2.jpg"
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

                    </div>


                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/3.jpg"
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

                    </div>


                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="product BorderPro">
                            <figure className="product-media">
                                <a href="product.html">
                                    <img src="/assets/images/demos/demo-13/products/1.jpg"
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

                    </div>

                </div>

            </div>
        </div>

    )
}

export default CatalogProducts