# 🎓 Présentation Projet de Stage - Gestion Scolaire

## 📋 Aperçu

Cette présentation professionnelle documente votre projet de stage **Plateforme de Gestion Scolaire** développé en équipe de 3 personnes avec NestJS et Next.js.

## 🚀 Fonctionnalités Ajoutées

### 1. **Carte "Aperçu" dans la Liste des Projets**

La carte du projet affiche :
- ✅ **Badge "Projet en groupe de 3"** avec icône Users
- 🎨 Bordure élégante avec effet hover
- 💡 Description courte percutante
- 🔗 Bouton "Présentation complète" vers la page détaillée
- 🏷️ Tags des technologies (NestJS, Next.js, MongoDB, etc.)

**Emplacement** : [components/Projects.tsx](components/Projects.tsx)

### 2. **Page de Présentation Détaillée**

Route accessible : `/projets/gestion-scolaire`

#### Sections Complètes :

##### 📍 **Vue d'Ensemble**
- Contexte du projet de stage
- Objectifs et périmètre fonctionnel
- Environnement collaboratif (Agile/Scrum)

##### 👥 **Méthodologie de Travail en Équipe**
- **Approche** : Scrum/Agile
- **4 Sprints détaillés** (7 semaines au total)
  - Sprint 1 : Setup et architecture
  - Sprint 2 : Fonctionnalités CRUD et RBAC
  - Sprint 3 : Interface utilisateur
  - Sprint 4 : Optimisation et déploiement

- **Répartition des Rôles** :
  - Backend Lead (Membre 1)
  - **Fullstack Developer** (Ziad FELLAHI)
  - Frontend Lead (Membre 3)

- **Outils de Collaboration** :
  - GitHub (versionning)
  - Trello (gestion tâches)
  - Discord (communication)
  - Figma (design)
  - Postman (tests API)

##### 🏗️ **Architecture Backend**
- **Diagramme ASCII** de l'architecture complète
- **Stack Détaillée** :
  - NestJS (Framework backend)
  - MongoDB + Mongoose (Base de données)
  - JWT + Passport (Authentification)
  - Class-Validator (Validation)

- **Mesures de Sécurité** :
  - Helmet.js
  - CORS configuré
  - Rate limiting
  - Bcrypt (hashage mots de passe)
  - Sanitization anti-injection

##### 🔐 **Logique RBAC (Isolation des Données)**

**2 Rôles détaillés** :
- **USER (Propriétaire)**
  - Permissions : Voir uniquement ses écoles
  - Restrictions : Pas de modification SIRET
  - Implémentation : Filtrage `{ ownerId: user.userId }`

- **SUPER_ADMIN**
  - Permissions : Accès total réseau
  - Restrictions : Actions loggées
  - Implémentation : Aucun filtre

**3 Exemples Concrets** :
1. USER récupère ses écoles
2. USER tente d'accéder à une école non possédée → 403 Forbidden
3. USER tente de modifier le SIRET → Champ ignoré

##### 🚀 **Tableau des Routes API**

Tableau professionnel avec **11 routes** :
- POST /auth/register (Public)
- POST /auth/login (Public)
- GET /schools (Authentifié)
- POST /schools (Authentifié)
- PATCH /schools/:id (Authentifié)
- DELETE /schools/:id (Admin)
- **POST /contacts** (Public - no JWT)
- **GET /contacts** (Admin seulement)
- GET /contacts/:id (Admin)
- DELETE /contacts/:id (Admin)

Chaque route affiche :
- Méthode HTTP (avec badge coloré)
- Chemin
- Niveau d'accès
- Description

##### 🔧 **Modifications et Simplifications**

**5 Modifications Documentées** :

1. **Formulaire de Contact Simplifié**
   - Avant : Champs obligatoires nombreux + statut 'lu'
   - Après : Nom et email obligatoires, téléphone/entreprise optionnels
   - Raison : Améliorer taux de conversion
   - Implémentation : `@IsOptional()` sur phone et company

2. **Gestion des Champs Sensibles**
   - DTOs séparés (UpdateSchoolDto vs UpdateSchoolAdminDto)
   - Protection SIRET et statuts de paiement

3. **Optimisation MongoDB**
   - Indexes sur ownerId et siret
   - Pagination automatique
   - Lean queries

4. **Messages en Français**
   - Tous les messages de validation traduits
   - Meilleure UX

5. **Logs de Sécurité**
   - Logger NestJS intégré
   - Traçabilité des actions critiques

##### 📊 **Résultats & Compétences**

**Métriques** :
- 12 endpoints API fonctionnels
- 3 modules NestJS
- 50+ tests unitaires
- Temps de réponse < 80ms
- Couverture > 85%

**Apprentissages** :
- Gestion de projet Agile
- Architecture backend scalable
- Système RBAC et sécurité
- Intégration frontend-backend
- Optimisation MongoDB
- Documentation technique

## 🎨 Design & UX

### Palette de Couleurs

- 🔵 **Bleu/Cyan** : Badge équipe, vue d'ensemble
- 🟣 **Purple/Pink** : Méthodologie, sprints
- 🟢 **Emerald/Vert** : Architecture backend
- 🟡 **Jaune/Orange** : RBAC et sécurité
- 🔴 **Rouge** : Restrictions et erreurs

### Composants Visuels

- ✅ Badges colorés pour projets d'équipe
- 📆 Cartes de sprints avec icône Calendar
- 👤 Rôles d'équipe en grille
- 🛠️ Outils de collaboration en grid
- 📊 Tableau API responsive et stylisé
- 🔀 Sections Avant/Après pour modifications
- 📈 Métriques et apprentissages en colonnes

## 📂 Structure des Fichiers

```
Portfolio/
├── app/
│   └── projets/
│       └── gestion-scolaire/
│           └── page.tsx                    // Page dédiée au projet
├── components/
│   ├── SchoolProjectDetail.tsx             // Composant de présentation
│   └── Projects.tsx                        // Liste (mise à jour avec badge)
├── data/
│   └── data.js                             // Données du projet (ID: 2)
└── SCHOOL_PROJECT_README.md                // Cette documentation
```

## 🔧 Utilisation

### Accéder à la Présentation

**Depuis la page d'accueil** :
1. Scrollez jusqu'à "Mes Projets"
2. Repérez la carte avec badge "Projet en groupe de 3"
3. Cliquez sur "Présentation complète →"

**URL directe** :
```
http://localhost:3000/projets/gestion-scolaire
```

### Personnaliser les Données

Modifiez [data/data.js](data/data.js) à partir de la ligne 260 (projet id: 2) :

```javascript
{
  id: 2,
  title: "Plateforme de Gestion Scolaire",
  teamProject: true,
  teamSize: 3,
  detailedPresentation: {
    overview: { ... },
    methodology: { ... },
    // ... autres sections
  }
}
```

## 📊 Sections Disponibles

| Section | Description | Icône |
|---------|-------------|-------|
| **Overview** | Vue d'ensemble et contexte | 🎯 Target |
| **Méthodologie** | Sprints, rôles, outils | 👥 Users |
| **Architecture** | Backend, stack, sécurité | 🗄️ Database |
| **RBAC** | Rôles, permissions, exemples | 🔐 Lock |
| **Routes API** | Tableau des endpoints | ⚡ Zap |
| **Modifications** | Avant/Après, justifications | 🔧 Wrench |
| **Résultats** | Métriques, apprentissages | 📈 TrendingUp |

## 🎓 Points de Présentation (Soutenance)

### Pour un Entretien ou Soutenance

**Phrase d'accroche** :
> "Dans le cadre de mon stage, j'ai développé en équipe de 3 une plateforme Fullstack de gestion scolaire avec une architecture moderne NestJS/Next.js et un système RBAC complexe garantissant l'isolation des données."

**Points clés à mentionner** :

1. **Travail d'Équipe** :
   - "Méthodologie Agile avec 4 sprints de 2 semaines"
   - "Répartition des rôles claire (Backend Lead, Fullstack, Frontend Lead)"
   - "Outils de collaboration professionnels (GitHub, Trello, Discord)"

2. **Responsabilités Personnelles** :
   - "J'ai développé le module Contact complet (Backend + Frontend)"
   - "Création des DTOs avec validation en français"
   - "Intégration des API dans l'interface Next.js"

3. **Technique** :
   - "Architecture RBAC avec filtrage contextuel des données"
   - "Formulaire de contact hybride (public + sécurisé admin)"
   - "Optimisations MongoDB (indexes, pagination, lean queries)"

4. **Résultats** :
   - "12 endpoints fonctionnels et documentés avec Swagger"
   - "50+ tests unitaires avec couverture > 85%"
   - "Temps de réponse moyen < 80ms"

### Structure de Présentation (10-15 min)

1. **Introduction** (2 min) : Contexte stage, équipe, objectifs
2. **Méthodologie Agile** (2 min) : Sprints, rôles, outils
3. **Architecture Technique** (3 min) : NestJS, MongoDB, RBAC
4. **Contributions Personnelles** (3 min) : Module Contact, DTOs, simplifications
5. **Démonstration** (3 min) : Swagger, routes publiques vs protégées
6. **Résultats & Apprentissages** (2 min) : Métriques, compétences acquises
7. **Questions** (5 min)

## 💡 Différences avec le Projet Auto-Écoles

| Aspect | Auto-Écoles (Solo) | Gestion Scolaire (Équipe) |
|--------|-------------------|---------------------------|
| **Contexte** | Projet personnel | Projet de stage en équipe |
| **Badge** | "Projet Phare" ⭐ | "Projet en groupe de 3" 👥 |
| **Focus** | Sécurité RBAC avancée | Méthodologie Agile + RBAC |
| **Sections** | 5 sections techniques | 7 sections (+ Méthodologie) |
| **Couleur** | Emerald (vert) | Blue/Purple (bleu/violet) |
| **Route** | /projet-auto-ecoles | /projets/gestion-scolaire |

## 🚀 Améliorations Futures (Optionnel)

1. **Ajouter des captures d'écran** :
   - Interface Next.js
   - Swagger UI
   - Diagramme UML (use cases)

2. **Intégrer des vidéos** :
   - Démonstration de l'application
   - Explication du RBAC en action

3. **Statistiques visuelles** :
   - Graphiques de performance (Chart.js)
   - Timeline des sprints interactive

4. **Export PDF** :
   - Bouton pour télécharger la présentation
   - Format imprimable pour dossier de stage

## 📝 Checklist de Présentation

Avant une soutenance, vérifiez :

- [ ] Tous les exemples de code sont corrects
- [ ] Les captures d'écran sont à jour (si ajoutées)
- [ ] Les métriques sont réalistes et vérifiables
- [ ] Les rôles d'équipe sont clairement définis
- [ ] Les outils de collaboration sont mentionnés
- [ ] Les apprentissages sont en lien avec le référentiel BTS SIO
- [ ] Le formulaire de contact simplifié est bien expliqué
- [ ] Les différences USER/ADMIN sont claires

## 📧 Contact & Support

Pour toute question sur l'implémentation :
- GitHub : [@Ziad-fellahi](https://github.com/Ziad-fellahi)

---

**Version** : 1.0  
**Date** : Février 2026  
**Auteur** : Ziad FELLAHI  
**Type** : Projet de Stage en Équipe (3 personnes)
