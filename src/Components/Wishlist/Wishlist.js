import React from "react";
import Nav from "../Nav/Nav";
import NavBanner from "../Nav/NavBanner";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {deleteProductFromWishlist, getProductsFromWishlist} from "../../store/actions/wishlistProducts";
import {addProductToCart, getProductsFromCart} from "../../store/actions/cartProducts";
import {toast} from "react-toastify";

const Wishlist = () => {

    const userId = localStorage.getItem('userId')
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const wishlistProductsP =  useSelector(state => {
        return state.wishlistProd
    })
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    const title = t("Wishlist.WishlistPage.title")

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
        <div>

            <NavBanner/>
            <Nav
                name={title}
            />

            <div className="page-content">
                <div className="container">
                    <table className="table table-wishlist table-mobile">
                        <thead>
                        <tr>
                            <th>{t("Wishlist.WishlistPage.Products")}</th>
                            <th>{t("Wishlist.WishlistPage.Price")}</th>
                            <th>{t("Wishlist.WishlistPage.Storage")}</th>
                            <th>{t("Wishlist.WishlistPage.AddToCart")}</th>
                            <th>{t("Wishlist.WishlistPage.Delete")}</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            wishlistProductsP?.items?.map((item, i) => (
                                <tr>
                                    <td className="product-col">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={item.product.image} alt="Product image"/>
                                                </a>
                                            </figure>

                                            <h3 className="product-title">
                                                <a href="#">{item.product.title}</a>
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
                                    <td className="stock-col">
                                        {
                                            item.product?.available ? <span className="in-stock">{t("Wishlist.WishlistPage.HaveInStorage")}</span>:
                                                <span className="out-of-stock">{t("Wishlist.WishlistPage.HaveNotInStorage")}</span>
                                        }

                                    </td>
                                    <td className="action-col">
                                        { checkCart(item.product.id) || !item.product.available ?
                                            <button
                                                className="btn btn-block btn-outline-primary-2"
                                                title={t("Cart.CheckCart")}
                                                disabled style={{backgroundColor:"#3399ff" }}>
                                                <img src="/assets/svg_logo/addcar.png"
                                                     alt="add to cart"/>
                                            </button>
                                            :
                                            <button onClick={() => {
                                            dispatch(addProductToCart(item.product.id, 1))
                                            toast.success("Добавлено в карт")
                                        }} className="btn btn-block btn-outline-primary-2">
                                            <img src="/assets/svg_logo/addcar.png" alt="add to cart"/>
                                        </button>
                                        }
                                    </td>
                                    <td className="remove-col">
                                        <button onClick={() => {dispatch(deleteProductFromWishlist(item.product.id)); dispatch(getProductsFromWishlist())}} className="btn-remove"><i className="icon-close"></i></button>
                                    </td>
                                </tr>
                                ))
                        }
                        </tbody>
                    </table>
                    <div className="wishlist-share">
                        <div className="social-icons social-icons-sm mb-2">
                            <label className="social-label">{t("Wishlist.WishlistPage.Sharing")}</label>
                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i
                                className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i
                                className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i
                                className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" title="Youtube" target="_blank"><i
                                className="icon-youtube"></i></a>
                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i
                                className="icon-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}

export default Wishlist