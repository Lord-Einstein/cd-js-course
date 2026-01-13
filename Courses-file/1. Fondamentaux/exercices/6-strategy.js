// CONTEXTE :
// Le pattern Strategy permet de définir une famille d'algorithmes,
// de les encapsuler et de les rendre interchangeables.
// Ici, nous allons calculer l'aire de différentes formes géométriques
// en utilisant des stratégies différentes pour chaque forme.

// PRINCIPE :
// - Un objet contient différentes "stratégies" (méthodes de calcul)
// - Chaque stratégie est identifiée par une clé (nom de la forme)
// - On sélectionne dynamiquement la stratégie à utiliser

// ===================================
// PARTIE 1 : OBJET DES STRATÉGIES
// ===================================

// TODO : Créer un objet "strategiesAire" qui contient les méthodes
// de calcul d'aire pour différentes formes géométriques

const strategiesAire = {
  // TODO : Stratégie pour le rectangle
  // Formule : largeur × hauteur
  // Paramètres : largeur, hauteur
  rectangle: null, // Remplacer null par une fonction

  // TODO : Stratégie pour le carré
  // Formule : côté × côté
  // Paramètres : cote
  carre: null, // Remplacer null par une fonction

  // TODO : Stratégie pour le triangle
  // Formule : (base × hauteur) / 2
  // Paramètres : base, hauteur
  triangle: null, // Remplacer null par une fonction

  // TODO : Stratégie pour le cercle
  // Formule : π × rayon²
  // Paramètres : rayon
  cercle: null, // Remplacer null par une fonction

  // TODO : Stratégie pour le trapèze
  // Formule : ((petiteBase + grandeBase) × hauteur) / 2
  // Paramètres : petiteBase, grandeBase, hauteur
  trapeze: null, // Remplacer null par une fonction
};

// ===================================
// PARTIE 2 : FONCTION CALCULATEUR
// ===================================

// TODO : Créer une fonction "calculerAire" qui :
// - Prend en paramètre le nom de la forme
// - Prend en paramètre les dimensions nécessaires (rest parameter)
// - Sélectionne la bonne stratégie
// - Retourne l'aire calculée ou un message d'erreur si la forme n'existe pas

function calculerAire(forme, ...dimensions) {
  // TODO : Vérifier si la forme existe dans strategiesAire
  // TODO : Si la forme n'existe pas, retourner un message d'erreur
  // TODO : Sinon, appeler la stratégie correspondante avec les dimensions
}

// ===================================
// PARTIE 3 : FONCTION D'AFFICHAGE
// ===================================

// TODO : Créer une fonction "afficherResultat" qui :
// - Prend le nom de la forme et les dimensions
// - Calcule l'aire
// - Affiche un résultat formaté dans la console

function afficherResultat(forme, ...dimensions) {
  // TODO : Appeler calculerAire
  // TODO : Afficher le résultat de manière lisible
  // Format suggéré : "L'aire du [forme] est de [resultat] unités²"
}

// ===================================
// PARTIE 4 (BONUS) : LISTER LES FORMES DISPONIBLES
// ===================================

// TODO : Créer une fonction qui retourne la liste des formes disponibles

function listerFormesDisponibles() {
  // Votre code ici
}

// ===================================
// TESTS
// ===================================

console.log("=== TESTS DU CALCULATEUR D'AIRES ===\n");

// Test 1 : Rectangle
console.log("Test 1 - Rectangle (5 × 3) :");
// TODO : Décommenter après avoir complété la fonction
// afficherResultat("rectangle", 5, 3);
console.log();

// Test 2 : Carré
console.log("Test 2 - Carré (côté = 4) :");
// TODO : Décommenter après avoir complété la fonction
// afficherResultat("carre", 4);
console.log();

// Test 3 : Triangle
console.log("Test 3 - Triangle (base = 6, hauteur = 4) :");
// TODO : Décommenter après avoir complété la fonction
// afficherResultat("triangle", 6, 4);
console.log();

// Test 4 : Cercle
console.log("Test 4 - Cercle (rayon = 5) :");
// TODO : Décommenter après avoir complété la fonction
// afficherResultat("cercle", 5);
console.log();

// Test 5 : Trapèze
console.log("Test 5 - Trapèze (petiteBase = 3, grandeBase = 7, hauteur = 4) :");
// TODO : Décommenter après avoir complété la fonction
// afficherResultat("trapeze", 3, 7, 4);
console.log();

// Test 6 : Forme inexistante
console.log("Test 6 - Forme inexistante :");
// TODO : Décommenter après avoir complété la fonction
// console.log(calculerAire("pentagone", 5));
console.log();

// ===================================
// TESTS BONUS
// ===================================

console.log("=== TESTS BONUS ===\n");

// Test 7 : Lister les formes disponibles
console.log("Formes disponibles :");
// TODO : Décommenter après avoir complété la fonction
// console.log(listerFormesDisponibles());
console.log();
