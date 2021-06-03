import GetData from "../../service/GetData";
import {FETCH_CART_PRODUCT} from "./actionTypes";

export const getProductsFromCart = (token, id) => (dispatch) => {
    new GetData().getDataWithToken('/views/carts/' +id , token).then(res => {
        console.log(res)
        dispatch({
            type: FETCH_CART_PRODUCT,
            cartProd: res
        })
    })
}