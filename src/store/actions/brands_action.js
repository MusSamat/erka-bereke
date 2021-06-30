import {FETCH_BRANDS, GET_SUM_OF_CART, RESET_BRANDS} from "./actionTypes";
import {useSelector} from "react-redux";


export const fetchBrands = (id) => (dispatch) => {
    const brands = useSelector(state => {
        return state.brands
    })
    const index = brands.indexOf(id)
    if(index !== -1){
        brands.splice(index, 1)
        dispatch({
            type: FETCH_BRANDS,
            brands: brands
        })
    }else{
        dispatch({
            type: FETCH_BRANDS,
            brands: brands
        })
    }
}


export const resetBrands = (id) => (dispatch) =>  {
    dispatch({
        type: RESET_BRANDS
    })
}