import GetData from "../../service/GetData";
import {FETCH_CART_PRODUCT, GET_SUM_OF_CART, RESET_CART} from "./actionTypes";
import {getProductsFromWishlist} from "./wishlistProducts";
import {toast} from "react-toastify";
import {setloading} from "./laod_action";
import {CART, init} from "../../service/cartLocalStorage/storageFunctions";

export const getProductsFromCart = () => (dispatch) => {
    init()
    dispatch(setloading(true))
    const token = JSON.parse(localStorage.getItem("token"))
    const userId = localStorage.getItem('userId')
    if(token){
        new GetData().getDataWithToken('/views/carts/' + userId, token).then(res => {
            dispatch(setloading(false))
            dispatch({
                type: FETCH_CART_PRODUCT,
                cartProd: res
            })
        })
    }else{
        dispatch(setloading(false))
        dispatch({
            type: FETCH_CART_PRODUCT,
            cartProd: CART.contents
        })
    }
}

export const addProductToCart = (id, q ) => (dispatch) =>  {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
        const cartProd = new FormData()
        cartProd.append("product", id)
        cartProd.append("quantity",q)
        dispatch(setloading(true))
        new GetData().setDataPro(token,'/views/cart-item/', cartProd).then(() => {
            dispatch(setloading(false))
            toast.success("Добавлено в карт")
            dispatch(getProductsFromCart())
        })

    }else{

    }
}

export const deleteProductFromCart = (id) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
        const wishlistProd = new FormData()
        wishlistProd.append("product", id)
        dispatch(setloading(true))
        new GetData().setDataPro(token, '/views/destroy-cart/', wishlistProd).then(() => {
            dispatch(setloading(false))
            dispatch(getProductsFromWishlist())
        })
    }
}

export const resetCart = () => (dispatch) => {
    dispatch({
        type: RESET_CART,
    })
}

