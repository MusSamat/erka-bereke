import {GET_SUM_OF_CART, RESET_SUM_OF_CART_PRODUCTS} from "./actionTypes";
import {useSelector} from "react-redux";

export const getSumOfProducts = () => (dispatch) => {
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    let sum = 0
    cartProductsP?.items?.map((item, i) => {
    if(item.product.available){
        item.product.percent > 0 ? sum = sum + (item.product.price - item.product.price * item.product.percent/ 100)*item.quantity  :
            sum =  sum + item.product.price * item.quantity
    }})
    dispatch({
        type: GET_SUM_OF_CART,
        sumOfProducts: sum.toFixed(2)
    })
}

export const resetSumOfCartProducts = () => (dispatch) => {
    dispatch({
        type: RESET_SUM_OF_CART_PRODUCTS
    })
}