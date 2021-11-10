import React, {useEffect, useState} from "react";
import "../Header.css"
import {NavLink} from "react-router-dom";

import {setSaleValue} from "../../../store/actions/sale";
import {resetBrands} from "../../../store/actions/brands_action";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoginValue} from "../../../store/actions/isLogin";
import {getProductsFromCart} from "../../../store/actions/cartProducts";
import {getProductsFromWishlist} from "../../../store/actions/wishlistProducts";
import {getCategory} from "../../../store/actions/category";
import {getsubCategory} from "../../../store/actions/subcategory";
import {getsubCategory1} from "../../../store/actions/subcategory1";
import {getsubCategory2} from "../../../store/actions/subcategory2";
import {getProducts} from "../../../store/actions/product";

const HeaderBottom2 = (props) => {
    const {t, i18n} = useTranslation();
    const [searchInput, setSearchInput] = useState()

    const isLogin = useSelector(state => state.isLogin.isLogin)
    const dispatch = useDispatch()

    const userId = localStorage.getItem("userId")

    function CheckLogin() {
        const token = JSON.parse(localStorage.getItem("token"))
        if (token) {
            dispatch(getIsLoginValue(true))
            dispatch(getProductsFromCart())
            dispatch(getProductsFromWishlist())
        }
    }

    useEffect(() => {
        dispatch(getCategory())
        dispatch(getsubCategory())
        dispatch(getsubCategory1())
        dispatch(getsubCategory2())
        dispatch(getProducts())
        CheckLogin()
    }, [dispatch])

    const categories = useSelector(state => state.category.category)
    const subcategoreis = useSelector(state => state.subcategory.subcategory)
    const subcategoreis1 = useSelector(state => state.subcategory1.subcategory1)
    const subcategoreis2 = useSelector(state => state.subcategory2.subcategory2)


    return (
        <div className="header-bottom sticky-header" style={{backgroundColor: "#585858"}}>
            <div className="container">
                <div className="header-left">
                    <div className="dropdown category-dropdown">
                        <a href="/" className="Bars" data-role="disabled" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories"
                        >
                            <i className='icon-bars'></i>
                            <span>  <span style={{color: "white"}}>Категории</span></span>
                        </a>

                        <div className="dropdown-menu" style={{width: 350}}>
                            <nav className="side-nav">
                                <ul className="menu-vertical sf-arrows">
                                    {
                                        categories.map((item, index) => {
                                            return (
                                                <li className="megamenu-container liStyle" key={index}>

                                                    <div>
                                                        <NavLink
                                                            onClick={() => {
                                                                dispatch(setSaleValue(false));
                                                                dispatch(resetBrands())
                                                            }}
                                                            activeStyle={{
                                                                color: "#ccbc30"
                                                            }}
                                                            to={{
                                                                pathname: "/categories/" + item.id,
                                                            }}
                                                            className='menuLinkDiv'
                                                        >
                                                            <div className='menuLink'
                                                                 style={{fontWeight: 600, fontSize: 17, width: 400}}>
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
                                                                            <div style={{}} className='row'>
                                                                                {
                                                                                    subcategoreis.map((subItem, i) => {
                                                                                        if (item.id === subItem.categories) {
                                                                                            return (
                                                                                                <>
                                                                                                    <div
                                                                                                        className="menu-title col-6"
                                                                                                        style={{
                                                                                                            color: "black",
                                                                                                            paddingLeft: 20
                                                                                                        }}
                                                                                                        key={i}>
                                                                                                        <NavLink
                                                                                                            onClick={() => {
                                                                                                                dispatch(setSaleValue(false));
                                                                                                                dispatch(resetBrands())
                                                                                                            }}
                                                                                                            style={{
                                                                                                                color: "#ccbc30",
                                                                                                                fontSize: 16
                                                                                                            }}
                                                                                                            to={{
                                                                                                                pathname: '/subcategories/' + subItem.id
                                                                                                            }}
                                                                                                            data-hover="sub"
                                                                                                        >
                                                                                                            <style>{`[data-hover="sub"]:hover {
                                                                                                                          text-decoration: underline !important;
                                                                                                                    }`}</style>
                                                                                                            {subItem.title}
                                                                                                        </NavLink>

                                                                                                        <ul style={{
                                                                                                            display: "flex",
                                                                                                            flexDirection: "row",
                                                                                                            flexWrap: 'wrap',
                                                                                                            justifyContent: 'start'
                                                                                                        }}>
                                                                                                            {
                                                                                                                subcategoreis1.map((subItem1, i) => {
                                                                                                                    if (subItem.id === subItem1.subcategory) {
                                                                                                                        return (
                                                                                                                            <li key={i}
                                                                                                                                style={{paddingRight: 10}}
                                                                                                                            >
                                                                                                                                <NavLink
                                                                                                                                    onClick={() => {
                                                                                                                                        dispatch(setSaleValue(false));
                                                                                                                                        dispatch(resetBrands())
                                                                                                                                    }}
                                                                                                                                    to={{
                                                                                                                                        pathname: '/subcategories1/' + subItem1.id
                                                                                                                                    }}
                                                                                                                                    style={{
                                                                                                                                        fontWeight: "bold",
                                                                                                                                        fontSize: 16
                                                                                                                                    }}
                                                                                                                                    data-hover="sub1"
                                                                                                                                >
                                                                                                                                    <style>{`[data-hover="sub1"]:hover {
                                                                                                                                        color: #ccbc30 !important;
                                                                                                                                    }`}</style>

                                                                                                                                    {subItem1.title},</NavLink>
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
                <div className="center-menu-div">

                    <div className="center-menu" style={{
                        margin: 0,
                        fontSize: 17,
                        fontWeight: "bold",
                        color: "#FFFFFF"
                    }}>
                        <div style={{
                            margin: 0,
                        }}><NavLink
                                exact={true}
                            to="/"
                                    style={{
                                        color: "#FFFFFF"
                                    }}
                                    activeStyle={{
                                        color: "#ccbc30"
                                    }}
                        >{t("Main.Main")}</NavLink></div>
                        <div style={{
                            margin: 0,
                        }}><NavLink to="/news-blogs"
                                    style={{
                                        color: "#FFFFFF"
                                    }}
                                    activeStyle={{
                                        color: "#ccbc30"
                                    }}
                        >{t("Footer.FooterMenu.1.4")}</NavLink>
                        </div>
                        <div style={{
                            margin: 0,
                        }}><NavLink to="/contact"
                                    style={{
                                        color: "#FFFFFF"
                                    }}
                                    activeStyle={{
                                        color: "#ccbc30"
                                    }}
                        >{t("Footer.FooterMenu.1.5")}</NavLink>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <i className="la la-lightbulb-o"></i><p><span>Clearance Up to 30% Off</span></p>
                </div>
            </div>
        </div>

    )
}

export default HeaderBottom2