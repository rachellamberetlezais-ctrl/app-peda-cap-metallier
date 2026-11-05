window.LESSON = {
  "code": "A1S4M2",
  "title": "Équations ax = b et répartition d’atelier",
  "duration": "1 h 30",
  "kind": "equations",
  "objectives": [
    "Modéliser une situation de métallerie par ax = b et isoler l’inconnue.",
    "Distinguer nombre d’intervalles et nombre d’éléments.",
    "Vérifier les résultats et comparer le débit idéal au débit avec trait de scie."
  ],
  "prerequisites": "Multiplication, division, conversions mm/m et proportionnalité.",
  "badges": [
    "Équations ax = b · Socle CAP",
    "Répartition & calculs d’atelier",
    "Calepinage & débit raisonné"
  ],
  "notes": [
    "Les 11 exercices du dossier sont repris. Le défi de synthèse /8 est un ajout formatif.",
    "Correction de l’exercice 3.1 : il existe deux entiers admissibles, 18 et 19. Aucun n’est l’unique solution. Pour poursuivre avec un entraxe entier commode, l’exemple retient n = 18 et E = 125 mm ; n = 19 donne environ 118,4 mm.",
    "Le critère 110 mm est une donnée mathématique de l’exercice. Aucun badge ni simulateur ne certifie la conformité réglementaire d’un ouvrage ou d’un garde-corps.",
    "Le calcul du jour entre barreaux n’est pas un dimensionnement de sécurité. Les autres conditions d’emploi, géométries et textes applicables ne sont pas contrôlés ici.",
    "Débit : le cas réel illustré suppose un trait de 3 mm par pièce extraite ; 4 pièces de 1 200 mm consomment 4 812 mm et laissent 1 188 mm. Le cas sans trait donne 5 pièces, mais n’est pas réalisable avec ce trait.",
    "Dans l’exercice 2.2, la relation 0,85P = 42,50 est précisée comme un modèle de puissance utile de 42,50 W afin de rendre les unités explicites."
  ],
  "discovery": [
    {
      "title": "Grille de clôture à Sainte-Clotilde",
      "context": "Longueur entre les axes extrêmes L = 2 400 mm. Entraxe E = 120 mm. On cherche n intervalles. Le nombre de barreaux dépend ensuite du traitement des extrémités.",
      "questions": [
        {
          "label": "Quelle équation relie n, E et L ?",
          "type": "choice",
          "options": [
            "120+n = 2 400",
            "120n = 2 400",
            "n/120 = 2 400"
          ],
          "answer": 1,
          "points": 0
        },
        {
          "label": "Quelle opération isole n ?",
          "type": "choice",
          "options": [
            "Multiplier les deux membres par 120",
            "Diviser les deux membres par 120",
            "Soustraire 120"
          ],
          "answer": 1,
          "points": 0
        },
        {
          "label": "Nombre d’intervalles",
          "type": "number",
          "answer": 20,
          "unit": "intervalles",
          "points": 0
        },
        {
          "label": "Barreaux si les deux extrémités sont des barreaux à fabriquer",
          "type": "number",
          "answer": 21,
          "unit": "barreaux",
          "points": 0
        },
        {
          "label": "Barreaux intérieurs si les deux montants extrêmes existent déjà",
          "type": "number",
          "answer": 19,
          "unit": "barreaux",
          "points": 0
        },
        {
          "label": "Vérification : 20 × 120",
          "type": "number",
          "answer": 2400,
          "unit": "mm",
          "points": 0
        },
        {
          "label": "Expliquer pourquoi n, n + 1 et n − 1 sont différents.",
          "type": "manual",
          "answer": "n compte les espaces entre axes. Avec un élément à chaque extrémité : n+1 éléments ; si les deux éléments extrêmes existent, il reste n−1 éléments intérieurs à fabriquer.",
          "points": 0
        }
      ],
      "correction": "120n = 2 400 → n = 2 400/120 = 20. Les 20 intervalles sont délimités par 21 axes ; 19 axes sont intérieurs."
    }
  ],
  "course": [
    [
      "L’inconnue dans ax = b",
      "a et b sont connus ; a ≠ 0. Résoudre consiste à trouver x tel que a×x = b. Exemples : E×n = L ; masse linéique × longueur = masse totale."
    ],
    [
      "Diviser les deux membres",
      "ax = b → ax/a = b/a → x = b/a. La même opération est faite à gauche et à droite. Exemple : 120n = 2 400 → n = 20."
    ],
    [
      "Toujours vérifier",
      "Remplacer l’inconnue par la solution : 120×20 = 2 400. Un résultat décimal peut être une longueur ; un nombre d’intervalles ou de pièces doit être entier pour réaliser exactement le modèle. Ne pas arrondir un nombre de pièces au hasard."
    ],
    [
      "Intervalles et éléments",
      "Si n intervalles relient deux éléments extrêmes : n+1 éléments au total. Si les deux éléments d’extrémité existent déjà : n−1 éléments intérieurs à ajouter. L’énoncé doit préciser le cas."
    ],
    [
      "Du calcul idéal à l’atelier",
      "Une division exacte sans pertes ne suffit pas à préparer un débit réel. Le trait de scie consomme de la matière. Vérifier aussi les unités, les chutes et les hypothèses de coupe. Les vérifications de seuil de cette séance portent seulement sur les critères fournis."
    ]
  ],
  "levels": [
    [
      {
        "title": "1.1 · Divisions guidées",
        "context": "Résoudre les quatre équations en écrivant chaque division.",
        "questions": [
          {
            "label": "5x = 45 : numérateur de la division",
            "type": "number",
            "answer": 45,
            "unit": "",
            "points": 0
          },
          {
            "label": "5x = 45 : dénominateur",
            "type": "number",
            "answer": 5,
            "unit": "",
            "points": 0
          },
          {
            "label": "5x = 45 : x =",
            "type": "number",
            "answer": 9,
            "unit": "",
            "points": 0
          },
          {
            "label": "12x = 144 : numérateur de la division",
            "type": "number",
            "answer": 144,
            "unit": "",
            "points": 0
          },
          {
            "label": "12x = 144 : dénominateur",
            "type": "number",
            "answer": 12,
            "unit": "",
            "points": 0
          },
          {
            "label": "12x = 144 : x =",
            "type": "number",
            "answer": 12,
            "unit": "",
            "points": 0
          },
          {
            "label": "8x = 200 : numérateur de la division",
            "type": "number",
            "answer": 200,
            "unit": "",
            "points": 0
          },
          {
            "label": "8x = 200 : dénominateur",
            "type": "number",
            "answer": 8,
            "unit": "",
            "points": 0
          },
          {
            "label": "8x = 200 : x =",
            "type": "number",
            "answer": 25,
            "unit": "",
            "points": 0
          },
          {
            "label": "25x = 150 : numérateur de la division",
            "type": "number",
            "answer": 150,
            "unit": "",
            "points": 0
          },
          {
            "label": "25x = 150 : dénominateur",
            "type": "number",
            "answer": 25,
            "unit": "",
            "points": 0
          },
          {
            "label": "25x = 150 : x =",
            "type": "number",
            "answer": 6,
            "unit": "",
            "points": 0
          }
        ],
        "correction": "x = 45/5 = 9 ; x = 144/12 = 12 ; x = 200/8 = 25 ; x = 150/25 = 6."
      },
      {
        "title": "1.2 · Résoudre et vérifier",
        "context": "Résoudre chaque équation puis vérifier le produit.",
        "questions": [
          {
            "label": "6x = 72 : x =",
            "type": "number",
            "answer": 12,
            "unit": "",
            "points": 0
          },
          {
            "label": "Contrôle de 6 × 12",
            "type": "number",
            "answer": 72,
            "unit": "",
            "points": 0
          },
          {
            "label": "15x = 90 : x =",
            "type": "number",
            "answer": 6,
            "unit": "",
            "points": 0
          },
          {
            "label": "Contrôle de 15 × 6",
            "type": "number",
            "answer": 90,
            "unit": "",
            "points": 0
          },
          {
            "label": "4x = 18 : x =",
            "type": "number",
            "answer": 4.5,
            "unit": "",
            "points": 0
          },
          {
            "label": "Contrôle de 4 × 4.5",
            "type": "number",
            "answer": 18,
            "unit": "",
            "points": 0
          },
          {
            "label": "20x = 340 : x =",
            "type": "number",
            "answer": 17,
            "unit": "",
            "points": 0
          },
          {
            "label": "Contrôle de 20 × 17",
            "type": "number",
            "answer": 340,
            "unit": "",
            "points": 0
          }
        ],
        "correction": "Solutions : 12 ; 6 ; 4,5 ; 17. Vérifications : 72 ; 90 ; 18 ; 340."
      },
      {
        "title": "1.3 · Grille de fenêtre",
        "context": "Largeur entre axes extrêmes : 960 mm ; entraxe : 120 mm. Les deux montants extrêmes existent.",
        "questions": [
          {
            "label": "Compléter 120n =",
            "type": "number",
            "answer": 960,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Nombre d’intervalles n",
            "type": "number",
            "answer": 8,
            "unit": "",
            "points": 0
          },
          {
            "label": "Nombre de barreaux intérieurs n − 1",
            "type": "number",
            "answer": 7,
            "unit": "",
            "points": 0
          }
        ],
        "correction": "120n = 960 → n = 8 intervalles → 7 barreaux intérieurs."
      },
      {
        "title": "1.4 · Montants identiques",
        "context": "Profilé de 3 600 mm ; montants de 450 mm. Le trait de scie est négligé dans ce premier modèle.",
        "questions": [
          {
            "label": "Coefficient de n dans … n = 3 600",
            "type": "number",
            "answer": 450,
            "unit": "",
            "points": 0
          },
          {
            "label": "Nombre de montants",
            "type": "number",
            "answer": 8,
            "unit": "",
            "points": 0
          }
        ],
        "correction": "450n = 3 600 → n = 8, uniquement dans le modèle sans trait de scie."
      },
      {
        "title": "1.5 · Masse d’un IPN",
        "context": "Donnée du dossier : masse linéique 8,30 kg/m ; masse totale 49,80 kg.",
        "questions": [
          {
            "label": "Écrire la division qui donne la longueur.",
            "type": "manual",
            "answer": "L = 49,80 / 8,30.",
            "points": 0
          },
          {
            "label": "Longueur de la poutrelle",
            "type": "number",
            "answer": 6,
            "unit": "m",
            "points": 0
          }
        ],
        "correction": "8,30L = 49,80 → L = 6 m."
      }
    ],
    [
      {
        "title": "2.1 · Barreaudage à Bellepierre",
        "context": "Longueur L = 3 360 mm ; entraxe E = 140 mm. Un barreau à chaque extrémité. Hauteur d’un barreau : 1 500 mm.",
        "questions": [
          {
            "label": "Établir l’équation.",
            "type": "manual",
            "answer": "140n = 3 360.",
            "points": 0
          },
          {
            "label": "Nombre d’intervalles",
            "type": "number",
            "answer": 24,
            "unit": "",
            "points": 0
          },
          {
            "label": "Nombre total de barreaux",
            "type": "number",
            "answer": 25,
            "unit": "",
            "points": 0
          },
          {
            "label": "Longueur totale de tube",
            "type": "number",
            "answer": 37.5,
            "unit": "m",
            "points": 0
          }
        ],
        "correction": "140n = 3 360 → n = 24 ; barreaux = 25 ; longueur totale = 25×1,5 = 37,5 m."
      },
      {
        "title": "2.2 · Coefficients décimaux",
        "context": "Calculs : 2,40L = 36 (kg/m et kg). Modèle de puissance : 0,85P = 42,50 W. Cercle de périmètre 78,5 mm : 3,14D = 78,5.",
        "questions": [
          {
            "label": "Longueur L",
            "type": "number",
            "answer": 15,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Puissance P dans ce modèle",
            "type": "number",
            "answer": 50,
            "unit": "W",
            "points": 0
          },
          {
            "label": "Diamètre D",
            "type": "number",
            "answer": 25,
            "unit": "mm",
            "points": 0
          }
        ],
        "correction": "L = 36/2,40 = 15 m ; P = 42,50/0,85 = 50 W ; D = 78,5/3,14 = 25 mm."
      },
      {
        "title": "2.3 · Poteaux le long d’une longrine",
        "context": "16 poteaux, dont un à chaque extrémité, se répartissent sur 45 m.",
        "questions": [
          {
            "label": "Nombre d’intervalles",
            "type": "number",
            "answer": 15,
            "unit": "",
            "points": 0
          },
          {
            "label": "Poser l’équation de l’intervalle d.",
            "type": "manual",
            "answer": "15d = 45.",
            "points": 0
          },
          {
            "label": "Distance d",
            "type": "number",
            "answer": 3,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Distance en millimètres",
            "type": "number",
            "answer": 3000,
            "unit": "mm",
            "points": 0
          }
        ],
        "correction": "16 poteaux délimitent 15 intervalles. 15d = 45 → d = 3 m = 3 000 mm."
      },
      {
        "title": "2.4 · Entraxe et jour libre",
        "context": "Longueur 1 800 mm ; 15 intervalles. Barreaux de 20 mm de côté. Critère de cet exercice : le jour doit être strictement inférieur à 110 mm. Ce calcul seul ne certifie pas un ouvrage.",
        "questions": [
          {
            "label": "Entraxe E : 15E = 1 800",
            "type": "number",
            "answer": 120,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Jour libre e = E − 20",
            "type": "number",
            "answer": 100,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Le critère e < 110 mm est-il respecté ?",
            "type": "choice",
            "options": [
              "Oui",
              "Non"
            ],
            "answer": 0,
            "points": 0
          },
          {
            "label": "Justifier sans conclure à une conformité globale.",
            "type": "manual",
            "answer": "Le jour vaut 100 mm et 100 < 110 : le critère fourni est respecté. Les autres conditions de conception et de conformité ne sont pas évaluées ici.",
            "points": 0
          }
        ],
        "correction": "E = 120 mm ; e = 100 mm. Le critère donné est satisfait."
      }
    ],
    [
      {
        "title": "3.1 · Deux calepinages admissibles",
        "context": "L = 2 250 mm ; 115 ≤ E ≤ 130 mm ; n entier. Attention : il existe deux entiers possibles. Pour poursuivre, on retient n = 18 parce que E = 125 mm est exact et commode au traçage ; n = 19 reste une solution.",
        "questions": [
          {
            "label": "Borne 2 250/130, au centième",
            "type": "number",
            "answer": 17.31,
            "unit": "",
            "points": 0,
            "round": 2
          },
          {
            "label": "Borne 2 250/115, au centième",
            "type": "number",
            "answer": 19.57,
            "unit": "",
            "points": 0,
            "round": 2
          },
          {
            "label": "Quels entiers sont admissibles ?",
            "type": "choice",
            "options": [
              "18 seulement",
              "19 seulement",
              "18 et 19"
            ],
            "answer": 2,
            "points": 0
          },
          {
            "label": "Pour n = 18 : entraxe au dixième",
            "type": "number",
            "answer": 125,
            "unit": "mm",
            "points": 0,
            "round": 1
          },
          {
            "label": "Pour n = 19 : entraxe au dixième",
            "type": "number",
            "answer": 118.4,
            "unit": "mm",
            "points": 0,
            "round": 1
          },
          {
            "label": "Pour n = 18 : barreaux intérieurs",
            "type": "number",
            "answer": 17,
            "unit": "",
            "points": 0
          },
          {
            "label": "Pour n = 18 et diamètre 18 mm : jour libre",
            "type": "number",
            "answer": 107,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Le critère donné e ≤ 110 mm est-il respecté ?",
            "type": "choice",
            "options": [
              "Oui, pour ce seul critère",
              "Non"
            ],
            "answer": 0,
            "points": 0
          },
          {
            "label": "Expliquer pourquoi on ne peut pas annoncer une unique valeur de n.",
            "type": "manual",
            "answer": "17,307… ≤ n ≤ 19,565… admet n=18 et n=19. Le choix de 18 est un choix d’exemple pour un entraxe entier de 125 mm, pas une unicité imposée par l’énoncé.",
            "points": 0
          }
        ],
        "correction": "n = 18 ou 19. E18 = 125 mm ; E19 = 118,421… mm ≈ 118,4 mm. Exemple n18 : 17 barreaux intérieurs ; jour 107 mm."
      },
      {
        "title": "3.2 · Trait de scie et commande",
        "context": "10 panneaux de 14 montants de 1 200 mm. Barres de 6 000 mm. Comparer le modèle sans trait puis le cas avec 3 mm consommés par pièce extraite.",
        "questions": [
          {
            "label": "Nombre total de montants",
            "type": "number",
            "answer": 140,
            "unit": "",
            "points": 0
          },
          {
            "label": "Montants par barre, sans trait",
            "type": "number",
            "answer": 5,
            "unit": "",
            "points": 0
          },
          {
            "label": "Barres idéales : 5B = 140",
            "type": "number",
            "answer": 28,
            "unit": "",
            "points": 0
          },
          {
            "label": "Consommation de 5 pièces et 5 traits de 3 mm",
            "type": "number",
            "answer": 6015,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Les 5 pièces tiennent-elles avec ces coupes ?",
            "type": "choice",
            "options": [
              "Oui",
              "Non"
            ],
            "answer": 1,
            "points": 0
          },
          {
            "label": "Pièces complètes par barre avec un trait de 3 mm par pièce",
            "type": "number",
            "answer": 4,
            "unit": "",
            "points": 0
          },
          {
            "label": "Chute après 4 pièces et 4 traits",
            "type": "number",
            "answer": 1188,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Barres réelles pour 140 pièces dans ce modèle",
            "type": "number",
            "answer": 35,
            "unit": "",
            "points": 0
          },
          {
            "label": "Expliquer l’écart entre 28 et 35 barres.",
            "type": "manual",
            "answer": "28 barres supposent 5 pièces par barre et aucune perte. Avec le trait de 3 mm, 5 pièces nécessitent 6 015 mm ; on n’en obtient que 4 par barre de 6 000 mm, donc 35 barres.",
            "points": 0
          }
        ],
        "correction": "N = 140 ; idéal 5 par barre → 28 barres. Avec 3 mm par pièce : 5×1 200+5×3 = 6 015 > 6 000 ; 4 pièces consomment 4 812 mm, chute 1 188 mm ; 140/4 = 35 barres."
      }
    ]
  ],
  "evaluation": {
    "title": "Défi de synthèse · Un panneau de grille",
    "context": "Ajout formatif : L = 1 680 mm ; entraxe 120 mm ; deux montants extrêmes existants ; barreaux intérieurs de hauteur 1,40 m. Le trait de coupe n’est pas traité dans ce métré.",
    "questions": [
      {
        "label": "Choisir l’équation du nombre d’intervalles n.",
        "type": "choice",
        "options": [
          "120+n = 1 680",
          "120n = 1 680",
          "1 680n = 120"
        ],
        "answer": 1,
        "points": 1.5
      },
      {
        "label": "Nombre d’intervalles",
        "type": "number",
        "answer": 14,
        "unit": "",
        "points": 1.5
      },
      {
        "label": "Nombre de barreaux intérieurs",
        "type": "number",
        "answer": 13,
        "unit": "",
        "points": 1.5
      },
      {
        "label": "Longueur totale des barreaux",
        "type": "number",
        "answer": 18.2,
        "unit": "m",
        "points": 1.5
      },
      {
        "label": "Contrôle : 14×120",
        "type": "number",
        "answer": 1680,
        "unit": "mm",
        "points": 1.5
      },
      {
        "label": "Rédiger la conclusion technique.",
        "type": "manual",
        "answer": "14 intervalles relient les axes extrêmes. Les deux montants existant, il faut 13 barreaux intérieurs, soit 13×1,40 = 18,20 m de tube hors coupes et chutes.",
        "points": 0.5
      }
    ],
    "correction": "120n = 1 680 → n = 14 ; 13 barreaux intérieurs ; 18,20 m de tube au métré nominal."
  }
};
