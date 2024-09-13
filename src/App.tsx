import React from "react";
import MarketsList from "./pages/MarketsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarketDetails from "./pages/MarketDetails";
import useI18n from "./hooks/useI18n";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App: React.FC = () => {
	useI18n();

	return (
		<div>
			<LanguageSwitcher />
			<Router>
				<Routes>
					<Route path="/" element={<MarketsList />} />
					<Route path="/market/:id" element={<MarketDetails />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
