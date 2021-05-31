import {FETCH_SUBCATEGORY1} from "../actions/actionTypes";

const initsialState = {
    subcategory1: []
}

export default function subcategory1Reducer (state = initsialState, action){
    switch (action.type){
        case FETCH_SUBCATEGORY1:
            return {
                ...state, subcategory1: action.subcategory1
            }
        default:
            return state
    }
}