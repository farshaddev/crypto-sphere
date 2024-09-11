import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkets } from "../redux/marketSlice";
import { AppDispatch } from "../redux/store";
import { Link } from "react-router-dom";

const MarketsList: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const { markets } = useSelector((state: any) => state.market);
	const [search, setSearch] = useState("");
	const [sortKey, setSortKey] = useState<"name" | "price">("name");

    useEffect(() => {
		dispatch(getMarkets());

		const interval = setInterval(() => {
			dispatch(getMarkets());
		}, 20000);

		return () => clearInterval(interval);
	}, [dispatch]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	const sortedMarkets = [...markets].sort((a, b) => {
		return sortKey === "name"
			? a.name.en.localeCompare(b.name.en)
			: a.price - b.price;
	});

	const filteredMarkets = sortedMarkets.filter((market) =>
		market.name.en.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<input
				type="text"
				value={search}
				onChange={handleSearch}
				placeholder="Search markets..."
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
                        	{market.name.fa}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MarketsList;
