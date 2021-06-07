import {FETCH_CART_PRODUCT} from "../actions/actionTypes";

const initsialState = {
    cartProd: null
}

export default function  cartProductsReducer(state = initsialState, action){
    switch (action.type){
        case FETCH_CART_PRODUCT:
            return action.cartProd
        default:
            return state
    }
}
