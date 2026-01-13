async function fetchData() {
  try {
    const response = await fetch("/api/hello");
    const data = await response.json();

    // ===================================
    // PARTIE 2 : AFFICHER LES RESULTATS
    // ===================================

    // TODO :
    // Ajouter à l'élément avec un id message la valeur de data.message
    // Ajouter à l'élément avec la classe timestamp la valeur "Heure: " + new Date(data.timestamp).toLocaleString("fr-FR")
    // Ajouter à l'élément avec un attribut data-component qui vaut result la classe css "show"
  } catch (error) {
    console.error("Erreur:", error);
  }
}

// ===================================
// PARTIE 1 : S'ABONNER A UN EVENEMENT
// ===================================

// TODO : S'abonner au click du bouton et executer fetchData

console.log("📦 app.js chargé avec succès");
