import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/data';

export const fetchTrendingProducts = () => axios.get(`${BASE_URL}/trending`);
export const fetchTopProducts = () => axios.get(`${BASE_URL}/top`);

export const addTrendingProduct = (productId) =>
  axios.post(`${BASE_URL}/add-trending`, { productId });

export const removeTrendingProduct = (productId) =>
  axios.post(`${BASE_URL}/remove-trending`, { productId });

export const addTopProduct = (productId) =>
  axios.post(`${BASE_URL}/add-top`, { productId });

export const removeTopProduct = (productId) =>
  axios.post(`${BASE_URL}/remove-top`, { productId });
