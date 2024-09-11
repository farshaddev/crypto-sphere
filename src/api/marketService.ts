import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const EXCHANGE_URL = process.env.REACT_APP_API_EXCHANGE_URL;

export const fetchMarkets = () => axios.get(`${BASE_URL}${EXCHANGE_URL}pairs`);
export const fetchCurrencies = () => axios.get(`${BASE_URL}${EXCHANGE_URL}currencies`);

