import React from "react";
import MarketDataTableHeader, { MarketDataTableHeaderProps } from "./MarketDataTableHeader";
import MarketDataTableContent, { MarketDataTableContentProps } from "./MarketDataTableContent";
import "./MarketDataTable.scss"

interface MarketDataTableProps extends MarketDataTableHeaderProps, MarketDataTableContentProps {}

const MarketDataTable: React.FC<MarketDataTableProps> = ({
	setSortKey,
	filteredMarkets,
	handleRowClick,
}) => {
	return (
		<table className="market-table">
			<MarketDataTableHeader setSortKey={setSortKey} />
			<MarketDataTableContent
				filteredMarkets={filteredMarkets}
				handleRowClick={handleRowClick}
			/>
		</table>
	);
};

export default MarketDataTable;
