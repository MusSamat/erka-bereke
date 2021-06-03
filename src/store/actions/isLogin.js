import {ISLOGIN} from "./actionTypes";

export const getIsLoginValue = (bool) => (dispatch) => {
    dispatch({
        type: ISLOGIN,
        isLogin: bool
    })
}
