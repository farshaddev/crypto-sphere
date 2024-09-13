import React, { useEffect, useState } from "react";
import { getMarkets, clearError } from "../redux/slices/marketSlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useTranslation } from 'react-i18next';

const MarketsList: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const { markets, loading, error } = useAppSelector(
		(state) => state.market
	);
	const [search, setSearch] = useState("");
	const [sortKey, setSortKey] = useState<"name" | "price">("name");

	useEffect(() => {
		dispatch(getMarkets());

		const interval = setInterval(() => {
			dispatch(getMarkets());
		}, 20000);

		return () => clearInterval(interval);
	}, [dispatch]);

	const handleRetry = () => {
		dispatch(clearError());
		dispatch(getMarkets());
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
		<div>
			<input
				type="text"
				value={search}
				onChange={handleSearch}
				placeholder={t("searchTitle")}
			/>
			<select
				onChange={(e) => setSortKey(e.target.value as "name" | "price")}
			>
				<option value="name">Sort by Name</option>
				<option value="price">Sort by Price</option>
			</select>
			<ul>
				{filteredMarkets.map((market) => (
					<li key={market.pair_id}>
						<Link to={`/market/${market.pair_id}`}>
							{market.name.fa} ||
							{market.sell}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MarketsList;
