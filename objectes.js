//Funcions constructores

function persona (){

        console.log('crear una nova persona');
        this.name = 'Pedro';
        this.sn1 = 'Martinez';
}

var persona1 = persona;

persona1.bind(persona);


console.log(name);



