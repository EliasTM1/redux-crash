import { combineReducers } from "redux";
import bankerReducer from "./accountReducer";


let combinedReducers = combineReducers({
    banker: bankerReducer
})

export default combinedReducers