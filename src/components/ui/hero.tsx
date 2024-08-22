import React from 'react';
import { AuroraBackground } from './aurora-background';
import { FlipWords } from '../ui/flip-words';
import { motion } from 'framer-motion';
import SearchAndFilter, { SearchAndFilterProps } from './search-and-filter';

const Hero: React.FC<SearchAndFilterProps> = ({
    searchQuery,
    setSearchQuery,
    setSortField,
    sortField,
    selectedCategories,
    setSelectedCategories,
}) => {
    const words = ['dairy products', 'fruits', 'cosmetics', 'furniture', 'pet foods'];

    return (
        <AuroraBackground className="h-auto">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4 w-full h-full"
            >
                <div className="h-full gap-4 md:gap-8 flex flex-col justify-between items-center px-4 w-full">
                    <div className="text-2xl md:text-6xl pt-4 pb-0 md:pt-10 md:pb-4 font-bold dark:text-white text-center w-full">
                        Shop from a wide variety of <FlipWords words={words} />
                    </div>
                    <SearchAndFilter
                        sortField={sortField}
                        searchQuery={searchQuery}
                        setSortField={setSortField}
                        setSearchQuery={setSearchQuery}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                </div>
            </motion.div>
        </AuroraBackground>
    );
};

export default Hero;
