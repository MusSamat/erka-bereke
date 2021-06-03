import  {combineReducers} from "redux";
import productReducer from "./product";
import categoryReducer from "./category";
import subcategoryReducer from "./subcategory";
import subcategory1Reducer from "./subcategory1";
import subcategoryReducer2 from "./subcategory2";
import isLoginreducer from "./isLogin";
import cartProductsReducer from "./cartProductsReducer";
import sumOfCart from "./sumOfCart"

export default combineReducers({
    product: productReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    subcategory1: subcategory1Reducer,
    subcategory2: subcategoryReducer2,
    isLogin: isLoginreducer,
    cartProd: cartProductsReducer,
    sumOfCart: sumOfCart
})