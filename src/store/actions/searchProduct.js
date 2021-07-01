import {GET_SEARCH_PRODUCT} from "./actionTypes";
import GetData from "../../service/GetData";
import {setloading} from "./laod_action";


export const searchProduct = (title) => (dispatch) => {
    dispatch(setloading(true))
    new GetData().getData(`/product/?title__icontains=${title}`).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: GET_SEARCH_PRODUCT,
            searchProd: res
        })
    })
}