// CONTEXTE :
// Vous devez créer un système de logging personnalisé qui encapsule
// les méthodes de console (log, warn, error) pour ajouter des fonctionnalités
// supplémentaires comme l'horodatage et le formatage des messages.

// ===================================
// PARTIE 1 : FONCTION D'HORODATAGE
// ===================================

// TODO : Créer une fonction qui retourne l'heure actuelle au format HH:MM:SS
// Exemple de retour : "[14:35:22]"

function obtenirHorodatage() {
  const now = new Date();

  const formatage = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (`[${formatage}]`);
}

// ===================================
// PARTIE 2 : CRÉATION DU PROXY CONSOLE
// ===================================

const lastConsoleLog = console.log;
const lastConsoleWarn = console.warn;
const lastConsoleError = console.error;

console.log = (message) => lastConsoleLog(`${obtenirHorodatage()} ${message}`);
console.warn = (message) => lastConsoleWarn(`${obtenirHorodatage()} ${message}`);
console.error = (message) => lastConsoleError(`${obtenirHorodatage()} ${message}`);

// ===================================
// PARTIE 3 : MISE EN PLACE DU PROXY
// ===================================


// ===================================
// TESTS
// ===================================

// Test de la méthode log
console.log("Ceci est un message d'information");

// Test de la méthode warn
console.warn("Attention, ceci est un avertissement");

// Test de la méthode error
console.error("Une erreur s'est produite");
