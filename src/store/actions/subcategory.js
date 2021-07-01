import GetData from "../../service/GetData";
import {FETCH_SUBCATEGORY} from "./actionTypes";
import {setloading} from "./laod_action";

export const getsubCategory = () =>  (dispatch) => {
    dispatch(setloading(true))
    new GetData().getData('/subcategory').then( res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_SUBCATEGORY,
            subcategory: res
        })})
}