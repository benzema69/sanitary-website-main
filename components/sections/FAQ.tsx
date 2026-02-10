
import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Section from '../Section';
import { FAQ_ITEMS } from '../../data';

interface FAQProps {
    toggleAccordion: (index: number) => void;
    activeAccordion: number | null;
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const FAQ: React.FC<FAQProps> = ({ toggleAccordion, activeAccordion }) => {
    return (
        <Section id="faq" className="bg-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
                    <p className="text-slate-600">Des réponses claires pour vos interrogations.</p>
                </motion.div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden hover:border-cyan-200 transition-colors"
                        >
                            <button
                                onClick={() => toggleAccordion(i)}
                                className="flex justify-between items-center w-full p-6 text-left font-bold text-slate-900 hover:text-cyan-700 transition-colors"
                            >
                                <span>{item.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeAccordion === i ? 'rotate-180 text-cyan-600' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeAccordion === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100/50 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
