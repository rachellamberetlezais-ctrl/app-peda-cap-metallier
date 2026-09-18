# Portail pédagogique CAP Métallier

Portail statique et responsive, Arial, bordeaux `#A50F23` et corail `#EE3C3D`. Aucun compte, aucune donnée nominative, aucune dépendance externe. Le dépôt Coiffure est indépendant et n'est pas modifié.

## Ajouter une application

1. Préparer le dossier complet de l’application, nommé par exemple `A1S3M1`, contenant sa page `index.html` et tous ses fichiers associés. Conserver ses liens relatifs et sa logique pédagogique.
2. Déposer ce dossier dans `applications/`. Le chemin obtenu sera `applications/A1S3M1/index.html`.
3. Ouvrir `applications.js` à la racine du dépôt et ajouter entre les crochets du tableau :

```js
{
  code: 'A1S3M1',
  annee: 1,
  semaine: 3,
  discipline: 'M',
  activite: 1,
  titre: 'Le titre réel de votre activité',
  description: 'Une phrase pour présenter son objectif.',
  lien: './applications/A1S3M1/index.html'
},
```

4. Adapter toutes les valeurs à l’application réelle. `discipline` vaut `M` pour Mathématiques ou `P` pour Physique-Chimie. Les nombres ne portent pas de guillemets. Chaque code est unique et correspond exactement aux métadonnées. Conserver une virgule entre les entrées.
5. Enregistrer, commit et push vers `main`. Dans l’interface GitHub, ouvrir `applications/`, puis **Add file → Upload files** et glisser le dossier complet ; ensuite modifier `applications.js` avec le crayon et **Commit changes**.
6. Après la publication GitHub Pages, ouvrir le portail, saisir le code, choisir la matière et vérifier que la carte et les fichiers de l’activité s’ouvrent correctement.

Aucun changement d’`index.html` n’est nécessaire. Les cartes sont triées automatiquement par année, semaine et numéro d’activité. Le catalogue vide est volontaire : aucune ressource fictive n’est publiée.

## Nomenclature

- A = **Année**.
- S = **Semaine**, jamais séquence.
- M = **Mathématiques**, jamais module.
- P = **Physique-Chimie**.
- `A1S3M1` : Année 1, Semaine 3, Mathématiques, activité 1.
- `A1S3M2` : Année 1, Semaine 3, Mathématiques, activité 2.
- `A1S4P1` : Année 1, Semaine 4, Physique-Chimie, activité 1.

Les données permettent un futur regroupement Année / Semaine sans toucher aux applications. La V1 propose uniquement les deux matières, sans recherche ni filtres complexes.

## Structure

- `index.html` : en-tête et écrans du portail.
- `applications.js` : seul catalogue à compléter.
- `portail.js` : verrou pédagogique, navigation et cartes.
- `assets/styles.css` : charte et responsive.
- `assets/catalogue.js` : validation et tri des métadonnées.
- `assets/logo.png` : logo CMA Formation repris du dépôt Coiffure (lecture seule), destiné à ce portail CMA.
- `applications/` : dossiers complets des ressources pédagogiques.
- `.nojekyll` : publication statique sans transformation Jekyll.

## Accès pédagogique

Code partagé : `CMAFormationSC`. Le navigateur conserve uniquement un indicateur d’accès dans `sessionStorage`, sous la clé propre à Métallier `cap-metallier-access-v1`. Il reste valable lors des rechargements et des allers-retours vers les applications dans le même onglet. Si le stockage est bloqué, le formulaire et la navigation fonctionnent, mais un rechargement peut redemander le code.

**Il ne s’agit pas d’une authentification serveur.** Le dépôt, les fichiers, les liens directs et le code JavaScript sont publics. Ne pas y déposer de données confidentielles. Les applications ajoutées ne sont pas automatiquement verrouillées et leur logique interne n’est pas modifiée.

## Activer GitHub Pages

Dans le nouveau dépôt uniquement : **Settings → Pages → Build and deployment → Source : Deploy from a branch → Branch : main → /(root) → Save**. Attendre la fin de la publication dans **Actions**.

Adresse attendue après activation : https://rachellamberetlezais-ctrl.github.io/app-peda-cap-metallier/

## Vérification locale

Depuis le dossier du projet : `python3 -m http.server 8765`, puis ouvrir `http://localhost:8765`. Aucun outil de compilation ni installation de dépendances n’est nécessaire.
