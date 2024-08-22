'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Hero from '@/components/ui/hero';
import { GetProductResponse } from '@/utils/get-products';
import ProductCard from '@/components/ui/product-card';
import useProductFilterSort from '@/hooks/use-product-filter-sort';

const Home: React.FC<GetProductResponse> = ({ products, error }) => {
    const {
        setSortField,
        setSearchQuery,
        sortField,
        searchQuery,
        selectedCategories,
        setSelectedCategories,
        filteredAndSortedProducts,
    } = useProductFilterSort(products);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sticky top-0 z-10 w-full bg-white">
                <Hero
                    sortField={sortField}
                    searchQuery={searchQuery}
                    setSortField={setSortField}
                    setSearchQuery={setSearchQuery}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                />
            </div>
            <div className="px-4">
                {error ? (
                    <div>Error fetching data: {JSON.stringify(error)} </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                        {filteredAndSortedProducts?.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Home;
