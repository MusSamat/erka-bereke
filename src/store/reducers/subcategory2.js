import {FETCH_SUBCATEGORY2} from "../actions/actionTypes";

const initsialState = {
    subcategory2: []
}

export default function subcategory2Reducer (state = initsialState, action){
    switch (action.type){
        case FETCH_SUBCATEGORY2:
            return {
                ...state, subcategory2: action.subcategory2
            }
        default:
            return state
    }
}