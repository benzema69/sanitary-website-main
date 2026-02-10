
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, FileText, MapPin, ArrowRight } from 'lucide-react';
import Section from '../Section';
import { PHONE_HREF, PHONE_DISPLAY, MAPS_LINK } from '../../data';

interface ContactProps {
    scrollTo: (id: string) => void;
}

const Contact: React.FC<ContactProps> = ({ scrollTo }) => {
    return (
        <Section id="contact" className="bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/10 skew-x-12 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cyan-900/10 -skew-x-12 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pastille 1: Phone */}
                    <motion.a
                        href={PHONE_HREF}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-900/20">
                            <PhoneCall className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">M'appeler</h3>
                        <p className="text-slate-400 text-sm mb-4">Pour une urgence ou un conseil direct.</p>
                        <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{PHONE_DISPLAY}</span>
                    </motion.a>

                    {/* Pastille 2: Quote (Scrolls to form) */}
                    <motion.button
                        onClick={() => scrollTo('projets')}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-white text-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Devis Gratuit</h3>
                        <p className="text-slate-400 text-sm mb-4">Décrivez votre projet via le formulaire.</p>
                        <span className="inline-flex items-center gap-2 text-white font-bold border-b border-white/20 pb-1 group-hover:border-white transition-colors">
                            Remplir le formulaire <ArrowRight className="w-4 h-4" />
                        </span>
                    </motion.button>

                    {/* Pastille 3: Address */}
                    <motion.a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Me trouver</h3>
                        <p className="text-slate-400 text-sm mb-4">Atelier et bureau à Rolle.</p>
                        <div className="text-white font-bold leading-tight">
                            Ch. de Plein-Air 1<br />1180 Rolle
                        </div>
                    </motion.a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
