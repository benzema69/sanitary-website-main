
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import Section from '../Section';
import { TESTIMONIALS, MAPS_LINK } from '../../data';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Testimonials: React.FC = () => {
    return (
        <Section id="temoignages" className="bg-slate-50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Avis Clients</h2>
                    <div className="h-1 w-24 bg-cyan-500 mx-auto mb-6"></div>
                    <p className="text-slate-600">La satisfaction de mes clients est ma meilleure publicité.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.stars)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed text-sm">"{t.text}"</p>
                            <div>
                                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                                <div className="flex justify-between items-center text-xs text-slate-500 mt-1">
                                    <span>{t.context}</span>
                                    <span>{t.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-200 hover:border-cyan-500 transition-colors pb-1 text-sm">
                        Voir tous les avis sur Google Maps <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
