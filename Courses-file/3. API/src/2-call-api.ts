// ===================================
// APPELS D'API - POKÉAPI
// ===================================

// CONTEXTE :
// La PokéAPI (https://pokeapi.co/) est une API REST gratuite qui fournit
// des informations sur les Pokémon. Dans cet exercice, vous allez apprendre
// à faire des requêtes HTTP pour récupérer des données.

// API UTILISÉE : https://pokeapi.co/api/v2/
// Documentation : https://pokeapi.co/docs/v2

// ===================================
// TYPES
// ===================================

// TODO : Définir une interface pour un Pokémon simplifié
interface Pokemon {
  // Votre code ici
}

// TODO : Définir une interface pour les types d'un Pokémon
interface PokemonType {
  // Votre code ici
}

// TODO : Définir une interface pour les statistiques d'un Pokémon
interface PokemonStat {
  // Votre code ici
}

// ===================================
// PARTIE 1 : RÉCUPÉRER UN POKÉMON PAR SON NOM
// ===================================

// TODO : Créer une fonction async qui :
// - Prend le nom d'un Pokémon en paramètre
// - Fait un appel GET à https://pokeapi.co/api/v2/pokemon/{nom}
// - Retourne les informations du Pokémon
// - Gère les erreurs (Pokémon inexistant, erreur réseau, etc.)

async function recupererPokemon(nom: string): Promise<Pokemon | null> {
  // TODO : Utiliser fetch() pour faire la requête
  // URL : `https://pokeapi.co/api/v2/pokemon/${nom.toLowerCase()}`
}

// ===================================
// PARTIE 2 : AFFICHER LES INFORMATIONS D'UN POKÉMON
// ===================================

// TODO : Créer une fonction qui affiche de manière formatée :
// - Le nom du Pokémon
// - Son numéro dans le Pokédex
// - Ses types
// - Sa taille et son poids
// - Ses statistiques principales

async function afficherPokemon(nom: string): Promise<void> {
  // TODO : Appeler recupererPokemon et afficher les infos
}

// ===================================
// PARTIE 3 : RÉCUPÉRER PLUSIEURS POKÉMON
// ===================================

// TODO : Créer une fonction qui récupère plusieurs Pokémon en parallèle
// - Prend un tableau de noms en paramètre
// - Utilise Promise.all() pour les récupérer en parallèle
// - Retourne un tableau de Pokémon

async function recupererPlusieursPokemon(noms: string[]): Promise<Pokemon[]> {
  // TODO : Utiliser Promise.all() avec map()
}

// ===================================
// PARTIE 4 : RÉCUPÉRER UNE LISTE DE POKÉMON (PAGINATION)
// ===================================

// TODO : Créer une fonction qui récupère une liste de Pokémon
// - Endpoint : https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
// - Le paramètre "limit" définit combien de Pokémon récupérer
// - Le paramètre "offset" définit à partir de quel Pokémon commencer
// - Retourne un tableau de noms de Pokémon

async function recupererListePokemon(
  limit: number = 20,
  offset: number = 0,
): Promise<string[]> {
  // TODO : Faire un appel à l'API avec les paramètres limit et offset
}

// ===================================
// PARTIE 5 (BONUS) : RECHERCHER PAR TYPE
// ===================================

// TODO : Créer une fonction qui récupère tous les Pokémon d'un type donné
// - Endpoint : https://pokeapi.co/api/v2/type/{type}
// - Types possibles : fire, water, grass, electric, etc.
// - Retourne la liste des noms de Pokémon de ce type

async function recupererPokemonParType(type: string): Promise<string[]> {
  // TODO : Faire l'appel API et extraire les noms
}

// ===================================
// PARTIE 6 (BONUS) : COMPARER DEUX POKÉMON
// ===================================

// TODO : Créer une fonction qui compare deux Pokémon
// - Affiche leurs statistiques côte à côte
// - Indique lequel est le plus fort (basé sur la somme des stats)

async function comparerPokemon(nom1: string, nom2: string): Promise<void> {
  // TODO : Récupérer les deux Pokémon et comparer leurs stats
}

// ===================================
// PARTIE 7 (BONUS) : CACHE SIMPLE
// ===================================

// TODO : Implémenter un système de cache pour éviter de refaire
// les mêmes requêtes API

const cache: Map<string, Pokemon> = new Map();

async function recupererPokemonAvecCache(nom: string): Promise<Pokemon | null> {
  // TODO : Vérifier si le Pokémon est dans le cache
  // Si oui, le retourner
  // Sinon, le récupérer de l'API et le mettre en cache
}

// ===================================
// TESTS
// ===================================

console.log("=== TESTS POKEAPI ===\n");

// Test 1 : Récupérer un Pokémon
async function test1() {
  console.log("--- Test 1 : Récupérer Pikachu ---");
  // TODO : Décommenter après avoir complété la fonction
  // await afficherPokemon("pikachu");
  console.log();
}

// Test 2 : Récupérer plusieurs Pokémon
async function test2() {
  console.log("--- Test 2 : Récupérer plusieurs Pokémon ---");
  // TODO : Décommenter après avoir complété la fonction
  // const pokemons = await recupererPlusieursPokemon(["bulbasaur", "charmander", "squirtle"]);
  // console.log(`${pokemons.length} Pokémon récupérés :`, pokemons.map(p => p.name));
  console.log();
}

// Test 3 : Récupérer une liste
async function test3() {
  console.log("--- Test 3 : Liste des 10 premiers Pokémon ---");
  // TODO : Décommenter après avoir complété la fonction
  // const liste = await recupererListePokemon(10, 0);
  // console.log("Premiers Pokémon :", liste);
  console.log();
}

// Test 4 : Gestion d'erreur
async function test4() {
  console.log("--- Test 4 : Pokémon inexistant ---");
  // TODO : Décommenter après avoir complété la fonction
  // await afficherPokemon("pokemoninexistant");
  console.log();
}

// Test 5 : Recherche par type
async function test5() {
  console.log("--- Test 5 : Pokémon de type feu ---");
  // TODO : Décommenter après avoir complété la fonction
  // const pokemonFeu = await recupererPokemonParType("fire");
  // console.log(`${pokemonFeu.length} Pokémon de type feu trouvés`);
  // console.log("Premiers :", pokemonFeu.slice(0, 5));
  console.log();
}

// Test 6 : Comparaison
async function test6() {
  console.log("--- Test 6 : Comparer Pikachu et Raichu ---");
  // TODO : Décommenter après avoir complété la fonction
  // await comparerPokemon("pikachu", "raichu");
  console.log();
}

// Test 7 : Cache
async function test7() {
  console.log("--- Test 7 : Test du cache ---");
  // TODO : Décommenter après avoir complété la fonction
  // console.log("Première requête (depuis l'API):");
  // console.time("Sans cache");
  // await recupererPokemonAvecCache("mewtwo");
  // console.timeEnd("Sans cache");

  // console.log("\nDeuxième requête (depuis le cache):");
  // console.time("Avec cache");
  // await recupererPokemonAvecCache("mewtwo");
  // console.timeEnd("Avec cache");
  console.log();
}

// ===================================
// EXÉCUTION DES TESTS
// ===================================

async function executerTests() {
  await test1();
  await test2();
  await test3();
  await test4();
  await test5();
  await test6();
  await test7();

  console.log("=== TOUS LES TESTS TERMINÉS ===");
}

// Décommenter pour exécuter les tests
// executerTests().catch(console.error);
