import { combineReducers } from "redux";
import marketReducer from "./slices/marketSlice";
import languageReducer from "./slices/languageSlice";

const rootReducer = combineReducers({
	language: languageReducer,
	market: marketReducer,
});

export default rootReducer;