import React from 'react';
import Home from '.';
import getProducts from '@/utils/get-products';

const App: React.FC = async () => {
    // Fetch products as static props
    const response = await getProducts();

    return <Home {...response} />;
};

export default App;
