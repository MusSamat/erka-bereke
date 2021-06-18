import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {addProductToWishlist} from "../../store/actions/wishlistProducts";
import {toast} from "react-toastify";
import {addProductToCart} from "../../store/actions/cartProducts";
import {getProducts} from "../../store/actions/product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel2 = () => {
    const {t, i18n} = useTranslation();
    const products = useSelector(state => state.product.products.filter((item, index) => {
        if (item.percent > 0) {
            return item
        }
    }))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    const wishlistProductsP = useSelector(state => {
        return state.wishlistProd
    })

    const checkWishlist = (id) => {
        let c = 0
        wishlistProductsP?.items?.map((item, i) => {
            if (item.product.id === id) {
                c = 1
            }
        })
        return c
    }

    const checkCart = (id) => {
        let c = 0
        cartProductsP?.items?.map((item) => {
            if (item.product.id === id) {
                c = 1
            }
        })
        return c
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='container' style={{paddingTop: 40,
        }}>
            <div style={{borderBottom: "1px solid #ebebeb",
                marginBottom: 30
            }} className='CatBanner'>
                <h2 className='title'>Товары со скидкой </h2>

                <a href="#"> <span>Посмотреть ещё</span> <i className='icon-angle-right'></i> </a>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}

                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map((prod,i) => {
                        return (
                            <div className="product " key={i}
                                style={{border: "1px solid rgb(235, 235, 235)",
                                    margin: 7,
                                    borderRadius: 8
                                }}
                            >
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
                                            }} className="btn-product-icon btn-wishlist "
                                                                title={t("Wishlist.AddToWishlist")}
                                            >
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
                                                }} className="btn-product " title={t("Cart.AddToCart")}><img
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

                        )
                    })

                }
            </Carousel>
        </div>
    )
}

export default Carousel2