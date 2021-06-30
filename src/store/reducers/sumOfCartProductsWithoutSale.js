import {
    GET_SUM_OF_CART_PRODUCTS_WITHOUT_SALE, RESET_PROD,
} from "../actions/actionTypes";

const initsialState = {
    sumProd: 0
}

export default function sumOfCartProductsWreducer(state = initsialState, action) {
    switch (action.type) {
        case GET_SUM_OF_CART_PRODUCTS_WITHOUT_SALE:
            return {
              sumProd: action.sumProd
            }
        case RESET_PROD:
            return initsialState
        default:
            return state
    }
}