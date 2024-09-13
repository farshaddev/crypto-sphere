import { combineReducers } from "redux";
import marketReducer from "./slices/marketSlice";
import languageReducer from "./slices/languageSlice";
import themeReducer from "./slices/themeSlice";

const rootReducer = combineReducers({
	theme: themeReducer,
	language: languageReducer,
	market: marketReducer,
});

export default rootReducer;