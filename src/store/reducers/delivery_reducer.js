import {DELIVERYCOST, RESET_DELIVERYCOST} from "../actions/actionTypes";

const initsialState  = {
    delivery_cost: -1
}


export function deliveryReducer (state= initsialState, action){
    switch (action.type) {
        case DELIVERYCOST:
            return{
                delivery_cost: action.payload
            }
        case RESET_DELIVERYCOST:
            return{
                delivery_cost: initsialState
            }
        default:
            return state

    }
}