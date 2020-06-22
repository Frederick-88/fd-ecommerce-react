import { combineReducers } from "redux";

import AdminProductReducer from "./AdminProductReducer";
import AdminUserReducer from "./AdminUserReducer";
import LoginReducer from "./LoginReducer";
import UserProductReducer from "./UserProductReducer";

const combineReducer = combineReducers({
  AdminProductReducer,
  AdminUserReducer,
  LoginReducer,
  UserProductReducer,
});

export default combineReducer;
