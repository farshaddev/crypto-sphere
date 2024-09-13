import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useTranslation } from "react-i18next";
import "./MarketDetails.scss";

const MarketDetails: React.FC = () => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string }>();
	const { markets } = useAppSelector((state) => state.market);
	const market = markets.find((m: any) => m.pair_id.toString() === id);
	const navigate = useNavigate();

	if (!market) return <div>Market not found</div>;

	const handleReturn = () => {
		navigate(`/`);
	};

	return (
		<div className="market-details">
			<div className="market-details__list">
        <div className="market-details__list-primary">
          <img
            src={market.logo}
            alt={market.name.fa}
            width={40}
            height={40}
          />
          <h1 className="market-details__list-primary-title">
            {market.name.fa}
          </h1>
        </div>
				<div className="market-details__list-item">
					<span className="market-details__list-item-field">
						{t("englishName")}
					</span>
					<span className="market-details__list-item-value">
						{market.name.en}
					</span>
				</div>
				<div className="market-details__list-item">
					<span className="market-details__list-item-field">
						{t("price")}
					</span>
					<span className="market-details__list-item-value">
						{market.sell} {""} {market.quote_currency_symbol.en}
					</span>
				</div>
				<div className="market-details__list-item">
					<span className="market-details__list-item-field">
						{t("changes")}
					</span>
					<span className="market-details__list-item-value">
						{market.financial.last24h.base_volume}%
					</span>
				</div>
				<div className="market-details__list-item">
					<span className="market-details__list-item-field">
						{t("sells")}
					</span>
					<span className="market-details__list-item-value">
						{market.buy} {""} {market.quote_currency_symbol.en}
					</span>
				</div>
			</div>
			<div className="market-details__return">
				<button
					type="button"
					className="market-details__return-btn"
					onClick={handleReturn}
				>
					{t("return")}
				</button>
			</div>
		</div>
	);
};

export default MarketDetails;