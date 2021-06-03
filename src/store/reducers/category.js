import {FETCH_CATEGORY} from "../actions/actionTypes";

const initsialState = {
    category: []
}

export default function categoryReducer (state = initsialState, action){
    switch (action.type){
        case FETCH_CATEGORY:
            return {
                ...state, category: action.category
            }
        default:
            return state
    }
}