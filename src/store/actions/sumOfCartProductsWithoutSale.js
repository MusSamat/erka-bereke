import {GET_SUM_OF_CART_PRODUCTS_WITHOUT_SALE, RESET_PROD} from "./actionTypes";
import {useSelector} from "react-redux";

export const getSumOfProductsWithoutSale = () => (dispatch) => {
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })

    let sum = 0
    cartProductsP?.items?.map((item, i) => {
        if(item.product.available){
                sum =  sum + item.product.price * item.quantity
        }})
    dispatch({
        type: GET_SUM_OF_CART_PRODUCTS_WITHOUT_SALE,
        sumProd: sum.toFixed(2)
    })
}

export const resetSumOfCartProducts = () => (dispatch) => {
    dispatch({
        type: RESET_PROD
    })
}