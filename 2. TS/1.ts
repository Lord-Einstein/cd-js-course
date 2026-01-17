interface Person {
    name: string;
    firstName: string;
    address?: { //rendre la clé non obligatoire (donc undefine par défaut)
        primary: string;
        zipCode: string;
        city: string;
    };
    birthSex?: BirthSex;
}
// interface Person {
//     name : string;
//     firstName : string;
//     address : |{ //rendre la clé non obligatoire (donc la valeur par défaut ou null) ???
//         primary : string;
//         zipCode : string;
//         city : string;
//     }|; //Error
// }


enum BirthSex {
    Male = "male",
    Female = "female",
    Other = "other",
}

const me: Person = {
    name: "Alex",
    firstName: "Lore",
    address: {
        primary: "1 rue des fleurs",
        zipCode: "21000",
        city: "Dijon",
    },
    birthSex: BirthSex.Male
}

const you: Person = {
    name: "Smile",
    firstName: "Barille",
}

if(me.birthSex === BirthSex.Male) {
    console.log("You are a male !");
}