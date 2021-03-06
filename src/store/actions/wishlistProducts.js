import {FETCH_WISHLIST_PRODUCT, RESET_WISHLIST} from "./actionTypes";
import GetData from "../../service/GetData";
import {toast} from "react-toastify";
import {setloading} from "./laod_action";


export const getProductsFromWishlist = () => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const userId = localStorage.getItem('userId')
    dispatch(setloading(true))
    new GetData().getDataWithToken('/wishlist/' + userId , token).then(res => {
        dispatch(setloading(false))
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
        dispatch(setloading(true))
        new GetData().setDataPro(token,'/wishlist-item/', wishlistProd).then(() => {
            dispatch(setloading(false))
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
        dispatch(setloading(true))
        new GetData().setDataPro(token, '/destroy-wishlist/', wishlistProd).then(() => {
            dispatch(setloading(false))
            dispatch(getProductsFromWishlist())
        })
    }
}

