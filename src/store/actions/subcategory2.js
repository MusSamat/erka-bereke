import GetData from "../../service/GetData";
import {FETCH_SUBCATEGORY2} from "./actionTypes";
import {setloading} from "./laod_action";

export const getsubCategory2 = () =>  (dispatch) => {
    dispatch(setloading(true))
    new GetData().getData('/subcategory2').then( res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_SUBCATEGORY2,
            subcategory2: res
        })})
}