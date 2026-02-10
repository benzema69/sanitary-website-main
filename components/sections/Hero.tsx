
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Clock, Droplet } from 'lucide-react';
import Section from '../Section';
import { PHONE_DISPLAY, PHONE_HREF } from '../../data';

interface HeroProps {
    scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
    return (
        <Section id="hero" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-slate-950">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-950 to-blue-900/30" />

            {/* Animated floating circles */}
            <motion.div
                className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl"
                animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Water drop decorative icon */}
            <motion.div
                className="absolute top-32 right-[15%] hidden lg:block"
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Droplet className="w-16 h-16 text-cyan-400/20 fill-cyan-400/10" />
            </motion.div>

            <div className="container mx-auto max-w-5xl relative z-10 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider rounded-full mb-8 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Star className="w-3.5 h-3.5 fill-cyan-400" />
                        Artisan qualifié depuis 2004
                    </motion.div>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 leading-[1.05]">
                        Chappuis
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Sanitaire Sàrl.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-300 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="text-cyan-400 font-semibold">Rolle</span>, La Côte & environs.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Votre partenaire sanitaire local de confiance. Installations, rénovations et dépannages urgents.
                        <br />
                        <span className="text-sm text-slate-500 mt-2 block font-medium">
                            Un projet ou une urgence ? Je vous écoute 7j/7.
                        </span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <button
                            onClick={() => scrollTo('contact')}
                            className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-base font-bold hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all flex items-center gap-3 w-full sm:w-auto justify-center shadow-lg"
                        >
                            Demander un devis
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href={PHONE_HREF}
                            className="text-white font-semibold px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 hover:border-cyan-400/30 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all w-full sm:w-auto text-center"
                        >
                            Appeler : {PHONE_DISPLAY}
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        {[
                            { label: 'Entreprise Suisse', icon: ShieldCheck, color: 'text-emerald-400' },
                            { label: '100 % Satisfaction', icon: Star, color: 'text-amber-400' },
                            { label: 'Urgence 7j/7', icon: Clock, color: 'text-cyan-400' },
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.3 + (i * 0.15) }}
                                className="flex items-center gap-3 text-slate-300 font-medium bg-white/5 backdrop-blur-sm px-5 py-4 rounded-xl border border-white/10 hover:border-cyan-400/20 hover:bg-white/10 transition-all cursor-default"
                            >
                                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                                <span className="text-sm">{badge.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
