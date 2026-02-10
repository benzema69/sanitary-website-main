
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { LOCATIONS } from '../../data';

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Locations: React.FC = () => {
    return (
        <div className="py-16 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto max-w-6xl px-6">
                <motion.div
                    className="flex flex-col md:flex-row md:items-center gap-3 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100">
                        <MapPin className="w-6 h-6 text-cyan-700" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Zone d'Intervention - La Côte</h2>
                        <p className="text-slate-500 text-sm">Service de proximité rapide et efficace</p>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { title: "Cœur de La Côte", list: LOCATIONS.center, color: "border-cyan-500" },
                        { title: "Ouest (Vers Nyon)", list: LOCATIONS.east, color: "border-slate-300" },
                        { title: "Est (Vers Morges)", list: LOCATIONS.west, color: "border-slate-300" },
                        { title: "Nord (Pied du Jura)", list: LOCATIONS.north, color: "border-slate-300" },
                    ].map((zone, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className={`bg-white p-6 rounded-xl border-t-4 shadow-sm ${zone.color}`}
                        >
                            <h3 className="font-bold text-slate-900 mb-4 text-base">{zone.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {zone.list.map(loc => (
                                    <span key={loc} className="inline-block px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <p className="mt-8 text-xs text-center text-slate-400 italic">
                    * Intervention possible hors zone sur demande spécifique pour chantiers de rénovation.
                </p>
            </div>
        </div>
    );
};

export default Locations;
