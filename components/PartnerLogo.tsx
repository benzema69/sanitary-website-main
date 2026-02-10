
import React from 'react';

interface Partner {
    name: string;
    type: string;
    url?: string;
    style?: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
    if (partner.type === 'image' && partner.url) {
        return (
            <div className="bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                <img
                    src={partner.url}
                    alt={`Logo ${partner.name}`}
                    className="h-10 md:h-12 w-auto object-contain max-w-[160px]"
                    loading="lazy"
                />
            </div>
        );
    }

    return (
        <div className={`bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}>
            <span className={`text-slate-800 text-lg font-bold whitespace-nowrap ${partner.style || ''}`}>
                {partner.name}
            </span>
        </div>
    );
};

export default PartnerLogo;
