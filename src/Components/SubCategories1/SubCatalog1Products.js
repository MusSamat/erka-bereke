import React, {useEffect} from "react";
import '../Catalog/Catalog.css'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {addProductToCart, getProductsFromCart} from "../../store/actions/cartProducts";
import {addProductToWishlist, getProductsFromWishlist} from "../../store/actions/wishlistProducts";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import CatCarousel from "../Catalog/CatCarousel";
import Toolbox from "../Catalog/Toolbox";

const SubCatalog1Products = (props) => {
    const {t, i18n} = useTranslation();
    const id = parseInt(props.props.props.match.params.id)
    const c = props.sizeOfProd

    const products = useSelector(state => state.product.products.filter((item, index) => {
        if(item.subcategory1_id === id) {
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
        // dispatch( getProducts())
    },[dispatch])



    return (
        <div className="col-lg-9 col-xl-4-5col">
            {/*<CatalogCarousel/>*/}
            <CatCarousel
            />
            <Toolbox
                id={id}
                sizeOfProd={c}
            />
            <div className="cat-blocks-container">
                <div className="row">



                    {
                        products.map((prod, i) => (

                            <div className="col-6 col-md-4 col-lg-3" key={i}>
                                {/*{prod.available ? document.getElementById("ptr").classList.remove("availableProduct"): document.getElementById("ptr").classList.add("availableProduct")}*/}
                                <div className="product BorderPro"  >


                                    <figure className="product-media" id="ptr" >
                                        {
                                            prod.percent > 0  ? <span className="product-label label-sale">- { prod.percent} %</span>
                                                : null
                                        }
                                        {
                                            prod.available ?  null : <span className="product-label label-top">Нет в наличии</span>
                                        }
                                        <NavLink  to={{
                                            pathname: "/product/" + prod.id,
                                            id: prod.id
                                        }}
                                                  className="img-img"
                                        >
                                            <img className="d-block w-100 "  src={prod.image} alt={prod.title}/>
                                        </NavLink>

                                        <div className="product-action-vertical">
                                            {
                                                checkWishlist(prod.id) ?  <button  className="btn-product-icon btn-wishlist "
                                                                                   title={t("Wishlist.CheckWishlist")}
                                                                                   style={{backgroundColor: "#3399ff",
                                                                                       color: "white"}} disabled>
                                                </button> : <button onClick={() => {
                                                    dispatch(addProductToWishlist(prod.id))
                                                    toast.success("Добавлено в избранное")
                                                }} className="btn-product-icon btn-wishlist ">
                                                </button>
                                            }


                                            {/*<a href="popup/quickView.html" className="btn-product-icon btn-quickview"*/}
                                            {/*   title="Чоңойтуу"><span>Чоңойтуу</span></a>*/}
                                        </div>

                                        <div className="product-action">
                                            {
                                                checkCart(prod.id)  || !prod.available ?
                                                    <button className="btn-product "
                                                            title={t("Cart.CheckCart")}
                                                            disabled style={{backgroundColor:"#3399ff" }}
                                                    ><img
                                                        src="/assets/svg_logo/addcar.png" alt={prod.title}/></button>
                                                    :
                                                    <button onClick={() => {
                                                        dispatch(addProductToCart(prod.id, 1))
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
                                            {prod.percent > 0 ? <><span className="new-price"  style={{fontSize: 20}}>{prod.price - prod.price * (prod.percent / 100)}</span>
                                                    <span className="old-price" style={{textDecorationLine: "line-through", color: "black"}}> {prod.price}</span></>:
                                                <span className="new-price"  style={{fontSize: 20}}>{prod.price}</span>
                                            }
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

export default SubCatalog1Products