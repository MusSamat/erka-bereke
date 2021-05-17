import React from "react";
import './Header.css'

const HeaderBottom = () => {
    return (
        <div className="header-bottom sticky-header" style={{backgroundColor: "#585858"}}>
            <div className="container">
                <div className="header-left">
                    <div className="dropdown category-dropdown show is-on" data-visible="true">
                        <a href="#" className='Bars' role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" data-display="static" title="Баардык категориялар">
                            <i className='icon-bars'></i>
                            <span> Erka  <span style={{color: "white"}}>Bereke</span></span>
                        </a>

                        <div className="dropdown-menu show">
                            <nav className="side-nav">
                                <ul className="menu-vertical sf-arrows">
                                    <li className="megamenu-container ">
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/fruits.svg" alt="fruits"/>
                                                <a href="/categories"
                                                   style={{fontWeight: 600, fontSize: 17}}>Мөмө-жемиш</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>


                                        <div className="megamenu">
                                            <div className="row no-gutters">
                                                <div className="col-md-8">
                                                    <div className="menu-col">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="menu-title">Laptops & Computers</div>
                                                                <ul>
                                                                    <li><a href="#">Desktop Computers</a></li>
                                                                    <li><a href="#">Monitors</a></li>
                                                                    <li><a href="#">Laptops</a></li>
                                                                    <li><a href="#">iPad & Tablets</a></li>
                                                                    <li><a href="#">Hard Drives & Storage</a></li>
                                                                    <li><a href="#">Printers & Supplies</a></li>
                                                                    <li><a href="#">Computer Accessories</a></li>
                                                                </ul>

                                                                <div className="menu-title">TV & Video</div>
                                                                <ul>
                                                                    <li><a href="#">TVs</a></li>
                                                                    <li><a href="#">Home Audio Speakers</a></li>
                                                                    <li><a href="#">Projectors</a></li>
                                                                    <li><a href="#">Media Streaming Devices</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="menu-title">Cell Phones</div>
                                                                <ul>
                                                                    <li><a href="#">Carrier Phones</a></li>
                                                                    <li><a href="#">Unlocked Phones</a></li>
                                                                    <li><a href="#">Phone & Cellphone Cases</a></li>
                                                                    <li><a href="#">Cellphone Chargers </a></li>
                                                                </ul>

                                                                <div className="menu-title">Digital Cameras</div>
                                                                <ul>
                                                                    <li><a href="#">Digital SLR Cameras</a></li>
                                                                    <li><a href="#">Sports & Action Cameras</a></li>
                                                                    <li><a href="#">Camcorders</a></li>
                                                                    <li><a href="#">Camera Lenses</a></li>
                                                                    <li><a href="#">Photo Printer</a></li>
                                                                    <li><a href="#">Digital Memory Cards</a></li>
                                                                    <li><a href="#">Camera Bags, Backpacks & Cases</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html" className="banner banner-menu">
                                                            {/*<img src="assets/images/demos/demo-13/menu/banner-1.jpg"*/}
                                                            {/*     alt="Banner"/>*/}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="megamenu-container">
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/meat.svg" alt="fruits"/>
                                                <a href="/categories"
                                                   style={{fontWeight: 600, fontSize: 17}}>Эт, Тоок, Балык</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>

                                        <div className="megamenu">
                                            <div className="row no-gutters">
                                                <div className="col-md-8">
                                                    <div className="menu-col">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="menu-title">Bedroom</div>
                                                                <ul>
                                                                    <li><a href="#">Beds, Frames & Bases</a></li>
                                                                    <li><a href="#">Dressers</a></li>
                                                                    <li><a href="#">Nightstands</a></li>
                                                                    <li><a href="#">Kids' Beds & Headboards</a></li>
                                                                    <li><a href="#">Armoires</a></li>
                                                                </ul>

                                                                <div className="menu-title">Living Room</div>
                                                                <ul>
                                                                    <li><a href="#">Coffee Tables</a></li>
                                                                    <li><a href="#">Chairs</a></li>
                                                                    <li><a href="#">Tables</a></li>
                                                                    <li><a href="#">Futons & Sofa Beds</a></li>
                                                                    <li><a href="#">Cabinets & Chests</a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="menu-title">Office</div>
                                                                <ul>
                                                                    <li><a href="#">Office Chairs</a></li>
                                                                    <li><a href="#">Desks</a></li>
                                                                    <li><a href="#">Bookcases</a></li>
                                                                    <li><a href="#">File Cabinets</a></li>
                                                                    <li><a href="#">Breakroom Tables</a></li>
                                                                </ul>

                                                                <div className="menu-title">Kitchen & Dining</div>
                                                                <ul>
                                                                    <li><a href="#">Dining Sets</a></li>
                                                                    <li><a href="#">Kitchen Storage Cabinets</a></li>
                                                                    <li><a href="#">Bakers Racks</a></li>
                                                                    <li><a href="#">Dining Chairs</a></li>
                                                                    <li><a href="#">Dining Room Tables</a></li>
                                                                    <li><a href="#">Bar Stools</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html" className="banner banner-menu">
                                                            {/*<img src="assets/images/demos/demo-13/menu/banner-2.jpg"*/}
                                                            {/*     alt="Banner"/>*/}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="megamenu-container">
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/milk.svg" alt="fruits"/>
                                                <a href="/categories"
                                                   style={{fontWeight: 600, fontSize: 17}}>Сүт азыктары</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>

                                        <div className="megamenu">
                                            <div className="menu-col">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="menu-title">Cookware</div>
                                                        <ul>
                                                            <li><a href="#">Cookware Sets</a></li>
                                                            <li><a href="#">Pans, Griddles & Woks</a></li>
                                                            <li><a href="#">Pots</a></li>
                                                            <li><a href="#">Skillets & Grill Pans</a></li>
                                                            <li><a href="#">Kettles</a></li>
                                                            <li><a href="#">Soup & Stockpots</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="menu-title">Dinnerware & Tabletop</div>
                                                        <ul>
                                                            <li><a href="#">Plates</a></li>
                                                            <li><a href="#">Cups & Mugs</a></li>
                                                            <li><a href="#">Trays & Platters</a></li>
                                                            <li><a href="#">Coffee & Tea Serving</a></li>
                                                            <li><a href="#">Salt & Pepper Shaker</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="menu-title">Cooking Appliances</div>
                                                        <ul>
                                                            <li><a href="#">Microwaves</a></li>
                                                            <li><a href="#">Coffee Makers</a></li>
                                                            <li><a href="#">Mixers & Attachments</a></li>
                                                            <li><a href="#">Slow Cookers</a></li>
                                                            <li><a href="#">Air Fryers</a></li>
                                                            <li><a href="#">Toasters & Ovens</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="row menu-banners">
                                                    <div className="col-md-4">
                                                        <div className="banner">
                                                            <a href="#">
                                                                {/*<img src="assets/images/demos/demo-13/menu/1.jpg"*/}
                                                                {/*     alt="image"/>*/}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="banner">
                                                            <a href="#">
                                                                {/*<img src="assets/images/demos/demo-13/menu/2.jpg"*/}
                                                                {/*     alt="image"/>*/}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="banner">
                                                            <a href="#">
                                                                {/*<img src="assets/images/demos/demo-13/menu/3.jpg"*/}
                                                                {/*     alt="image"/>*/}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="megamenu-container">
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/azyk.svg" alt="fruits"/>
                                                <a href="/categories"
                                                   style={{fontWeight: 600, fontSize: 17}}>Азык-түүлүк, Таттулар</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>

                                        <div className="megamenu">
                                            <div className="row no-gutters">
                                                <div className="col-md-8">
                                                    <div className="menu-col">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="menu-title">Women</div>
                                                                <ul>
                                                                    <li><a href="#"><strong>New Arrivals</strong></a>
                                                                    </li>
                                                                    <li><a href="#"><strong>Best Sellers</strong></a>
                                                                    </li>
                                                                    <li><a href="#"><strong>Trending</strong></a></li>
                                                                    <li><a href="#">Clothing</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">Bags</a></li>
                                                                    <li><a href="#">Accessories</a></li>
                                                                    <li><a href="#">Jewlery & Watches</a></li>
                                                                    <li><a href="#"><strong>Sale</strong></a></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="menu-title">Men</div>
                                                                <ul>
                                                                    <li><a href="#"><strong>New Arrivals</strong></a>
                                                                    </li>
                                                                    <li><a href="#"><strong>Best Sellers</strong></a>
                                                                    </li>
                                                                    <li><a href="#"><strong>Trending</strong></a></li>
                                                                    <li><a href="#">Clothing</a></li>
                                                                    <li><a href="#">Shoes</a></li>
                                                                    <li><a href="#">Bags</a></li>
                                                                    <li><a href="#">Accessories</a></li>
                                                                    <li><a href="#">Jewlery & Watches</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="banner banner-overlay">
                                                        <a href="category.html" className="banner banner-menu">
                                                            {/*<img src="assets/images/demos/demo-13/menu/banner-3.jpg"*/}
                                                            {/*     alt="Banner"/>*/}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="menu-col menu-brands">
                                                <div className="row">
                                                    <div className="col-lg-2">
                                                        <a href="#" className="brand">
                                                            {/*<img src="assets/images/brands/1.png" alt="Brand Name"/>*/}
                                                        </a>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <a href="#" className="brand">
                                                            {/*<img src="assets/images/brands/2.png" alt="Brand Name"/>*/}
                                                        </a>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <a href="#" className="brand">
                                                            {/*<img src="assets/images/brands/3.png" alt="Brand Name"/>*/}
                                                        </a>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <a href="#" className="brand">
                                                            {/*<img src="assets/images/brands/4.png" alt="Brand Name"/>*/}
                                                        </a>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <a href="#" className="brand">
                                                            {/*<img src="assets/images/brands/5.png" alt="Brand Name"/>*/}
                                                        </a>
                                                    </div>

                                                    <div className="col-lg-2">
                                                        <a href="#" className="brand">
                                                            {/*<img src="assets/images/brands/6.png" alt="Brand Name"/>*/}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/cleaning.svg" alt="fruits"/>
                                                <a href="/categories"
                                                   style={{fontWeight: 600, fontSize: 17}}>Тазалык үчүн</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/cosmetics.svg"  style={{color: "black"}} alt="fruits" />
                                                <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>Кагаз, косметика</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/baby.svg" alt="fruits"/>
                                                <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>Бүбүк, Оюнчуктар</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/house.svg" alt="fruits"/>
                                                <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>Үй-тирикчилик</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/pets.svg" alt="fruits"/>
                                                <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>Үй-жаныбарлары</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='menuLinkDiv'>
                                            <div className='menuLink'>
                                                <img src="/assets/svg_logo/electronics.svg" alt="fruits"/>
                                                <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>"Электроника</a>
                                            </div>
                                            <i className='icon-angle-right'> </i>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header-center">
                    <div
                        className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block"
                        style={{marginTop: "1.2rem", marginBottom: "1.2rem"}}>
                        <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                        <form action="#" method="get">
                            <div className="header-search-wrapper search-wrapper-wide"
                                 style={{borderColor: 'rgb(204, 188, 48)'}}>
                                {/*<div className="select-custom">*/}
                                {/*    <select id="cat" name="cat">*/}
                                {/*        <option value="">All Departments</option>*/}
                                {/*        <option value="1">Fashion</option>*/}
                                {/*        <option value="2">- Women</option>*/}
                                {/*        <option value="3">- Men</option>*/}
                                {/*        <option value="4">- Jewellery</option>*/}
                                {/*        <option value="5">- Kids Fashion</option>*/}
                                {/*        <option value="6">Electronics</option>*/}
                                {/*        <option value="7">- Smart TVs</option>*/}
                                {/*        <option value="8">- Cameras</option>*/}
                                {/*        <option value="9">- Games</option>*/}
                                {/*        <option value="10">Home &amp; Garden</option>*/}
                                {/*        <option value="11">Motors</option>*/}
                                {/*        <option value="12">- Cars and Trucks</option>*/}
                                {/*        <option value="15">- Boats</option>*/}
                                {/*        <option value="16">- Auto Tools &amp; Supplies</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}
                                <label htmlFor="q" className="sr-only">10% арзандатуу</label>
                                <input type="search" className="form-control" name="q" id="q"
                                       placeholder="10% арзандатуу..." required/>
                                <button className="btn btn" style={{backgroundColor: "rgb(204, 188, 48)"}}
                                        type="submit"><i className="icon-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="header-right">
                    {/*<i className="la la-lightbulb-o"></i><p><span> Clearance Up to 30% Off</span></p>*/}
                    <div className="header-right">
                        <div className="header-dropdown-link">

                            <a href="wishlist.html" className="wishlist-link">
                                <i className="icon-heart-o" style={{fontSize: '2.8rem'}}></i>
                                <span className="wishlist-count" style={{backgroundColor: "rgb(204, 188, 48)"}}>3</span>
                                <span className="wishlist-txt" style={{color: 'white'}}></span>
                            </a>

                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart" style={{fontSize: '3.2rem'}}></i>
                                    <span className="cart-count"
                                          style={{backgroundColor: "rgb(204, 188, 48)",}}>2</span>
                                    <span className="cart-txt" style={{color: 'white'}}></span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Beige knitted elastic runner shoes</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $84.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product"><i
                                                className="icon-close"></i></a>
                                        </div>

                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Blue utility pinafore denim dress</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $76.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product"><i
                                                className="icon-close"></i></a>
                                        </div>
                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>Баардыгы</span>

                                        <span className="cart-total-price">$160.00</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <a href="cart.html" className="btn btn-primary">корзинка</a>
                                        <a href="checkout.html"
                                           className="btn btn-outline-primary-2"><span>текшерүү</span><i
                                            className="icon-long-arrow-right"></i></a>
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

export default HeaderBottom