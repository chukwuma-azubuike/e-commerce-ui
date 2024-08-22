import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const HomeLoading: React.FC = () => {
    return (
        <div className="flex flex-col space-y-3 my-4">
            <div className="px-4 space-y-3">
                <div className="flex flex-col w-full justify-between space-y-10 border-gray-100 p-6 border rounded-lg shadow-sm">
                    <Skeleton className="h-10 w-3/4 mx-auto" />
                    <div className="flex space-x-4">
                        <Skeleton className="h-10 w-3/4" />
                        <div className="flex space-x-2 w-1/4 justify-between">
                            <Skeleton className="w-1/4" />
                            <Skeleton className="w-3/4" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                    {Array.from(Array(6).keys())?.map(index => (
                        <div key={index} className="space-y-4 border-gray-100 p-4 border rounded-lg shadow-sm">
                            <Skeleton className="h-6 rounded-xl w-3/4" />
                            <div className="space-y-2">
                                <Skeleton key={index} className="h-4" />
                                <Skeleton key={index} className="h-4" />
                                <Skeleton key={index} className="h-4 w-3/4" />
                                <Skeleton key={index} className="h-4 w-1/4" />
                            </div>
                            <Skeleton className="h-[10rem] rounded-xl" />
                            <div className="space-y-2 w-full">
                                <div className="flex space-x-2 w-full justify-between">
                                    <Skeleton key={index} className="h-6 w-1/5" />
                                    <Skeleton key={index} className="h-6 w-1/5" />
                                </div>
                                <div className="flex space-x-2 w-full justify-between">
                                    <Skeleton key={index} className="h-4 w-1/6" />
                                    <Skeleton key={index} className="h-4 w-1/5" />
                                </div>
                                <div className="flex space-x-2 w-full justify-between">
                                    <Skeleton key={index} className="h-4 w-2/5" />
                                    <Skeleton key={index} className="h-4 w-1/6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeLoading;
