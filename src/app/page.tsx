import React from 'react';

import getProducts from '@/utils/get-products';
import ProductCard from '@/components/ui/product-card';

const Home: React.FC = async () => {
    const { products, error } = await getProducts();

    return (
        <div>
            {error ? (
                <div>Error fetching data: {JSON.stringify(error)} </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                    {products?.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
