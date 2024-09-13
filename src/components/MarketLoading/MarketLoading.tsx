import React from "react";
import "./MarketLoading.scss"
import { ImSpinner3 } from "react-icons/im";
import { useTranslation } from "react-i18next";

const MarketLoading: React.FC = () => {
	const { t } = useTranslation();
    return (
        <div className="loading">
            <ImSpinner3 className="loading__icon"/>
            <span className="loading__text">{t("loading")}</span>
        </div>
    );
}

export default MarketLoading;