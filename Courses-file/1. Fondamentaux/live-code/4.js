// function main() {

// }

// const main = function () {
//   // console.log("test");
//   let maVar = "test";
//   return maVar;
// };

// const main = () => {
//   let maVar = "test";
//   return maVar;
// };

// const main = () => "test";

// console.log(main);
// const result = main();
// console.log(result);

// // const greeting = (name) => `Hello ${name}`;
// const greeting = (salution) => (name) => `${salution} ${name}`;

// const hiGreeting = greeting("Salut");
// // console.log(hiGreeting("me"));
// // console.log(hiGreeting("you"));

// const helloGreeting = greeting("Hello");
// // console.log(helloGreeting("world"));

// function log(greet) {
//   console.log(greet("world"));
// }

// log(hiGreeting);

// function sansReturn(nom) {
//   // if (!nom) {
//   //   return;
//   // }
//   console.log("execution");
// }

// const result = sansReturn();
// console.log(result);

process.log = () => {
  console.log("test");
};
console.log(process.log);
process.log();
