//console.log('hello friday');

//"use strict";

//console.log(this); // this = Window

//this is a script: objecte

var person =  {

    firstname :"Pedro",
    lastname :"Martinez",


    showFullName:function () {

        console.log (this.firstname + " " + this.lastname);
    }
};

person.showFullName(); //Pedro Martinez