import React from "react";
import { useTranslation } from "react-i18next";
import { FaSort } from "react-icons/fa";

export interface MarketDataTableHeaderProps {
    setSortKey: React.Dispatch<React.SetStateAction<"name" | "price">>;
}

const MarketDataTableHeader: React.FC<MarketDataTableHeaderProps> = ({ setSortKey }) => {
	const { t } = useTranslation();

	return (
		<thead>
			<tr>
				<td>
					<button type="button" onClick={() => setSortKey("name")} className="market-table__sort">
						{t("tableTitleName")}
                        <FaSort />
					</button>
				</td>
				<td>
					<button type="button" onClick={() => setSortKey("price")} className="market-table__sort">
						{t("tableTitlePrice")}
                        <FaSort />
					</button>
				</td>
			</tr>
		</thead>
	);
};

export default MarketDataTableHeader;
