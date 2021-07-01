import GetData from "../../service/GetData";
import {FETCH_PRODUCT} from "./actionTypes";
import {setloading} from "./laod_action";



export const  getProducts = () => (dispatch) =>  {
    dispatch(setloading(true))
    new GetData().getData('/product').then( res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_PRODUCT,
            products: res
        })})
}
