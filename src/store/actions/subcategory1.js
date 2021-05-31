import GetData from "../../service/GetData";
import {FETCH_SUBCATEGORY1} from "./actionTypes";

export const getsubCategory1 = () =>  (dispatch) => {
    new GetData().getData('/subcategory1').then( res => {
        dispatch({
            type: FETCH_SUBCATEGORY1,
            subcategory1: res
        })})
}