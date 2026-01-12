function testClosure() {
    let maVar = "test";

    function innerFunc() {
        let maVar = "3"; // Copie pas le contexte quand c'est pas utile et si les éléments sont déjà disponibles
        console.log(maVar);
    }

    innerFunc(); //Reprend le contexte de la fonction sur la pile juste en dessus pour son travail
    console.log(maVar);

}

testClosure();