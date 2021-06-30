import { SET_SALE_C, RESET_SALE_C} from "./actionTypes";




export const setSaleValue = (bool) => (dispatch) => {
    dispatch({
        type: SET_SALE_C,
        sale: bool
    })
}

export const resetSaleValue = () => (dispatch) => {
    dispatch({
        type: RESET_SALE_C
    })
}