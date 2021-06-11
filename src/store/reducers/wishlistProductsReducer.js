import {FETCH_WISHLIST_PRODUCT, RESET_WISHLIST} from "../actions/actionTypes";

const initsialState = {
    wishlistProd: null
}

export default function  cartProductsReducer(state = initsialState, action){
    switch (action.type){
        case FETCH_WISHLIST_PRODUCT:
            return action.wishlistProd
        case RESET_WISHLIST:
            return initsialState
        default:
            return state
    }
}
