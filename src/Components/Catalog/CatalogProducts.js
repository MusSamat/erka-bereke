import React, {useEffect} from "react";
import $ from "jquery"
import './Catalog.css'
import GetData from "../../service/GetData";
import Toolbox from "./Toolbox";
import CatCarousel from "./CatCarousel";
import {useDispatch, useSelector} from "react-redux";
import {getCartProducts, getProducts} from "../../store/actions/product";
import {NavLink} from "react-router-dom";
import {addProductToCart, getProductsFromCart} from "../../store/actions/cartProducts";
import {addProductToWishlist, getProductsFromWishlist} from "../../store/actions/wishlistProducts";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";



const CatalogProducts = (props) => {

    const {t, i18n} = useTranslation();
    const id = props.id
    const c = props.sizeOfProd
    console.log(props.id)
    const categoryTitle = useSelector(state => state.category.category.filter( item => {
        if(item.id === id){
            return item.title
        }
    }))
    const products = useSelector(state => state.product.products.filter((item, index) => {
        if(item.category_id === id) {
            return item
        }
    }))
    const dispatch = useDispatch()
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    const wishlistProductsP =  useSelector(state => {
        return state.wishlistProd
    })

    const checkWishlist = (id) => {
        let  c = 0
        wishlistProductsP?.items?.map((item, i) => {
            if(item.product.id === id){
                c = 1
            }
        })
        return c
    }

    const checkCart = (id) => {
        let c = 0
        cartProductsP?.items?.map((item) => {
            if(item.product.id === id){
                c = 1
            }
        })
        return c
    }

    useEffect(() => {
        dispatch( getProducts())
    },[dispatch])



    const addToCartAnimation = () => {
        const cart = $('.dropdown-cart-products');
        const imgtodrag = $(this).parent('.item').find("img").eq(0);
        if (imgtodrag) {
            const imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    }


    return (
        <div className="col-lg-9 col-xl-4-5col">
            {/*<CatalogCarousel/>*/}
            <CatCarousel/>
            <Toolbox
                id={id}
                sizeOfProd={c}
            />
            <div className="cat-blocks-container">
                <div className="row">


                    {
                        products.map((prod, i) => (

                            <div className="col-6 col-md-4 col-lg-3" key={i}>
                                <div className="product BorderPro">
                                    <figure className="product-media">
                                           <NavLink  to={{
                                               pathname: "/product/" + prod.id,
                                               id: prod.id
                                           }}
                                                     className="img-img"
                                           >
                                               <img className="d-block w-100 "  src={prod.image} alt={prod.title}/>
                                           </NavLink>

                                        <div className="product-action-vertical">
                                            {console.log(checkWishlist(prod.id))}
                                            {
                                                checkWishlist(prod.id) ?  <button onClick={() => dispatch(addProductToWishlist(prod.id))} className="btn-product-icon btn-wishlist "
                                                                                  title={t("Wishlist.CheckWishlist")}
                                                                                  style={{backgroundColor: "#3399ff",
                                                                                  color: "white"}} disabled>
                                                </button> : <button onClick={() => dispatch(addProductToWishlist(prod.id))} className="btn-product-icon btn-wishlist ">
                                                </button>
                                            }


                                            {/*<a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                                            {/*   title="Чоңойтуу"><span>Чоңойтуу</span></a>*/}
                                        </div>

                                        <div className="product-action">
                                            {
                                                checkCart(prod.id) ?
                                                    <button className="btn-product "
                                                            title={t("Cart.CheckCart")}
                                                    disabled style={{backgroundColor:"#3399ff" }}
                                                    ><img
                                                    src="/assets/svg_logo/addcar.png" alt={prod.title}/></button>
                                                    :
                                                    <button onClick={() => {
                                                        dispatch(addProductToCart(prod.id, 2))
                                                        toast.success("Добавлено в карт")
                                                    }} className="btn-product " title="Корзинкага кошуу"><img
                                                        src="/assets/svg_logo/addcar.png" alt=""/></button>
                                            }

                                        </div>
                                    </figure>


                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#" style={{fontSize: 17, fontWeight: "bold"}}>{prod.subcategory_title}</a>
                                        </div>

                                        <div className="product-price" style={{display: "flex",  justifyContent: "flex-end"}}>
                                            <span className="new-price"  style={{fontSize: 20}}>{prod.price}</span>
                                            {/*<span className="old-price" style={{textDecorationLine: "line-through", color: "black"}}> $290.00</span>*/}
                                        </div>

                                        <h3 className="product-title" style={{fontSize: 18, paddingBottom: 10, fontWeight: "bold", fontFamily: 'Lato, san-serif'}}><NavLink
                                            to={{
                                                pathname: "/product/" + prod.id,
                                                id: prod.id
                                            }}

                                        >{prod.title}</NavLink></h3>

                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </div>

    )
}

export default CatalogProducts