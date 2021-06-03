import {GET_SUM_OF_CART} from "../actions/actionTypes";

const initsialState = {
    sumOfCart:  0
}

export default function sumOfCartProducts(state = initsialState,action){
    switch (action.type){
        case GET_SUM_OF_CART:
            return{
                ...state, sumOfCart: action.sumOfCart + (+action.value)
            }
        default:
            return state
    }
}