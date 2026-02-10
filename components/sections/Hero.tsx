
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import Section from '../Section';
import { PHONE_DISPLAY, PHONE_HREF } from '../../data';

interface HeroProps {
    scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
    return (
        <Section id="hero" className="min-h-[85vh] flex flex-col justify-center border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-50/50 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                        <Star className="w-3 h-3 fill-cyan-800" />
                        Fondé en 2004
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Chappuis Sanitaire Sàrl.
                        <br />
                        <span className="text-slate-400">Expérience depuis 1980.</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-8">
                        <span className="text-cyan-700">Rolle</span>, La Côte & environs.
                    </h2>

                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed border-l-4 border-cyan-200 pl-6">
                        Votre partenaire sanitaire local de confiance. Installations, rénovations et dépannages urgents.
                        <br />
                        <span className="text-sm md:text-base text-slate-400 mt-2 block font-medium">
                            Un projet ou une urgence ? Je vous écoute 7j/7.
                        </span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="bg-slate-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
                        >
                            Demander un devis
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <a
                            href={PHONE_HREF}
                            className="text-slate-900 font-semibold px-6 py-4 border border-slate-200 bg-white rounded-lg hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-800 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all w-full md:w-auto text-center"
                        >
                            Appeler : {PHONE_DISPLAY}
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
                        {[
                            { label: 'Entreprise Suisse', icon: ShieldCheck },
                            { label: '100 % Satisfaction', icon: Star },
                            { label: 'Urgence Clients', icon: Clock },
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="flex items-center gap-3 text-slate-700 font-medium bg-white/80 backdrop-blur px-4 py-3 rounded-md border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-default"
                            >
                                <badge.icon className="w-5 h-5 text-cyan-700" />
                                <span className="text-sm">{badge.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
