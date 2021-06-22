import {GET_SEARCH_PRODUCT} from "./actionTypes";
import GetData from "../../service/GetData";


export const searchProduct = (title) => (dispatch) => {
    console.log(title)
    new GetData().getData(`/product/?title__icontains=${title}`).then(res => {
        console.log(res)
        dispatch({
            type: GET_SEARCH_PRODUCT,
            searchProd: res
        })
    })
}