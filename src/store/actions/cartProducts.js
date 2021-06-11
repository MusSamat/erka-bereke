import GetData from "../../service/GetData";
import {FETCH_CART_PRODUCT, GET_SUM_OF_CART, RESET_CART} from "./actionTypes";
import {getProductsFromWishlist} from "./wishlistProducts";

export const getProductsFromCart = () => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const userId = localStorage.getItem('userId')
    new GetData().getDataWithToken('/views/carts/' + userId, token).then(res => {
        dispatch({
            type: FETCH_CART_PRODUCT,
            cartProd: res
        })
    })
}

export const addProductToCart = (id, q ) => (dispatch) =>  {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
        const cartProd = new FormData()
        cartProd.append("product", id)
        cartProd.append("quantity",q)
        new GetData().setDataPro(token,'/views/cart-item/', cartProd).then(() => {
            dispatch(getProductsFromCart())
        })

    }
}

export const deleteProductFromCart = (id) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
        const wishlistProd = new FormData()
        wishlistProd.append("product", id)
        new GetData().setDataPro(token, '/views/destroy-cart/', wishlistProd).then(() => {
            dispatch(getProductsFromWishlist())
        })
    }
}

export const resetCart = () => (dispatch) => {
    dispatch({
        type: RESET_CART,
    })
}

