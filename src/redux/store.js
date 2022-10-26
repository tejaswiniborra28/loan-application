
import { applyMiddleware,createStore } from "redux"
import UserReducer from "./userReducer";

 import logger from "redux-logger";
 import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore(UserReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;