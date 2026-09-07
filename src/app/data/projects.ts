export const projects = [
  {
    id: 6,
    title: "Gestion pédagogique établissement ISTA NTIC (PFE) 🏫",
    description: "Développement Full-Stack (React.js / Laravel) d'un ERP académique sur-mesure pour la digitalisation de l'institut ISMONTIC. Cette plateforme centralise la gestion complexe des emplois du temps via l'importation Excel, automatise le suivi des présences en temps réel, et dématérialise les flux administratifs à travers une architecture sécurisée multi-rôles (Administration, Formateurs, Stagiaires).",
    tech: ["Laravel 12", "React.js", "MySQL"],
    image: "./pfeISTA/imagePFE.png", // Image placeholder
    demo: "https://youtu.be/nZUewjqi3-Y",
    detailedDescription: `<p><strong>Le Contexte</strong><br/>L'institut ISMONTIC nécessitait une transformation numérique profonde pour pallier la gestion fragmentée de ses processus quotidiens (fichiers isolés, démarches administratives chronophages, suivi papier). Le besoin s'est imposé de créer un écosystème web centralisé pour connecter efficacement l'administration, le corps professoral et les étudiants au sein d'un environnement unique et accessible.</p>
<p><strong>Le Défi</strong><br/>Le challenge principal résidait dans l'automatisation de tâches lourdes tout en garantissant une intégrité absolue des données relationnelles. Il fallait concevoir un moteur d'importation capable de parser des fichiers Excel complexes pour générer des emplois du temps dynamiques sans doublons. En parallèle, l'architecture devait supporter un système de contrôle d'accès basé sur les rôles (RBAC) extrêmement strict, sécurisant les données sensibles via des clés UUID et des API robustes.</p>
<p><strong>Les Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Système RBAC & Sécurité Avancée :</strong> Création de quatre espaces isolés (Visiteur, Stagiaire, Formateur, Administration) avec authentification par token et gestion fine des permissions.</li>
  <li><strong>Moteur de Planification Intelligent :</strong> Importation massive des emplois du temps depuis Excel, détection des conflits de salles/formateurs, et génération automatique de plannings au format PDF.</li>
  <li><strong>Suivi Pédagogique & Assiduité :</strong> Interface de pointage en temps réel pour les formateurs, couplée à un tableau de bord analytique générant des alertes automatiques en cas de dépassement des seuils d'absence.</li>
  <li><strong>Dématérialisation Administrative :</strong> Workflow complet pour la demande d'attestations de scolarité (de la demande en ligne au retrait) et intégration d'un système de ticketing interactif pour la gestion des réclamations.</li>
</ul>
<p><strong>Les Espaces Utilisateurs</strong><br/>Cette plateforme digitalise et automatise les processus quotidiens de l'institut. Elle se structure autour de quatre espaces utilisateurs interconnectés :</p>
<ul>
  <li><strong>Le portail Administration :</strong> Une tour de contrôle permettant de superviser les comptes, d'importer massivement les plannings via des fichiers Excel, de traiter les demandes d'attestations de scolarité et de monitorer les statistiques d'absences avec des alertes automatisées.</li>
  <li><strong>L'espace Formateur :</strong> Une interface opérationnelle permettant aux enseignants d'enregistrer et de justifier les présences ou retards de leurs groupes en temps réel depuis leurs séances planifiées.</li>
  <li><strong>L'espace Stagiaire :</strong> Un hub personnel où l'étudiant peut consulter son emploi du temps au format PDF, suivre ses résultats, déposer des réclamations via un système de messagerie interne, et accéder aux plateformes partenaires de E-learning.</li>
  <li><strong>L'interface Visiteur :</strong> Une vitrine publique interactive présentant l'établissement, ses filières et son staff, enrichie d'un Chatbot intelligent pour orienter les nouveaux arrivants.</li>
</ul>
<p><strong>Mon Approche</strong><br/>J'ai piloté ce projet de bout en bout en adoptant la méthodologie Agile (Scrum) via Jira. J'ai débuté par une phase rigoureuse de conception (UML, Merise) et de prototypage UI/UX sur Figma pour garantir une expérience utilisateur (UX) optimale et responsive.<br/>Techniquement, j'ai opté pour une architecture API-first : le Backend sous Laravel centralise la logique métier et la sécurité (Eloquent ORM, FormRequests), tandis que le Frontend développé en React.js et stylisé avec Tailwind CSS offre une navigation fluide (Single Page Application). L'ensemble communique de manière asynchrone pour des performances optimales.</p>`,
    screenshots: [
      "/pfeISTA/imagePFE.png",
      "/pfeISTA/filiere.png",
      "/pfeISTA/contact.png",
      "/pfeISTA/login.png",
      "/pfeISTA/direc1.png",
      "/pfeISTA/direc2.png",
      "/pfeISTA/direc3.png",
      "/pfeISTA/direc4.png",
      "/pfeISTA/direc5.png",
      "/pfeISTA/respo1.png",
      "/pfeISTA/respo2.png",
      "/pfeISTA/respo3.png",
      "/pfeISTA/stag1.png",
      "/pfeISTA/stag2.png",
      "/pfeISTA/stag3.png",
      "/pfeISTA/stag4.png",
      "/pfeISTA/stag5.png",
      "/pfeISTA/stag6.png",
      "/pfeISTA/stag7.png",
    ]
  },
  {
    id: 2,
    title: "E-Tahssil (Plateforme Tribunal) ⚖️👩🏻‍⚖️",
    description: "Plateforme web (ERP) conçue pour digitaliser la section des notifications et des recouvrements du tribunal. E-Tahssil automatise le traitement de données massives et la génération de documents juridiques complexes, alliant sécurité locale et performance.",
    tech: ["React", "Laravel", "MySQL"],
    image: "/tribunal/login.jpeg",
    demo: 'https://youtu.be/j_hs5xEz-Go',
    detailedDescription: `<p><strong>Le Contexte</strong><br/>Développé dans le cadre de mon projet de fin d'études en binôme, E-Tahssil est une solution LegalTech sur-mesure déployée au Tribunal de Première Instance de Tanger. Le projet répondait à un besoin critique d'optimisation au sein de la "وحدة التبليغ والتحصيل" (Section des notifications et des recouvrements) : remplacer la gestion manuelle chronophage par un système d'information rapide, fiable et hautement sécurisé.</p>
<p><strong>Le Défi</strong><br/>Traiter des volumes massifs de données historiques (registres papier et fichiers Excel fragmentés), gérer la logique métier complexe des procédures de contrainte par corps (الإكراه البدني), et automatiser la rédaction de centaines de documents juridiques sans erreur humaine, le tout dans un environnement informatique isolé (intranet) pour des raisons de confidentialité stricte.</p>
<p><strong>Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Tableau de bord de suivi :</strong> Interface centralisée pour le suivi en temps réel des dossiers de recouvrement et des procédures de contrainte par corps, avec filtrage multi-critères.</li>
  <li><strong>Traitement de données en masse (Bulk Data) :</strong> Moteur d'importation et d'analyse intelligente de registres Excel lourds, permettant la détection d'erreurs et la fusion des données avec la base existante.</li>
  <li><strong>Automatisation Documentaire (Génération Word) :</strong> Système de publipostage dynamique générant instantanément des documents officiels personnalisés (إنذارات / إشعارات) à l'unité ou en masse (Bulk Print), prêts à être imprimés et signés.</li>
  <li><strong>Architecture Sécurisée :</strong> Déploiement local strict sur l'infrastructure du tribunal pour garantir l'intégrité et la protection absolue des données des citoyens.</li>
</ul>
<p><strong>Mon Approche</strong><br/>Ce projet représente la synthèse de ma double compétence : mon Master en Droit m'a permis de traduire des exigences procédurales et juridiques complexes en architecture logicielle, tandis que mon expertise Full-Stack (React/Laravel) a servi à concevoir une interface moderne, fluide et une API robuste. E-Tahssil prouve que la technologie peut transformer radicalement l'efficacité de l'administration judiciaire.</p>`,
    screenshots: [
      "/tribunal/login.jpeg",
      "/tribunal/1.png",
      "/tribunal/2.png",
      "/tribunal/3.png",
      "/tribunal/4.png",
      "/tribunal/5.png",
      "/tribunal/6.png",
      "/tribunal/7.png"
    ]
  },
  {
    id: 1,
    title: "Application Cabinet d'Avocats ⚖️",
    description: "Développement d'une application de bureau sur-mesure (Python / Tkinter) optimisant l'organisation interne des professionnels du droit. Couplée à une base de données NoSQL (MongoDB), la solution centralise de manière sécurisée le suivi des dossiers clients, la facturation et la planification des audiences.",
    tech: ["Python", "Tkinter", "MongoDB"],
    image: "./avocat/login.avif",
    demo: 'https://youtu.be/xzZ0gNAlng0',
    detailedDescription: `<p><strong>Le Contexte</strong><br/>Les cabinets d'avocats manipulent quotidiennement un volume important de données sensibles, de pièces juridiques et de délais stricts (dates d'audiences, prescriptions). La gestion traditionnelle fragmentée entrave la productivité et complexifie le suivi des affaires. L'objectif était de concevoir un outil unifié, taillé sur mesure pour la profession, permettant de numériser l'ensemble de ces processus au sein d'une interface unique et sécurisée.</p>
<p><strong>Le Défi</strong><br/>Le défi technique majeur consistait à concevoir une interface graphique (GUI) fluide, ergonomique et moderne en utilisant la bibliothèque standard Tkinter, souvent réputée complexe pour les interfaces avancées. Par ailleurs, il fallait modéliser une architecture de données capable de stocker des informations juridiques hétérogènes et évolutives (historiques d'affaires, notes variables, pièces jointes) tout en garantissant la sécurité et la confidentialité des historiques d'affaires.</p>
<p><strong>Les Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Suivi Centralisé des Dossiers :</strong> Création et gestion complète des fiches clients et des affaires, offrant une visibilité immédiate sur l'état d'avancement des procédures légales.</li>
  <li><strong>Agenda Juridique Intégré :</strong> Planification centralisée des rendez-vous clients et des dates d'audiences quotidiennes pour fluidifier l'organisation interne du cabinet.</li>
  <li><strong>Module de Facturation :</strong> Suivi détaillé des honoraires, gestion des transactions et édition de la facturation liée à chaque dossier client.</li>
  <li><strong>Stockage NoSQL Flexible :</strong> Intégration de MongoDB pour assurer un stockage orienté document, idéal pour s'adapter à la structure variable des données d'un dossier juridique sans les contraintes d'un schéma SQL rigide.</li>
</ul>
<p><strong>Mon Approche</strong><br/>J'ai privilégié le développement d'une application de bureau (Desktop) en Python pour garantir des performances optimales et un accès sécurisé localement. J'ai structuré l'interface utilisateur avec Tkinter en adoptant une approche métier : l'accent a été mis sur la clarté visuelle et la simplicité de navigation, afin que les avocats puissent trouver l'information requise en un minimum de clics. Le choix de MongoDB comme base de données a permis de traiter la complexité des affaires juridiques grâce à des collections dynamiques, facilitant ainsi l'évolution de l'application.</p>`,
    screenshots: [
      "/avocat/success.png",
      "/avocat/main.png",
      "/avocat/rdv.png",
      "/avocat/suivi dossier.png",
      "/avocat/paiement.png"
    ]
  },
  {
    id: 5,
    title: "Parapharmacie en Ligne (E-commerce) 💊🛍️",
    description: "Développement d'une plateforme e-commerce full-stack sécurisée dédiée à la vente de produits parapharmaceutiques. Le projet intègre un système de panier robuste basé sur les sessions, une gestion dynamique du catalogue via JSON, et la génération automatisée de reçus au format PDF pour les clients.",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    image: "/parapharmacie/para.png",
    demo: "https://youtu.be/UIclgaIRwv8",
    detailedDescription: `<p><strong>Le Contexte</strong><br/>Le secteur de la santé et du bien-être nécessite des plateformes de vente en ligne claires, rassurantes et performantes. L'objectif de ce projet était de concevoir une boutique e-commerce complète "from scratch", capable de gérer le parcours client dans son intégralité : de la simple consultation du catalogue de soins et cosmétiques jusqu'à la facturation finale.</p>
<p><strong>Le Défi</strong><br/>Le challenge principal consistait à construire une logique de commerce électronique fiable sans s'appuyer sur des solutions prêtes à l'emploi (comme WordPress/WooCommerce). Il a fallu coder un système de panier d'achat persistant et sécurisé, gérer la manipulation asynchrone des données du catalogue (format JSON), et intégrer une librairie serveur capable de compiler les données de la commande pour générer un document PDF formaté et téléchargeable instantanément.</p>
<p><strong>Les Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Panier d'Achat Dynamique :</strong> Implémentation d'un système de panier utilisant les sessions PHP, permettant aux utilisateurs d'ajouter, modifier ou supprimer des articles de manière persistante tout au long de leur navigation.</li>
  <li><strong>Catalogue Interactif :</strong> Interfaçage fluide entre la base de données MySQL et des flux JSON pour afficher, filtrer et trier les produits parapharmaceutiques sans latence.</li>
  <li><strong>Facturation Automatisée (PDF) :</strong> Traitement des commandes aboutissant à la génération et au téléchargement immédiats de factures ou de reçus détaillés au format PDF.</li>
  <li><strong>Sécurité et Back-Office :</strong> Sécurisation du tunnel d'achat et mise en place d'une gestion des stocks et des commandes côté serveur.</li>
</ul>
<p><strong>Mon Approche</strong><br/>Pour ce projet, j'ai privilégié le développement en PHP natif afin d'avoir un contrôle total sur la logique serveur, la gestion des sessions et la sécurité des requêtes HTTP. J'ai modélisé la base de données relationnelle sous MySQL pour assurer l'intégrité des commandes et de l'inventaire. Côté client, j'ai dynamisé l'interface avec JavaScript (pour la mise à jour du panier en temps réel sans rechargement de page) tout en m'appuyant sur Bootstrap pour garantir un design épuré, responsive et totalement orienté vers l'expérience utilisateur (mobile-first).</p>`,
    screenshots: [
      "/parapharmacie/produits.jpeg",
      "/parapharmacie/produits2.jpeg",
      "/parapharmacie/ajoute.jpeg",
      "/parapharmacie/panier.jpeg",
      "/parapharmacie/formLivr.jpeg",
      "/parapharmacie/recu.jpeg",
      "/parapharmacie/contact.jpeg"
    ]
  },
  {
    id: 7,
    title: "Boutique en ligne de Caftans 👗",
    description: "Conception et déploiement d'une boutique en ligne premium sous WordPress et WooCommerce, dédiée à la haute couture marocaine. L'interface met en valeur l'artisanat traditionnel à travers un web design élégant, tout en offrant un parcours d'achat fluide, sécurisé et entièrement responsive.",
    tech: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    image: "./jasmine/jasminewoo.png",
    demo: "https://youtu.be/XY6ch1rEbtQ",
    detailedDescription: `<p><strong>Le Contexte</strong><br/>L'industrie de la mode artisanale marocaine, en particulier le caftan, nécessite une vitrine numérique qui reflète son prestige. L'objectif était d'établir la présence en ligne de "Jasmine Collection", en concevant une plateforme capable d'attirer une clientèle recherchant l'élégance pour de grandes occasions, tout en centralisant la gestion des ventes et du catalogue.</p>
<p><strong>Le Défi</strong><br/>Le défi principal était de traduire l'aspect luxueux, la texture et les détails des caftans à travers l'écran. Il fallait trouver le juste équilibre entre un design visuellement riche (typographie raffinée, images haute définition, palette de couleurs sombres et dorées) et des performances techniques irréprochables pour un temps de chargement rapide. De plus, la configuration des variations de produits (tailles, couleurs, broderies) devait être intuitive pour le client final.</p>
<p><strong>Les Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Système E-commerce Complet :</strong> Intégration de WooCommerce pour la gestion du cycle de vente complet, incluant le panier, les calculs de livraison et le tunnel de paiement sécurisé.</li>
  <li><strong>Design Immersif & Premium :</strong> Interface esthétique mettant en valeur les visuels haute résolution grâce à une charte graphique luxueuse, garantissant un rendu visuel saisissant sur ordinateur comme sur mobile.</li>
  <li><strong>Gestion de Catalogue Avancée :</strong> Configuration de produits variables complexes permettant aux clientes de sélectionner précisément leurs mensurations et options de personnalisation.</li>
  <li><strong>Stratégie de Contenu (Blog & SEO) :</strong> Intégration d'une section éditoriale pour partager des conseils mode et optimiser le référencement naturel sur les moteurs de recherche.</li>
</ul>
<p><strong>Mon Approche</strong><br/>J'ai choisi de construire cette plateforme sur WordPress pour sa flexibilité de gestion de contenu, couplé à WooCommerce pour sa robustesse transactionnelle. Pour façonner une interface sur-mesure et respectant la charte graphique de la marque, j'ai exploité des constructeurs de pages avancés comme Elementor et Divi. J'ai porté une attention particulière à l'expérience utilisateur (UX) sur mobile (Mobile-First), sachant que la majorité des achats de mode s'effectuent sur smartphone, tout en appliquant des techniques d'optimisation d'images pour garantir une navigation sans friction.</p>`,
    screenshots: [
      "/jasmine/jasminewoo.png",
      "/jasmine/service.png",
      "/jasmine/catalogue.png",
      "/jasmine/blog.png",
      "/jasmine/collection.png",
      "/jasmine/ajout panier.png",
      "/jasmine/commande.png",
      "/jasmine/dec.png",
      "/jasmine/dec2.png",
      "/jasmine/contact.png",
      "/jasmine/newsletter.png",
      "/jasmine/maps.png",
    ]
  },
  {
    id: 8,
    title: 'Boutique en Ligne CMS 📱',
    description: "Configuration, personnalisation et déploiement d'un site e-commerce performant. Intégration de modules de paiement sécurisé et optimisation technique pour le référencement naturel (SEO).",
    tech: ['WordPress', 'WooCommerce', 'Astra', 'SEO'],
    image: '/ecomApple/landing.jpeg',
    detailedDescription: `<p><strong>Le Contexte</strong><br/>Lancer une activité commerciale sur le web exige une plateforme à la fois robuste pour traiter les transactions et accessible pour faciliter la gestion quotidienne par l'administrateur. L'objectif de ce projet était de livrer un site e-commerce "clé en main", offrant une vitrine professionnelle tout en garantissant une autonomie totale sur la gestion du catalogue, des stocks et des commandes.</p>
<p><strong>Le Défi</strong><br/>Le challenge principal consistait à concilier une interface riche en fonctionnalités avec des temps de chargement ultra-rapides, un critère fondamental pour l'expérience utilisateur et le référencement. Il a fallu structurer le catalogue de manière stratégique pour les moteurs de recherche, tout en configurant un tunnel de conversion fluide, rassurant et techniquement irréprochable pour minimiser les abandons de panier.</p>
<p><strong>Les Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Moteur E-commerce Complet :</strong> Intégration et configuration avancée de WooCommerce pour la gestion du cycle de vente (panier, variations de produits, calcul des frais de port et taxes).</li>
  <li><strong>Transactions Sécurisées :</strong> Déploiement et paramétrage de passerelles de paiement cryptées pour garantir la sécurité des données bancaires des clients.</li>
  <li><strong>Architecture SEO-Friendly :</strong> Optimisation technique (vitesse de chargement, hiérarchisation des balises Hn, méta-descriptions, optimisation des images) pour maximiser la visibilité sur les moteurs de recherche.</li>
  <li><strong>Design Haute Performance :</strong> Personnalisation poussée via le thème Astra, assurant une navigation fluide, moderne et 100% responsive (Mobile-First).</li>
</ul>
<p><strong>Mon Approche</strong><br/>J'ai sélectionné l'écosystème WordPress et WooCommerce pour sa flexibilité et sa scalabilité. Pour répondre aux exigences de rapidité et de performance, j'ai construit l'interface sur la base du thème Astra, reconnu pour son code minimaliste et sa légèreté. Tout au long de l'intégration, j'ai placé le SEO au cœur de ma démarche technique afin de garantir non seulement une excellente expérience d'achat, mais aussi une acquisition de trafic organique durable et de qualité.</p>`,
    screenshots: [
      "/ecomApple/landing.jpeg",
      "/ecomApple/client.jpeg",
      "/ecomApple/admin.jpeg",
    ]
  },
  {
    id: 3,
    title: "Clone Netflix",
    description: "Reproduction front-end fidèle de l'interface utilisateur de Netflix développée en React.js. Le projet intègre la consommation asynchrone de l'API TMDb pour l'affichage dynamique et en temps réel des catalogues de films et séries, avec un déploiement continu sur GitHub Pages.",
    tech: ["React.js", "API TMDb", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4fGVufDF8fHx8MTc3MjM3ODA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demo: "https://yasu19-dev.github.io/projet-react-netflix/",
    detailedDescription: `<p><strong>Le Contexte</strong><br/>Pour consolider mes compétences en développement Front-End et en gestion d'états complexes, j'ai choisi de recréer l'une des plateformes de streaming les plus emblématiques et exigeantes du web. Ce projet personnel visait à maîtriser l'intégration d'API tierces, la gestion du cycle de vie des composants React et l'intégration d'interfaces riches et immersives.</p>
<p><strong>Le Défi</strong><br/>Le challenge principal était d'allier performance et fidélité visuelle. Il fallait structurer une architecture logicielle capable de gérer un grand volume de requêtes asynchrones (récupération des images, titres, et résumés) sans ralentir le rendu de la page. De plus, reproduire le design "pixel-perfect" du catalogue original impliquait de développer des carrousels fluides, des transitions au défilement et une compatibilité totale sur tous les supports (Responsive Design).</p>
<p><strong>Les Fonctionnalités Clés</strong></p>
<ul>
  <li><strong>Catalogue Dynamique (API TMDb) :</strong> Interrogation en temps réel de The Movie Database pour alimenter automatiquement les catégories (Tendances, Mieux notés, Action, Comédie, etc.).</li>
  <li><strong>Interface Immersive :</strong> Reproduction du "Header" dynamique dont la transparence s'ajuste au défilement, et intégration de bannières de mise en avant avec résumés tronqués.</li>
  <li><strong>Lecture de Bandes-Annonces :</strong> Intégration d'un module de recherche vidéo permettant d'afficher les trailers officiels YouTube directement au clic sur une affiche de film ou de série.</li>
  <li><strong>Déploiement en Ligne :</strong> Configuration d'un pipeline de déploiement pour héberger publiquement le projet sur GitHub Pages, garantissant une démo accessible à tout moment.</li>
</ul>
<p><strong>Mon Approche</strong><br/>J'ai abordé ce projet en construisant une architecture orientée composants avec React.js, favorisant la réutilisabilité du code (composants Row, Banner, Nav). J'ai exploité les Hooks React (useState, useEffect) pour gérer le stockage local des données et déclencher les requêtes réseau via Axios au montage des composants. Pour la partie stylisation, j'ai utilisé CSS Modules et SASS afin d'isoler les styles, éviter les conflits de classes et recréer fidèlement l'esthétique sombre et élégante de la plateforme de streaming.</p>`,
  },
];
