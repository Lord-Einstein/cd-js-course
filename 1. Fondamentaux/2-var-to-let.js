// CONTEXTE :
// Les var sont source d'erreur et d'une mauvaise lisibilité la plus part du temps.
// Remplacez les var dans le code suivant par des let ou des const au besoin.

function add(a, b) {
  const sum = a + b;
  return sum;
}

function substract(a, b) {
  let result = 0;
  if (a < b) {
    return result;
  } else {
    result = a - b;
    return result;
  }
}

function main(number1, number2) {
  console.log("L'addition des deux nombres vaut: ", add(number1, number2));
  console.log(
    "La soustraction des deux numbres vaut: ",
    substract(number1, number2),
  );
}

main(parseInt(process.argv[2] || "0", 10), parseInt(process.argv[3] || "0", 10));
