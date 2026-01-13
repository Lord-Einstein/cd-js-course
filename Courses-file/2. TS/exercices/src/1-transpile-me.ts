// CONTEXTE :
// Nous allons tester la transpilation TS.
// Essayer de transpiler le code tel quel avec la commande npm run build
// Regarder ce qui reste du code TS d'origine

interface Message {
  content: string;
}

function main() {
  const message: Message = {
    content: "hello world from TS!",
  };
  console.log(message);
}

main();
