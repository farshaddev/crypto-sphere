import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss"
import ThemeProvider from "./components/ThemeSwitcher/ThemeProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
