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
import {getProductsFromWishlist} from "../../store/actions/wishlistProducts";
import Nav from "../Nav/Nav";


const HeaderBottom = (props) => {
    const {t, i18n} = useTranslation();

    const isLogin = useSelector(state => state.isLogin.isLogin)
    const dispatch = useDispatch()

    const userId = localStorage.getItem("userId")

    useEffect(() => {
        dispatch(getCategory())
        dispatch(getsubCategory())
        dispatch(getsubCategory1())
        dispatch(getsubCategory2())
        dispatch(getProducts())
        if (isLogin) {
            dispatch(getProductsFromCart())
            dispatch(getProductsFromWishlist())
        }
    }, [dispatch])

    const categories = useSelector(state => state.category.category)
    const subcategoreis = useSelector(state => state.subcategory.subcategory)
    const subcategoreis1 = useSelector(state => state.subcategory1.subcategory1)
    const subcategoreis2 = useSelector(state => state.subcategory2.subcategory2)

    const cartProductsById = useSelector(state => {
        return state.cartProd
    })
    const wishlistProductsById = useSelector(state => {
        return state.wishlistProd
    })

    return (
        <div className="header-bottom sticky-header" style={{backgroundColor: "#585858"}}>
            <div className="container">
                <div className="header-left">
                    <div className="dropdown category-dropdown show is-on" data-visible="true">
                        <a href="/" className='Bars' role="button" data-toggle="dropdown"
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

                                                    <div>
                                                        <NavLink
                                                            activeStyle={{
                                                                color: "#ccbc30"
                                                            }}
                                                            to={{
                                                                pathname: "/categories/" + item.id,
                                                            }}
                                                            className='menuLinkDiv'
                                                        >
                                                            <div className='menuLink'
                                                                 style={{fontWeight: 600, fontSize: 17}}>
                                                                <img src={item.image}
                                                                     alt={item.title}/>
                                                                {item.title}
                                                            </div>
                                                            <i className='icon-angle-right'> </i>
                                                        </NavLink>
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
                                                                                                        key={i}>
                                                                                                        <NavLink
                                                                                                            activeStyle={{
                                                                                                                color: "#ccbc30"
                                                                                                            }}

                                                                                                            to={{
                                                                                                                pathname: '/subcategories/' + subItem.id
                                                                                                            }}
                                                                                                        >
                                                                                                            {subItem.title}
                                                                                                        </NavLink>

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
                                                                                                                                        pathname: '/subcategories1/' + subItem1.id
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
                                <span className="wishlist-count" style={{backgroundColor: "rgb(204, 188, 48)"}}>
                                    {
                                        wishlistProductsById?.items ? <>{wishlistProductsById?.items?.length}</> : <> 0 </>
                                    }
                                </span>
                                <span className="wishlist-txt" style={{color: 'white'}}></span>
                            </NavLink>

                            <div className="dropdown cart-dropdown">
                                <NavLink to={{
                                    pathname: "/cart"
                                }} className="dropdown-toggle" role="button" data-toggle="dropdown"
                                         aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart" style={{fontSize: '3.2rem'}}></i>
                                    <span className="cart-count" style={{backgroundColor: "rgb(204, 188, 48)"}}>
                                        {cartProductsById?.items ? <> {cartProductsById?.items?.length} </> : <> 0 </>}
                                 </span>

                                    <span className="cart-txt" style={{color: 'white'}}></span>
                                </NavLink>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        {
                                            cartProductsById === null ?
                                                <div className="EmptyCart">
                                                    <img src="/assets/svg_logo/empty-cart.png" alt="cartEmpty"
                                                         style={{margin: '0 auto', paddingTop: 30, marginBottom: 30}}/>
                                                    {t("Cart.Empty")}
                                                </div>
                                                :
                                                cartProductsById?.items?.filter((i, j) => j < 2).map((item, i) => {
                                                    const len = 0
                                                    return (
                                                        <div>
                                                            <div className="product" key={i}>
                                                                <div className="product-cart-details">
                                                                    <h4 className="product-title">
                                                                        <NavLink to={{
                                                                            pathname: "/product/" + item.product.id,
                                                                            id: item.product.id
                                                                        }} style={{
                                                                            fontSize: 17,
                                                                            fontWeight: "600"
                                                                        }}>{item.product.title}</NavLink>
                                                                    </h4>

                                                                    <span className="cart-product-info"
                                                                          style={{color: "black"}}>
                                                    <span className="cart-product-qty">{item.quantity} </span>
                                                    x {Math.round(item.product.price)}
                                                </span>
                                                                </div>

                                                                <figure className="product-image-container">
                                                                    <img src={item.product.image}
                                                                         alt="Product image"/>
                                                                </figure>
                                                                <a href="#" className="btn-remove"
                                                                   title="Remove Product">
                                                                    <i
                                                                        className="icon-close"></i></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })

                                        }
                                    </div>
                                    {cartProductsById?.items?.length > 2 ? <div style={{
                                        color: "#808080", display: "flex", flexDirection: "row",
                                        justifyContent: "flex-end", marginTop: 5, fontWeight: "bold"
                                    }}>... еще {cartProductsById.items.length - 2} товаров</div> : null
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