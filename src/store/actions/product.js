import GetData from "../../service/GetData";
import {FETCH_PRODUCT} from "./actionTypes";


export const  getProducts = () => (dispatch) =>  {
    new GetData().getData('/product').then( res => {
        dispatch({
            type: FETCH_PRODUCT,
            products: res
        })})
}