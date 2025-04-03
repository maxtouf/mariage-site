# Site de Mariage - Maxime & Cousin

Ce site web a été créé pour notre mariage qui aura lieu le 15 juin 2024. Il permet aux invités de consulter toutes les informations importantes concernant l'événement et de confirmer leur présence.

## Technologies utilisées

- [Next.js 14](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React](https://reactjs.org/) - Bibliothèque JavaScript

## Fonctionnalités

- Page d'accueil avec les informations essentielles
- Programme détaillé de la journée
- Informations sur le lieu du mariage
- Liste des hébergements recommandés
- Formulaire RSVP pour confirmer sa présence

## Installation

1. Clonez le dépôt :
\`\`\`bash
git clone https://github.com/maxtouf/mariage-site.git
cd mariage-site
\`\`\`

2. Installez les dépendances :
\`\`\`bash
npm install
\`\`\`

3. Lancez le serveur de développement :
\`\`\`bash
npm run dev
\`\`\`

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- \`npm run dev\` - Lance le serveur de développement
- \`npm run build\` - Crée une version de production
- \`npm run start\` - Lance la version de production
- \`npm run lint\` - Vérifie le code avec ESLint

## Structure du projet

\`\`\`
mariage-site/
├── app/
│   ├── components/     # Composants réutilisables
│   ├── hebergement/    # Page des hébergements
│   ├── lieu/          # Page du lieu
│   ├── programme/     # Page du programme
│   ├── rsvp/         # Page RSVP
│   ├── globals.css   # Styles globaux
│   ├── layout.tsx    # Layout principal
│   └── page.tsx      # Page d'accueil
├── public/           # Fichiers statiques
├── .eslintrc.json   # Configuration ESLint
├── next.config.js   # Configuration Next.js
├── package.json     # Dépendances et scripts
├── postcss.config.js # Configuration PostCSS
├── tailwind.config.ts # Configuration Tailwind
└── tsconfig.json    # Configuration TypeScript
\`\`\`

## Déploiement

Le site peut être déployé sur [Vercel](https://vercel.com) en quelques clics :

1. Créez un compte sur Vercel
2. Importez ce dépôt
3. Déployez !

## Contribution

Ce projet est privé et ne prend pas de contributions externes.

## Licence

Tous droits réservés © 2024 Maxime & Cousin