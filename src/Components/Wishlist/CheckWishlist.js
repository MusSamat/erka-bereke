import React from "react";
import {useSelector} from "react-redux";

export const CheckWishlist = (props) => {
    const wishlistProductsP =  useSelector(state => {
        return state.wishlistProd
    })
    let  c = false
    wishlistProductsP?.items?.map((item, i) => {
        if(item.product.id === props.id){
            c = true
        }
    })
    return c
}