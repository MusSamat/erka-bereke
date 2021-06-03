import {FETCH_SUBCATEGORY} from "../actions/actionTypes";


const initsialState = {
    subcategory: []
}


export default function subcategoryReducer (state = initsialState, action){
    switch (action.type){
        case FETCH_SUBCATEGORY:
            return {
                ...state, subcategory: action.subcategory
            }
        default:
            return state
    }
}