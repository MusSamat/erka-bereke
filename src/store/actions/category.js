import GetData from "../../service/GetData";
import {FETCH_CATEGORY} from "./actionTypes";

export const getCategory = () =>  (dispatch) => {
    new GetData().getData('/categories').then( res => {
        dispatch({
            type: FETCH_CATEGORY,
            category: res
        })})
}