import {GET_SUM_OF_CART, RESET_SUM_OF_CART_PRODUCTS} from "../actions/actionTypes";

const initsialState = {
    sumOfProducts: 0
}

export default function sumOfProductsReducer( state = initsialState, action){
    switch (action.type) {
        case GET_SUM_OF_CART:
            return{
                sumOfProducts: action.sumOfProducts
            }
        case RESET_SUM_OF_CART_PRODUCTS:
            return initsialState
        default:
            return state
    }
}