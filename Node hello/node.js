class user {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

usuario = {
    _id: `0`,
    nome: `Eduardo Isac`,
    sobrenome: `Batistela`,
    endereco: `Av. Pereira Ignácio, 573`,

    constructor(id) {
        this._id = id;
        return this;
    },

    nomeCompleto() {
        return(`Nome completo: ${this.nome} ${this.sobrenome}`);
    },

    imprimeEndereco() {
        return(`Endereço completo: ${this.endereco}`);
    },
};

//console.log(usuario.nomeCompleto() + ` ` + usuario.imprimeEndereco());

arrayUsuarios = [new user(`eu 1`, `10`), new user(`eu 2`, `20`), new user(`eu 3`, `30`)];

//console.log(arrayUsuarios);

let me = new user(`eu`, `10`);
let me2 = usuario.constructor(1);

// console.log(arrayUsuarios);
// console.log(arrayUsuarios);

// console.log(arrayUsuarios.map(users => {
//     return(`Nome: ${users.name} Idade: ${users.age}`);
// }));

var array = [1, 2, 3, 4, 5];

array.forEach(array => { 
    console.log( `Este é o item: ${array} do array`)
});