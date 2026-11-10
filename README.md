# Vidéobox

Application web de découverte de films, bandes dessinées, mangas et séries, avec une médiathèque personnelle.

## Fonctions

- Catalogue de démonstration, recherche, filtres et fiches détaillées.
- Rubriques Tendances, Bandes dessinées, Mangas et Séries, avec une sélection éditoriale.
- Catalogue Anime avec recherche, fiches, genres et liens pour rechercher les offres de services officiels.
- Profils locaux avec listes « À voir » et historique des films vus séparés.
- Suivi des épisodes d'anime vus, conservé par profil dans ce navigateur.
- Top 10 toujours visible : films, séries, anime, BD et mangas classés selon les notes de démonstration.
- Import, lecture et téléchargement des fichiers vidéo choisis depuis votre appareil.
- Interface mobile sombre avec rubriques défilantes, affiches horizontales et navigation fixe en bas.

## Utilisation

Ouvrir `index.html` dans un navigateur récent. Aucune installation ni serveur n'est nécessaire. Une connexion Internet est requise pour les affiches du catalogue. Les profils et listes sont conservés dans le stockage local du navigateur ; les vidéos importées sont stockées dans IndexedDB sur cet appareil et peuvent utiliser beaucoup d'espace. Pour synchroniser des comptes entre appareils, il faudrait ajouter un service serveur avec authentification.

Les profils ne sont pas des comptes sécurisés et ne sont pas synchronisés. Les tendances et notes du Top 10 sont des exemples de démonstration, pas des classements mis à jour en temps réel. La fiche des films, séries et anime permet de chercher les offres disponibles auprès de services officiels ; si un service propose le téléchargement hors ligne, utilisez sa propre application et ses conditions. Vidéobox ne télécharge pas les contenus du catalogue. Vous pouvez lire et télécharger les fichiers vidéo que vous ajoutez et êtes autorisé à utiliser.

## Installation depuis un site

Vidéobox est préparée comme une application web installable (PWA). Une fois publiée sur une adresse HTTPS, utilisez le bouton « Installer » ou le menu du navigateur (« Installer l'application » / « Ajouter à l'écran d'accueil »). Le service worker met en cache la page pour permettre de la rouvrir hors connexion ; les affiches externes et les fonctions qui nécessitent Internet peuvent rester indisponibles.

L'ouverture directe du fichier `index.html` ne permet pas l'installation : le site doit d'abord être hébergé en HTTPS. GitHub Pages peut servir de site de téléchargement/installation web, mais ne publie pas automatiquement l'application dans les boutiques. Google Play, l'App Store et les autres boutiques sont des soumissions distinctes : elles demandent un emballage adapté à chaque plateforme, les comptes développeur correspondants, et l'approbation de chaque boutique. Il n'existe pas de publication automatique sur « tous » les sites ou canaux.

## Publication GitHub Pages

Le workflow `.github/workflows/pages.yml` publie automatiquement le site lors d'un push sur les branches `application` ou `main`.

1. Dans GitHub Desktop, enregistrez les changements avec un commit, puis cliquez sur « Push origin » pour envoyer la branche `application` sur GitHub.
2. Sur GitHub, ouvrez le dépôt, puis **Settings → Pages**.
3. Dans **Build and deployment**, choisissez **GitHub Actions** comme source.
4. Ouvrez l'onglet **Actions** et attendez la réussite de « Publish Vidéobox ».
5. Revenez dans **Settings → Pages** pour ouvrir l'adresse HTTPS publiée. Vous pourrez alors utiliser « Installer » dans Vidéobox ou le menu de votre navigateur.

Si vous utilisez une autre branche, choisissez **Actions → Publish Vidéobox → Run workflow** sur cette branche, ou ajoutez son nom à la liste `branches` du workflow. Le dépôt doit autoriser GitHub Actions à déployer les Pages.

Le site est prêt pour une publication statique. Les affiches du catalogue sont chargées depuis TMDB à titre illustratif.
