import {FETCH_WISHLIST_PRODUCT} from "../actions/actionTypes";

const initsialState = {
    wishlistProd: null
}

export default function  cartProductsReducer(state = initsialState, action){
    switch (action.type){
        case FETCH_WISHLIST_PRODUCT:
            return action.wishlistProd
        default:
            return state
    }
}
