import { combineReducers } from "redux";
import reducer from "./postReducer";

export const rootReducer = combineReducers({
  posts:reducer
})