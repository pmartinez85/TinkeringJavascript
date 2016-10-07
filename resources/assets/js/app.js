var calculateArea = function(){

    console.log('Aqui calculo area');
}

var Figure = function (){

    //this.area = calculateArea;

}

Figure.prototype.area = calculateArea;

var figura = new Figure();

console.log(figura.area());
