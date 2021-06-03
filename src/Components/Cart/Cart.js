import React, {useEffect} from "react";
import NavBanner from "../Nav/NavBanner";
import Nav from "../Nav/Nav";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {sumOfCartProd} from "../../store/actions/sumOfCart";

const Cart = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const cartProductsPage= useSelector(state => state.cartProd.cartProd)
    // const sumOfCart = useSelector(state => state.sumOfCart.sumOfCart)

    useEffect(() => {
    }, [])

    const title = t("Cart.CartPage.title")

    const cart = {
        item: title
    }

    return (
        <div>
            <NavBanner
            />
            <Nav
                item={t("Cart.CartPage.title")}
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
                                        cartProductsPage?.cartProductsPage.items.map((item, i) => (

                                            <tr key = {i}>
                                                {/*{dispatch(sumOfCartProd(item.product.price  * item.quantity))}*/}
                                                <td className="product-col">
                                                    {dispatch(sumOfCartProd(item.product.price  * item.quantity))}
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <a href="#">
                                                                <img src={item.product.image} alt={item.product.title}/>
                                                            </a>
                                                        </figure>

                                                        <h3 className="product-title">
                                                            <NavLink  to = {{
                                                                pathname: '/product/' + item.product.id,
                                                                id: item.product.id
                                                            }}>{item.product.title}</NavLink>
                                                        </h3>
                                                    </div>
                                                </td>
                                                <td className="price-col">{item.product.price}</td>
                                                <td className="quantity-col">
                                                    <div className="cart-product-quantity">
                                                        <input type="number" className="form-control" value="1" min="1" max="10"
                                                               step="1" data-decimals="0" required/>
                                                    </div>
                                                </td>
                                                <td className="total-col">{item.product.price  * item.quantity}</td>
                                                <td className="remove-col">
                                                    <button className="btn-remove"><i className="icon-close"></i></button>
                                                </td>
                                            </tr>
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


                                    <a href="#" className="btn btn-outline-dark-2"><span style={{fontSize: 20}}>{t("Cart.CartPage.Refresh")}</span><i
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
                                            <td>120$</td>
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
                                                    <label className="custom-control-label" htmlFor="free-shipping">{t("Cart.CartPage.Standart")}</label>
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
                                            <td>120$</td>
                                        </tr>

                                        </tbody>
                                    </table>


                                    <a href="checkout.html" className="btn btn-outline-primary-2 btn-order btn-block">{t("Cart.CartPage.Cash")}</a>
                                </div>


                                <NavLink to="/" className="btn btn-outline-dark-2 btn-block mb-3"><span>{t("Cart.CartPage.Main")}</span><i
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