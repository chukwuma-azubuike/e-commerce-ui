import { Product } from '@/types';
import { useState, useMemo } from 'react';

export type SortField = 'rating' | 'priceAsc' | 'priceDesc' | '';

const useProductFilterSort = (products: Product[] = []) => {
    const [sortField, setSortField] = useState<SortField>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Memoized filtered and sorted products
    const filteredAndSortedProducts = useMemo(() => {
        let filteredProducts = products;

        // Search by title, description, category, tags, brand
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                [product?.title, product?.description, product?.category, product?.brand, ...product?.tags]
                    .join(' ')
                    .toLowerCase()
                    .includes(query)
            );
        }

        // Filter by category
        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
        }

        // Sorting by rating or price
        if (sortField === 'rating') {
            filteredProducts = filteredProducts?.sort((a, b) => b.rating - a.rating);
        } else if (sortField === 'priceAsc') {
            filteredProducts = filteredProducts?.sort((a, b) => a.price - b.price);
        } else if (sortField === 'priceDesc') {
            filteredProducts = filteredProducts?.sort((a, b) => b.price - a.price);
        }

        return filteredProducts;
    }, [products, sortField, searchQuery, selectedCategories]);

    return {
        filteredAndSortedProducts,
        setSortField,
        setSearchQuery,
        sortField,
        searchQuery,
        selectedCategories,
        setSelectedCategories,
    };
};

export default useProductFilterSort;
