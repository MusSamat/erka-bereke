import GetData from "../../service/GetData";
import {FETCH_SUBCATEGORY} from "./actionTypes";

export const getsubCategory = () =>  (dispatch) => {
    new GetData().getData('/subcategory').then( res => {
        dispatch({
            type: FETCH_SUBCATEGORY,
            subcategory: res
        })})
}