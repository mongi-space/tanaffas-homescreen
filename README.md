# Tanaffas™ — Landing Page (Web & Mobile)

Site vitrine et landing page responsive (Desktop & Mobile) pour **Tanaffas™** (Enterprise Intelligence & Santé Organisationnelle), disponible en 3 langues : **Français**, **English** et **العربية** (avec support RTL complet).

---

## 🌟 Fonctionnalités

- 🌐 **Tri-lingue (FR / EN / AR)** :
  - Détection et basculement dynamique de langue.
  - Support complet **RTL** (Right-to-Left) pour la langue arabe avec la typographie `Noto Kufi Arabic`.
  - Typographie adaptée pour le français et l'anglais (`Inter`, `Bricolage Grotesque`).
- 📱 **Mobile-First & Responsive** :
  - Navigation responsive avec tiroir mobile (*bottom sheet*) pour le choix de la langue.
  - Vue interactive du rapport d'évaluation (Score, Modules, Vue combinée) adaptée aux écrans tactiles et mobiles.
- ⚡ **Stack Moderne & Ultra-Légère** :
  - **React 19**
  - **Vite 6**
  - **Tailwind CSS v4**
  - **Motion (Framer Motion)**
  - **Lucide Icons**

---

## 🚀 Démarrage rapide

### Prérequis
- [Node.js](https://nodejs.org/) (v18+)
- npm ou pnpm ou bun

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

---

## 📂 Structure du projet

```
tanaffas-homescreen/
├── public/                # Favicons, logos, icônes & métadonnées SEO
├── src/
│   ├── components/
│   │   ├── LandingPage.tsx                # Page d'atterrissage complète & interactive
│   │   └── HeroBackgroundIllustration.tsx # Illustration de fond animée
│   ├── contexts/
│   │   └── LanguageContext.tsx            # Gestion i18n & traductions FR / EN / AR (RTL)
│   ├── App.tsx                            # Navbar, sélecteur de langue, sections & footer
│   ├── index.css                          # Styles Tailwind v4, polices et règles RTL
│   └── main.tsx                           # Point d'entrée React
├── index.html                             # Template HTML avec polices & métadonnées
├── vite.config.ts                         # Configuration Vite & Tailwind
└── tsconfig.json                          # Configuration TypeScript
```

---

## 🛡️ Licence
Propriétaire - Tanaffas™ 2026. Tous droits réservés.
