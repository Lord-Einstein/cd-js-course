// CONTEXTE :
// Le tri à bulle est un algorithme de tri simple qui parcourt répétitivement
// le tableau, compare les éléments adjacents et les échange s'ils sont dans
// le mauvais ordre. Le processus se répète jusqu'à ce que le tableau soit trié.

// PRINCIPE :
// 1. Parcourir le tableau de gauche à droite
// 2. Comparer chaque paire d'éléments adjacents
// 3. Si l'élément de gauche est plus grand que celui de droite, les échanger
// 4. Répéter jusqu'à ce qu'aucun échange ne soit nécessaire

// ===================================
// PARTIE 1 : FONCTION D'ÉCHANGE
// ===================================

// TODO : Créer une fonction qui échange deux éléments dans un tableau
// Paramètres : tableau, index1, index2
// Cette fonction ne modifie pas le tableau directement

function echanger(tableau, index1, index2) {
  const copy = [...tableau];

  copy[index1] = tableau[index2];
  copy[index2] = tableau[index1];

  return copy;
}

// ===================================
// PARTIE 2 : TRI À BULLE - VERSION BASIQUE
// ===================================

// TODO : Créer une fonction triABulle qui trie un tableau de nombres
// Paramètres : tableau (array de numbers)
// Return : le tableau trié

function triABulle(tableau) {
  const length = tableau.length;
  let tab = tableau;

  for (let i = 0; i < length - 1; ++i) {
    for (let j = 0; j < length - i - 1; ++j) {
      if (tab[j] > tab[j + 1]) {
        tab = echanger(tab, j, j + 1);
      }
    }
  }

  return tab;
}

// ===================================
// PARTIE 3 : TRI À BULLE OPTIMISÉ
// ===================================

// TODO : Créer une version optimisée qui s'arrête si aucun échange n'est effectué
// (cela signifie que le tableau est déjà trié)

function triABulleOptimise(tableau) {
  // Votre code ici
}

// ===================================
// TESTS
// ===================================

console.log("=== TESTS DU TRI À BULLE ===\n");

// Test 1 : Tableau désorganisé
const tableau1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Tableau original :", tableau1);
console.log("Tableau trié :", triABulle([...tableau1])); // [...tableau1] crée une copie
console.log();

// Test 2 : Tableau déjà trié
const tableau2 = [1, 2, 3, 4, 5];
console.log("Tableau déjà trié :", tableau2);
console.log("Résultat :", triABulle([...tableau2]));
console.log();

// Test 3 : Tableau en ordre inverse
const tableau3 = [5, 4, 3, 2, 1];
console.log("Tableau inversé :", tableau3);
console.log("Résultat :", triABulle([...tableau3]));
console.log();

// Test 4 : Tableau avec doublons
const tableau4 = [3, 7, 3, 1, 7, 2];
console.log("Tableau avec doublons :", tableau4);
console.log("Résultat :", triABulle([...tableau4]));
console.log();

// ===================================
// TESTS VERSION OPTIMISÉE
// ===================================

console.log("=== TESTS VERSION OPTIMISÉE ===\n");

// Décommenter ces lignes une fois la fonction créée
// const tableau5 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Avec optimisation :", triABulleOptimise([...tableau5]));
