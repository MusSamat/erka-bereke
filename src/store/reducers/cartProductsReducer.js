import {FETCH_CART_PRODUCT, RESET_CART} from "../actions/actionTypes";

const initsialState = {
    cartProd: []
}

export default function  cartProductsReducer(state = initsialState, action){
    switch (action.type){
        case FETCH_CART_PRODUCT:
            return action.cartProd
        case RESET_CART:
            return initsialState
        default:
            return state
    }
}
