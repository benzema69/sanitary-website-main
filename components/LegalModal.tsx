
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY } from '../data';

type LegalPage = 'mentions' | 'privacy' | 'cookies' | null;

const LegalModal: React.FC<{ page: LegalPage; onClose: () => void }> = ({ page, onClose }) => {
    if (!page) return null;

    const content = {
        mentions: (
            <>
                <h2 className="text-2xl font-bold mb-4">Mentions Légales</h2>
                <h3 className="text-lg font-bold mt-4">1. Éditeur du site</h3>
                <p>Chappuis Sanitaire Sàrl</p>
                <p>Chemin de Plein-Air 1, 1180 Rolle, Suisse</p>
                <p>Email : {EMAIL}</p>
                <p>Téléphone : {PHONE_DISPLAY}</p>

                <h3 className="text-lg font-bold mt-4">2. Directeur de la publication</h3>
                <p>Monsieur Chappuis</p>

                <h3 className="text-lg font-bold mt-4">3. Hébergement</h3>
                <p>Ce site est une démonstration technique.</p>

                <h3 className="text-lg font-bold mt-4">4. Propriété intellectuelle</h3>
                <p>Tous les contenus présents sur le site (textes, images, logos) sont la propriété exclusive de Chappuis Sanitaire Sàrl ou de ses partenaires.</p>
            </>
        ),
        privacy: (
            <>
                <h2 className="text-2xl font-bold mb-4">Politique de Protection des Données</h2>
                <p className="mb-2">Chappuis Sanitaire Sàrl s'engage à protéger la vie privée de ses utilisateurs.</p>

                <h3 className="text-lg font-bold mt-4">1. Collecte des données</h3>
                <p>Nous collectons uniquement les données transmises via le formulaire de contact ou l'assistant virtuel (Nom, Téléphone, Email, Description du projet) dans le but exclusif de répondre à votre demande de devis.</p>

                <h3 className="text-lg font-bold mt-4">2. Utilisation des données</h3>
                <p>Vos données ne sont ni vendues, ni louées à des tiers. Elles servent uniquement à la relation commerciale avec Chappuis Sanitaire Sàrl.</p>

                <h3 className="text-lg font-bold mt-4">3. Vos droits</h3>
                <p>Conformément à la LPD (Loi fédérale sur la protection des données), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à {EMAIL}.</p>
            </>
        ),
        cookies: (
            <>
                <h2 className="text-2xl font-bold mb-4">Paramètres des Cookies</h2>
                <p className="mb-4">Ce site utilise un nombre minimal de cookies pour assurer son bon fonctionnement.</p>

                <h3 className="text-lg font-bold mt-4">1. Cookies strictement nécessaires</h3>
                <p>Ces cookies sont indispensables à la navigation sur le site (ex: mémorisation de session de chat).</p>

                <h3 className="text-lg font-bold mt-4">2. Cookies analytiques</h3>
                <p>Nous n'utilisons pas de traceurs publicitaires intrusifs. Les données analytiques, si présentes, sont anonymisées.</p>

                <div className="mt-8 p-4 bg-slate-100 rounded text-sm text-slate-600">
                    Note : En continuant la navigation, vous acceptez l'utilisation de ces cookies techniques.
                </div>
            </>
        )
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                    <X className="w-5 h-5 text-slate-600" />
                </button>
                <div className="p-8 text-slate-800 leading-relaxed">
                    {content[page]}
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        Fermer
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default LegalModal;
