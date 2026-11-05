window.LESSON = {
  "code": "A1S4M1",
  "title": "Proportionnalité, échelles et plans métalliques",
  "duration": "1 h 30",
  "kind": "echelles",
  "objectives": [
    "Passer du plan au réel et du réel au plan avec des unités cohérentes.",
    "Lire les cotes réelles en millimètres et distinguer une cote écrite d’une mesure graphique.",
    "Préparer un métré et vérifier une estimation de matière."
  ],
  "prerequisites": "Proportionnalité, multiplications, divisions et conversions de longueurs.",
  "badges": [
    "Lecteur de plans · Socle CAP",
    "Cotes & métré d’atelier",
    "Plans complexes & devis matière"
  ],
  "notes": [
    "Les 11 exercices du dossier fourni sont repris. Le défi de synthèse /8 est un ajout formatif pour cette application.",
    "Sur écran, la règle est virtuelle : une longueur affichée en cm ne doit pas être mesurée avec une règle physique. Le zoom ne change pas la valeur d’une cote inscrite.",
    "Dans cette séance, les cotes d’atelier sont exprimées en mm ; sur un document réel, vérifier les unités et les indications du cartouche.",
    "Les masses linéiques et la TVA de 8,5 % sont les données des exercices, sans vérification de produit, de fiscalité ni de dimensionnement structurel.",
    "L’exercice 2.3 est traité comme un contrôle de hauteur disponible : 1 840 + 50 = 1 890 mm sous un linteau à 1 900 mm. La largeur entre piliers n’intervient pas dans ce calcul.",
    "L’implantation de la pergola est une comparaison des dimensions nominales, hors débords, platines, jeux et étude structurelle."
  ],
  "discovery": [
    {
      "title": "Plan d’une varangue à Saint-Denis",
      "context": "À Sainte-Clotilde, l’atelier prépare une varangue destinée à La Bretagne. Le plan est au 1/20. On relève 14 cm pour la hauteur, 28 cm pour la largeur et 3,5 cm pour le débord de toiture. Les relevés graphiques sont fournis numériquement : ne mesure pas l’écran.",
      "questions": [
        {
          "label": "1 cm sur le plan représente combien de cm réels ?",
          "type": "number",
          "answer": 20,
          "unit": "cm",
          "points": 0
        },
        {
          "label": "1 mm sur le plan représente combien de mm réels ?",
          "type": "number",
          "answer": 20,
          "unit": "mm",
          "points": 0
        },
        {
          "label": "Hauteur réelle en centimètres",
          "type": "number",
          "answer": 280,
          "unit": "cm",
          "points": 0
        },
        {
          "label": "Hauteur réelle en mètres",
          "type": "number",
          "answer": 2.8,
          "unit": "m",
          "points": 0
        },
        {
          "label": "Hauteur d’atelier en millimètres",
          "type": "number",
          "answer": 2800,
          "unit": "mm",
          "points": 0
        },
        {
          "label": "Largeur réelle en centimètres",
          "type": "number",
          "answer": 560,
          "unit": "cm",
          "points": 0
        },
        {
          "label": "Largeur réelle en mètres",
          "type": "number",
          "answer": 5.6,
          "unit": "m",
          "points": 0
        },
        {
          "label": "Largeur d’atelier en millimètres",
          "type": "number",
          "answer": 5600,
          "unit": "mm",
          "points": 0
        },
        {
          "label": "Débord réel de toiture en millimètres",
          "type": "number",
          "answer": 700,
          "unit": "mm",
          "points": 0
        },
        {
          "label": "Coefficient plan cm → réel cm",
          "type": "number",
          "answer": 20,
          "unit": "",
          "points": 0
        },
        {
          "label": "Coefficient direct plan cm → atelier mm",
          "type": "number",
          "answer": 200,
          "unit": "",
          "points": 0
        },
        {
          "label": "Expliquer le passage du plan en cm à la cote réelle en mm.",
          "type": "manual",
          "answer": "Multiplier la mesure en cm par 20 pour obtenir les cm réels, puis par 10 pour obtenir les mm. Le coefficient direct est 200.",
          "points": 0
        }
      ],
      "correction": "14 × 20 = 280 cm = 2,80 m = 2 800 mm. 28 × 20 = 560 cm = 5,60 m = 5 600 mm. Débord : 3,5 × 20 × 10 = 700 mm."
    }
  ],
  "course": [
    [
      "Définition et unités",
      "Échelle E = longueur sur le plan ÷ longueur réelle, avec les deux longueurs dans la même unité. Une cote inscrite donne la dimension réelle de la pièce, pas la longueur de son trait sur le papier."
    ],
    [
      "Réduction, vraie grandeur et agrandissement",
      "1:20 : 1 unité dessinée représente 20 unités réelles.\n1:1 : même longueur sur le dessin et dans la réalité.\n2:1 : le dessin est deux fois plus grand que la pièce ; une mesure sur le dessin doit être divisée par 2 pour retrouver le réel."
    ],
    [
      "Les deux sens de calcul",
      "Pour une réduction 1:N :\nRéel = Plan × N.\nPlan = Réel ÷ N.\nExemple : 14 cm sur un plan au 1:20 → 280 cm réels. Inversement, 280 cm réels → 14 cm sur le plan."
    ],
    [
      "De la mesure aux cotes d’atelier",
      "1 cm = 10 mm ; 1 m = 100 cm = 1 000 mm.\nPlan en cm → réel en mm au 1:N : multiplier par N puis par 10. Au 1:20, le coefficient direct vaut 200. Lire d’abord le cartouche et les unités."
    ],
    [
      "Lire un plan avec prudence",
      "Un dessin numérique peut être agrandi ou réduit à l’écran. La cote écrite reste inchangée. Une mesure graphique sert à l’exercice ou à une estimation ; pour fabriquer, utiliser un document de référence contrôlé et les cotes validées."
    ]
  ],
  "levels": [
    [
      {
        "title": "1.1 · Grille de défense au 1/20",
        "context": "Relevés sur un plan : largeur 6 cm ; hauteur 4,5 cm ; écartement 0,5 cm.",
        "questions": [
          {
            "label": "Largeur réelle",
            "type": "number",
            "answer": 120,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Largeur d’atelier",
            "type": "number",
            "answer": 1200,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Hauteur réelle",
            "type": "number",
            "answer": 90,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Hauteur d’atelier",
            "type": "number",
            "answer": 900,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Écartement réel",
            "type": "number",
            "answer": 10,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Écartement d’atelier",
            "type": "number",
            "answer": 100,
            "unit": "mm",
            "points": 0
          }
        ],
        "correction": "Chaque mesure en cm est multipliée par 20, puis par 10 : 1 200 mm, 900 mm et 100 mm."
      },
      {
        "title": "1.2 · Du réel vers le plan au 1/50",
        "context": "Représenter un poteau de 3 m, une façade de 12 m et une porte de 90 cm.",
        "questions": [
          {
            "label": "Poteau : 3 m =",
            "type": "number",
            "answer": 300,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Poteau sur le plan",
            "type": "number",
            "answer": 6,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Façade : 12 m =",
            "type": "number",
            "answer": 1200,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Façade sur le plan",
            "type": "number",
            "answer": 24,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Porte sur le plan",
            "type": "number",
            "answer": 1.8,
            "unit": "cm",
            "points": 0
          }
        ],
        "correction": "Convertir d’abord dans la même unité puis diviser par 50 : 300/50 = 6 cm ; 1 200/50 = 24 cm ; 90/50 = 1,8 cm."
      },
      {
        "title": "1.3 · Retrouver une échelle",
        "context": "Une cornière de 1 500 mm est dessinée par un segment de 15 cm.",
        "questions": [
          {
            "label": "Longueur réelle en centimètres",
            "type": "number",
            "answer": 150,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Écrire le rapport Plan / Réel dans la même unité.",
            "type": "manual",
            "answer": "15 / 150 = 1 / 10.",
            "points": 0
          },
          {
            "label": "Échelle 1/N : valeur de N",
            "type": "number",
            "answer": 10,
            "unit": "",
            "points": 0
          }
        ],
        "correction": "1 500 mm = 150 cm. Échelle = 15/150 = 1/10."
      },
      {
        "title": "1.4 · Tableau au 1/25",
        "context": "Colonnes du tableau : plan 1 cm / réel 25 cm ; plan 2 cm / réel 50 cm ; plan 4 cm ; réel 150 cm ; plan 10 cm.",
        "questions": [
          {
            "label": "Pour 4 cm sur plan : réel",
            "type": "number",
            "answer": 100,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Pour 4 cm sur plan : atelier",
            "type": "number",
            "answer": 1000,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Pour 150 cm réels : plan",
            "type": "number",
            "answer": 6,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Pour 150 cm réels : atelier",
            "type": "number",
            "answer": 1500,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Pour 10 cm sur plan : réel",
            "type": "number",
            "answer": 250,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Pour 10 cm sur plan : atelier",
            "type": "number",
            "answer": 2500,
            "unit": "mm",
            "points": 0
          }
        ],
        "correction": "Au 1/25 : ×25 du plan au réel. Le tableau complet est : plan 1, 2, 4, 6, 10 cm ; réel 25, 50, 100, 150, 250 cm ; atelier 250, 500, 1 000, 1 500, 2 500 mm."
      },
      {
        "title": "1.5 · Un portail sur une feuille",
        "context": "Portail réel : 4 m. Largeur utile de la feuille : 25 cm. On essaie le 1/10.",
        "questions": [
          {
            "label": "Longueur réelle en centimètres",
            "type": "number",
            "answer": 400,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Longueur sur plan au 1/10",
            "type": "number",
            "answer": 40,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Le dessin tient-il dans 25 cm utiles ?",
            "type": "choice",
            "options": [
              "Oui",
              "Non"
            ],
            "answer": 1,
            "points": 0
          },
          {
            "label": "Justifier, puis proposer une réduction adaptée.",
            "type": "manual",
            "answer": "40 cm > 25 cm : le 1/10 ne convient pas. Au 1/20, 400/20 = 20 cm : cela tient dans 25 cm utiles.",
            "points": 0
          }
        ],
        "correction": "400/10 = 40 cm : trop grand. Le 1/20 donne 20 cm."
      }
    ],
    [
      {
        "title": "2.1 · Débit de la varangue",
        "context": "Au 1/20 : poteau 12,5 cm ; poutre 24,0 cm ; jambe de force 6,8 cm. Le tube de poteau pèse 7,10 kg/m. Stock : barres de 6 000 mm.",
        "questions": [
          {
            "label": "Poteau réel",
            "type": "number",
            "answer": 250,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Poteau d’atelier",
            "type": "number",
            "answer": 2500,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Poutre réelle",
            "type": "number",
            "answer": 480,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Poutre d’atelier",
            "type": "number",
            "answer": 4800,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Jambe de force réelle",
            "type": "number",
            "answer": 136,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Jambe de force d’atelier",
            "type": "number",
            "answer": 1360,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Longueur du poteau en mètres",
            "type": "number",
            "answer": 2.5,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Masse d’un poteau",
            "type": "number",
            "answer": 17.75,
            "unit": "kg",
            "points": 0
          },
          {
            "label": "Poteaux complets dans 6 000 mm, hors trait de scie",
            "type": "number",
            "answer": 2,
            "unit": "poteaux",
            "points": 0
          }
        ],
        "correction": "12,5×20 = 250 cm = 2 500 mm. Poutre : 4 800 mm ; jambe : 1 360 mm. Masse : 2,5×7,10 = 17,75 kg. Deux poteaux de 2 500 mm rentrent dans 6 000 mm ; le trait de coupe reste à intégrer au débit réel."
      },
      {
        "title": "2.2 · Deux plans, deux échelles",
        "context": "Escalier : hauteur mesurée 5,6 cm au 1/50. Détail du giron : 4,8 cm au 1/5. Chaque marche monte de 17,5 cm.",
        "questions": [
          {
            "label": "Hauteur totale réelle",
            "type": "number",
            "answer": 2.8,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Largeur réelle du giron",
            "type": "number",
            "answer": 240,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Nombre de marches dans le modèle",
            "type": "number",
            "answer": 16,
            "unit": "marches",
            "points": 0
          }
        ],
        "correction": "Hauteur : 5,6×50 = 280 cm = 2,8 m. Giron : 4,8×5×10 = 240 mm. 280/17,5 = 16 marches."
      },
      {
        "title": "2.3 · Cote manquante du portail",
        "context": "Hauteur mesurée 92 mm sur un plan au 1/20. Le linteau est à 1 900 mm. Un jeu de 50 mm est demandé en bas. La largeur entre piliers annoncée dans le dossier ne sert pas à ce contrôle vertical.",
        "questions": [
          {
            "label": "Hauteur réelle du portail",
            "type": "number",
            "answer": 1840,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Hauteur du portail + jeu bas",
            "type": "number",
            "answer": 1890,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Marge nominale sous le linteau",
            "type": "number",
            "answer": 10,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Le contrôle de hauteur fourni est-il respecté ?",
            "type": "choice",
            "options": [
              "Oui, pour ces seules dimensions",
              "Non"
            ],
            "answer": 0,
            "points": 0
          },
          {
            "label": "Justifier la comparaison.",
            "type": "manual",
            "answer": "1 840 + 50 = 1 890 mm ≤ 1 900 mm : il reste 10 mm. Cette comparaison ne contrôle ni largeur, ni fixations, ni les autres jeux.",
            "points": 0
          }
        ],
        "correction": "92×20 = 1 840 mm ; 1 840+50 = 1 890 mm ; marge 10 mm."
      },
      {
        "title": "2.4 · Cartouche effacé au Port",
        "context": "Une travée réelle de 8,40 m mesure 16,8 cm sur le plan. Un garde-corps mesure 2,2 cm sur ce même dessin.",
        "questions": [
          {
            "label": "Travée réelle en centimètres",
            "type": "number",
            "answer": 840,
            "unit": "cm",
            "points": 0
          },
          {
            "label": "Échelle 1/N : N =",
            "type": "number",
            "answer": 50,
            "unit": "",
            "points": 0
          },
          {
            "label": "Longueur réelle du garde-corps",
            "type": "number",
            "answer": 1.1,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Expliquer le rapport utilisé.",
            "type": "manual",
            "answer": "16,8/840 = 1/50. Le garde-corps mesure 2,2×50 = 110 cm = 1,10 m.",
            "points": 0
          }
        ],
        "correction": "8,40 m = 840 cm ; 16,8/840 = 1/50 ; 2,2×50 = 110 cm = 1,10 m."
      }
    ],
    [
      {
        "title": "3.1 · Pergola à Saint-Gilles",
        "context": "Plan au 1/25 : 4 poteaux de 10 cm ; 2 poutres de 24 cm ; 3 traverses et 14 lames de 14,4 cm. Ossature : 6,64 kg/m ; lames aluminium : 1,85 kg/m. Dalle : 6,20 m × 3,80 m.",
        "questions": [
          {
            "label": "Longueur réelle d’un poteau",
            "type": "number",
            "answer": 2500,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Longueur réelle d’une poutre",
            "type": "number",
            "answer": 6000,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Longueur réelle d’une traverse",
            "type": "number",
            "answer": 3600,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Longueur réelle d’une lame",
            "type": "number",
            "answer": 3600,
            "unit": "mm",
            "points": 0
          },
          {
            "label": "Métré de l’ossature hors lames",
            "type": "number",
            "answer": 32.8,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Masse d’acier au millième",
            "type": "number",
            "answer": 217.792,
            "unit": "kg",
            "points": 0,
            "round": 3
          },
          {
            "label": "Métré total des 14 lames",
            "type": "number",
            "answer": 50.4,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Masse d’aluminium",
            "type": "number",
            "answer": 93.24,
            "unit": "kg",
            "points": 0
          },
          {
            "label": "Les dimensions nominales 6,00 m × 3,60 m tiennent-elles dans 6,20 m × 3,80 m ?",
            "type": "choice",
            "options": [
              "Oui, pour cette comparaison géométrique",
              "Non"
            ],
            "answer": 0,
            "points": 0
          },
          {
            "label": "Formuler la conclusion et sa limite.",
            "type": "manual",
            "answer": "Les dimensions nominales 6,00×3,60 m sont inférieures à 6,20×3,80 m. Vérifier séparément les platines, débords, jeux et le dimensionnement de l’ouvrage.",
            "points": 0
          }
        ],
        "correction": "Poteaux 2,5 m ; poutres 6 m ; traverses/lames 3,6 m. Ossature : 4×2,5+2×6+3×3,6 = 32,8 m. Acier : 32,8×6,64 = 217,792 kg. Lames : 14×3,6×1,85 = 93,24 kg."
      },
      {
        "title": "3.2 · Grilles et devis de traitement",
        "context": "6 grilles : chacune 9,5 cm × 6 cm au 1/20. Surface de traitement forfaitaire = 1,5 fois l’aire rectangulaire. Tarif donné : 45 € HT/m² ; TVA de l’exercice : 8,5 %. Le traitement n’est pas évalué techniquement par cette application.",
        "questions": [
          {
            "label": "Longueur réelle d’une grille",
            "type": "number",
            "answer": 1.9,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Hauteur réelle d’une grille",
            "type": "number",
            "answer": 1.2,
            "unit": "m",
            "points": 0
          },
          {
            "label": "Aire rectangulaire d’une grille",
            "type": "number",
            "answer": 2.28,
            "unit": "m²",
            "points": 0
          },
          {
            "label": "Aire rectangulaire des 6 grilles",
            "type": "number",
            "answer": 13.68,
            "unit": "m²",
            "points": 0
          },
          {
            "label": "Surface forfaitaire de traitement",
            "type": "number",
            "answer": 20.52,
            "unit": "m²",
            "points": 0
          },
          {
            "label": "Total HT",
            "type": "number",
            "answer": 923.4,
            "unit": "€",
            "points": 0
          },
          {
            "label": "TVA au centime",
            "type": "number",
            "answer": 78.49,
            "unit": "€",
            "points": 0,
            "round": 2
          },
          {
            "label": "Total TTC au centime",
            "type": "number",
            "answer": 1001.89,
            "unit": "€",
            "points": 0,
            "round": 2
          }
        ],
        "correction": "1,9×1,2 = 2,28 m² ; ×6 = 13,68 m² ; ×1,5 = 20,52 m² ; ×45 = 923,40 € HT ; ×1,085 = 1 001,889 €, soit 1 001,89 € TTC. La surface développée est ici une convention de chiffrage donnée."
      }
    ]
  ],
  "evaluation": {
    "title": "Défi de synthèse · Platine et portillon",
    "context": "Ajout formatif : sur un plan au 1/20, un portillon mesure 8 cm de large et 5 cm de haut. On prévoit une masse linéique de 2,40 kg/m et une finition sur son contour nominal, sans chutes.",
    "questions": [
      {
        "label": "Largeur réelle",
        "type": "number",
        "answer": 1600,
        "unit": "mm",
        "points": 1.5
      },
      {
        "label": "Hauteur réelle",
        "type": "number",
        "answer": 1000,
        "unit": "mm",
        "points": 1.5
      },
      {
        "label": "Contour nominal total",
        "type": "number",
        "answer": 5.2,
        "unit": "m",
        "points": 1.5
      },
      {
        "label": "Masse correspondant à 5,2 m",
        "type": "number",
        "answer": 12.48,
        "unit": "kg",
        "points": 1.5
      },
      {
        "label": "Largeur du même portillon sur un plan au 1/50",
        "type": "number",
        "answer": 3.2,
        "unit": "cm",
        "points": 1.5
      },
      {
        "label": "Expliquer la méthode et les limites du métré.",
        "type": "manual",
        "answer": "Plan cm ×20 ×10 → mm. Le métré de 5,2 m est nominal : il faut ajouter ou vérifier coupes, assemblages et chutes.",
        "points": 0.5
      }
    ],
    "correction": "8×20 = 160 cm ; 5×20 = 100 cm. Contour 2×(1,6+1) = 5,2 m ; masse 12,48 kg ; au 1/50, largeur 160/50 = 3,2 cm."
  }
};
