/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { ArrowLeft, Check, Phone, MessageCircle, Star, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceDetailContent } from '../data/serviceDetails';

interface Testimonial {
  name: string;
  context: string;
  text: string;
  stars: number;
  date: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  content: ServiceDetailContent;
  onBack: () => void;
  onOpenChat: () => void;
  testimonials: Testimonial[];
  faqItems: FAQItem[];
}

const ServicePage: React.FC<ServicePageProps> = ({ content, onBack, onOpenChat, testimonials, faqItems }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  
  // SEO & Scroll Management
  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title & Description Update
    document.title = `${content.title} | Chappuis Sanitaire Sàrl`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${content.subtitle} - Intervention rapide à Rolle et sur La Côte. ${content.title} par un expert certifié.`);
    }

    // Inject Service Schema.org
    const serviceSchema = document.createElement('script');
    serviceSchema.type = 'application/ld+json';
    serviceSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": content.title,
      "provider": {
        "@type": "Plumber",
        "name": "Chappuis Sanitaire Sàrl"
      },
      "areaServed": {
        "@type": "State",
        "name": "Vaud, La Côte"
      },
      "description": content.fullDescription.substring(0, 160) + "...",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "CHF",
        "availability": "https://schema.org/InStock"
      }
    });
    document.head.appendChild(serviceSchema);

    return () => {
      document.head.removeChild(serviceSchema);
    };
  }, [content]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white min-h-screen pt-20"
    >
      {/* SERVICE HERO */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.heroImage} 
            alt={content.title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Service Expert
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light">
              {content.subtitle}
            </p>
          </motion.div>
        </div>

        <button 
          onClick={onBack}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-16">
        
        {/* MAIN DESCRIPTION & DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Présentation du service</h2>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                {content.fullDescription}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Prestations techniques</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.technicalList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-4">Pourquoi nous choisir ?</h3>
              <ul className="space-y-4">
                {content.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cyan-50 border border-cyan-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-cyan-900 mb-2">Besoin de ce service ?</h3>
              <p className="text-sm text-cyan-700 mb-6">
                Obtenez un devis rapide ou une intervention immédiate.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+41786577365" className="bg-cyan-600 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyan-700 transition-colors">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </a>
                <button 
                  onClick={onOpenChat}
                  className="bg-white text-cyan-700 border border-cyan-200 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Assistant devis
                </button>
              </div>
            </div>

            {/* SEO TAGS DISPLAY */}
            <div className="flex flex-wrap gap-2 pt-4">
              {content.seoKeywords.map((kw, i) => (
                <span key={i} className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SPECIFIC PROJECTS SECTION */}
        <div id={`projets-${content.id}`} className="mt-20 pt-20 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Projets Récents</h2>
          <p className="text-slate-500 mb-10">Exemples concrets pour la catégorie : {content.title}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.specificProjects.map((proj, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="overflow-hidden rounded-xl bg-slate-200 aspect-video mb-4 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS SECTION (ADDED) */}
        <div className="mt-24 pt-16 border-t border-slate-100">
           <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Ce que mes clients en disent</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100 relative hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default"
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
                </div>
              ))}
            </div>
             <div className="text-center mt-8">
               <a href="https://www.google.com/maps/place/Chappuis+Sanitaire+S%C3%A0rl/@46.4570452,6.3314501,15z/data=!4m6!3m5!1s0x478c479c2696a1bf:0x2e187da6cbb56e61!8m2!3d46.4621692!4d6.342086!16s%2Fg%2F11fmsgpshf?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-200 hover:border-cyan-500 transition-colors pb-1 text-sm">
                 Voir tous les avis sur Google Maps <ArrowRight className="w-4 h-4" />
               </a>
             </div>
        </div>

        {/* FAQ SECTION (ADDED) */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Questions Fréquentes</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden hover:border-cyan-200 transition-colors"
                >
                  <button 
                    onClick={() => toggleAccordion(i)} 
                    className="flex justify-between items-center w-full p-6 text-left font-bold text-slate-900 hover:text-cyan-700 transition-colors text-sm md:text-base"
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
        </div>

      </div>
    </motion.div>
  );
};

export default ServicePage;