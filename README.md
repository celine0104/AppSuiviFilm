README
Aperçu du Projet
Cette application mobile permet de suivre des films en utilisant NativeScript avec React et Vue. Les utilisateurs peuvent s'inscrire et se connecter, gérer leurs tokens d'authentification et suivre les films qu'ils ont regardés ou pas encore regardés. Chaque film peut être noté sur une échelle de 1 à 10.
L'application interagit avec une API REST pour gérer les données des utilisateurs et le suivi des films.

Fonctionnalités
•	Inscription des Utilisateurs : Les nouveaux utilisateurs peuvent s'inscrire en fournissant un e-mail et un mot de passe.
•	Connexion des Utilisateurs : Les utilisateurs existants peuvent se connecter avec leurs identifiants.
•	Authentification : Les tokens sont gérés de manière sécurisée pour les requêtes API authentifiées.
•	Suivi des Films :
o	Marquer les films comme "regardé" ou "pas regarder".
o	Attribuer des notes (sur 10) aux films regardés.

Instructions d'Installation
1.	Cloner le Dépôt :
2.	git clone <repository-url>
cd <repository-folder>
3.	Installer NativeScript CLI : Assurez-vous que NativeScript CLI est installé globalement sur votre système :
npm install -g nativescript
4.	Installer les Dépendances : Installez les dépendances du projet :
npm install
5.	Configurer les Variables d'Environnement : Créez un fichier .env dans le répertoire racine avec les variables suivantes :
API_BASE_URL=<votre-url-api-base>

Instructions de Lancement
Lancer sur un Émulateur :
1.	Démarrer un Émulateur : Configurez un émulateur pour Android :
ns doctor
Suivez les instructions pour vous assurer que votre environnement est correctement configuré.
2.	Exécuter l'Application :
ns run android
Lancer sur un Appareil Physique :
1.	Connecter l'Appareil : Connectez votre appareil Android ou iOS via USB.
2.	Exécuter l'Application :
ns run android --device <device-id>

Points d'Accès API
L'application interagit avec les points d'accès suivants :
Authentification
•	POST /api/register : Inscrire un nouvel utilisateur.
•	POST /api/login : Se connecter avec un e-mail et un mot de passe.
Informations Utilisateur
•	GET /api/user : Récupérer les détails du profil utilisateur (requiert un token).
Gestion des Films
•	GET /api/films: Obtenir une liste de films.
•	POST /api/ films: Ajouter un nouveau film à la liste de suivi.
•	PATCH /api/ films /:id : Mettre à jour le statut ou la note d'un film.
•	DELETE /api/ films /:id : Supprimer un film de la liste.

Notes Supplémentaires
•	On s’assure d'avoir la dernière version de Node.js et npm installée.
•	On vérifie que notre système dispose des SDK Android nécessaires et qu'ils sont correctement configurés.

