import React, {useEffect, useState} from "react";
import './Header.css'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import GetData from "../../service/GetData";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../store/actions/category";
import {getsubCategory} from "../../store/actions/subcategory";
import {getsubCategory1} from "../../store/actions/subcategory1";
import {getsubCategory2} from "../../store/actions/subcategory2";
import {getCartProducts, getProducts} from "../../store/actions/product";
import {getProductsFromCart} from "../../store/actions/cartProducts";


const HeaderBottom = () => {
    const {t, i18n} = useTranslation();

    const isLogin = useSelector(state => state.isLogin.isLogin)

    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.category)
    const subcategoreis = useSelector(state => state.subcategory.subcategory)
    const subcategoreis1 = useSelector(state => state.subcategory1.subcategory1)
    const subcategoreis2 = useSelector(state => state.subcategory2.subcategory2)
    const cartProducts = useSelector(state => state.cartProd.cartProd)
    console.log(cartProducts)
    const token = JSON.parse(localStorage.getItem("token"))
    const userId = localStorage.getItem("userId")
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('userId'))

    useEffect(() => {
        dispatch(getCategory())
        dispatch(getsubCategory())
        dispatch(getsubCategory1())
        dispatch(getsubCategory2())
        dispatch(getProducts())
        dispatch(getProductsFromCart(token, userId))
    }, [dispatch])

    return (
        <div className="header-bottom sticky-header" style={{backgroundColor: "#585858"}}>
            <div className="container">
                <div className="header-left">
                    <div className="dropdown category-dropdown show is-on" data-visible="true">
                        <a href="#" className='Bars' role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" data-display="static"
                           title="Баардык категориялар">
                            <i className='icon-bars'></i>
                            <span> Erka  <span style={{color: "white"}}>Bereke</span></span>
                        </a>

                        <div className="dropdown-menu show">
                            <nav className="side-nav">
                                <ul className="menu-vertical sf-arrows">
                                    {
                                        categories.map((item, index) => {
                                            return (
                                                <li className="megamenu-container liStyle" key={index}>

                                                    <div className='menuLinkDiv'>
                                                        <div className='menuLink'
                                                             style={{fontWeight: 600, fontSize: 17}}>
                                                            <img src="/assets/svg_logo/fruits.svg"
                                                                 alt="fruits"/><NavLink to={{
                                                            pathname: "/categories/" + item.title,
                                                            id: item.id
                                                        }}>
                                                            {item.title}  </NavLink>
                                                        </div>
                                                        <i className='icon-angle-right'> </i>
                                                    </div>


                                                    <div className="megamenu">
                                                        <div className="row no-gutters">
                                                            <div className="col-md">
                                                                <div className="menu-col">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div style={{
                                                                                display: "flex",
                                                                                flexDirection: "row",
                                                                                justifyContent: 'space-evenly',
                                                                                padding: 20,
                                                                                flexWrap: 'wrap'
                                                                            }}>
                                                                                {
                                                                                    subcategoreis.map((subItem, i) => {
                                                                                        if (item.id === subItem.categories) {
                                                                                            return (
                                                                                                <>
                                                                                                    <div
                                                                                                        className="menu-title"
                                                                                                        style={{color: "black",}}
                                                                                                        key={i}>{subItem.title}
                                                                                                        <ul style={{
                                                                                                            borderTop: "1px solid #585858",
                                                                                                            paddingTop: 20
                                                                                                        }}>
                                                                                                            {
                                                                                                                subcategoreis1.map((subItem1, i) => {
                                                                                                                    if (subItem.id === subItem1.subcategory) {
                                                                                                                        return (
                                                                                                                            <li key={i}>
                                                                                                                                <NavLink
                                                                                                                                    to={{
                                                                                                                                        pathname: '/categories/' + subItem1.title
                                                                                                                                    }}
                                                                                                                                    style={{
                                                                                                                                        fontWeight: "bold",
                                                                                                                                        fontSize: 15
                                                                                                                                    }}
                                                                                                                                >{subItem1.title}</NavLink>
                                                                                                                            </li>
                                                                                                                        )
                                                                                                                    }

                                                                                                                })}

                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        }

                                                                                    })}
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            )
                                        })}


                                    {/*<li className="megamenu-container">*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/meat.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories"*/}
                                    {/*               style={{fontWeight: 600, fontSize: 17}}>{t("Menu.1")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="megamenu">*/}
                                    {/*        <div className="row no-gutters">*/}
                                    {/*            <div className="col-md-8">*/}
                                    {/*                <div className="menu-col">*/}
                                    {/*                    <div className="row">*/}
                                    {/*                        <div className="col-md-6">*/}
                                    {/*                            <div className="menu-title">Bedroom</div>*/}
                                    {/*                            <ul>*/}
                                    {/*                                <li><a href="#">Beds, Frames & Bases</a></li>*/}
                                    {/*                                <li><a href="#">Dressers</a></li>*/}
                                    {/*                                <li><a href="#">Nightstands</a></li>*/}
                                    {/*                                <li><a href="#">Kids' Beds & Headboards</a></li>*/}
                                    {/*                                <li><a href="#">Armoires</a></li>*/}
                                    {/*                            </ul>*/}

                                    {/*                            <div className="menu-title">Living Room</div>*/}
                                    {/*                            <ul>*/}
                                    {/*                                <li><a href="#">Coffee Tables</a></li>*/}
                                    {/*                                <li><a href="#">Chairs</a></li>*/}
                                    {/*                                <li><a href="#">Tables</a></li>*/}
                                    {/*                                <li><a href="#">Futons & Sofa Beds</a></li>*/}
                                    {/*                                <li><a href="#">Cabinets & Chests</a></li>*/}
                                    {/*                            </ul>*/}
                                    {/*                        </div>*/}

                                    {/*                        <div className="col-md-6">*/}
                                    {/*                            <div className="menu-title">Office</div>*/}
                                    {/*                            <ul>*/}
                                    {/*                                <li><a href="#">Office Chairs</a></li>*/}
                                    {/*                                <li><a href="#">Desks</a></li>*/}
                                    {/*                                <li><a href="#">Bookcases</a></li>*/}
                                    {/*                                <li><a href="#">File Cabinets</a></li>*/}
                                    {/*                                <li><a href="#">Breakroom Tables</a></li>*/}
                                    {/*                            </ul>*/}

                                    {/*                            <div className="menu-title">Kitchen & Dining</div>*/}
                                    {/*                            <ul>*/}
                                    {/*                                <li><a href="#">Dining Sets</a></li>*/}
                                    {/*                                <li><a href="#">Kitchen Storage Cabinets</a></li>*/}
                                    {/*                                <li><a href="#">Bakers Racks</a></li>*/}
                                    {/*                                <li><a href="#">Dining Chairs</a></li>*/}
                                    {/*                                <li><a href="#">Dining Room Tables</a></li>*/}
                                    {/*                                <li><a href="#">Bar Stools</a></li>*/}
                                    {/*                            </ul>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}

                                    {/*            <div className="col-md-4">*/}
                                    {/*                <div className="banner banner-overlay">*/}
                                    {/*                    <a href="category.html" className="banner banner-menu">*/}
                                    {/*                        /!*<img src="assets/images/demos/demo-13/menu/banner-2.jpg"*!/*/}
                                    {/*                        /!*     alt="Banner"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li className="megamenu-container">*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/milk.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories"*/}
                                    {/*               style={{fontWeight: 600, fontSize: 17}}>{t("Menu.3")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="megamenu">*/}
                                    {/*        <div className="menu-col">*/}
                                    {/*            <div className="row">*/}
                                    {/*                <div className="col-md-4">*/}
                                    {/*                    <div className="menu-title">Cookware</div>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="#">Cookware Sets</a></li>*/}
                                    {/*                        <li><a href="#">Pans, Griddles & Woks</a></li>*/}
                                    {/*                        <li><a href="#">Pots</a></li>*/}
                                    {/*                        <li><a href="#">Skillets & Grill Pans</a></li>*/}
                                    {/*                        <li><a href="#">Kettles</a></li>*/}
                                    {/*                        <li><a href="#">Soup & Stockpots</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-md-4">*/}
                                    {/*                    <div className="menu-title">Dinnerware & Tabletop</div>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="#">Plates</a></li>*/}
                                    {/*                        <li><a href="#">Cups & Mugs</a></li>*/}
                                    {/*                        <li><a href="#">Trays & Platters</a></li>*/}
                                    {/*                        <li><a href="#">Coffee & Tea Serving</a></li>*/}
                                    {/*                        <li><a href="#">Salt & Pepper Shaker</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-md-4">*/}
                                    {/*                    <div className="menu-title">Cooking Appliances</div>*/}
                                    {/*                    <ul>*/}
                                    {/*                        <li><a href="#">Microwaves</a></li>*/}
                                    {/*                        <li><a href="#">Coffee Makers</a></li>*/}
                                    {/*                        <li><a href="#">Mixers & Attachments</a></li>*/}
                                    {/*                        <li><a href="#">Slow Cookers</a></li>*/}
                                    {/*                        <li><a href="#">Air Fryers</a></li>*/}
                                    {/*                        <li><a href="#">Toasters & Ovens</a></li>*/}
                                    {/*                    </ul>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}

                                    {/*            <div className="row menu-banners">*/}
                                    {/*                <div className="col-md-4">*/}
                                    {/*                    <div className="banner">*/}
                                    {/*                        <a href="#">*/}
                                    {/*                            /!*<img src="assets/images/demos/demo-13/menu/1.jpg"*!/*/}
                                    {/*                            /!*     alt="image"/>*!/*/}
                                    {/*                        </a>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-md-4">*/}
                                    {/*                    <div className="banner">*/}
                                    {/*                        <a href="#">*/}
                                    {/*                            /!*<img src="assets/images/demos/demo-13/menu/2.jpg"*!/*/}
                                    {/*                            /!*     alt="image"/>*!/*/}
                                    {/*                        </a>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-md-4">*/}
                                    {/*                    <div className="banner">*/}
                                    {/*                        <a href="#">*/}
                                    {/*                            /!*<img src="assets/images/demos/demo-13/menu/3.jpg"*!/*/}
                                    {/*                            /!*     alt="image"/>*!/*/}
                                    {/*                        </a>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li className="megamenu-container">*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/azyk.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories"*/}
                                    {/*               style={{fontWeight: 600, fontSize: 17}}>{t("Menu.4")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="megamenu">*/}
                                    {/*        <div className="row no-gutters">*/}
                                    {/*            <div className="col-md-8">*/}
                                    {/*                <div className="menu-col">*/}
                                    {/*                    <div className="row">*/}
                                    {/*                        <div className="col-md-6">*/}
                                    {/*                            <div className="menu-title">Women</div>*/}
                                    {/*                            <ul>*/}
                                    {/*                                <li><a href="#"><strong>New Arrivals</strong></a>*/}
                                    {/*                                </li>*/}
                                    {/*                                <li><a href="#"><strong>Best Sellers</strong></a>*/}
                                    {/*                                </li>*/}
                                    {/*                                <li><a href="#"><strong>Trending</strong></a></li>*/}
                                    {/*                                <li><a href="#">Clothing</a></li>*/}
                                    {/*                                <li><a href="#">Shoes</a></li>*/}
                                    {/*                                <li><a href="#">Bags</a></li>*/}
                                    {/*                                <li><a href="#">Accessories</a></li>*/}
                                    {/*                                <li><a href="#">Jewlery & Watches</a></li>*/}
                                    {/*                                <li><a href="#"><strong>Sale</strong></a></li>*/}
                                    {/*                            </ul>*/}
                                    {/*                        </div>*/}

                                    {/*                        <div className="col-md-6">*/}
                                    {/*                            <div className="menu-title">Men</div>*/}
                                    {/*                            <ul>*/}
                                    {/*                                <li><a href="#"><strong>New Arrivals</strong></a>*/}
                                    {/*                                </li>*/}
                                    {/*                                <li><a href="#"><strong>Best Sellers</strong></a>*/}
                                    {/*                                </li>*/}
                                    {/*                                <li><a href="#"><strong>Trending</strong></a></li>*/}
                                    {/*                                <li><a href="#">Clothing</a></li>*/}
                                    {/*                                <li><a href="#">Shoes</a></li>*/}
                                    {/*                                <li><a href="#">Bags</a></li>*/}
                                    {/*                                <li><a href="#">Accessories</a></li>*/}
                                    {/*                                <li><a href="#">Jewlery & Watches</a></li>*/}
                                    {/*                            </ul>*/}
                                    {/*                        </div>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}

                                    {/*            <div className="col-md-4">*/}
                                    {/*                <div className="banner banner-overlay">*/}
                                    {/*                    <a href="category.html" className="banner banner-menu">*/}
                                    {/*                        /!*<img src="assets/images/demos/demo-13/menu/banner-3.jpg"*!/*/}
                                    {/*                        /!*     alt="Banner"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}

                                    {/*        <div className="menu-col menu-brands">*/}
                                    {/*            <div className="row">*/}
                                    {/*                <div className="col-lg-2">*/}
                                    {/*                    <a href="#" className="brand">*/}
                                    {/*                        /!*<img src="assets/images/brands/1.png" alt="Brand Name"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-lg-2">*/}
                                    {/*                    <a href="#" className="brand">*/}
                                    {/*                        /!*<img src="assets/images/brands/2.png" alt="Brand Name"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-lg-2">*/}
                                    {/*                    <a href="#" className="brand">*/}
                                    {/*                        /!*<img src="assets/images/brands/3.png" alt="Brand Name"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-lg-2">*/}
                                    {/*                    <a href="#" className="brand">*/}
                                    {/*                        /!*<img src="assets/images/brands/4.png" alt="Brand Name"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-lg-2">*/}
                                    {/*                    <a href="#" className="brand">*/}
                                    {/*                        /!*<img src="assets/images/brands/5.png" alt="Brand Name"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}

                                    {/*                <div className="col-lg-2">*/}
                                    {/*                    <a href="#" className="brand">*/}
                                    {/*                        /!*<img src="assets/images/brands/6.png" alt="Brand Name"/>*!/*/}
                                    {/*                    </a>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}

                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/drinking.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories"*/}
                                    {/*               style={{fontWeight: 600, fontSize: 17}}>{t("Menu.5")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/cleaning.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories"*/}
                                    {/*               style={{fontWeight: 600, fontSize: 17}}>{t("Menu.6")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/cosmetics.svg"  style={{color: "black"}} alt="fruits" />*/}
                                    {/*            <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>{t("Menu.7")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/baby.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>{t("Menu.8")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/house.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>{t("Menu.9")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/pets.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>{t("Menu.10")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <div className='menuLinkDiv'>*/}
                                    {/*        <div className='menuLink'>*/}
                                    {/*            <img src="/assets/svg_logo/electronics.svg" alt="fruits"/>*/}
                                    {/*            <a href="/categories" style={{ fontWeight: 600, fontSize: 17}}>{t("Menu.11")}</a>*/}
                                    {/*        </div>*/}
                                    {/*        <i className='icon-angle-right'> </i>*/}
                                    {/*    </div>*/}
                                    {/*</li>*/}
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
                                <label htmlFor="q" className="sr-only">{t("Sale.1")}...</label>
                                <input type="search" className="form-control" name="q" id="q"
                                       placeholder={t("Sale.1")} required/>
                                <button className="btn btn" style={{backgroundColor: "rgb(204, 188, 48)"}}
                                        type="submit"><i className="icon-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="header-right">
                    <div className="header-right">
                        <div className="header-dropdown-link">

                            <NavLink to="/wishlist" className="wishlist-link">
                                <i className="icon-heart-o" style={{fontSize: '2.8rem'}}></i>
                                <span className="wishlist-count" style={{backgroundColor: "rgb(204, 188, 48)"}}>3</span>
                                <span className="wishlist-txt" style={{color: 'white'}}></span>
                            </NavLink>

                            <div className="dropdown cart-dropdown">
                                <NavLink to={{
                                    pathname: "/cart"
                                }} className="dropdown-toggle" role="button" data-toggle="dropdown"
                                         aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart" style={{fontSize: '3.2rem'}}></i>
                                    <span className="cart-count"
                                          // style={{backgroundColor: "rgb(204, 188, 48)",}}>{cartProducts ? <> {cartProducts.items.length} </> : 0}</span>
                                          style={{backgroundColor: "rgb(204, 188, 48)",}}>0</span>
                                    <span className="cart-txt" style={{color: 'white'}}></span>
                                </NavLink>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        {
                                            cartProducts ? cartProducts.items.map((item, i) => {
                                                const len = cartProducts.items.length
                                                    if((i === len - 1) || (i === len - 2)){
                                                        return (
                                                            <div>
                                                                <div className="product">
                                                                    <div className="product-cart-details">
                                                                        <h4 className="product-title">
                                                                            <NavLink to={{
                                                                                pathname: "/product/" + item.product.id,
                                                                                id: item.product.id
                                                                            }}style={{fontSize: 17, fontWeight: "600"}}>{item.product.title}</NavLink>
                                                                        </h4>

                                                                        <span className="cart-product-info" style={{color: "black"}}>
                                                    <span className="cart-product-qty" >{item.quantity} </span>
                                                    x {Math.round(item.product.price)}
                                                </span>
                                                                    </div>

                                                                    <figure className="product-image-container">
                                                                            <img src={item.product.image}
                                                                                 alt="Product image"/>
                                                                    </figure>
                                                                    <a href="#" className="btn-remove" title="Remove Product"><i
                                                                        className="icon-close"></i></a>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }) :
                                                <div className="EmptyCart">
                                                    <img src="/assets/svg_logo/empty-cart.png" alt="cartEmpty"
                                                         style={{margin: '0 auto', paddingTop: 30, marginBottom: 30}}/>
                                                    {t("Cart.Empty")}
                                                </div>
                                        }
                                    </div>
                                    { cartProducts.items.length > 2 ? <div style={{color: "#808080", display: "flex", flexDirection: "row",
                                        justifyContent: "flex-end", marginTop: 5, fontWeight: "bold"}}>... еще {cartProducts.items.length -2 } товаров</div>: null
                                    }
                                    <div className="dropdown-cart-action"
                                         style={{paddingTop: 10, fontSize: 17, borderRadius: 8}}>
                                        < NavLink to={{
                                            pathname: "/cart"
                                        }} className="btn btn-primary" style={{
                                            fontSize: 17,
                                            margin: '0 auto'
                                        }}> {t("Cart.BtnTitle")}</NavLink>
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