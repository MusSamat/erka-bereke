import {ISLOGIN} from "../actions/actionTypes";

const initsialState = {
    isLogin: false
}

export default function isLoginreducer(state = initsialState, action){
    switch (action.type){
        case ISLOGIN:
            return {
                isLogin: action.isLogin
            }
        default:
            return state
    }

}