
import React from 'react';
import { motion } from 'framer-motion';
import PartnerLogo from '../PartnerLogo';
import { PARTNERS } from '../../data';

const Partners: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-12 bg-slate-900 border-y border-slate-800 overflow-hidden relative"
        >
            <div className="container mx-auto px-6 mb-8">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
                    Partenaires & Marques de confiance
                </p>
            </div>

            <div className="flex relative w-full">
                <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center px-16 min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div key={i} className="shrink-0 flex items-center justify-center">
                            <PartnerLogo partner={partner} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Partners;
