import {ADD_BRAND, FETCH_BRANDS, REMOVE_BRAND, RESET_BRANDS} from "../actions/actionTypes";

const initsialState = {
    brands: []
}

export default function brandsReducer( state = initsialState, action){
    switch (action.type) {
        case REMOVE_BRAND :
            console.log(action.id, "lelel")
            return{...state, brands: state.brands.filter(brand => brand !== action.payload)}
        case ADD_BRAND:
            console.log(action.id, "lelel")
            return{...state, brands: state.brands.concat(action.payload)}
        case RESET_BRANDS:
            return initsialState
        default:
            return state
    }
}