# Site Web de Mariage

Un site web élégant et responsive pour notre mariage, construit avec Next.js et Tailwind CSS.

## Fonctionnalités

- 📅 Compte à rebours jusqu'au jour J
- 📍 Informations sur les lieux (cérémonie et réception)
- 🏨 Liste des hébergements recommandés
- 📝 Formulaire RSVP interactif
- 📱 Design responsive pour tous les appareils

## Technologies utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/maxtouf/mariage-site.git
cd mariage-site
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Personnalisation

1. Modifiez les informations dans les fichiers :
   - `app/page.tsx` : Page d'accueil
   - `app/programme/page.tsx` : Programme de la journée
   - `app/lieu/page.tsx` : Informations sur les lieux
   - `app/hebergement/page.tsx` : Liste des hébergements
   - `app/rsvp/page.tsx` : Formulaire RSVP

2. Ajoutez vos propres images dans le dossier `public/images/`

3. Personnalisez les couleurs et le style dans les classes Tailwind

## Déploiement

Le site peut être facilement déployé sur Vercel :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre dépôt GitHub
3. Importez le projet
4. Vercel déploiera automatiquement votre site

## Licence

MIT