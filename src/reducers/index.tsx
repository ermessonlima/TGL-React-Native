import { combineReducers  } from "redux";
import BetsReducer from "./BetsReducer";

export default combineReducers({
   notes: BetsReducer
})