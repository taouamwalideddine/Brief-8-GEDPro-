# GEDPro - Plateforme GED RH Intelligente

GEDPro est une plateforme moderne de Gestion Électronique de Documents (GED) orientée RH, conçue pour optimiser les processus de gestion des documents et des candidatures.

## Fonctionnalités principales

- Gestion des documents RH (CV, lettres de motivation, contrats, etc.)
- Formulaires RH dynamiques et personnalisables
- Suivi des candidats avec gestion des états
- Planification et gestion des entretiens
- Extraction intelligente de compétences (OCR)
- Notifications en temps réel
- Gestion des utilisateurs et des rôles
- Architecture multi-entités (multi-tenant)

## Prérequis

- Node.js (v18+)
- npm (v9+)
- PostgreSQL (v14+)
- MongoDB (v6+)
- MinIO (pour le stockage des documents)
- Docker et Docker Compose (recommandé)

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/gedpro-backend.git
   cd gedpro-backend
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Configurer l'environnement :
   ```bash
   cp .env.example .env
   # Éditer le fichier .env avec vos configurations
   ```

4. Démarrer les services avec Docker Compose :
   ```bash
   docker-compose up -d
   ```

5. Exécuter les migrations :
   ```bash
   npm run migration:run
   ```

6. Démarrer l'application :
   ```bash
   # Développement
   npm run start:dev

   # Production
   npm run build
   npm run start:prod
   ```

## API Documentation

Une fois l'application démarrée, la documentation de l'API est disponible à l'adresse :
- Swagger UI: http://localhost:3000/api
- JSON: http://localhost:3000/api-json

## Structure du projet

```
gedpro-backend/
├── src/
│   ├── common/           # Code partagé (guards, interceptors, etc.)
│   ├── config/           # Configurations d'application
│   ├── database/         # Configurations et entités de base de données
│   ├── modules/          # Modules de l'application
│   │   ├── auth/         # Authentification et autorisation
│   │   ├── users/        # Gestion des utilisateurs
│   │   ├── candidates/   # Gestion des candidats
│   │   ├── documents/    # Gestion des documents
│   │   ├── forms/        # Formulaires dynamiques
│   │   ├── interviews/   # Gestion des entretiens
│   │   ├── notifications/# Notifications
│   │   └── ocr/          # Traitement OCR et extraction de compétences
│   ├── app.module.ts     # Module racine
│   └── main.ts           # Point d'entrée de l'application
├── test/                 # Tests
├── .env.example          # Exemple de configuration d'environnement
├── docker-compose.yml    # Configuration Docker Compose
└── package.json          # Dépendances et scripts
```

## Commandes utiles

- `npm run start:dev` - Démarrer en mode développement avec rechargement automatique
- `npm run build` - Compiler le code TypeScript
- `npm run test` - Exécuter les tests unitaires
- `npm run test:e2e` - Exécuter les tests d'intégration
- `npm run lint` - Vérifier la qualité du code
- `npm run format` - Formater le code avec Prettier
- `npm run migration:generate` - Générer une nouvelle migration
- `npm run migration:run` - Exécuter les migrations en attente

## Licence

Ce projet est sous licence [MIT](LICENSE).
