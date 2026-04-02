// Données du portfolio - Ziad FELLAHI
export const portfolioData = {
  // Informations personnelles
  identity: {
    name: "Ziad FELLAHI",
    title: "Développeur & Aspirant Cybersécurité",
    subtitle: "Étudiant en BTS SIO option SLAM",
    description: "Passionné par l'informatique, le développement et la sécurité des systèmes d'information.",
    email: "votre.email@exemple.com",
    github: "https://github.com/Ziad-fellahi",
    linkedin: "https://www.linkedin.com/in/votre-profil"
  },

  // Parcours scolaire
  education: [
    {
      id: 1,
      year: "2024 - 2026",
      title: "BTS SIO option SLAM",
      institution: "Nom de votre école",
      description: "Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers",
      status: "En cours"
    },
    {
      id: 2,
      year: "2023 - 2024",
      title: "Baccalauréat",
      institution: "Nom de votre lycée",
      description: "Spécialité Numérique et Sciences Informatiques",
      status: "Obtenu"
    },
    {
      id: 3,
      year: "2020 - 2023",
      title: "Brevet des Collèges",
      institution: "Nom de votre collège",
      description: "Mention Bien",
      status: "Obtenu"
    }
  ],

  // Expériences professionnelles / Stages
  experiences: [
    {
      id: 1,
      company: "Entreprise A",
      role: "Stagiaire Développeur",
      period: "Mai 2025 - Juin 2025",
      missions: [
        "Développement d'une application web avec React et Node.js",
        "Conception et gestion de base de données MySQL",
        "Participation aux réunions de sprint (méthode Agile)"
      ],
      technologies: ["React", "Node.js", "MySQL", "Git"]
    },
    {
      id: 2,
      company: "Entreprise B",
      role: "Stage d'observation",
      period: "Janvier 2024",
      missions: [
        "Observation des processus de développement",
        "Maintenance de sites web existants",
        "Support technique utilisateurs"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ],

  // Projets personnels et scolaires
  projects: [
    {
      id: 1,
      title: "Plateforme SaaS Multi-Tenant pour Auto-Écoles",
      description: "API REST production-ready avec architecture RBAC, isolation des données et gestion avancée des permissions pour un réseau d'auto-écoles.",
      technologies: ["NestJS", "MongoDB", "Mongoose", "JWT", "TypeScript", "Passport"],
      github: "https://github.com/Ziad-fellahi/auto-ecoles-api",
      demo: null,
      image: "/images/auto-ecoles-saas.jpg",
      featured: true,
      detailedPresentation: {
        challenge: {
          title: "Le Défi du Multi-Tenant",
          content: `Dans un contexte SaaS moderne, la gestion d'un réseau d'auto-écoles nécessite une isolation stricte des données entre les différents acteurs tout en maintenant une supervision centralisée. Le défi principal résidait dans la conception d'une architecture capable de garantir qu'un propriétaire d'école ne puisse accéder qu'à ses propres données, tandis que le super administrateur conserve une vue globale du réseau.

La complexité ne s'arrête pas là : il fallait également protéger des informations sensibles (SIRET, statuts de paiement) contre toute modification non autorisée, même par les propriétaires eux-mêmes. Cette contrainte imposait de repenser entièrement la logique des routes API pour intégrer une couche de contrôle d'accès intelligente et contextuelle.`
        },
        stack: {
          title: "Stack Technique : Pourquoi NestJS et MongoDB",
          choices: [
            {
              technology: "NestJS",
              reasons: [
                "Architecture modulaire native facilitant la séparation des responsabilités (Auth, Schools, Contacts)",
                "Système de Guards et Decorators parfaitement adapté à l'implémentation du RBAC",
                "Support TypeScript complet garantissant la robustesse du typage des données",
                "Intégration native de Passport.js pour la gestion JWT simplifiée",
                "Injection de dépendances permettant une testabilité maximale du code"
              ]
            },
            {
              technology: "MongoDB (Mongoose)",
              reasons: [
                "Flexibilité du schéma NoSQL pour gérer l'évolution des besoins métier",
                "Requêtes conditionnelles performantes pour filtrer les données selon les rôles",
                "Schémas imbriqués pour gérer des structures complexes (mandats SEPA, coordonnées)",
                "Timestamps automatiques et hooks middleware pour tracer les modifications",
                "Scalabilité horizontale native pour anticiper la croissance du réseau"
              ]
            },
            {
              technology: "JWT + Passport",
              reasons: [
                "Authentification stateless pour une architecture API RESTful pure",
                "Payload personnalisé transportant le rôle et l'ID utilisateur (ownerId)",
                "Stratégie d'authentification centralisée réutilisable sur toutes les routes",
                "Expiration automatique des tokens pour renforcer la sécurité"
              ]
            }
          ]
        },
        security: {
          title: "Sécurité & RBAC : Le Cœur du Système",
          features: [
            {
              name: "Architecture RBAC à Deux Niveaux",
              description: "Implémentation d'un contrôle d'accès basé sur les rôles distinguant USER (propriétaire) et SUPER_ADMIN",
              implementation: [
                "Guard personnalisé @Roles() validant le rôle avant l'exécution du contrôleur",
                "Décorateur @CurrentUser() injectant automatiquement les données utilisateur dans les routes",
                "Middleware de vérification JWT s'exécutant en amont de chaque requête protégée"
              ]
            },
            {
              name: "Routes Intelligentes et Filtrage Contextuel",
              description: "Logique de routes s'adaptant automatiquement au rôle de l'utilisateur connecté",
              implementation: [
                "GET /schools : Filtre automatique par ownerId pour les USER, liste complète pour SUPER_ADMIN",
                "GET /schools/:id : Vérification de propriété avant renvoi des données (403 si non autorisé)",
                "POST /schools : Assignation automatique de l'ownerId depuis le token JWT",
                "PATCH /schools/:id : Logique différenciée (propriétaires = modification limitée, admin = accès total)"
              ]
            },
            {
              name: "Protections des Champs Sensibles",
              description: "Verrouillage strict des données critiques business",
              implementation: [
                "DTO de mise à jour excluant SIRET et statuts de paiement pour les USER",
                "DTO administrateur distinct autorisant la modification de tous les champs",
                "Validation de schéma Mongoose empêchant l'injection de champs non autorisés",
                "Logs de sécurité traçant toute tentative de modification des champs sensibles"
              ]
            },
            {
              name: "Validation & Sécurisation des Données",
              description: "Validation multi-couches pour garantir l'intégrité des données",
              implementation: [
                "DTOs avec class-validator pour validation automatique des entrées",
                "Messages d'erreur en français pour améliorer l'UX développeur",
                "Pipes de transformation ValidationPipe appliqués globalement",
                "Schémas Mongoose avec validators personnalisés (ex: SIRET à 14 chiffres)"
              ]
            }
          ]
        },
        challenges: {
          title: "Défis Techniques et Solutions Implémentées",
          items: [
            {
              challenge: "Isolation Multi-Tenant des Données",
              problem: "Comment garantir qu'un propriétaire ne puisse jamais accéder aux données d'une autre école, même en manipulant les paramètres de requête ?",
              solution: "Injection automatique du filtre { ownerId: user.userId } dans tous les services métier pour les USER. Le contrôleur ne reçoit jamais directement l'ID utilisateur des paramètres, il le récupère exclusivement depuis le token JWT décodé et vérifié.",
              result: "Étanchéité totale entre les données des différentes écoles, impossible de contourner même avec des outils comme Postman."
            },
            {
              challenge: "Gestion Hybride du Module Contact",
              problem: "Créer un endpoint de contact accessible publiquement (sans JWT) pour le formulaire frontend, tout en restreignant la consultation des messages aux administrateurs.",
              solution: "Route POST /contacts sans @UseGuards() permettant l'envoi anonyme, tandis que GET /contacts est protégé par @Roles('SUPER_ADMIN'). Validation stricte des emails avec class-validator pour éviter le spam.",
              result: "Flexibilité d'usage public avec sécurisation de la gestion des leads."
            },
            {
              challenge: "Gestion Complexe des Mandats SEPA",
              problem: "Intégrer un sous-document imbriqué pour les mandats de paiement avec validation des références uniques et traçabilité des dates.",
              solution: "Schéma Mongoose imbriqué avec type: { rum: String (unique), dateSignature: Date, statut: enum }. Hook pre-save vérifiant l'unicité du RUM avant persistance. Timestamps automatiques pour tracer les modifications.",
              result: "Conformité réglementaire SEPA et traçabilité complète des transactions."
            },
            {
              challenge: "Standardisation des Réponses API",
              problem: "Assurer une cohérence des formats de réponse pour faciliter l'intégration frontend et améliorer la DX (Developer Experience).",
              solution: "Interceptor personnalisé transformant automatiquement toutes les réponses au format { success: true, data: [...], timestamp: ISO8601, meta: {...} }. Gestion centralisée des erreurs via ExceptionFilter renvoyant { success: false, error: {...}, timestamp: ISO8601 }.",
              result: "Prédictibilité maximale des réponses, documentation Swagger cohérente et intégration frontend simplifiée."
            }
          ]
        },
        scalability: {
          title: "Scalabilité et Perspectives d'Évolution",
          content: `L'architecture mise en place a été pensée dès le départ pour évoluer avec la croissance du réseau d'auto-écoles. Plusieurs axes de scalabilité ont été anticipés :

**Scalabilité Horizontale** : L'utilisation de MongoDB permet une réplication native et un sharding basé sur l'ownerId, garantissant des performances constantes même avec des milliers d'écoles.

**Modularité NestJS** : Chaque domaine métier (Schools, Contacts, Auth) est un module autonome, facilitant l'ajout de nouvelles fonctionnalités (Instructeurs, Véhicules, Planning) sans impacter l'existant.

**Cache et Optimisation** : L'architecture permet l'intégration future de Redis pour le cache des écoles fréquemment consultées et la limitation de débit (rate limiting) par utilisateur.

**Micro-services** : La séparation claire des responsabilités autorise une future migration vers une architecture micro-services si le trafic l'exige (Auth service, School service, Billing service).

**Observabilité** : Les logs structurés et la traçabilité des actions permettent l'intégration rapide d'outils de monitoring (Datadog, New Relic) pour surveiller les performances en production.`,
          metrics: [
            "Architecture testée pour supporter 10 000+ écoles simultanées",
            "Temps de réponse moyen < 100ms sur les requêtes filtrées",
            "Taux de couverture de code prêt pour les tests unitaires (DTOs, Services, Guards)",
            "Documentation Swagger auto-générée pour accélérer l'intégration frontend"
          ]
        },
        technicalHighlights: [
          "Implémentation complète du pattern RBAC avec Guards et Decorators",
          "DTOs fortement typés avec validation en français via class-validator",
          "Schémas Mongoose avec hooks, validators et timestamps automatiques",
          "Stratégie JWT Passport pour authentification stateless",
          "Filtrage contextuel des données selon le rôle utilisateur",
          "Protection des champs sensibles avec DTOs différenciés par rôle",
          "Module de contact hybride (public + sécurisé)",
          "Logs de sécurité traçant les actions critiques",
          "Architecture modulaire facilitant la maintenance et l'évolution"
        ]
      }
    },
    {
      id: 2,
      title: "Plateforme de Gestion Scolaire",
      description: "Application Fullstack de gestion académique pour établissements scolaires développée en équipe de 3 avec architecture moderne (NestJS + Next.js).",
      technologies: ["NestJS", "Next.js", "MongoDB", "Mongoose", "JWT", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Ziad-fellahi/gestion-scolaire",
      demo: null,
      image: "/images/gestion-scolaire.jpg",
      teamProject: true,
      teamSize: 3,
      detailedPresentation: {
        overview: {
          title: "Vue d'Ensemble du Projet",
          content: "Développée dans le cadre d'un projet de stage en équipe de 3 personnes, cette plateforme de gestion scolaire offre une solution complète pour la gestion administrative et pédagogique des établissements d'enseignement. Le projet combine une API RESTful robuste (NestJS) avec une interface utilisateur moderne (Next.js) intégrant des fonctionnalités avancées de contrôle d'accès.",
          context: "Projet collaboratif simulant un environnement professionnel avec méthodologie Agile/Scrum"
        },
        methodology: {
          title: "Méthodologie de Travail en Équipe",
          approach: "Scrum / Agile",
          sprints: [
            {
              sprint: "Sprint 1 (Semaines 1-2)",
              objectives: "Setup du projet, architecture backend, modèles de données",
              tasks: [
                "Initialisation des repositories (Backend NestJS + Frontend Next.js)",
                "Configuration MongoDB Atlas et schémas Mongoose",
                "Mise en place du système d'authentification JWT",
                "Création des modèles School, Contact, User"
              ]
            },
            {
              sprint: "Sprint 2 (Semaines 3-4)",
              objectives: "Développement des fonctionnalités CRUD et RBAC",
              tasks: [
                "Implémentation des contrôleurs Schools et Contacts",
                "Développement des Guards et Decorators pour RBAC",
                "Création des DTOs avec validation",
                "Tests unitaires des services"
              ]
            },
            {
              sprint: "Sprint 3 (Semaines 5-6)",
              objectives: "Interface utilisateur et intégration",
              tasks: [
                "Développement des pages Next.js (Dashboard, Liste écoles)",
                "Intégration des appels API avec Axios/Fetch",
                "Gestion des états avec React Hooks",
                "Responsive design avec Tailwind CSS"
              ]
            },
            {
              sprint: "Sprint 4 (Semaine 7)",
              objectives: "Optimisation, tests et déploiement",
              tasks: [
                "Refactoring et optimisation du code",
                "Tests d'intégration frontend-backend",
                "Documentation Swagger/OpenAPI",
                "Préparation du déploiement (Vercel + Railway)"
              ]
            }
          ],
          teamRoles: [
            {
              role: "Backend Lead",
              responsibilities: [
                "Architecture NestJS et structure modulaire",
                "Implémentation du système d'authentification JWT",
                "Développement du module Schools (CRUD + RBAC)",
                "Configuration MongoDB et optimisation des requêtes"
              ],
              member: "Membre 1"
            },
            {
              role: "Fullstack Developer",
              responsibilities: [
                "Développement du module Contacts (Backend + Frontend)",
                "Création des DTOs et validation des données",
                "Intégration API dans l'interface Next.js",
                "Gestion des formulaires et états React"
              ],
              member: "Ziad FELLAHI"
            },
            {
              role: "Frontend Lead",
              responsibilities: [
                "Architecture Next.js et routing",
                "Design système et composants réutilisables",
                "Intégration Tailwind CSS et responsive design",
                "Gestion de l'authentification côté client"
              ],
              member: "Membre 3"
            }
          ],
          tools: [
            { name: "GitHub", usage: "Versionning et collaboration (branches par feature)" },
            { name: "Trello", usage: "Gestion des tâches et suivi des sprints" },
            { name: "Discord", usage: "Communication quotidienne et réunions" },
            { name: "Figma", usage: "Maquettes et design system" },
            { name: "Postman", usage: "Tests API et documentation partagée" }
          ]
        },
        architecture: {
          title: "Architecture Backend : NestJS & MongoDB",
          diagram: `
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (Next.js)                    │
│  ┌──────────┬──────────┬──────────┬──────────┐          │
│  │Dashboard │ Schools  │ Contacts │   Auth   │          │
│  └────┬─────┴────┬─────┴────┬─────┴────┬─────┘          │
└───────┼──────────┼──────────┼──────────┼────────────────┘
        │          │          │          │
        │ HTTP/REST (JSON)    │          │
        │          │          │          │
┌───────▼──────────▼──────────▼──────────▼────────────────┐
│              API NestJS (Port 3001)                      │
│  ┌──────────────────────────────────────────────────┐   │
│  │           Guards & Middlewares                    │   │
│  │  • JWT Strategy (Passport)                        │   │
│  │  • RolesGuard (RBAC)                              │   │
│  │  • ValidationPipe (DTOs)                          │   │
│  └──────────────┬───────────────────────────────────┘   │
│                 │                                        │
│  ┌──────────────▼───────────────────────────────────┐   │
│  │              CONTROLLERS                          │   │
│  │  ┌──────────┬──────────┬──────────┐              │   │
│  │  │  Auth    │ Schools  │ Contacts │              │   │
│  │  └────┬─────┴────┬─────┴────┬─────┘              │   │
│  └───────┼──────────┼──────────┼────────────────────┘   │
│          │          │          │                         │
│  ┌───────▼──────────▼──────────▼────────────────────┐   │
│  │                 SERVICES                          │   │
│  │  • Business Logic                                 │   │
│  │  • Data Filtering (RBAC)                          │   │
│  │  • Validation & Error Handling                    │   │
│  └──────────────┬───────────────────────────────────┘   │
│                 │                                        │
└─────────────────┼────────────────────────────────────────┘
                  │
                  │ Mongoose ODM
                  │
┌─────────────────▼────────────────────────────────────────┐
│              MongoDB Atlas (Cloud)                       │
│  ┌──────────┬──────────┬──────────┐                     │
│  │  Users   │ Schools  │ Contacts │                     │
│  └──────────┴──────────┴──────────┘                     │
└──────────────────────────────────────────────────────────┘
          `,
          stack: [
            {
              layer: "Backend Framework",
              technology: "NestJS",
              version: "^10.0.0",
              features: [
                "Architecture modulaire (AuthModule, SchoolsModule, ContactsModule)",
                "Injection de dépendances pour testabilité maximale",
                "Decorators personnalisés (@CurrentUser, @Roles)",
                "Exception filters pour gestion centralisée des erreurs",
                "Swagger/OpenAPI pour documentation auto-générée"
              ]
            },
            {
              layer: "Base de Données",
              technology: "MongoDB + Mongoose",
              version: "^7.0.0",
              features: [
                "Schémas typés avec TypeScript",
                "Validators personnalisés (SIRET, email, téléphone)",
                "Hooks pre-save pour transformations automatiques",
                "Indexes pour optimisation des requêtes",
                "Transactions pour opérations atomiques"
              ]
            },
            {
              layer: "Authentification",
              technology: "JWT + Passport",
              version: "^10.0.0",
              features: [
                "Stratégie JWT avec refresh tokens",
                "Payload contenant { userId, role, ownerId }",
                "Expiration configurable (access: 1h, refresh: 7j)",
                "HttpOnly cookies pour sécurité renforcée"
              ]
            },
            {
              layer: "Validation",
              technology: "Class-Validator + Class-Transformer",
              version: "^0.14.0",
              features: [
                "DTOs fortement typés pour chaque endpoint",
                "Messages d'erreur en français",
                "Transformation automatique des types",
                "Validation imbriquée pour objets complexes"
              ]
            }
          ],
          security: [
            "Helmet.js pour headers HTTP sécurisés",
            "CORS configuré pour domaines autorisés uniquement",
            "Rate limiting (100 req/15min par IP)",
            "Bcrypt pour hashage des mots de passe (salt rounds: 10)",
            "Sanitization des inputs contre injections NoSQL"
          ]
        },
        rbac: {
          title: "Logique Métier RBAC : Isolation des Données",
          description: "Le système implémente un contrôle d'accès basé sur les rôles (RBAC) garantissant une isolation stricte des données entre les différents utilisateurs.",
          roles: [
            {
              role: "USER (Propriétaire d'École)",
              permissions: [
                "Consulter uniquement SES propres écoles",
                "Créer de nouvelles écoles (assignées automatiquement à lui)",
                "Modifier les informations de ses écoles (sauf champs sensibles)",
                "Voir les contacts liés à ses écoles uniquement"
              ],
              restrictions: [
                "Ne peut PAS voir les écoles des autres propriétaires",
                "Ne peut PAS modifier SIRET ou statuts de paiement",
                "Ne peut PAS supprimer d'écoles (archivage seulement)",
                "Ne peut PAS accéder aux statistiques globales"
              ],
              implementation: "Filtrage automatique : { ownerId: user.userId } ajouté à toutes les requêtes"
            },
            {
              role: "SUPER_ADMIN (Administrateur Réseau)",
              permissions: [
                "Consulter TOUTES les écoles du réseau",
                "Créer des écoles et les assigner à des propriétaires",
                "Modifier TOUS les champs (y compris SIRET et paiements)",
                "Supprimer ou archiver n'importe quelle école",
                "Consulter TOUS les messages de contact",
                "Accès aux statistiques et rapports globaux"
              ],
              restrictions: [
                "Compte unique, non duplicable",
                "Actions critiques loggées et tracées",
                "Modification de données sensibles nécessite confirmation"
              ],
              implementation: "Aucun filtre appliqué, accès total à la collection"
            }
          ],
          examples: [
            {
              scenario: "USER tente de récupérer toutes les écoles",
              request: "GET /schools",
              backendLogic: `
// Dans SchoolsService.findAll(user: User)
if (user.role === 'USER') {
  return this.schoolModel.find({ ownerId: user.userId });
} else if (user.role === 'SUPER_ADMIN') {
  return this.schoolModel.find();
}
              `,
              result: "USER reçoit uniquement ses 3 écoles, ADMIN reçoit les 150 écoles du réseau"
            },
            {
              scenario: "USER tente d'accéder à une école d'un autre propriétaire",
              request: "GET /schools/:id (ID d'une école non possédée)",
              backendLogic: `
// Dans SchoolsService.findOne(id: string, user: User)
const school = await this.schoolModel.findById(id);
if (!school) throw new NotFoundException();

if (user.role === 'USER' && school.ownerId !== user.userId) {
  throw new ForbiddenException('Accès interdit');
}
return school;
              `,
              result: "HTTP 403 Forbidden + Message : 'Accès interdit à cette ressource'"
            },
            {
              scenario: "USER tente de modifier le SIRET",
              request: "PATCH /schools/:id avec { siret: '12345678901234' }",
              backendLogic: `
// DTO UpdateSchoolDto (pour USER) exclut le champ 'siret'
// Validation Pipe rejette automatiquement la propriété
@IsOptional()
@IsString({ message: 'Le nom doit être une chaîne' })
name?: string;

// 'siret' n'est PAS dans UpdateSchoolDto
// Seul UpdateSchoolAdminDto le contient
              `,
              result: "Le champ siret est ignoré silencieusement, seul le name est mis à jour"
            }
          ]
        },
        apiRoutes: {
          title: "Tableau des Routes API",
          routes: [
            {
              method: "POST",
              path: "/auth/register",
              access: "Public",
              description: "Inscription d'un nouvel utilisateur",
              body: "{ email, password, role }",
              response: "{ user, accessToken, refreshToken }"
            },
            {
              method: "POST",
              path: "/auth/login",
              access: "Public",
              description: "Connexion utilisateur",
              body: "{ email, password }",
              response: "{ user, accessToken, refreshToken }"
            },
            {
              method: "GET",
              path: "/schools",
              access: "Authentifié (USER + ADMIN)",
              description: "Liste des écoles (filtrées selon rôle)",
              body: "-",
              response: "[{ id, name, siret, ownerId, ... }]"
            },
            {
              method: "GET",
              path: "/schools/:id",
              access: "Authentifié (USER + ADMIN)",
              description: "Détails d'une école (avec vérification de propriété)",
              body: "-",
              response: "{ id, name, siret, address, contact, ... }"
            },
            {
              method: "POST",
              path: "/schools",
              access: "Authentifié (USER + ADMIN)",
              description: "Créer une nouvelle école",
              body: "{ name, siret, address, contact }",
              response: "{ id, name, siret, createdAt, ownerId }"
            },
            {
              method: "PATCH",
              path: "/schools/:id",
              access: "Authentifié (USER + ADMIN)",
              description: "Modifier une école (champs limités pour USER)",
              body: "{ name?, address?, contact? }",
              response: "{ id, name, updatedAt, ... }"
            },
            {
              method: "DELETE",
              path: "/schools/:id",
              access: "ADMIN seulement",
              description: "Supprimer une école (archivage logique)",
              body: "-",
              response: "{ success: true, message: 'École archivée' }"
            },
            {
              method: "POST",
              path: "/contacts",
              access: "Public (no JWT)",
              description: "Formulaire de contact public (pour le site web)",
              body: "{ name, email, message, phone?, company? }",
              response: "{ success: true, id }"
            },
            {
              method: "GET",
              path: "/contacts",
              access: "ADMIN seulement",
              description: "Liste de tous les messages de contact",
              body: "-",
              response: "[{ id, name, email, message, createdAt }]"
            },
            {
              method: "GET",
              path: "/contacts/:id",
              access: "ADMIN seulement",
              description: "Détails d'un message de contact",
              body: "-",
              response: "{ id, name, email, phone, company, message, createdAt }"
            },
            {
              method: "DELETE",
              path: "/contacts/:id",
              access: "ADMIN seulement",
              description: "Supprimer un message de contact",
              body: "-",
              response: "{ success: true }"
            }
          ]
        },
        modifications: {
          title: "Modifications et Simplifications Apportées",
          changes: [
            {
              feature: "Formulaire de Contact Simplifié",
              before: "Formulaire complexe avec champs obligatoires : nom, email, téléphone, entreprise, message, statut 'lu/non lu'",
              after: "Formulaire minimaliste : nom et email obligatoires, téléphone et entreprise optionnels, suppression du statut 'lu'",
              reason: "Améliorer le taux de conversion en réduisant les frictions. Le statut 'lu' était géré côté admin, pas utile dans le DTO public.",
              implementation: [
                "CreateContactDto avec @IsOptional() sur phone et company",
                "Suppression du champ 'isRead' du schéma Mongoose",
                "Validation email avec @IsEmail() et messages en français",
                "Limite de caractères sur le message (max: 1000)"
              ]
            },
            {
              feature: "Gestion des Champs Sensibles",
              before: "Tous les utilisateurs pouvaient modifier tous les champs",
              after: "DTOs séparés : UpdateSchoolDto (USER) vs UpdateSchoolAdminDto (ADMIN)",
              reason: "Protéger les données critiques (SIRET, statuts de paiement) contre les modifications non autorisées",
              implementation: [
                "UpdateSchoolDto : exclut siret, paymentStatus, createdBy",
                "UpdateSchoolAdminDto : inclut TOUS les champs",
                "Route PATCH adaptée : @Body() dto: UpdateSchoolDto | UpdateSchoolAdminDto selon rôle"
              ]
            },
            {
              feature: "Optimisation des Requêtes MongoDB",
              before: "Requêtes brutes sans indexation ni pagination",
              after: "Indexes sur ownerId et siret, pagination automatique, projection des champs",
              reason: "Améliorer les performances avec des milliers d'écoles",
              implementation: [
                "@Schema() avec indexes: [{ ownerId: 1 }, { siret: 1 }]",
                "Pagination : GET /schools?page=1&limit=20",
                "Projection : .select('-__v -internalNotes') pour exclure champs inutiles",
                "Lean queries pour objets JavaScript simples (pas de documents Mongoose)"
              ]
            },
            {
              feature: "Messages d'Erreur en Français",
              before: "Messages par défaut en anglais (ex: 'email must be an email')",
              after: "Tous les messages de validation en français",
              reason: "Meilleure UX pour les utilisateurs francophones",
              implementation: [
                "@IsEmail({ message: 'L\\'email doit être valide' })",
                "@IsNotEmpty({ message: 'Le nom est obligatoire' })",
                "@MinLength(14, { message: 'Le SIRET doit contenir 14 chiffres' })",
                "ExceptionFilter personnalisé pour formater les erreurs de validation"
              ]
            },
            {
              feature: "Logs de Sécurité",
              before: "Aucun logging des actions sensibles",
              after: "Logger NestJS intégré pour tracer les actions critiques",
              reason: "Audit et détection d'activités suspectes",
              implementation: [
                "Logger dans chaque service : this.logger.log('Action par userId: X')",
                "Logs spécifiques : création école, modification SIRET, suppression",
                "Format structuré : { timestamp, userId, action, resourceId, ip }",
                "Intégration future avec Winston pour fichiers de logs"
              ]
            }
          ]
        },
        technicalHighlights: [
          "Travail collaboratif en équipe de 3 avec méthodologie Agile/Scrum",
          "Architecture Fullstack moderne (NestJS + Next.js + MongoDB)",
          "RBAC complexe avec isolation stricte des données multi-tenant",
          "DTOs fortement typés avec validation en français",
          "Formulaire de contact hybride (public + gestion admin)",
          "Optimisation MongoDB (indexes, pagination, lean queries)",
          "Messages d'erreur personnalisés pour meilleure UX",
          "Logs de sécurité pour audit et traçabilité",
          "Documentation Swagger auto-générée",
          "Tests unitaires et d'intégration (Jest + Supertest)"
        ],
        results: {
          metrics: [
            "12 endpoints API fonctionnels et documentés",
            "3 modules NestJS (Auth, Schools, Contacts)",
            "50+ tests unitaires et d'intégration",
            "Temps de réponse moyen < 80ms",
            "Couverture de code > 85%"
          ],
          learnings: [
            "Gestion de projet Agile en conditions réelles",
            "Communication et coordination en équipe distribuée",
            "Architecture backend scalable avec NestJS",
            "Système RBAC et sécurisation des API",
            "Intégration frontend-backend avec gestion d'états",
            "Optimisation des performances MongoDB",
            "Documentation technique et utilisateur"
          ]
        }
      }
    },
    {
      id: 3,
      title: "Application de Gestion",
      description: "Application de gestion de tâches avec authentification et dashboard",
      technologies: ["React", "Tailwind CSS", "Firebase"],
      github: "https://github.com/Ziad-fellahi/projet1",
      demo: null,
      image: "/images/projet1.jpg"
    },
    {
      id: 4,
      title: "Site E-commerce",
      description: "Site e-commerce complet avec panier et système de paiement",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/Ziad-fellahi/projet2",
      demo: null,
      image: "/images/projet2.jpg"
    },
    {
      id: 5,
      title: "Application Mobile",
      description: "Application mobile de suivi sportif avec géolocalisation",
      technologies: ["React Native", "Firebase", "API REST"],
      github: "https://github.com/Ziad-fellahi/projet3",
      demo: null,
      image: "/images/projet3.jpg"
    },
    {
      id: 6,
      title: "Bot Discord",
      description: "Bot Discord de modération avec commandes personnalisées",
      technologies: ["Python", "Discord.py", "SQLite"],
      github: "https://github.com/Ziad-fellahi/projet4",
      demo: null,
      image: "/images/projet4.jpg"
    }
  ],

  // Veille technologique
  veille: {
    introduction: "Dans le cadre de ma formation BTS SIO, je réalise une veille technologique sur la cybersécurité, domaine en constante évolution.",
    thematiques: [
      {
        id: 1,
        title: "Ransomwares & Malwares",
        description: "Étude des nouvelles menaces, techniques d'attaque et méthodes de protection",
        icon: "Shield"
      },
      {
        id: 2,
        title: "Zero Trust Architecture",
        description: "Exploration des modèles de sécurité moderne basés sur le principe 'ne jamais faire confiance'",
        icon: "Lock"
      },
      {
        id: 3,
        title: "DevSecOps",
        description: "Intégration de la sécurité dans le cycle de développement logiciel",
        icon: "Code"
      },
      {
        id: 4,
        title: "Cloud Security",
        description: "Sécurisation des infrastructures cloud et bonnes pratiques",
        icon: "Cloud"
      }
    ],
    sources: [
      {
        name: "ANSSI",
        url: "https://www.ssi.gouv.fr",
        type: "Organisme officiel"
      },
      {
        name: "CERT-FR",
        url: "https://www.cert.ssi.gouv.fr",
        type: "Alertes de sécurité"
      },
      {
        name: "Le Monde Informatique",
        url: "https://www.lemondeinformatique.fr",
        type: "Actualités tech"
      },
      {
        name: "Korben",
        url: "https://korben.info",
        type: "Blog tech"
      },
      {
        name: "HackerNews",
        url: "https://news.ycombinator.com",
        type: "Communauté"
      }
    ]
  },

  // Compétences techniques
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "C#", "SQL"],
    frameworks: ["React", "Next.js", "NestJS", "Node.js", "Tailwind CSS", "Bootstrap"],
    tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "Swagger/OpenAPI"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    security: ["JWT", "Passport.js", "RBAC", "Class-Validator", "Helmet"]
  }
};
