import React from "react";
import MarketsList from "./pages/MarketList/MarketsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarketDetails from "./pages/MarketDetails";
import useI18n from "./hooks/useI18n";
import "./app.scss"

const App: React.FC = () => {
	useI18n();

	return (
		<div className="app">
			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<MarketsList />} />
						<Route path="/market/:id" element={<MarketDetails />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
};

export default App;
