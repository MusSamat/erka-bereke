import {GET_SUM_OF_CART} from "./actionTypes";
import {useSelector} from "react-redux";

export const getSumOfProducts = () => (dispatch) => {
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    let sum = 0
    cartProductsP?.items?.map((item, i) => {
        sum =  sum + item.product.price * item.quantity
    })
    dispatch({
        type: GET_SUM_OF_CART,
        sumOfProducts: sum
    })
}