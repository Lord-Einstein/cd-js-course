const tab = [];

tab.push(1, 2, 3, 4);
tab.unshift(0);

console.log(tab);

tab.shift();
tab.pop();

console.log(tab);

for (const element of tab) {
    console.log(element);
}

for (const index in tab) {
    console.log(index); //intère sur les index
    console.log(tab[index]);
}

const mapFunc = (n) => n*2;
console.log(tab.map(mapFunc)); // .map applique une fonction à tous les éléments du tableau courant et le met dans une copie de tableau qu'il renvoie.

const impair = tab.filter((el) => el % 2); // il applique un prédicat à tous les éléments du tableau courant et en crée une copie avec les éléments qui respectent le prédicat
console.log(impair);

// superTab.flat ===== ramène un tab à plusieurs dimensions à un tab à une seule dimension.

const copyTab = [...tab]; //Le spread operator permet de récupérer les éléments non explicités d'un tableau ??? Il extrait les éléments dans de éléments spécifiques distincts
copyTab.push(4);
console.log(tab);
console.log(copyTab);

const grosTab = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];

const firstPart = grosTab.slice(0, 8);
console.log(firstPart);
const lastPart = grosTab.slice(8);
console.log(lastPart);
console.log(...firstPart, 9, ...lastPart);

console.log([firstPart, 9, lastPart].flat());