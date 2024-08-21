import axios, { AxiosResponse } from 'axios';
import { ProductsApiResponse } from '@/types';

const API_URL = 'https://dummyjson.com/products';

const getProducts = async () => {
    try {
        const response = await axios.get<void, AxiosResponse<ProductsApiResponse>>(API_URL);
        const products = response.data.products;

        return { products };
    } catch (error) {
        // Handle error
        return { error };
    }
};

export default getProducts;
