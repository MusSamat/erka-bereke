import {SET_SALE_C, RESET_SALE_C, GET_SALE_C} from "../actions/actionTypes";

const initsialState = {
    sale: false
}


export default function saleActions (state = initsialState, action){
    switch(action.type){
        case SET_SALE_C:
            return{
               sale: action.sale
            }
        case RESET_SALE_C:
            return initsialState
        default:
            return state
    }
}