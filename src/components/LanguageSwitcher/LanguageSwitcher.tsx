import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setLanguage } from "../../redux/slices/languageSlice";
import i18n from "../../i18n";
import "./LanguageSwitcher.scss";

const LanguageSwitcher: React.FC = () => {
	const dispatch = useDispatch();
	const currentLanguage = useSelector(
		(state: RootState) => state.language.language
	);

	const handleLanguageChange = (lng: string) => {
		dispatch(setLanguage(lng));
		i18n.changeLanguage(lng);
	};

	return (
		<div className="language-switcher">
			{currentLanguage === "fa" ? (
				<button
					type="button"
					className="language-switcher__button"
					onClick={() => handleLanguageChange("en")}
				>
					EN
				</button>
			) : (
				<button
					type="button"
					className="language-switcher__button"
					onClick={() => handleLanguageChange("fa")}
				>
					فا
				</button>
			)}
		</div>
	);
};

export default LanguageSwitcher;
