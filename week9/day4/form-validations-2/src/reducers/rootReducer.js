import { combineReducers } from "redux";
import GraphData from "./graphData";
import LoginInfo from "./loginInfo";
import GetUsers from "./users";

export const rootReducer = combineReducers({
    GetUsers,
    GraphData,
    LoginInfo,
})
    
