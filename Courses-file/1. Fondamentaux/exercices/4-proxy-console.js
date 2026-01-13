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
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  return `[${hour}:${minute}:${second}]`;
}

// ===================================
// PARTIE 2 : CRÉATION DU PROXY CONSOLE
// ===================================

const oldLog = console.log;
console.log = (message) => {
  oldLog(`${obtenirHorodatage()} ${message}`);
};

// ===================================
// TESTS
// ===================================

// Test de la méthode log
console.log("Ceci est un message d'information");

// Test de la méthode warn
console.warn("Attention, ceci est un avertissement");

// Test de la méthode error
console.error("Une erreur s'est produite");
