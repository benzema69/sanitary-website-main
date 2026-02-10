
import React from 'react';
import { PHONE_HREF, PHONE_DISPLAY, EMAIL, NAV_LINKS } from '../data';

type LegalPage = 'mentions' | 'privacy' | 'cookies' | null;

interface FooterProps {
    scrollTo: (id: string) => void;
    setActiveLegalPage: (page: LegalPage) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollTo, setActiveLegalPage }) => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 pb-24 md:pb-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <div className="font-bold text-xl text-white uppercase tracking-tight mb-4">Chappuis Sanitaire</div>
                    <p className="text-sm leading-relaxed mb-4">
                        Artisan sanitaire qualifié basé à Rolle. Intervention rapide, travail soigné et garanti sur toute La Côte.
                    </p>
                </div>

                {/* Nav */}
                <div>
                    <h4 className="font-bold text-white mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm">
                        {NAV_LINKS.map((item) => (
                            <li key={item.id}>
                                <button onClick={() => scrollTo(item.id)} className="hover:text-cyan-400 transition-colors text-left">
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-white mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href={PHONE_HREF} className="hover:text-cyan-400 transition-colors">{PHONE_DISPLAY}</a></li>
                        <li><a href={`mailto:${EMAIL}`} className="hover:text-cyan-400 transition-colors">{EMAIL}</a></li>
                        <li>Rolle, Vaud</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-bold text-white mb-4">Légal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><button onClick={() => setActiveLegalPage('mentions')} className="hover:text-cyan-400 transition-colors">Mentions Légales</button></li>
                        <li><button onClick={() => setActiveLegalPage('privacy')} className="hover:text-cyan-400 transition-colors">Politique de Confidentialité</button></li>
                        <li><button onClick={() => setActiveLegalPage('cookies')} className="hover:text-cyan-400 transition-colors">Cookies</button></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Chappuis Sanitaire Sàrl. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
