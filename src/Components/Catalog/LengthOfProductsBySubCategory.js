import React from "react";
import {useSelector} from "react-redux";

export const LengthOfProductsBySubCategory = (props) => {
    const prodLength = useSelector(state => state.product.products.filter((item, index) => {
        if(item.subcategory_id === props.id) {
            return item
        }
    }).length)
    return prodLength
}

