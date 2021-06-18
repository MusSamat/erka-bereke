import React, {useEffect, useState} from "react";
import "./Cart.css"
import NavBanner from "../Nav/NavBanner";
import Nav from "../Nav/Nav";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {addProductToCart, deleteProductFromCart, getProductsFromCart} from "../../store/actions/cartProducts";
import {getSumOfProducts} from "../../store/actions/sumOfCartProducts";


const Cart = () => {
    const isLogin = useSelector(state => state.isLogin.isLogin)
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })
    dispatch(getSumOfProducts())
    const sum = useSelector(state => state.sumOfCart.sumOfProducts)


    // const sumOfPrice = () => {
    //     let s = 0
    //     dispatch(getProductsFromCart())
    //     cartProductsP?.items?.map((item, i) => {
    //          s =  s + item.product.price * item.quantity
    //     })
    // }

    useEffect(() => {
    }, [])

    const title = t("Cart.CartPage.title")


    return (
        <div>
            <NavBanner
            />
            <Nav
                name={title}
            />

            <div className="page-content">
                <div className="cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <table className="table table-cart table-mobile">
                                    <thead>
                                    <tr>
                                        <th>{t("Cart.CartPage.Products")}</th>
                                        <th>{t("Cart.CartPage.Price")}</th>
                                        <th>{t("Cart.CartPage.Quantity")}</th>
                                        <th>{t("Cart.CartPage.All")}</th>
                                        <th></th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    {
                                        cartProductsP?.items?.map((item, i) => (
                                            // item.product?.available ?
                                                <tr key={i}>
                                                    <td className="product-col">
                                                        <div className="product">
                                                            <figure className="product-media">
                                                                <NavLink    to={{
                                                                    pathname: "/product/" + item.product.id,
                                                                    id: item.product.id
                                                                }} >
                                                                    <img src={item.product.image}
                                                                         alt={item.product.title}/>
                                                                </NavLink>
                                                            </figure>

                                                            <h3 className="product-title">
                                                                <NavLink to={{
                                                                    pathname: '/product/' + item.product.id,
                                                                    id: item.product.id
                                                                }}>{item.product.title}</NavLink>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    {
                                                        item.product.percent > 0 ?
                                                            <td className="price-col">{item.product.price -
                                                            (item.product.price * item.product.percent /100)}
                                                                <span className="old-price" style={{
                                                                    textDecorationLine: "line-through",
                                                                    color: "#ccbc30",
                                                                    paddingLeft: "1rem"
                                                                }}> {item.product.price}</span>
                                                            </td>
                                                            :
                                                            <td className="price-col">{item.product.price}</td>
                                                    }
                                                    <td>
                                                        <div className="counter">
                                                            <button className="down"
                                                                    onClick={() => {
                                                                        if (isLogin) {
                                                                            dispatch(addProductToCart(item.product.id, (item.quantity - 1)));
                                                                            dispatch(getProductsFromCart())
                                                                        }
                                                                    }}>-
                                                            </button>
                                                            <input type="text" value={item.quantity}/>
                                                            <button className="up"
                                                                    onClick={() => {
                                                                        if (isLogin) {
                                                                            dispatch(addProductToCart(item.product.id, (item.quantity + 1)));
                                                                            dispatch(getProductsFromCart())
                                                                        }
                                                                    }}>+
                                                            </button>
                                                        </div>
                                                    </td>
                                                    {
                                                        item.product.percent > 0 ?
                                                            <td className="total-col">{(item.product.price -
                                                                (item.product.price * item.product.percent /100)) * item.quantity}
                                                            </td>
                                                            :
                                                            <td className="total-col">{item.product.price * item.quantity}</td>
                                                    }

                                                    <td className="remove-col">
                                                        <button onClick={() => {
                                                            if (isLogin) {
                                                                dispatch(deleteProductFromCart(item.product.id));
                                                                dispatch(getProductsFromCart())
                                                            }
                                                        }} className="btn-remove"><i className="icon-close"></i>
                                                        </button>
                                                    </td>

                                                </tr>
                                                // : null

                                        ))
                                    }
                                    </tbody>
                                </table>

                                <div className="cart-bottom">
                                    <div className="cart-discount">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="form-control" required
                                                       placeholder="coupon code"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-primary-2" type="submit"><i
                                                        className="icon-long-arrow-right"></i></button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>


                                    <a href="#" className="btn btn-outline-dark-2"><span
                                        style={{fontSize: 20}}>{t("Cart.CartPage.Refresh")}</span><i
                                        className="icon-refresh"></i></a>
                                </div>
                            </div>
                            <aside className="col-lg-3">
                                <div className="summary summary-cart">
                                    <h3 className="summary-title" style={{fontSize: 20}}>{t("Cart.CartPage.title")}</h3>

                                    <table className="table table-summary">
                                        <tbody>
                                        <tr className="summary-subtotal">
                                            <td>{t("Cart.CartPage.All")}:</td>
                                            <td>{sum}</td>
                                        </tr>
                                        <tr className="summary-shipping">
                                            <td>{t("Cart.CartPage.Delivery")}:</td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr className="summary-shipping-row">
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="free-shipping" name="shipping"
                                                           className="custom-control-input"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="free-shipping">{t("Cart.CartPage.Standart")}</label>
                                                </div>
                                            </td>
                                            <td>$120.00</td>
                                        </tr>


                                        <tr className="summary-shipping-row">
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="standart-shipping" name="shipping"
                                                           className="custom-control-input"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="standart-shipping">{t("Cart.CartPage.Express")}:</label>
                                                </div>

                                            </td>
                                            <td>$10.00</td>
                                        </tr>
                                        <tr className="summary-total">
                                            <td>{t("Cart.CartPage.All")}:</td>
                                            <td>{sum}</td>
                                        </tr>

                                        </tbody>
                                    </table>


                                    <NavLink to="/order"
                                             className="btn btn-outline-primary-2 btn-order btn-block">{t("Cart.CartPage.Cash")}</NavLink>
                                </div>


                                <NavLink to="/"
                                         className="btn btn-outline-dark-2 btn-block mb-3"><span>{t("Cart.CartPage.Main")}</span><i
                                    className="icon-refresh"></i></NavLink>
                            </aside>

                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Cart