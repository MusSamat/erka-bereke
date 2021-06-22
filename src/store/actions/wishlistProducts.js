import {FETCH_WISHLIST_PRODUCT, RESET_WISHLIST} from "./actionTypes";
import GetData from "../../service/GetData";
import {toast} from "react-toastify";


export const getProductsFromWishlist = () => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const userId = localStorage.getItem('userId')
    new GetData().getDataWithToken('/wishlist/' + userId , token).then(res => {
        dispatch({
            type: FETCH_WISHLIST_PRODUCT,
            wishlistProd: res
        })
    })
}

export const resetWishlist = () => (dispatch) => {
    dispatch({
        type: RESET_WISHLIST,
    })
}



export const addProductToWishlist = (id) => (dispatch) =>  {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
        const wishlistProd = new FormData()
        wishlistProd.append("product", id)
        new GetData().setDataPro(token,'/wishlist-item/', wishlistProd).then(() => {
            toast.success("Добавлено в избранное")
            dispatch(getProductsFromWishlist())
        })

    }
    else{
        toast.error("You must sign in or log in")
    }
}

export const deleteProductFromWishlist = (id) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const userId = localStorage.getItem('userId')
    if(token){
        const wishlistProd = new FormData()
        wishlistProd.append("product", id)
        new GetData().setDataPro(token, '/destroy-wishlist/', wishlistProd).then(() => {
            dispatch(getProductsFromWishlist())
        })
    }
}

