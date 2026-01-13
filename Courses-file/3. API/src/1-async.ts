// ===================================
// PROGRAMMATION ASYNCHRONE - LECTURE DE FICHIERS
// ===================================

// CONTEXTE :
// La programmation asynchrone permet d'exécuter des opérations longues
// (comme la lecture de fichiers) sans bloquer l'exécution du programme.
// Node.js propose l'API fs (File System) pour manipuler les fichiers.

// TROIS APPROCHES ASYNCHRONES :
// 1. Callbacks (ancienne méthode)
// 2. Promises (moderne)
// 3. Async/Await (la plus lisible)

// Pour cet exercice, vous aurez besoin de Node.js et TypeScript installés
// Créez un fichier "exemple.txt" dans le même dossier avec du contenu

import * as fs from "fs";
import * as fsPromises from "fs/promises";

// ===================================
// PARTIE 1 : LECTURE AVEC CALLBACKS
// ===================================

// TODO : Créer une fonction "lireFichierCallback" qui :
// - Prend le chemin du fichier en paramètre
// - Utilise fs.readFile() avec un callback
// - Affiche le contenu du fichier
// - Gère les erreurs

function lireFichierCallback(chemin: string): void {
  console.log("Début de la lecture (callback)...");

  // TODO : Utiliser fs.readFile(chemin, 'utf8', (err, data) => {...})
}

// ===================================
// PARTIE 2 : LECTURE AVEC PROMISES
// ===================================

// TODO : Créer une fonction "lireFichierPromise" qui :
// - Prend le chemin du fichier en paramètre
// - Utilise fsPromises.readFile()
// - Retourne une Promise
// - Utilise .then() et .catch()

function lireFichierPromise(chemin: string): void {
  console.log("Début de la lecture (promise)...");

  // TODO : Utiliser fsPromises.readFile(chemin, 'utf8')
  // puis .then() et .catch()
}

// ===================================
// PARTIE 3 : LECTURE AVEC ASYNC/AWAIT
// ===================================

// TODO : Créer une fonction "lireFichierAsync" qui :
// - Est déclarée avec le mot-clé "async"
// - Utilise "await" avec fsPromises.readFile()
// - Utilise try/catch pour gérer les erreurs

async function lireFichierAsync(chemin: string): Promise<void> {
  console.log("Début de la lecture (async/await)...");

  // TODO : Utiliser try/catch avec await fsPromises.readFile()
}

// ===================================
// PARTIE 4 : LECTURE DE PLUSIEURS FICHIERS EN PARALLÈLE
// ===================================

// TODO : Créer une fonction "lirePlusieursFichiers" qui :
// - Prend un tableau de chemins de fichiers
// - Lit tous les fichiers EN PARALLÈLE avec Promise.all()
// - Retourne un tableau avec tous les contenus

async function lirePlusieursFichiers(chemins: string[]): Promise<string[]> {
  console.log("Lecture de plusieurs fichiers en parallèle...");

  // TODO : Utiliser Promise.all() avec map()
}

// ===================================
// PARTIE 5 : LECTURE SÉQUENTIELLE (UN PAR UN)
// ===================================

// TODO : Créer une fonction "lireFichiersSequentiel" qui :
// - Prend un tableau de chemins de fichiers
// - Lit les fichiers UN PAR UN (séquentiellement)
// - Affiche chaque contenu au fur et à mesure

async function lireFichiersSequentiel(chemins: string[]): Promise<string[]> {
  console.log("Lecture séquentielle des fichiers...");

  // TODO : Utiliser une boucle for...of avec await
}

// ===================================
// PARTIE 6 (BONUS) : FONCTION UTILITAIRE AVEC TIMEOUT
// ===================================

// TODO : Créer une fonction qui lit un fichier avec un timeout
// Si la lecture prend trop de temps, rejeter avec une erreur

async function lireFichierAvecTimeout(
  chemin: string,
  timeoutMs: number,
): Promise<string> {
  // TODO : Utiliser Promise.race() entre la lecture et un timeout
}

// ===================================
// PARTIE 7 (BONUS) : CRÉER ET ÉCRIRE UN FICHIER
// ===================================

// TODO : Créer une fonction qui écrit du contenu dans un fichier

async function ecrireFichier(chemin: string, contenu: string): Promise<void> {
  // TODO : Utiliser fsPromises.writeFile()
}

// ===================================
// TYPES POUR L'EXERCICE BONUS
// ===================================

// TODO : Définir une interface pour les statistiques d'un fichier
interface StatistiquesFichier {
  // Votre code ici
}

// ===================================
// PARTIE 8 (BONUS) : ANALYSER UN FICHIER
// ===================================

// TODO : Créer une fonction qui :
// 1. Lit un fichier
// 2. Compte le nombre de mots
// 3. Compte le nombre de lignes
// 4. Retourne un objet avec ces statistiques

async function analyserFichier(chemin: string): Promise<StatistiquesFichier> {
  // Votre code ici
}

// ===================================
// TESTS
// ===================================

// IMPORTANT : Créez d'abord un fichier "exemple.txt" avec du contenu
// Exemple de contenu : "Bonjour, ceci est un fichier de test !"

console.log("=== TESTS DE LECTURE DE FICHIERS ===\n");

// Test 1 : Lecture avec callback
console.log("--- Test 1 : Callback ---");
// TODO : Décommenter après avoir complété la fonction
// lireFichierCallback('./exemple.txt');

// Attendre un peu avant le test suivant (pour voir l'ordre d'exécution)
setTimeout(() => {
  console.log("\n--- Test 2 : Promise ---");
  // TODO : Décommenter après avoir complété la fonction
  // lireFichierPromise('./exemple.txt');
}, 1000);

setTimeout(() => {
  console.log("\n--- Test 3 : Async/Await ---");
  // TODO : Décommenter après avoir complété la fonction
  // lireFichierAsync('./exemple.txt');
}, 2000);

// ===================================
// TESTS AVANCÉS
// ===================================

// Test 4 : Lecture de plusieurs fichiers
// (Créez exemple2.txt et exemple3.txt d'abord)
setTimeout(async () => {
  console.log("\n--- Test 4 : Lecture parallèle ---");
  // TODO : Décommenter après avoir créé les fichiers et complété la fonction
  // const contenus = await lirePlusieursFichiers(['./exemple.txt', './exemple2.txt', './exemple3.txt']);
  // console.log("Tous les fichiers lus :", contenus);
}, 3000);

// Test 5 : Lecture séquentielle
setTimeout(async () => {
  console.log("\n--- Test 5 : Lecture séquentielle ---");
  // TODO : Décommenter après avoir complété la fonction
  // await lireFichiersSequentiel(['./exemple.txt', './exemple2.txt', './exemple3.txt']);
}, 4000);

// Test 6 : Test d'erreur (fichier inexistant)
setTimeout(async () => {
  console.log("\n--- Test 6 : Gestion d'erreur ---");
  // TODO : Décommenter après avoir complété la fonction
  // await lireFichierAsync('./fichier_inexistant.txt');
}, 5000);
