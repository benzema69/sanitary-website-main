<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Chappuis Sanitaire Sàrl - Site Web

Bienvenue sur le dépôt du site web de Chappuis Sanitaire Sàrl.
Ce projet est développé avec React, TypeScript, Vite et Tailwind CSS.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js (version 18 ou supérieure recommandée)
- npm

### Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/benzema69/sanitary-website-main.git
   cd sanitary-website-main
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

### Configuration
Créez un fichier `.env` à la racine pour configurer votre clé API Gemini :
```
GEMINI_API_KEY=votre_cle_api_gemini
```

### Lancement en local
Pour lancer le serveur de développement :
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:3000`.

## 🏗️ Structure du Projet

```
├── components/          # Composants React réutilisables
│   └── sections/        # Sections de la page d'accueil (Hero, Services, Contact, etc.)
├── data/                # Données statiques (Services, FAQ, Partenaires)
├── services/            # Services API (Gemini AI Chat)
├── App.tsx              # Composant principal (Layout & Routing)
├── index.tsx            # Point d'entrée React
├── index.html           # Template HTML
├── types.ts             # Types TypeScript partagés
└── vite.config.ts       # Configuration Vite
```

## 📦 Build pour la Production

Pour créer une version optimisée pour la production :
```bash
npm run build
```
Les fichiers seront générés dans le dossier `dist`.

## 📄 Licence
Tous droits réservés © Chappuis Sanitaire Sàrl.
