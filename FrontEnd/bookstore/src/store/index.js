import { combineReducers, legacy_createStore as createStore } from "redux";
import cartitemsreducer from "./cartitemsreducer";
import reducer from "./reducer";


const combreducer=combineReducers({loggedin:reducer, cart:cartitemsreducer});
const store=createStore(combreducer)
export default store;