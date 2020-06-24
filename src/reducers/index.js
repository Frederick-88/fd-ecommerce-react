import { combineReducers } from "redux";

import AdminProductReducer from "./AdminProductReducer";
import AdminUserReducer from "./AdminUserReducer";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";

const combineReducer = combineReducers({
  AdminProductReducer,
  AdminUserReducer,
  LoginReducer,
  UserReducer,
});

export default combineReducer;
