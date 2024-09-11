import React from "react";
import MarketsList from "./pages/MarketsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MarketsList />} />
				<Route path="/market/:id" element={<>MarketDetails</>} />
			</Routes>
		</Router>
	);
};

export default App;
