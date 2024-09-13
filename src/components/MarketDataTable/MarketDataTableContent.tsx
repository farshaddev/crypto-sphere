import React from "react";
import { Market } from "../../types";

export interface MarketDataTableContentProps {
	filteredMarkets: Market[];
	handleRowClick: (arg: number) => void;
}

const MarketDataTableContent: React.FC<MarketDataTableContentProps> = ({
	filteredMarkets,
	handleRowClick,
}) => {
	return (
		<tbody>
			{filteredMarkets.map((market) => (
				<tr
					key={market.pair_id}
					onClick={() => handleRowClick(market.pair_id)}
					className="market-table__row"
				>
					<td className="market-table__row-field">
                        <div className="market-table__row-field-data">
                            <img
                                src={market.logo}
                                alt={market.name.fa}
                                width={28}
                                height={28}
                            />
                            {market.name.fa}
                        </div>
					</td>
					<td className="market-table__row-field">
                        <div className="market-table__row-field-data">
                            <span>{market.quote_currency_symbol.en}</span>
                            <span>{market.sell}</span>
                        </div>
                    </td>
				</tr>
			))}
		</tbody>
	);
};

export default MarketDataTableContent;
