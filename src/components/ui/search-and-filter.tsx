'use client';

import React, { ChangeEvent, useCallback } from 'react';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import debounce from 'lodash/debounce';
import { SortField } from '@/hooks/use-product-filter-sort';
import { Checkbox } from '@/components/ui/checkbox';
import capitalise from '@/utils/capitalise';

export interface SearchAndFilterProps {
    searchQuery: string;
    sortField: SortField;
    setSortField: React.Dispatch<React.SetStateAction<SortField>>;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    selectedCategories: Array<string>;
    setSelectedCategories: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    setSearchQuery,
    setSortField,
    selectedCategories,
    setSelectedCategories,
}) => {
    const handleChange =
        // eslint-disable-next-line
        useCallback(
            // Debounce to improve performance
            debounce((e: ChangeEvent<any>) => {
                setSearchQuery(e.target.value);
            }, 300),
            [setSearchQuery]
        );

    // Handle category selection
    const handleCategoryChange = useCallback((category: string) => {
        setSelectedCategories(prevCategories =>
            prevCategories?.includes(category)
                ? prevCategories?.filter(cat => cat !== category)
                : [...prevCategories, category]
        );
    }, []);

    const categories = ['beauty', 'groceries', 'fragrances', 'furniture'];

    return (
        <div className="px-2 flex flex-col md:flex-row gap-4 w-full">
            <Input
                type="text"
                onChange={handleChange}
                placeholder="Search by title, description, category, tags, or brand"
            />
            {/* Sorting dropdown */}
            <div className="mb-4">
                <Select onValueChange={e => setSortField(e as SortField)}>
                    <SelectTrigger className="w-full min-w-max">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="rating">Sort by: Review Rating (Highest to Lowest)</SelectItem>
                        <SelectItem value="priceAsc">Sort by: Price (Lowest to Highest)</SelectItem>
                        <SelectItem value="priceDesc">Sort by: Price (Highest to Lowest)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {/* Filters */}
            <div className="mb-4">
                <p className="font-bold text-[12px] mb-1">Filter by Category</p>
                <div className="flex gap-2">
                    {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                                id={category}
                                name={category}
                                checked={selectedCategories?.includes(category)}
                                onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <label
                                htmlFor={category}
                                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {capitalise(category)}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchAndFilter;
