import {DELIVERYCOST} from "./actionTypes";

export const delivery_action = (cost) => (dispatch) => {
    dispatch({
        type: DELIVERYCOST,
        payload: cost
    })
}