import React, {useState} from "react";
import {useSelector} from "react-redux";

export const CheckCart = (props) => {
    const cartProductsP = useSelector(state => {
        return state.cartProd
    })
    const [c, setC] = useState(false)
    cartProductsP?.items?.map((item) => {
        if(item.product.id === props.id){
            setC(!c)
        }
    })
    return c
}