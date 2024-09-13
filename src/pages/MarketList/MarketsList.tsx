import React, { useEffect, useState } from "react";
import { getMarkets, clearError } from "../../redux/slices/marketSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import MarketListHeader from "../../components/MarketListHeader/MarketListHeader";
import MarketDataTable from "../../components/MarketDataTable/MarketDataTable";
import "./MarketList.scss"

const MarketsList: React.FC = () => {
	const dispatch = useAppDispatch();
	const { markets, loading, error } = useAppSelector((state) => state.market);
	const [search, setSearch] = useState("");
	const [sortKey, setSortKey] = useState<"name" | "price">("name");
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getMarkets());

		// const interval = setInterval(() => {
		// 	dispatch(getMarkets());
		// }, 20000);

		// return () => clearInterval(interval);
	}, [dispatch]);

	const handleRetry = () => {
		dispatch(clearError());
		dispatch(getMarkets());
	};

	const handleRowClick = (pair_id: number) => {
		navigate(`/market/${pair_id}`);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const sortedMarkets = [...markets].sort((a, b) => {
		return sortKey === "name"
			? a.name.en.localeCompare(b.name.en)
			: a.sell - b.sell;
	});

	const filteredMarkets = sortedMarkets.filter((market) =>
		market.name.en.toLowerCase().includes(search.toLowerCase())
	);

	if (loading) return <div>Loading...</div>;

	if (error)
		return (
			<div>
				<div>Error: {error}</div>
				<button onClick={handleRetry}>Retry</button>
			</div>
		);

	return (
		<div className="market-list">
			<MarketListHeader search={search} handleSearch={handleSearch} />
			<MarketDataTable setSortKey={setSortKey} handleRowClick={handleRowClick} filteredMarkets={filteredMarkets} />
		</div>
	);
};

export default MarketsList;
