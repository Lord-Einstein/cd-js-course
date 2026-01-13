// const tab = [1, 2, 3];

// console.log(tab);
// tab.push(4);
// console.log(tab);
// tab.unshift(0);
// console.log(tab);

// const val = tab.pop();
// console.log(val);
// console.log(tab);

// const val2 = tab.shift();
// console.log(val2);
// console.log(tab);

// for (let i = 0; i < tab.length; ++i) {
//   console.log(tab[i]);
// }

// for (const el of tab) {
//   console.log(el);
// }

// for (const index in tab) {
//   console.log(index);
// }

// const mapFunc = (n) => n * 2;
// const result = tab.map(mapFunc);
// console.log(result);

// const newTab = [];
// for (const el of tab) {
//   newTab.push(mapFunc(el));
// }
// console.log(newTab);

// const impair = tab.filter((el) => el % 2);
// console.log(impair);

// const superTab = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const resultFlat = superTab.flat();
// console.log(resultFlat);

// const resultReduce = tab.reduce((sum, el) => {
//   return sum + el;
// }, 0);

// console.log(resultReduce);

// function getHorodatage() {
//   const now = new Date();

//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const second = now.getSeconds();

//   return [hour, minute, second];
// }

// const resultHorodatage = getHorodatage();
// // const hour = resultHorodatage[0];
// // const minute = resultHorodatage[1];
// // const second = resultHorodatage[2];
// // const [hour, minute, second] = getHorodatage();
// // console.log(hour, minute, second);

// const [hour, ...rest] = getHorodatage();
// console.log(rest);

// const copyTab = [...tab];
// copyTab.push(4);
// console.log(tab);
// console.log(copyTab);

const grosTab = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
const firstPart = grosTab.slice(0, 8);
console.log(firstPart);
const lastPart = grosTab.slice(8);
console.log(lastPart);
console.log([...firstPart, 9, ...lastPart]);

const superTab = [firstPart, 9, lastPart].flat();
console.log(superTab);
