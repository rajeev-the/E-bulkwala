import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/prodcuts';

export const fetchprodcutsid =(id)=> axios.get(`${BASE_URL}/getbysub/${id}`);


export const fetchProductsByTag = (tag) => {
  return axios.get(`${BASE_URL}/tag/${tag}`);
};
