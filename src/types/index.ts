interface FinancialData {
	last24h: {
		base_volume: number;
		change_percent: number;
		close: number;
		highest: number;
		lowest: number;
		open: number;
		quote_volume: number;
	};
}

export interface Market {
	pair_id: number;
	amount_step: number;
	base_currency_id: number;
	base_currency_symbol: { en: string; fa: string };
	base_precision: number;
	buy: number;
	crypto_box: number;
	financial: FinancialData;
	icon: string;
	is_delist: number;
	logo: string;
	name: { en: string; fa: string };
	price_precision: number;
	price_step: number;
	quote_currency_id: number;
	quote_currency_symbol: { en: string; fa: string };
	quote_precision: number;
	sell: number;
	show_order: number;
	tv_symbol: {
		international: string;
		ramzinex: string;
	};
	url_name: string;
	web_link: string;
}

export interface Currency {
	id: number;
	name: string;
	persian_name: string;
	symbol: string;
	color: string;
	deposit: number;
	withdraw: number;
	withdraw_fee: number;
	factor: number;
	precision: number;
	show_order: number;
	show_precision: number;
	logo: string;
	icon: string;
	related_pairs: number[];
	url_name: string | null;
	rial_related_pair: number | null;
	international_price: number | null;
}

export interface InitialState {
	markets: Market[];
	currencies: Currency[];
	loading: boolean;
	error: string | null;
}