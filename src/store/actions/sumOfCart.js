import {GET_SUM_OF_CART} from "./actionTypes";

export const sumOfCartProd = (sum) => (dispatch) => {
   dispatch({
           type: GET_SUM_OF_CART,
           value: sum
   })
}