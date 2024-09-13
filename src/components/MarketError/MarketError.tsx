import React from "react";
import "./MarketError.scss";
import { MdErrorOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";

interface MarketLoadingProps {
	handleRetry: () => void;
    errorText: string;
}

const MarketError: React.FC<MarketLoadingProps> = ({ handleRetry, errorText }) => {
	const { t } = useTranslation();
	return (
		<div className="error">
			<MdErrorOutline className="error__icon" />
			<span className="error__text">{errorText}</span>
			<button type="button" className="error__retry" onClick={handleRetry}>
                {t("retry")}
			</button>
		</div>
	);
};

export default MarketError;
