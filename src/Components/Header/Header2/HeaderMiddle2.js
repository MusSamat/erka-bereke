import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {searchProduct} from "../../../store/actions/searchProduct";
import {NavLink, withRouter} from "react-router-dom";
import {getIsLoginValue} from "../../../store/actions/isLogin";
import {getProductsFromCart} from "../../../store/actions/cartProducts";
import {getProductsFromWishlist} from "../../../store/actions/wishlistProducts";
import {getCategory} from "../../../store/actions/category";
import {getsubCategory} from "../../../store/actions/subcategory";
import {getsubCategory1} from "../../../store/actions/subcategory1";
import {getsubCategory2} from "../../../store/actions/subcategory2";
import {getProducts} from "../../../store/actions/product";
import {mobile_menu} from "../../../service/accessFunctions";
import {CART} from "../../../service/cartLocalStorage/storageFunctions";


const HeaderMiddle2 = (props) => {
    const {t, i18n} = useTranslation();
    const [searchInput, setSearchInput] = useState()
    const token = JSON.parse(localStorage.getItem("token"))
    const isLogin = useSelector(state => state.isLogin.isLogin)
    const dispatch = useDispatch()
    const [cartTemp, setCartTemp] = useState([])

    const userId = localStorage.getItem("userId")

    function CheckLogin(){
        const token = JSON.parse(localStorage.getItem("token"))
        dispatch(getIsLoginValue(true))
        dispatch(getProductsFromCart())
        dispatch(getProductsFromWishlist())
    }


    useEffect(() => {
        mobile_menu()
        setCartTemp(CART.contents)
        dispatch(getProducts())
        dispatch(getProductsFromCart())
        CheckLogin()
    }, [])

    // const categories = useSelector(state => state.category.category)
    // const subcategoreis = useSelector(state => state.subcategory.subcategory)
    // const subcategoreis1 = useSelector(state => state.subcategory1.subcategory1)
    // const subcategoreis2 = useSelector(state => state.subcategory2.subcategory2)

    const cartProductsById = useSelector(state => state.cartProd.cartProd)
    const wishlistProductsById = useSelector(state => {
        return state.wishlistProd
    })

    const redirectToSearchPage = (e) => {
        e.preventDefault()
        props.history.push("/search/" + searchInput)
    }
    return (
        <div className="header-middle">
            <div className="container">
                <div className="header-left">
                    <button className="mobile-menu-toggler">
                        <span className="sr-only">Menu</span>
                        <i className="icon-bars"></i>
                    </button>

                    <NavLink to="/" className="logo">
                        <span style={{
                            color: "#ccbc30",
                            fontSize: 30,
                            fontWeight: "bold",
                            margin: "0 auto"
                        }}> Erka  <span style={{color:" #585858"}}>Bereke</span></span>
                    </NavLink>
                </div>

                <div className="header-center">
                    <div
                        className=" header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block"
                        style={{marginTop: "1.2rem", marginBottom: "1.2rem"}}>
                        <form onSubmit={(e) => redirectToSearchPage(e) }>
                            <div className="header-search-wrapper search-wrapper-wide"
                                 style={{borderColor: 'rgb(204, 188, 48)'}}>
                                <label htmlFor="q" className="sr-only">{t("Sale.1")}...</label>
                                <input type="text" className="form-control"
                                       placeholder={t("Sale.1")} required
                                       onChange={(e) => {setSearchInput(e.target.value)
                                           dispatch(searchProduct(searchInput))
                                       }}
                                />

                                <button className="btn btn" style={{backgroundColor: "rgb(204, 188, 48)"}}
                                        type="submit"><i className="icon-search"></i>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

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
                                        {
                                            token ? cartProductsById?.items ? <> {cartProductsById?.items?.length} </> : <> 0 </>
                                                :
                                                cartProductsById ? <> {cartProductsById.length} </> : <> 0 </>
                                        }
                                 </span>

                                <span className="cart-txt" style={{color: 'white'}}></span>
                            </NavLink>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    {
                                        token ?
                                            cartProductsById === null ?
                                            <div className="EmptyCart">
                                                <img src="/assets/svg_logo/empty-cart.png" alt="cartEmpty"
                                                     style={{margin: '0 auto', paddingTop: 30, marginBottom: 30}}/>
                                                {t("Cart.Empty")}
                                            </div>
                                            :
                                            cartProductsById?.items?.filter((i, j) => j < 2).map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div className="product" >
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
                                                    x {Math.round(item.product.price)}</span>
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

                                            : cartProductsById ?
                                           cartProductsById?.filter((i, j) => j < 2).map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <div className="product" >
                                                            <div className="product-cart-details">
                                                                <h4 className="product-title">
                                                                    <NavLink to={{
                                                                        pathname: "/product/" + item.id,
                                                                        id: item.id
                                                                    }} style={{
                                                                        fontSize: 17,
                                                                        fontWeight: "600"
                                                                    }}>{item.title}</NavLink>
                                                                </h4>

                                                                <span className="cart-product-info"
                                                                      style={{color: "black"}}>
                                                    <span className="cart-product-qty">{item.quantity} </span>
                                                    x {Math.round(item.price)}</span>
                                                            </div>

                                                            <figure className="product-image-container">
                                                                <img src={item.image}
                                                                     alt="Product image"/>
                                                            </figure>
                                                            <a href="#" className="btn-remove"
                                                               title="Remove Product">
                                                                <i
                                                                    className="icon-close"></i></a>
                                                        </div>
                                                    </div>
                                                )})

                                            :
                                            <div className="EmptyCart">
                                                <img src="/assets/svg_logo/empty-cart.png" alt="cartEmpty"
                                                     style={{margin: '0 auto', paddingTop: 30, marginBottom: 30}}/>
                                                {t("Cart.Empty")}
                                            </div>
                                    }
                                </div>
                                {
                                    isLogin ?
                                        cartProductsById?.items?.length > 2 ? <div style={{
                                        color: "#808080", display: "flex", flexDirection: "row",
                                        justifyContent: "flex-end", marginTop: 5, fontWeight: "bold"
                                    }}>... еще {cartProductsById.items.length - 2} товаров</div> : null

                                        :
                                        cartTemp?.length > 2 ? <div style={{
                                            color: "#808080", display: "flex", flexDirection: "row",
                                            justifyContent: "flex-end", marginTop: 5, fontWeight: "bold"
                                        }}>... еще {cartTemp.length - 2} товаров</div>
                                            : null
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

)
}

export default withRouter(HeaderMiddle2)