import GetData from "../../service/GetData";
import {FETCH_CATEGORY} from "./actionTypes";
import {setloading} from "./laod_action";

export const getCategory = () =>  (dispatch) => {
    dispatch(setloading(true))
    new GetData().getData('/categories').then( res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_CATEGORY,
            category: res
        })})
}