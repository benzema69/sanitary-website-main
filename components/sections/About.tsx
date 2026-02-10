
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Section from '../Section';

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const About: React.FC = () => {
    return (
        <Section id="apropos" className="bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={slideInLeft}
                    >
                        <div className="absolute inset-0 bg-cyan-600 rounded-lg transform translate-x-3 translate-y-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1605218427306-6354db696faa?q=80&w=1000&auto=format&fit=crop"
                            alt="Travail de plomberie de précision"
                            className="rounded-lg shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full bg-slate-200"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={slideInRight}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">L'Expertise Locale</h2>
                        <div className="space-y-6">
                            <p className="text-lg text-slate-700 leading-relaxed">
                                Fondée en 2004, <strong className="text-slate-900">Chappuis Sanitaire Sàrl</strong> bénéficie d'une expérience métier acquise depuis les années 80. Une maîtrise technique transmise et perfectionnée sur plus de 40 ans.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Basé à Rolle, j'interviens seul pour garantir un contact direct, une responsabilité totale et un travail soigné. Pas d'intermédiaire, juste le patron sur le chantier.
                            </p>

                            <ul className="space-y-4 mt-4">
                                {[
                                    'Entreprise formatrice et qualifiée',
                                    'Matériel garanti par les plus grandes marques suisses',
                                    'Interventions propres et respectueuses des lieux',
                                    'Devis transparents, sans surprise'
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <div className="mt-1">
                                            <ShieldCheck className="w-5 h-5 text-cyan-600" />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
