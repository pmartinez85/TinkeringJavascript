//console.log('hello friday');

//"use strict";

//console.log(this); // this = Window

//this is a script: objecte

var showFullName = function() {
    console.log(this.firstname + " " + this.sn1 + " " + arguments[0])
}

var name = "Pedro";


var person =  {

    firstname: name,
    sn1 :"Martinez",
    fullname: showFullName


    // showFullName:function () {
    //
    //     console.log (this.firstname + " " + this.sn1);
    // }
};

person.showFullName(); //Pedro Martinez

