
import { Wrench, Bath, Waves, Sun, WashingMachine, Flame } from 'lucide-react';

// --- CONSTANTS ---
export const PHONE_DISPLAY = "078 657 73 65";
export const PHONE_HREF = "tel:+41786577365";
export const EMAIL = "chappuis.san@bluewin.ch";
export const MAPS_LINK = "https://www.google.com/maps/place/Chappuis+Sanitaire+S%C3%A0rl/@46.4570452,6.3314501,15z/data=!4m6!3m5!1s0x478c479c2696a1bf:0x2e187da6cbb56e61!8m2!3d46.4621692!4d6.342086!16s%2Fg%2F11fmsgpshf?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D";

export const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'A Propos', id: 'apropos' },
  { label: 'Projets', id: 'projets' },
  { label: 'Témoignages', id: 'temoignages' },
  { label: 'FAQ', id: 'faq' },
];

export const SERVICES = [
  {
    id: 'urgences',
    title: 'Intervention Rapide & Dépannage',
    description: 'Service d\'urgence sanitaire. Recherche de fuites et réparations immédiates.',
    icon: Wrench,
    highlight: true,
    features: [
      "Recherche & réparation de fuites (visibles/encastrées)",
      "Débouchage canalisations (WC, éviers, colonnes)",
      "Remplacement robinetterie & vannes d'arrêt",
      "Réparation chasses d'eau (mécanismes, joints)",
      "Dépannage production d'eau chaude (Boilers)",
      "Remplacement de siphons et bondes",
      "Intervention dégâts des eaux (Mise en sécurité)"
    ]
  },
  {
    id: 'sdb',
    title: 'Votre Salle de Bains de A à Z',
    description: 'Conception et réalisation clé en main. Du rêve à la réalité.',
    icon: Bath,
    features: [
      "Conception & Réalisation complète (Neuf/Rénovation)",
      "Douches à l'italienne & receveurs extra-plats",
      "Pose de baignoires (Îlot, Balnéo, Angle)",
      "Installation WC suspendus (Geberit) & Lavants",
      "Remplacement rapide de baignoire par une douche",
      "Aménagement PMR & Seniors (Sécurité, Barres)",
      "Pose de meubles & Raccordements complets"
    ]
  },
  {
    id: 'traitement',
    title: 'Qualité de l\'Eau & Adoucisseurs',
    description: 'Solutions techniques pour lutter contre le calcaire et purifier votre eau.',
    icon: Waves,
    features: [
      "Installation & Maintenance d'adoucisseurs d'eau",
      "Livraison de sel & Nettoyage résines",
      "Filtres anti-boue et anti-tartre",
      "Systèmes de filtration d'eau de boisson",
      "Osmoseurs & Fontaines sous évier",
      "Surpresseurs & Réducteurs de pression"
    ]
  },
  {
    id: 'technique',
    title: 'Chauffe-eau & Installations Techniques',
    description: 'Expertise thermique pour votre production d\'eau chaude sanitaire.',
    icon: Sun,
    features: [
      "Remplacement Boilers électriques tous volumes",
      "Installation Boilers Pompe à Chaleur (PAC)",
      "Détartrage & Maintenance préventive",
      "Remplacement groupes de sécurité",
      "Circulateurs (Bouclage ECS pour eau chaude instantanée)"
    ]
  },
  {
    id: 'cuisine',
    title: 'Raccordements Cuisines & Électroménager',
    description: 'Installations soignées pour votre cuisine et buanderie.',
    icon: WashingMachine,
    features: [
      "Raccordement Lave-linge & Lave-vaisselle",
      "Pose éviers & robinetterie cuisine",
      "Installation broyeurs d'évier",
      "Raccordement eau Frigos américains",
      "Création d'alimentations et vidanges sur mesure"
    ]
  },
  {
    id: 'canalisations',
    title: 'Réseaux, Gaz & Canalisations',
    description: 'Haute technicité pour l\'inspection et la rénovation des réseaux.',
    icon: Flame,
    features: [
      "Inspection vidéo de canalisations (Caméra)",
      "Curage haute pression des réseaux",
      "Installations conduites de gaz & Contrôle étanchéité",
      "Remise à neuf colonnes de chute (Fonte/PVC/PE)",
      "Raccordement réseau communal (Introduction)",
      "Installation robinets extérieurs (Arrosage)"
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "Les devis sont-ils gratuits ?",
    answer: "Oui, tous mes devis pour les travaux de rénovation, d'installation ou de remplacement sont gratuits et sans engagement. Cependant, pour les recherches de fuites complexes nécessitant l'utilisation de mon matériel de détection spécifique (caméra, gaz traceur), un forfait de diagnostic peut être appliqué."
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Pour les urgences vitales (inondation majeure, rupture de canalisation, panne totale d'eau chaude en hiver), je m'efforce d'intervenir dans les 2 à 4 heures sur La Côte. Pour les dépannages courants, mon délai est généralement de 24 à 48 heures ouvrables."
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "J'interviens principalement sur toute La Côte vaudoise, de Versoix à Morges, incluant Nyon, Gland, Rolle, Aubonne et les communes du pied du Jura. Pour des chantiers de rénovation importants, je peux étudier des demandes légèrement au-delà de ce périmètre."
  },
  {
    question: "Vos travaux sont-ils garantis ?",
    answer: "Absolument. En tant qu'entreprise suisse qualifiée (CFC/Maîtrise), tous mes travaux d'installation sont garantis selon les normes SIA en vigueur. J'assure personnellement le service après-vente du matériel installé."
  },
  {
    question: "Travaillez-vous avec des régies immobilières ?",
    answer: "Oui, je collabore régulièrement avec plusieurs régies de la région pour l'entretien et le dépannage de parcs immobiliers. Je suis habitué à gérer la coordination avec les locataires."
  }
];

export const PARTNERS = [
  { 
    name: "Sanitas Troesch", 
    type: "text", 
    style: "font-bold tracking-tight italic" 
  },
  { 
    name: "Geberit", 
    type: "image", 
    url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Geberit_Logo.svg" 
  },
  { 
    name: "Laufen", 
    type: "image", 
    url: "https://upload.wikimedia.org/wikipedia/commons/2/25/Laufen_Bathrooms_Logo.svg" 
  },
  { 
    name: "KWC", 
    type: "image", 
    url: "https://upload.wikimedia.org/wikipedia/commons/8/82/KWC_logo.svg" 
  },
  { 
    name: "Getaz-Miauton", 
    type: "text", 
    style: "font-black uppercase tracking-widest" 
  },
  {
    name: "Villeroy & Boch",
    type: "image",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Villeroy_%26_Boch_Logo.svg"
  }
];


export const TESTIMONIALS = [
  {
    name: 'Jérémie Sordet',
    context: 'Rolle',
    text: 'Service excellent merci beaucoup du travail effectué chez moi. Excellent travail.',
    stars: 5,
    date: 'Il y a 1 mois'
  },
  {
    name: 'Simo Bendidi',
    context: 'Local Guide',
    text: 'Super rapide, serviable et travail minutieux.',
    stars: 5,
    date: 'Il y a 3 ans'
  },
  {
    name: 'Philippe Rosset',
    context: 'Local Guide',
    text: '(Avis 5 étoiles sans commentaire textuel - Client vérifié Google)',
    stars: 5,
    date: 'Il y a 2 ans'
  }
];

export const LOCATIONS = {
  center: ["Rolle", "Mont-sur-Rolle", "Perroy", "Gilly", "Tartegnin", "Essertines-sur-Rolle", "Bursinel", "Dully", "Bursins", "Vinzel", "Luins"],
  east: ["Begnins", "Vich", "Coinsins", "Duillier", "Gland", "Prangins", "Nyon", "Eysins", "Signy-Avenex", "Gren", "Trélex", "Gingins", "Genolier", "Crans-près-Céligny"], 
  west: ["Allaman", "Féchy", "Bougy-Villars", "Aubonne", "Lavigny", "Etoy", "Buchillon", "Saint-Prex", "Lussy-sur-Morges", "Villars-sous-Yens", "Denens", "Yens", "Morges", "Vufflens-le-Château"], 
  north: ["Burtigny", "Le Vaud", "Marchissy", "Longirod", "Saint-George", "Gimel", "Saint-Oyens", "Saubraz", "Biere", "Berolle", "Mollens", "Ballens", "Apples", "Bussy-Chardonney", "Reverolle", "Clarmont", "Arzier-Le Muids", "Bassins"]
};

export const PROJECTS = [
  {
    title: 'Rénovation Complète',
    img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop', 
    tag: 'Rénovation'
  },
  {
    title: 'Installation Technique',
    img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop', 
    tag: 'Installation'
  },
  {
    title: 'Robinetterie KWC',
    img: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=600&auto=format&fit=crop', 
    tag: 'Sanitaire'
  }
];
