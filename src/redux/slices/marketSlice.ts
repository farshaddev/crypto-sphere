import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMarkets, fetchCurrencies } from "../../api/marketService";
import { Currency, Market, MarketState } from "../../types";

export const getMarkets = createAsyncThunk<Market[], void>(
	"market/getMarkets",
	async () => {
		const response = await fetchMarkets();
		return response.data.data;
	}
);

export const getCurrencies = createAsyncThunk<Currency[], void>(
	"currency/getCurrencies",
	async () => {
		const response = await fetchCurrencies();
		return response.data.data;
	}
);

const initialState: MarketState = {
	markets: [],
	currencies: [],
	loading: false,
	error: null,
};

const marketSlice = createSlice({
	name: "market",
	initialState,
	reducers: {
		clearError(state) {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getMarkets.fulfilled, (state, action) => {
			state.markets = action.payload;
			state.loading = false;
		});
		builder.addCase(getCurrencies.fulfilled, (state, action) => {
			state.currencies = action.payload;
			state.loading = false;
		});

		builder.addCase(getMarkets.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getCurrencies.pending, (state) => {
			state.loading = true;
		});

		builder.addCase(getMarkets.rejected, (state, action) => {
			state.error = action.error.message || "Failed to fetch markets";
			state.loading = false;
		});
		builder.addCase(getCurrencies.rejected, (state, action) => {
			state.error = action.error.message || "Failed to fetch currencies";
			state.loading = false;
		});
	},
});

export const { clearError } = marketSlice.actions;
export default marketSlice.reducer;