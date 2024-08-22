'use client';

import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import money from '@/utils/money';
import ReactStars from 'react-stars';

const ProductCard: React.FC<Product> = ({
    title,
    description,
    images,
    price,
    discountPercentage,
    rating,
    reviews,
    availabilityStatus,
    shippingInformation,
}) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            layout
        >
            <CardContainer className="inter-var w-full">
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
                            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center">
                        <CardItem translateZ={20} className="py-2 rounded-xl font-semibold text-2xl dark:text-white">
                            {money(price)}
                            <p className="line-through text-gray-500 font-normal text-sm">
                                {money(price + discountPercentage)}
                            </p>
                        </CardItem>
                        <div className="flex flex-col justify-between items-center gap-2">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-full bg-blue-600 dark:bg-white dark:text-black text-white text-sm font-bold"
                            >
                                Add to cart
                            </CardItem>
                            <CardItem translateZ={20} className="text-sm text-gray-500 items-end flex flex-col gap-2 ">
                                <ReactStars count={5} edit={false} value={rating} size={20} color2={'#ffbf00'} />
                                <div>{reviews?.length} Reviews</div>
                            </CardItem>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <CardItem className="text-sm">{shippingInformation}</CardItem>
                        <CardItem className="text-sm">{availabilityStatus}</CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
};

export default React.memo(ProductCard);

ProductCard.displayName = 'ProductCard';
