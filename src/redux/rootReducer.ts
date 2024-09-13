import { combineReducers } from "redux";
import marketReducer from "./marketSlice";

const rootReducer = combineReducers({
	market: marketReducer,
});

export default rootReducer;