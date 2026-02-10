
import React from 'react';

const Section: React.FC<{
    id: string;
    className?: string;
    children: React.ReactNode
}> = ({ id, className = '', children }) => (
    <section id={id} className={`py-20 md:py-24 px-6 md:px-8 ${className}`}>
        {children}
    </section>
);

export default Section;
