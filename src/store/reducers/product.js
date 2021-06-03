import {FETCH_PRODUCT} from "../actions/actionTypes";

const initsialState = {
    products: []
}

export default function productReducer(state = initsialState, action) {
    switch (action.type){
        case FETCH_PRODUCT:
            return {
                ...state, products: action.products
            }
        default:
            return state
    }
}