import React, {useEffect} from "react";
import Nav from "../Nav/Nav";
import './ProductDet.css'
import {useSelector} from "react-redux";

const Product = (props) => {
    const id = props.location.id
    const productById = useSelector(state => state.product.products.filter(item => {
        if(item.id === id) {
            return item.title
        }}))
    console.log(productById.map(item => {
        return item.title
    }))

        useEffect(() => {
            let loadScript = function(src) {
                let tag = document.createElement('script');
                tag.async = false;
                tag.src = src;
                document.getElementsByTagName('body')[0].appendChild(tag);
            }
            loadScript('/assets/js/jquery.elevateZoom.min.js')
            loadScript('/assets/js/bootstrap-input-spinner.js')
            loadScript('/assets/js/main.js')
            loadScript('/assets/js/jquery.magnific-popup.min.js')


        return () => {
            const elements = document.getElementsByClassName('zoomContainer')
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }
    }, [])

    const product = {
        categoryName: productById.category_title,
        subCategory: productById.subcategory_title

    }

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container d-flex align-items-center">

                    <Nav
                        name={product.categoryName}
                        item={product.subCategory}
                    />
                    {/*<ol className="breadcrumb">*/}
                    {/*    <li className="breadcrumb-item"><a href="index.html">ащ</a></li>*/}
                    {/*    <li className="breadcrumb-item"><a href="#">Products</a></li>*/}
                    {/*    <li className="breadcrumb-item active" aria-current="page">With Sidebar</li>*/}
                    {/*</ol>*/}

                    {/*<nav className="product-pager ml-auto" aria-label="Product">*/}
                    {/*    <a className="product-pager-link product-pager-prev" href="#" aria-label="Previous"*/}
                    {/*       tabIndex="-1">*/}
                    {/*        <i className="icon-angle-left"></i>*/}
                    {/*        <span>Prev</span>*/}
                    {/*    </a>*/}

                    {/*    <a className="product-pager-link product-pager-next" href="#" aria-label="Next" tabIndex="-1">*/}
                    {/*        <span>Next</span>*/}
                    {/*        <i className="icon-angle-right"></i>*/}
                    {/*    </a>*/}
                    {/*</nav>*/}
                </div>

            </nav>


            <div className="page-content">
                <div className="container">
                    <div className="row">
                        {
                            productById.map((item, i) => (
                                <div className="col-lg-10">
                                    <div className="product-details-top">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="product-gallery">
                                                    <figure className="product-main-image">
                                                        <span className="product-label label-top">Top</span>
                                                        <img id="product-zoom"
                                                             src={item.image}
                                                             data-zoom-image="/assets/images/demos/demo-13/products/kap.jpg"
                                                             alt="product image"/>

                                                        <a href="#" id="btn-product-gallery"
                                                           className="btn-product-gallery">
                                                            <i className="icon-arrows"></i>
                                                        </a>
                                                    </figure>


                                                    <div id="product-zoom-gallery" className="product-image-gallery">
                                                        <a className="product-gallery-item active" href="#"
                                                           data-image="/assets/images/demos/demo-13/products/kap.jpg"
                                                           data-zoom-image="/assets/images/demos/demo-13/products/kap.jpg">
                                                            <img src="/assets/images/demos/demo-13/products/kap.jpg"
                                                                 alt="product side"/>
                                                        </a>

                                                        <a className="product-gallery-item" href="#"
                                                           data-image="/assets/images/demos/demo-13/products/kap3.jpg"
                                                           data-zoom-image="/assets/images/demos/demo-13/products/kap3.jpg">
                                                            <img src="/assets/images/demos/demo-13/products/kap3.jpg"
                                                                 alt="product cross"/>
                                                        </a>

                                                        <a className="product-gallery-item" href="#"
                                                           data-image="/assets/images/demos/demo-13/products/kap4.jpg"
                                                           data-zoom-image="/assets/images/demos/demo-13/products/kap4.jpg">
                                                            <img src="/assets/images/demos/demo-13/products/kap4.jpg"
                                                                 alt="product with model"/>
                                                        </a>

                                                        <a className="product-gallery-item" href="#"
                                                           data-image="/assets/images/products/single/sidebar-gallery/4.jpg"
                                                           data-zoom-image="/assets/images/products/single/sidebar-gallery/4-big.jpg">
                                                            <img src="/assets/images/demos/demo-13/products/1.jpg"
                                                                 alt="product back"/>
                                                        </a>
                                                    </div>

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className='product_Details'>
                                                    <div className='prod_name'>
                                                        <h3>{item.title}</h3>
                                                        <h5>{item.marka}</h5>

                                                        <div className='som'>
                                                            <span> {item.price}</span> <img src="/assets/svg_logo/som.svg"
                                                                                                   alt="som_icon"/>
                                                        </div>
                                                    </div>

                                                    <hr/>

                                                    <div className='prod_bottom'>
                                                        <p>Даана</p>
                                                        <div className='prod_det_buttons'>
                                                            <button className='carT'>+ Корзинка</button>
                                                            <button className='wisH'> <i className='icon-heart'></i></button>
                                                        </div>

                                                    </div>
                                                </div>
                                                {/*<div className="product-details product-details-sidebar">*/}
                                                {/*    <h1 className="product-title">Капуста белокочанная</h1>*/}

                                                {/*    /!*<div className="ratings-container">*!/*/}
                                                {/*    /!*    <div className="ratings">*!/*/}
                                                {/*    /!*        <div className="ratings-val" style={{width: "80%"}}></div>*!/*/}
                                                {/*    /!*    </div>*!/*/}

                                                {/*    /!*    <a className="ratings-text" href="#product-review-link"*!/*/}
                                                {/*    /!*       id="review-link">( 2 Reviews )</a>*!/*/}
                                                {/*    /!*</div>*!/*/}


                                                {/*    <div className="product-price">*/}
                                                {/*        $90.00*/}
                                                {/*    </div>*/}


                                                {/*    <div className="product-content">*/}
                                                {/*        <p style={{fontSize: 17}}>Цветки крупные в многоцветковой кисти. Чашелистики,*/}
                                                {/*            как и тычинки, стоячие. Венчик бледно-жёлтый, реже белый.</p>*/}
                                                {/*    </div>*/}


                                                {/*    <div className="product-details-action">*/}
                                                {/*        <div className="details-action-col">*/}
                                                {/*            <label htmlFor="qty">Саны (кг):</label>*/}
                                                {/*            <div className="product-details-quantity">*/}
                                                {/*                <input type="number" id="qty" className="form-control" value="1"*/}
                                                {/*                       min="1" max="10" step="1" data-decimals="0" required/>*/}
                                                {/*            </div>*/}


                                                {/*            <a href="#"*/}
                                                {/*               className="btn-product btn-cart"><span>Корзинкага которуу</span></a>*/}
                                                {/*        </div>*/}


                                                {/*        <div className="details-action-wrapper">*/}
                                                {/*            <a href="#" className="btn-product btn-wishlist"*/}
                                                {/*               title="Wishlist"><span>Жактырылды</span></a>*/}
                                                {/*        </div>*/}

                                                {/*    </div>*/}


                                                {/*    <div className="product-details-footer details-footer-col">*/}
                                                {/*        <div className="product-cat">*/}
                                                {/*            <span>Категориясы:</span>*/}
                                                {/*            <a href="#" style={{fontSize: 15}}>Мөмө-жемиш</a>/*/}
                                                {/*            <a href="#" style={{fontSize: 15}}>жемиш</a>/*/}
                                                {/*            <a href="#" style={{fontSize: 15}}>Капуста</a>*/}
                                                {/*        </div>*/}


                                                {/*        <div className="social-icons social-icons-sm">*/}
                                                {/*            <span className="social-label">Бөлүшүү:</span>*/}
                                                {/*            <a href="#" className="social-icon" title="Facebook"*/}
                                                {/*               target="_blank"><i className="icon-facebook-f"></i></a>*/}
                                                {/*            <a href="#" className="social-icon" title="Twitter" target="_blank"><i*/}
                                                {/*                className="icon-twitter"></i></a>*/}
                                                {/*            <a href="#" className="social-icon" title="Instagram"*/}
                                                {/*               target="_blank"><i className="icon-instagram"></i></a>*/}
                                                {/*            <a href="#" className="social-icon" title="Pinterest"*/}
                                                {/*               target="_blank"><i className="icon-pinterest"></i></a>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}

                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-details-tab">
                                        <ul className="nav nav-pills justify-content-center" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="product-desc-link" data-toggle="tab"
                                                   href="#product-desc-tab" role="tab" aria-controls="product-desc-tab"
                                                   aria-selected="true"  style={{fontWeight: "600", fontSize: 17}}>Ачыктама</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="product-info-link" data-toggle="tab"
                                                   href="#product-info-tab" role="tab" aria-controls="product-info-tab"
                                                   aria-selected="false" style={{fontWeight: "600", fontSize: 17}}>Информация</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="product-review-link" data-toggle="tab"
                                                   href="#product-review-tab" role="tab" aria-controls="product-review-tab"
                                                   aria-selected="false"  style={{fontWeight: "600", fontSize: 17}}>Комментарийлер</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel"
                                                 aria-labelledby="product-desc-link">
                                                <div className="product-desc-content">
                                                    <h3>Product Information</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                                        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                                        Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                                                        nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
                                                        amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla
                                                        quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                                                        tristique cursus. </p>
                                                    <ul>
                                                        <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
                                                        </li>
                                                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                                                        <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                                                    </ul>

                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                                        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                                        Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                                                        nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
                                                        amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla
                                                        quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                                                        tristique cursus. </p>
                                                </div>

                                            </div>

                                            <div className="tab-pane fade" id="product-info-tab" role="tabpanel"
                                                 aria-labelledby="product-info-link">
                                                <div className="product-desc-content">
                                                    <h3>Information</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                                                        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                                                        Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                                                        nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
                                                        amet orci. </p>

                                                    <h3>Fabric & care</h3>
                                                    <ul>
                                                        <li>Faux suede fabric</li>
                                                        <li>Gold tone metal hoop handles.</li>
                                                        <li>RI branding</li>
                                                        <li>Snake print trim interior</li>
                                                        <li>Adjustable cross body strap</li>
                                                        <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                                    </ul>

                                                    <h3>Size</h3>
                                                    <p>one size</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="product-review-tab" role="tabpanel"
                                                 aria-labelledby="product-review-link">
                                                <div className="reviews">
                                                    <h3>Reviews (2)</h3>
                                                    <div className="review">
                                                        <div className="row no-gutters">
                                                            <div className="col-auto">
                                                                <h4><a href="#">Samanta J.</a></h4>
                                                                <div className="ratings-container">
                                                                    <div className="ratings">
                                                                        <div className="ratings-val"
                                                                             style={{width: "80%"}}></div>

                                                                    </div>

                                                                </div>
                                                                <span className="review-date">6 days ago</span>
                                                            </div>
                                                            <div className="col">
                                                                <h4>Good, perfect size</h4>

                                                                <div className="review-content">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Ducimus cum dolores assumenda asperiores facilis porro
                                                                        reprehenderit animi culpa atque blanditiis commodi
                                                                        perspiciatis doloremque, possimus, explicabo, autem
                                                                        fugit beatae quae voluptas!</p>
                                                                </div>

                                                                <div className="review-action">
                                                                    <a href="#"><i className="icon-thumbs-up"></i>Helpful
                                                                        (2)</a>
                                                                    <a href="#"><i className="icon-thumbs-down"></i>Unhelpful
                                                                        (0)</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="review">
                                                        <div className="row no-gutters">
                                                            <div className="col-auto">
                                                                <h4><a href="#">John Doe</a></h4>
                                                                <div className="ratings-container">
                                                                    <div className="ratings">
                                                                        <div className="ratings-val"
                                                                             style={{width: "100%"}}></div>
                                                                    </div>
                                                                </div>
                                                                <span className="review-date">5 days ago</span>
                                                            </div>
                                                            <div className="col">
                                                                <h4>Very good</h4>

                                                                <div className="review-content">
                                                                    <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam
                                                                        laborum blanditiis laudantium iste amet. Cum non
                                                                        voluptate eos enim, ab cumque nam, modi, quas iure illum
                                                                        repellendus, blanditiis perspiciatis beatae!</p>
                                                                </div>

                                                                <div className="review-action">
                                                                    <a href="#"><i className="icon-thumbs-up"></i>Helpful
                                                                        (0)</a>
                                                                    <a href="#"><i className="icon-thumbs-down"></i>Unhelpful
                                                                        (0)</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="title text-center mb-4">You May Also Like</h2>
                                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                                         data-toggle="owl"
                                         data-owl-options='{
                                    "nav": false,
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
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
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                                        <div className="product product-7 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/1.jpg" alt="Product image"
                                                         className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                       title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare"
                                                       title="Compare"><span>Compare</span></a>
                                                </div>


                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Women</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil
                                                    skirt</a></h3>
                                                <div className="product-price">
                                                    $60.00
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "20%"}}></div>
                                                    </div>
                                                    <span className="ratings-text">( 2 Reviews )</span>
                                                </div>

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{background: "#cc9966"}}><span
                                                        className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#7fc5ed"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#e8c97a"}}><span className="sr-only">Color name</span></a>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="product product-7 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-out">Out of Stock</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/2.jpg" alt="Product image"
                                                         className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                       title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare"
                                                       title="Compare"><span>Compare</span></a>
                                                </div>


                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>

                                            </figure>


                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Jackets</a>
                                                </div>

                                                <h3 className="product-title"><a href="product.html">Khaki utility boiler
                                                    jumpsuit</a></h3>
                                                <div className="product-price">
                                                    <span className="out-price">$120.00</span>
                                                </div>

                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%"}}></div>

                                                    </div>

                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="product product-7 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-top">Top</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/3.jpg" alt="Product image"
                                                         className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                       title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare"
                                                       title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Light brown studded Wide
                                                    fit wedges</a></h3>
                                                <div className="product-price">
                                                    $110.00
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%"}}></div>
                                                    </div>
                                                    <span className="ratings-text">( 1 Reviews )</span>
                                                </div>

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{background: "#8b513d"}}><span
                                                        className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#333333"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#d2b99a"}}><span className="sr-only">Color name</span></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product product-7 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-13/products/1.jpg" alt="Product image"
                                                         className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                                       title="Quick view"><span>Quick view</span></a>
                                                    <a href="#" className="btn-product-icon btn-compare"
                                                       title="Compare"><span>Compare</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Jumpers</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Yellow button front tea
                                                    top</a></h3>
                                                <div className="product-price">
                                                    $56.00
                                                </div>
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "0%"}}></div>
                                                    </div>
                                                    <span className="ratings-text">( 0 Reviews )</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                        {/*<aside className="col-lg-3">*/}
                        {/*    <div className="sidebar sidebar-product">*/}
                        {/*        <div className="widget widget-products">*/}
                        {/*            <h4 className="widget-title">Related Product</h4><!-- End .widget-title -->*/}

                        {/*            <div className="products">*/}
                        {/*                <div className="product product-sm">*/}
                        {/*                    <figure className="product-media">*/}
                        {/*                        <a href="product.html">*/}
                        {/*                            <img src="assets/images/products/single/sidebar/1.jpg"*/}
                        {/*                                 alt="Product image" className="product-image">*/}
                        {/*                        </a>*/}
                        {/*                    </figure>*/}

                        {/*                    <div className="product-body">*/}
                        {/*                        <h5 className="product-title"><a href="product.html">Light brown studded*/}
                        {/*                            Wide fit wedges</a></h5><!-- End .product-title -->*/}
                        {/*                        <div className="product-price">*/}
                        {/*                            <span className="new-price">$50.00</span>*/}
                        {/*                            <span className="old-price">$110.00</span>*/}
                        {/*                        </div>*/}
                        {/*                        <!-- End .product-price -->*/}
                        {/*                    </div>*/}
                        {/*                    <!-- End .product-body -->*/}
                        {/*                </div>*/}
                        {/*                <!-- End .product product-sm -->*/}

                        {/*                <div className="product product-sm">*/}
                        {/*                    <figure className="product-media">*/}
                        {/*                        <a href="product.html">*/}
                        {/*                            <img src="assets/images/products/single/sidebar/2.jpg"*/}
                        {/*                                 alt="Product image" className="product-image">*/}
                        {/*                        </a>*/}
                        {/*                    </figure>*/}

                        {/*                    <div className="product-body">*/}
                        {/*                        <h5 className="product-title"><a href="product.html">Yellow button front*/}
                        {/*                            tea top</a></h5><!-- End .product-title -->*/}
                        {/*                        <div className="product-price">*/}
                        {/*                            $56.00*/}
                        {/*                        </div>*/}
                        {/*                        <!-- End .product-price -->*/}
                        {/*                    </div>*/}
                        {/*                    <!-- End .product-body -->*/}
                        {/*                </div>*/}
                        {/*                <!-- End .product product-sm -->*/}

                        {/*                <div className="product product-sm">*/}
                        {/*                    <figure className="product-media">*/}
                        {/*                        <a href="product.html">*/}
                        {/*                            <img src="assets/images/products/single/sidebar/3.jpg"*/}
                        {/*                                 alt="Product image" className="product-image">*/}
                        {/*                        </a>*/}
                        {/*                    </figure>*/}

                        {/*                    <div className="product-body">*/}
                        {/*                        <h5 className="product-title"><a href="product.html">Beige metal hoop*/}
                        {/*                            tote bag</a></h5><!-- End .product-title -->*/}
                        {/*                        <div className="product-price">*/}
                        {/*                            $50.00*/}
                        {/*                        </div>*/}
                        {/*                        <!-- End .product-price -->*/}
                        {/*                    </div>*/}
                        {/*                    <!-- End .product-body -->*/}
                        {/*                </div>*/}
                        {/*                <!-- End .product product-sm -->*/}

                        {/*                <div className="product product-sm">*/}
                        {/*                    <figure className="product-media">*/}
                        {/*                        <a href="product.html">*/}
                        {/*                            <img src="assets/images/products/single/sidebar/4.jpg"*/}
                        {/*                                 alt="Product image" className="product-image">*/}
                        {/*                        </a>*/}
                        {/*                    </figure>*/}

                        {/*                    <div className="product-body">*/}
                        {/*                        <h5 className="product-title"><a href="product.html">Black soft RI*/}
                        {/*                            weekend travel bag</a></h5><!-- End .product-title -->*/}
                        {/*                        <div className="product-price">*/}
                        {/*                            $75.00*/}
                        {/*                        </div>*/}
                        {/*                        <!-- End .product-price -->*/}
                        {/*                    </div>*/}
                        {/*                    <!-- End .product-body -->*/}
                        {/*                </div>*/}
                        {/*                <!-- End .product product-sm -->*/}
                        {/*            </div>*/}
                        {/*            <!-- End .products -->*/}

                        {/*            <a href="category.html"*/}
                        {/*               className="btn btn-outline-dark-3"><span>View More Products</span><i*/}
                        {/*                className="icon-long-arrow-right"></i></a>*/}
                        {/*        </div>*/}
                        {/*        <!-- End .widget widget-products -->*/}

                        {/*        <div className="widget widget-banner-sidebar">*/}
                        {/*            <div className="banner-sidebar-title">ad box 280 x 280</div>*/}
                        {/*            <!-- End .ad-title -->*/}

                        {/*            <div className="banner-sidebar banner-overlay">*/}
                        {/*                <a href="#">*/}
                        {/*                    <img src="assets/images/blog/sidebar/banner.jpg" alt="banner">*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*            <!-- End .banner-ad -->*/}
                        {/*        </div>*/}
                        {/*        <!-- End .widget -->*/}
                        {/*    </div>*/}
                        {/*    <!-- End .sidebar sidebar-product -->*/}
                        {/*</aside>*/}
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Product