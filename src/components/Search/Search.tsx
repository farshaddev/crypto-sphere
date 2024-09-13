import React, { ChangeEventHandler } from "react";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import "./Search.scss";

export interface SearchProps {
	search: string;
	handleSearch: ChangeEventHandler<HTMLInputElement>;
}

const Search: React.FC<SearchProps> = ({search, handleSearch}) => {
	const { t } = useTranslation();

	return (
		<div className="search">
			<IoIosSearch className="search__icon" />
			<input
				type="text"
				className="search__field"
				value={search}
				onChange={handleSearch}
				placeholder={t("searchTitle")}
			/>
		</div>
	);
};

export default Search;
