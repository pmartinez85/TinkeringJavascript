//funcions constructores

// function Persona(){
//
//     console.log('Creant un objecte');
//
// }


var Persona = function () {
    this.name = name;
    console.log('Creant un objecte');

}

Persona.prototype.sayHello = function(){

    console.log('Heeeello ' + this.name);
} //canviar la extensió...

console.log(Persona);

var personeta1 = new Persona('prova1');
var personeta2 = new Persona('prova2');
var personeta3 = new Persona('prova3');

console.log(personeta1.name);
console.log(personeta1.sayHello());
console.log(personeta2.name);
console.log(personeta2.sayHello());
console.log(personeta3.name);
console.log(personeta3.sayHello());
