
import React from 'react';

const ServiceSkeleton = () => (
    <div className="p-8 rounded-xl border border-slate-100 bg-white flex flex-col h-full animate-pulse">
        <div className="mb-6 w-12 h-12 rounded-lg bg-slate-200" />
        <div className="h-8 w-3/4 bg-slate-200 rounded mb-4" />
        <div className="space-y-2 mb-6 border-b border-slate-100 pb-4">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
        </div>
        <div className="space-y-3 mt-auto">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-slate-200 rounded shrink-0" />
                    <div className="h-4 w-5/6 bg-slate-200 rounded" />
                </div>
            ))}
        </div>
        <div className="mt-6 h-4 w-1/3 bg-slate-200 rounded" />
    </div>
);

export default ServiceSkeleton;
