
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Section from '../Section';
import ServiceSkeleton from '../ServiceSkeleton';
import { SERVICES } from '../../data';

interface ServicesSectionProps {
    areServicesLoading: boolean;
    setSelectedServiceId: (id: string) => void;
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

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

const ServicesSection: React.FC<ServicesSectionProps> = ({ areServicesLoading, setSelectedServiceId }) => {
    return (
        <Section id="services" className="bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Catalogue des Services</h2>
                    <div className="h-1 w-24 bg-cyan-500 mb-6"></div>
                    <p className="text-slate-600 max-w-2xl">
                        Une gamme complète de prestations sanitaires, du dépannage urgent à la rénovation complexe. Expertise certifiée.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {areServicesLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <ServiceSkeleton />
                            </motion.div>
                        ))
                    ) : (
                        SERVICES.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={fadeInUp}
                                className={`group p-8 rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col cursor-default relative overflow-hidden ${service.highlight
                                        ? 'bg-cyan-50 border-cyan-100'
                                        : 'bg-white border-slate-100 hover:border-cyan-300'
                                    }`}
                            >
                                <div className={`mb-6 p-3 w-fit rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10 ${service.highlight ? 'bg-cyan-600 text-white' : 'bg-slate-50 text-cyan-700'
                                    }`}>
                                    <service.icon className="w-6 h-6" />
                                </div>

                                {/* Subtle hover gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{service.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 border-b border-slate-100 pb-4 leading-relaxed relative z-10">
                                    {service.description}
                                </p>

                                {/* Service Features List - SEO Optimized */}
                                <ul className="space-y-3 mt-auto relative z-10">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${service.highlight ? 'text-cyan-700' : 'text-cyan-600'}`} />
                                            <span className="text-sm text-slate-700 leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Micro-interaction: Bottom link appears - MODIFIED to set selected service */}
                                <button
                                    onClick={() => setSelectedServiceId(service.id)}
                                    className="mt-6 pt-4 border-t border-slate-50 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center text-xs font-bold text-cyan-700 uppercase tracking-wider relative z-10 w-full text-left"
                                >
                                    En savoir plus <ArrowRight className="w-3 h-3 ml-2" />
                                </button>
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </div>
        </Section>
    );
};

export default ServicesSection;
