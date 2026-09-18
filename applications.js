// Publication facultative en heure de La Réunion, par exemple :
// publication: '2026-10-05T07:00:00+04:00'
// Sans publication, la carte reste visible. Les URL directes restent publiques.
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
window.APPLICATIONS = [
  {
    code: 'A1S2M1',
    publication: '2026-09-18T08:00:00+04:00',
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
    publication: '2026-09-25T08:00:00+04:00',
    annee: 1,
    semaine: 2,
    discipline: 'M',
    activite: 2,
    titre: 'Calculs numériques & puissances de 10',
    description: 'Utiliser les puissances de 10, la notation scientifique et les ordres de grandeur dans des situations de mesure et de contrôle en métallerie.',
    lien: './applications/A1S2M2/index.html'
  },
  {
    code: 'A1S2P1',
    publication: '2026-09-25T13:00:00+04:00',
    annee: 1,
    semaine: 2,
    discipline: 'P',
    activite: 1,
    titre: 'Sécurité en atelier & EPI',
    description: 'Identifier les équipements de protection individuelle (EPI) et leur rôle pour travailler en sécurité dans un atelier de métallerie.',
    lien: './applications/A1S2P1/index.html'
  }
];
