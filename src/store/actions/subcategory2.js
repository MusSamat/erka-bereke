import GetData from "../../service/GetData";
import {FETCH_SUBCATEGORY2} from "./actionTypes";

export const getsubCategory2 = () =>  (dispatch) => {
    new GetData().getData('/subcategory2').then( res => {
        dispatch({
            type: FETCH_SUBCATEGORY2,
            subcategory2: res
        })})
}