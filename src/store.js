import {
  addProductReducer,
  addProductReviewReducer,
  deleteProductReducer,
  getAllProductsReducer,
  getProductByIdReducer,
  updateProductReducer,
} from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import {
  deleteUserReducer,
  getAllUsersReducer,
  loginReducer,
  registerNewUserReducer,
  updateReducer,
} from "./reducers/userReducer";
import {
  getAllOrdersReducer,
  getOrderByIdReducer,
  getOrdersByUserIdReducer,
  placeOrderReducer,
} from "./reducers/orderReducer";
// import { JSON } from "express/lib/response";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer,
  getOrdersByUserIdReducer: getOrdersByUserIdReducer,
  getOrderByIdReducer: getOrderByIdReducer,
  addProductReviewReducer: addProductReviewReducer,
  updateReducer: updateReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  deleteProductReducer: deleteProductReducer,
  addProductReducer: addProductReducer,
  updateProductReducer: updateProductReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
console.log('menna store---->',store,typeof(store))
export default store;

//create action(event)
      //action has two properties-->action type , payload(details of the action)

//dispatch to store

//in store,a reducer fn is called related to above action

//reducer fn update the store(takes current state and action as parameters and return updated state)