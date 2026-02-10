
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, MessageCircle, Check, Star } from 'lucide-react';
import Section from '../Section';
import { PROJECTS } from '../../data';

interface ProjectsProps {
    handleAIProjectStart: () => void;
    formSuccess: boolean;
    formData: { name: string; phone: string; email: string; description: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleFormSubmit: (e: React.FormEvent) => void;
    setFormSuccess: (success: boolean) => void;
    setFormData: (data: { name: string; phone: string; email: string; description: string }) => void;
    isFormSubmitting: boolean;
}

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

const Projects: React.FC<ProjectsProps> = ({
    handleAIProjectStart,
    formSuccess,
    formData,
    handleInputChange,
    handleFormSubmit,
    setFormSuccess,
    setFormData,
    isFormSubmitting
}) => {
    return (
        <Section id="projets" className="bg-white">
            <motion.div
                className="container mx-auto max-w-6xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-4">Un projet ? Une idée ?</motion.h2>
                <motion.p variants={fadeInUp} className="text-slate-600 mb-12">Je vous accompagne dans la réalisation de vos rêves. Choisissez comment vous souhaitez me contacter.</motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Form Side */}
                    <div className="lg:col-span-7">

                        {/* AI ASSISTANT CARD */}
                        <motion.div
                            variants={fadeInUp}
                            className="mb-8 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl text-white shadow-lg relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-24 h-24" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                                    <Sparkles className="w-3 h-3 text-cyan-300" />
                                    Nouveau
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Pas envie de remplir le formulaire ?</h3>
                                <p className="text-slate-300 mb-6 max-w-md">
                                    Laissez notre assistant intelligent prendre les notes pour vous. Discutez simplement de votre projet, il s'occupe de tout remplir.
                                </p>
                                <button
                                    onClick={handleAIProjectStart}
                                    className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold text-sm hover:bg-cyan-50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center gap-2 shadow-md"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Discuter avec l'Assistant
                                </button>
                            </div>
                        </motion.div>

                        {formSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 border border-green-200 text-green-900 p-8 rounded-lg text-center shadow-sm"
                            >
                                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Dossier reçu !</h3>
                                <p>Vos informations ont bien été transmises. Je vous recontacte sous 24h.</p>
                                {formData.description && (
                                    <div className="mt-4 p-4 bg-white rounded border border-green-100 text-left text-sm text-slate-600">
                                        <strong>Résumé :</strong> {formData.description}
                                    </div>
                                )}
                                <button
                                    onClick={() => {
                                        setFormSuccess(false);
                                        setFormData({ name: '', phone: '', email: '', description: '' });
                                    }}
                                    className="mt-6 text-sm font-semibold underline hover:text-green-700"
                                >
                                    Envoyer un autre message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                onSubmit={handleFormSubmit}
                                className="space-y-4 bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
                            >
                                <div className="absolute top-4 right-4 text-xs font-bold text-slate-300 uppercase tracking-widest">Formulaire classique</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nom</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-slate-200 p-3 rounded focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Téléphone</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-slate-200 p-3 rounded focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white border border-slate-200 p-3 rounded focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Description du projet</label>
                                    <textarea
                                        required
                                        rows={4}
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Ex: Rénovation salle de bain, Fuite robinet, Nouveau chauffe-eau..."
                                        className="w-full bg-white border border-slate-200 p-3 rounded focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isFormSubmitting}
                                    className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold w-full hover:bg-cyan-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all disabled:opacity-50 disabled:transform-none disabled:shadow-none shadow-lg"
                                >
                                    {isFormSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                                </button>
                            </motion.form>
                        )}
                    </div>

                    {/* Gallery Side */}
                    <div className="lg:col-span-5">
                        <motion.h3 variants={fadeInUp} className="text-lg font-bold text-slate-900 mb-6">Exemples de réalisations</motion.h3>
                        <div className="grid grid-cols-1 gap-6">
                            {PROJECTS.map((project, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="flex gap-4 items-center p-4 bg-white border border-slate-100 rounded-lg hover:shadow-md hover:border-cyan-100 hover:translate-x-1 transition-all group cursor-default"
                                >
                                    <div className="w-24 h-24 bg-slate-200 rounded overflow-hidden shrink-0 relative">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase text-cyan-600">{project.tag}</span>
                                        <h4 className="font-bold text-slate-900">{project.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 p-6 bg-cyan-50 rounded-lg border border-cyan-100 text-sm text-cyan-900 italic flex gap-3 items-start"
                        >
                            <Star className="w-5 h-5 shrink-0 fill-cyan-900/20" />
                            "Je travaille avec les meilleurs fournisseurs pour garantir une longévité maximale à vos installations. Pas d'obsolescence programmée ici."
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </Section>
    );
};

export default Projects;
