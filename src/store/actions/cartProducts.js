import GetData from "../../service/GetData";
import {FETCH_CART_PRODUCT} from "./actionTypes";

export const getProductsFromCart = (id) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"))
    new GetData().getDataWithToken('/views/carts/' +id , token).then(res => {
        dispatch({
            type: FETCH_CART_PRODUCT,
            cartProd: res
        })
    })
}