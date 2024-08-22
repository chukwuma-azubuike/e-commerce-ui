import axios, { AxiosResponse } from 'axios';
import { Product, ProductsApiResponse } from '@/types';

// API_URL and other sensitive data would normally be passed as environment variables
const API_URL = 'https://dummyjson.com/products';

export interface GetProductResponse {
    products?: Product[];
    error?: any;
}

const getProducts = async (): Promise<GetProductResponse> => {
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
