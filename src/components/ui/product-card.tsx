'use client';

import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { Product } from '@/types';

const ProductCard: React.FC<Product> = ({ title, description, images, price, rating, shippingInformation }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[34rem] rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full">
                    <Image
                        src={images[0]}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center">
                    <CardItem translateZ={20} className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                        Rating
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Add to cart
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default React.memo(ProductCard);

ProductCard.displayName = 'ProductCard';
