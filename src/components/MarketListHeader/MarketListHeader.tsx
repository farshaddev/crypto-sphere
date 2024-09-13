import React from "react";
import Search, { SearchProps } from "../Search/Search";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./MarketListHeader.scss";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface MarketListHeaderProps extends SearchProps {}

const MarketListHeader: React.FC<MarketListHeaderProps> = ({ search, handleSearch }) => {
	return (
		<header className="market-header">
			<Search search={search} handleSearch={handleSearch} />
			<LanguageSwitcher />
			<ThemeSwitcher />
		</header>
	);
};

export default MarketListHeader;
