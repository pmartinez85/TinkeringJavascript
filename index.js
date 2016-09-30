//OPP: Object Oriented Programming


//JSON Javascript Object Notation

//Object Literal Notation

//Person.hello = function(){

//}

var person = {
    name : 'Pedro',
    sn1 : 'Martínez',


    hello: function(){
        console.log('Hola' + this.name);

    },
    bye: function(){

        return 'Bye bye' + this.name;
    },

}


console.log(person.name);
console.log(person.bye());

//The module paterrn


var person = (function() {
    var name = "Pedro";
    var sn1 = "Martínez";
    var sn2 = "Segura";

        return {
            hello: function () {
                console.log('Hola' + this.name);

            },
            bye: function () {

                return 'Bye bye' + this.name;
            }
        }

})();

person.bye();