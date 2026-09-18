/**
 * Catalogue central : ajouter une entrée après avoir déposé le dossier complet.
 * A = Année ; S = Semaine ; M = Mathématiques ; P = Physique-Chimie.
 * Le catalogue reste vide tant qu'aucune vraie application n'est disponible.
 * Exemple à adapter et à placer DANS le tableau (sans les marques de commentaire) :
 * {
 *   code: 'A1S3M1', annee: 1, semaine: 3, discipline: 'M', activite: 1,
 *   titre: 'Titre de votre activité',
 *   description: 'Description courte de votre activité.',
 *   lien: './applications/A1S3M1/index.html'
 * },
 */
window.APPLICATIONS = [const applications = [
  {
    code: 'A1S2M1',
    annee: 1,
    semaine: 2,
    discipline: 'M',
    activite: 1,
    titre: 'Statistique : fréquences & diagrammes en bâtons',
    description: 'Calculer des fréquences et représenter des données par un diagramme en bâtons à partir de situations professionnelles de métallerie.',
    lien: './applications/A1S2M1/index.html'
  },
  {
    code: 'A1S2M2',
    annee: 1,
    semaine: 2,
    discipline: 'M',
    activite: 2,
    titre: 'Calculs numériques & puissances de 10',
    description: 'Utiliser les puissances de 10, la notation scientifique et les ordres de grandeur dans des situations de mesure et de contrôle en métallerie.',
    lien: './applications/A1S2M2/index.html'
  }
];];
