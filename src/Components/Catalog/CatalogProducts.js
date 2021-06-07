import React, {useEffect} from "react";
// import CatalogCarousel from "./CatalogCarousel";
import './Catalog.css'
import GetData from "../../service/GetData";
import Toolbox from "./Toolbox";
import CatCarousel from "./CatCarousel";
import {useDispatch, useSelector} from "react-redux";
import {getCartProducts, getProducts} from "../../store/actions/product";
import {NavLink} from "react-router-dom";
import {getProductsFromCart} from "../../store/actions/cartProducts";



const CatalogProducts = (props) => {



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

    const addProductToCart = (id, q ) => {
        const token = JSON.parse(localStorage.getItem('token'))
        const userId = localStorage.getItem('userId')
        if(token){
            const cartProd = new FormData()
            cartProd.append("product", id)
            cartProd.append("quantity",q)
            new GetData().setDataPro(token,'/views/cart-item/', cartProd).then(() => {
                dispatch(getProductsFromCart(userId))
            })

        }
    }


    useEffect(() => {
      dispatch( getProducts())
    },[dispatch])






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
                                        >
                                            <img className="d-block w-100 "  src={prod.image} alt={i + 'slide'}/>
                                        </NavLink>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist "></a>
                                            <a href="popup/quickView.html" className="btn-product-icon btn-quickview"
                                               title="Чоңойтуу"><span>Чоңойтуу</span></a>
                                        </div>

                                        <div className="product-action">
                                            <button onClick={() => addProductToCart(prod.id, 2)} className="btn-product " title="Корзинкага кошуу"><img
                                                src="/assets/svg_logo/addcar.png" alt=""/><span></span></button>
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