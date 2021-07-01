import  {combineReducers} from "redux";
import productReducer from "./product";
import categoryReducer from "./category";
import subcategoryReducer from "./subcategory";
import subcategory1Reducer from "./subcategory1";
import subcategoryReducer2 from "./subcategory2";
import isLoginreducer from "./isLogin";
import cartProductsReducer from "./cartProductsReducer";
import sumOfCartProd from "./sumOfCartProducts"
import wishlistProductsReducer from "./wishlistProductsReducer"
import {searchProductReducer} from "./searchProduct";
import saleActions from "./sale";
import sumOfCartProductsWreducer from "./sumOfCartProductsWithoutSale"
import brandsreducer from "./brandsReducer"
import loadreducer from "./load_reducer";
export default combineReducers({
    product: productReducer,
    category: categoryReducer,
    subcategory: subcategoryReducer,
    subcategory1: subcategory1Reducer,
    subcategory2: subcategoryReducer2,
    isLogin: isLoginreducer,
    load: loadreducer,
    cartProd: cartProductsReducer,
    sumOfCart: sumOfCartProd,
    wishlistProd: wishlistProductsReducer,
    searchProd: searchProductReducer,
    sale: saleActions,
    cartProdW: sumOfCartProductsWreducer,
    brands: brandsreducer
})