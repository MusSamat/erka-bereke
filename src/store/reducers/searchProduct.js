import { GET_SEARCH_PRODUCT} from "../actions/actionTypes";

const initsialState = {
    searchProd:  null
}


export function searchProductReducer  (state = initsialState, action) {
    switch (action.type){
        case GET_SEARCH_PRODUCT:
            return action.searchProd
        default:
            return state
    }
}