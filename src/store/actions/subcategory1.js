import GetData from "../../service/GetData";
import {FETCH_SUBCATEGORY1} from "./actionTypes";
import {setloading} from "./laod_action";

export const getsubCategory1 = () =>  (dispatch) => {
    dispatch(setloading(true))
    new GetData().getData('/subcategory1').then( res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_SUBCATEGORY1,
            subcategory1: res
        })})
}