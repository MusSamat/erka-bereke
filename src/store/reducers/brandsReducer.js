import {FETCH_BRANDS, RESET_BRANDS} from "../actions/actionTypes";

const initsialState = {
    brands: []
}

export default function brandsReducer( state = initsialState, action){
    switch (action.type) {
        case FETCH_BRANDS:
            return action.brands
        case RESET_BRANDS:
            return initsialState
        default:
            return state
    }
}