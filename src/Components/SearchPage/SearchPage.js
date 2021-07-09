import React, {useEffect} from "react";
import './searchPage.css'
import NavBanner from "../Nav/NavBanner";
import {NavLink} from "react-router-dom";
import {addProductToCart, deleteProductFromCart, getProductsFromCart} from "../../store/actions/cartProducts";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import Nav from "../Nav/Nav";
import {mobile_menu} from "../../service/accessFunctions";


const SearchPage = (props) => {

    const {t, i18n} = useTranslation();
    const isLogin = useSelector(state => state.isLogin.isLogin)
    const dispatch = useDispatch()
    const title = props.match.params.searchInput
    console.log(title)
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    const searchProdP = useSelector(state => {
        return state.searchProd
    })

    console.log(searchProdP)
    const tf = false

    useEffect( () => {
        window.scrollTo(0,0)
        mobile_menu()
    },[])
    const checkCart = (id) => {
        let c = 0
        cartProductsP?.items?.map((item) => {
            if(item.product.id === id){
                c = 1
            }
        })
        return c
    }
    return (
        <div>
            <NavBanner/>
            <Nav
                name={t("Search.title")}
            />
            <div className="title">
                {t("Search.SearchingBy")} : <span style={{paddingLeft: 30}}>"{title}" </span>
            </div>

            {
                searchProdP?.length > 0 ?
                    <div style={{paddingTop: 40}}>
                        <div className="page-content">
                            <div className="container">
                                <table className="table table-wishlist table-mobile">
                                    <thead>
                                    <tr>
                                        <th>{t("Wishlist.WishlistPage.Products")}</th>
                                        <th>{t("Wishlist.WishlistPage.Price")}</th>
                                        <th>{t("Wishlist.WishlistPage.Storage")}</th>
                                        <th>{t("Wishlist.WishlistPage.AddToCart")}</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        searchProdP?.map((item, i) => (
                                            <tr>
                                                <td className="product-col">
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <a href="#">
                                                                <img src={item.image} alt="Product image"/>
                                                            </a>
                                                        </figure>

                                                        <h3 className="product-title">
                                                            <NavLink
                                                                to={{
                                                                    pathname: "/product/" + item.id,
                                                                    id: item.id
                                                                }}
                                                            >{item.title}</NavLink>
                                                        </h3>
                                                    </div>

                                                </td>
                                                {
                                                    item.percent > 0 ?
                                                        <td className="price-col">{(item.price -
                                                            (item.price * item.percent /100)).toFixed(2)}
                                                            <span className="old-price" style={{
                                                                textDecorationLine: "line-through",
                                                                color: "#ccbc30",
                                                                paddingLeft: "1rem"
                                                            }}> {item.price}</span>
                                                        </td>
                                                        :
                                                        <td className="price-col">{item.price}</td>
                                                }
                                                <td className="stock-col">
                                                    {
                                                        item?.available ? <span className="in-stock">{t("Wishlist.WishlistPage.HaveInStorage")}</span>:
                                                            <span className="out-of-stock">{t("Wishlist.WishlistPage.HaveNotInStorage")}</span>
                                                    }

                                                </td>
                                                <td className="action-col">
                                                    { checkCart(item.id) || !item.available ?
                                                        <button
                                                            className="btn btn-block btn-outline-primary-2"
                                                            title={t("Cart.CheckCart")}
                                                            disabled style={{backgroundColor:"#3399ff" }}>
                                                            <img src="/assets/svg_logo/addcar.png"
                                                                 alt="add to cart"/>
                                                        </button>
                                                        :
                                                        <button onClick={() => {
                                                            dispatch(addProductToCart(item.id, 1))
                                                            toast.success("Добавлено в карт")
                                                        }} className="btn btn-block btn-outline-primary-2">
                                                            <img src="/assets/svg_logo/addcar.png" alt="add to cart"/>
                                                        </button>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="noResult">
                        <div className='imagRes'>
                            <img src="/assets/svg_logo/noResult.png" alt="noResult"/>
                        </div>
                        <div className='noRes'>
                            {t("Search.noResult")}
                        </div>
                    </div>
                    }

        </div>
    )
}

export default SearchPage