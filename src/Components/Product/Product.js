import React, {useEffect} from "react";
import Nav from "../Nav/Nav";
import './ProductDet.css'
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart, getProductsFromCart} from "../../store/actions/cartProducts";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {addProductToWishlist} from "../../store/actions/wishlistProducts";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {NavLink} from "react-router-dom";
import {setSaleValue} from "../../store/actions/sale";
import {resetBrands} from "../../store/actions/brands_action";
import {mobile_menu} from "../../service/accessFunctions";
import {add} from "../../service/cartLocalStorage/storageFunctions";


const Product = (props) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const id = parseInt(props.match.params.id)
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const productById = useSelector(state => state.product.products.filter(item => {

        if (item.id === id) {
            return item
        }
    }))


    useEffect(() => {
        window.scrollTo(0,0)
        mobile_menu()
        let loadScript = function (src) {
            let tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.getElementsByTagName('body')[0].appendChild(tag);
        }
        loadScript('/assets/js/jquery.elevateZoom.min.js')
        loadScript('/assets/js/bootstrap-input-spinner.js')
        return () => {
            const elements = document.getElementsByClassName('zoomContainer')
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }
    }, [])

    const product = {
        categoryName: productById.category_title,
        subCategory: productById.subcategory_title

    }
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    const wishlistProductsP = useSelector(state => {
        return state.wishlistProd
    })

    const checkCart = (id) => {
        let c = 0
        cartProductsP?.items?.map((item) => {
            if (item.product.id === id) {
                c = 1
            }
        })
        return c
    }

    const checkWishlist = (id) => {
        let c = 0
        wishlistProductsP?.items?.map((item, i) => {
            if (item.product.id === id) {
                c = 1
            }
        })
        return c
    }

    return (
        <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                <div className="container d-flex align-items-center">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    {
                                        productById.map((product, i) => (
                                            <ol className="breadcrumb" key={i}>
                                                <li className="breadcrumb-item"><NavLink to="/"
                                                                                         onClick={() =>  { dispatch(setSaleValue(false));
                                                                                             dispatch(resetBrands())
                                                                                         }}
                                                                                         style={{
                                                                                             fontSize: 16,
                                                                                             fontWeight: "bold"
                                                                                         }}>{t("Main.Main")}</NavLink>
                                                </li>
                                                <li className="breadcrumb-item"><NavLink to={{
                                                    pathname: "/categories/" + product.category_id,
                                                }}           onClick={() =>  { dispatch(setSaleValue(false));
                                                    dispatch(resetBrands())
                                                }}
                                                                                         style={{
                                                                                             fontSize: 16,
                                                                                             fontWeight: "bold"
                                                                                         }}>{product.category_title}</NavLink>
                                                </li>
                                                <li className="breadcrumb-item"><NavLink to={{
                                                    pathname: "/subcategories/" + product.subcategory_id
                                                }}  onClick={() =>  { dispatch(setSaleValue(false));
                                                    dispatch(resetBrands())
                                                }}
                                                                                         style={{
                                                                                             fontSize: 16,
                                                                                             fontWeight: "bold"
                                                                                         }}>{product.subcategory_title}</NavLink>
                                                </li>
                                                <li className="breadcrumb-item"><NavLink to={{
                                                    pathname: "/subcategories1/" + product.subcategory1_id
                                                }}  onClick={() =>  { dispatch(setSaleValue(false));
                                                    dispatch(resetBrands())
                                                }}
                                                                                         style={{
                                                                                             fontSize: 16,
                                                                                             fontWeight: "bold"
                                                                                         }}>{product.subcategory1_title}</NavLink>
                                                </li>
                                                <li className="breadcrumb-item"><NavLink
                                                    to={{
                                                        pathname: "/subcategories2/" + product.subcategory2

                                                    }}
                                                    onClick={() =>  { dispatch(setSaleValue(false));
                                                        dispatch(resetBrands())
                                                    }}
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: "bold",
                                                        color: "#ccbc30"
                                                    }}>{product.subcategory2_title}</NavLink>
                                                </li>
                                            </ol>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </nav>


            <div className="page-content">
                <div className="container">
                    <div className="row">
                        {
                            productById.map((item, i) => (
                                <>
                                    <div className="col-lg-12" >
                                        <div className="product-details-top">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="product-gallery">
                                                        <figure className="product-main-image">
                                                            {
                                                                item.percent > 0 ? <span
                                                                        className="product-label label-sale">- {item.percent} %</span>
                                                                    : null
                                                            }
                                                            {
                                                                item.available ? null :
                                                                    <span className="product-label label-top"
                                                                          style={{
                                                                              fontSize: 20
                                                                          }}
                                                                    >?????? ?? ??????????????</span>
                                                            }
                                                            <img id="product-zoom"
                                                                 src={item.image}
                                                                // data-zoom-image={item.image}
                                                                 alt={item?.title}/>

                                                            <a href="#" id="btn-product-gallery"
                                                               className="btn-product-gallery">
                                                                <i className="icon-arrows"></i>
                                                            </a>
                                                        </figure>


                                                        <div id="product-zoom-gallery"
                                                             className="product-image-gallery">
                                                            <a className="product-gallery-item active" href="#"
                                                               data-image={item?.image}

                                                            >
                                                                <img src={item?.image}
                                                                     alt={item?.title}
                                                                />
                                                            </a>

                                                            {item?.image1 ?
                                                                <a className="product-gallery-item" href="#"
                                                                   data-image={item?.image1}
                                                                >
                                                                    <img src={item?.image1}
                                                                         alt={item?.title}/>
                                                                </a>
                                                                :
                                                                null
                                                            }

                                                            {item?.image2 ?
                                                                <a className="product-gallery-item" href="#"
                                                                   data-image={item?.image2}
                                                                >
                                                                    <img src={item?.image2}
                                                                         alt={item?.title}/>
                                                                </a>
                                                                :
                                                                null
                                                            }

                                                            {item?.image3 ?
                                                                <a className="product-gallery-item" href="#"
                                                                   data-image={item?.image3}
                                                                >
                                                                    <img src={item?.image3}
                                                                         alt={item?.title}/>
                                                                </a>
                                                                :
                                                                null
                                                            }
                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="col-md-5 offset-1 ">

                                                    <div className='product_Details'>
                                                        <div className='prod_name'>
                                                            <h3>{item.title}</h3>
                                                        <NavLink
                                                            to={{
                                                                pathname: "/brands/"+item.marka,
                                                                title: item.marka_title
                                                            }}
                                                        >
                                                            <h6
                                                                style={{
                                                                    color: "#2e62ee"
                                                                }}
                                                            >{item.marka_title}</h6>

                                                        </NavLink>

                                                            <div className='som'>
                                                                {item.percent > 0 ? <>
                                                                    <span style={{
                                                                        textDecorationLine: "line-through",
                                                                        color: "black",
                                                                        fontSize: 20
                                                                    }}> {item.price}</span>
                                                                        <span>{(item.price - item.price * (item.percent / 100)).toFixed(2)}</span>
                                                                    </> :
                                                                    <span>{item.price}</span>
                                                                }

                                                                <img src="/assets/svg_logo/som.svg" alt="som_icon"/>
                                                            </div>
                                                        </div>

                                                        <hr/>

                                                        <div className='prod_bottom'>
                                                            <p>??????????</p>
                                                            <div className='prod_det_buttons'>
                                                                {
                                                                    token ?

                                                                        (checkCart(item.id) || !item.available ?
                                                                            <button className="btn-product "
                                                                                    title={t("Cart.CheckCart")}
                                                                                    disabled style={{backgroundColor: "#3399ff"}}
                                                                            ><img
                                                                                src="/assets/svg_logo/addcar.png" alt={item.title}/></button>
                                                                            :
                                                                            <button onClick={() => {
                                                                                dispatch(addProductToCart(item.id, 1))
                                                                            }} className="btn-product " title={t("Cart.AddToCart")}><img
                                                                                src="/assets/svg_logo/addcar.png" alt=""/></button>)
                                                                        :
                                                                        (!item.available ?
                                                                            <button className="btn-product "
                                                                                    title={t("Cart.CheckCart")}
                                                                                    disabled style={{backgroundColor: "#3399ff"}}
                                                                            ><img
                                                                                src="/assets/svg_logo/addcar.png" alt={item.title}/></button>
                                                                            :
                                                                            <button onClick={() => {
                                                                                add(item.id, item.image, item.title, item.price, item.percent);
                                                                                dispatch(getProductsFromCart())
                                                                            }} className="btn-product " title={t("Cart.AddToCart")}><img
                                                                                src="/assets/svg_logo/addcar.png" alt=""/></button>)
                                                                }

                                                                {
                                                                    checkWishlist(item.id) ?
                                                                        <button className='wisH' disabled
                                                                                title={t("Wishlist.CheckWishlist")}
                                                                        ><i className='icon-heart'
                                                                            style={{??olor: "rgb(88,88,88)"}}
                                                                        ></i></button> :
                                                                        <button className='wisH'
                                                                                onClick={() => {
                                                                                    dispatch(addProductToWishlist(item.id))
                                                                                }}
                                                                        ><i className='icon-heart'></i></button>
                                                                }
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div

                                        style={{
                                            border: "1px solid rgb(88,88,88)",
                                            borderRadius: "8px",
                                            minHeight: "300px",
                                            width: "100%"
                                        }}
                                    >
                                        <Tabs>
                                            <TabList style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "start",
                                                gap: "2rem",
                                                fontSize: "1.7rem",
                                                fontWeight: "bold",
                                                paddingLeft: "2rem"
                                            }}
                                            >

                                                <Tab
                                                    selectedClassName="is-selected">
                                                    {t("Product.Description")}
                                                </Tab>
                                                <Tab selectedClassName="is-selected">
                                                    {t("Product.Information")}
                                                </Tab>
                                            </TabList>

                                            <TabPanel style={{width: "100%"}}>
                                                <div className="tabPanel">
                                                    <div dangerouslySetInnerHTML={{__html: item.description}}/>
                                                </div>

                                            </TabPanel>
                                            <TabPanel>
                                                <div className="tabPanel">
                                                </div>

                                            </TabPanel>
                                        </Tabs>
                                    </div>

                                </>
                            ))
                        }
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Product