import React from "react";
import {useSelector} from "react-redux";

export const LengthOfProductsBySubCategory2 = (props) => {
    const prodLength = useSelector(state => state.product.products.filter((item, index) => {
        if(item.subcategory2 === props.id) {
            return item
        }
    }).length)
    return prodLength
}

