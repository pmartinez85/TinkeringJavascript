/**
 * Created by pedro on 5/10/16.
 */

// class { } --> Sugar Syntax

// First clas citizens
// var x = function (){};
// javascript: function programming


//Funcions constructores

function Persona(){

        console.log('crear una nova persona');
        this.name='Pedro';
        this.sn1='Martinez';
}

var Persona1 = new Persona();
var Persona2 = new Persona();
console.log(Persona1);


// Mirar què fa el new exactament...no es un objecte nou

