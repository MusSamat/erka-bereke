import {ADD_BRAND, REMOVE_BRAND, RESET_BRANDS} from "./actionTypes";




export const removeBrands = (id)  => ({
        type: REMOVE_BRAND,
        payload: id
})

export const addBrands = (id)  => ({
        type: ADD_BRAND,
        payload: id
})


export const resetBrands = () => ( {
        type: RESET_BRANDS
})