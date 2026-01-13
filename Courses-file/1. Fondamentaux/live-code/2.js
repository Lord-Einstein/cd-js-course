var n = 1;
var test = "";
var isTest = true;
var now = new Date();

let toto = "titi";
let pouet = "plop";
// --------pouet[plop]---------------------
pouet = "titi";
// --------pouet[titi]---------------------
// --------[plop]----pouet[titi]-----------------
function test1() {
  if (false) {
    var c = "ko";
  } else {
    c = "ok";
  }

  console.log(c);
}
function test2() {
  var c;
  if (false) {
    c = "ko";
  } else {
    c = "ok";
  }

  console.log(c);
}

const hello = "Hello";
const separator = " ";
const world = "world";
const helloWorld = `${hello} ${world}`;
// test2();

// closure
function testClosure() {
  let maVar = "test";
  console.log(maVar);

  function innerFunc() {
    console.log(maVar); //test
  }
  innerFunc();

  function innerFunc2() {
    const maVar = "2";
    console.log(maVar); //2
  }
  innerFunc2();
}
testClosure();
