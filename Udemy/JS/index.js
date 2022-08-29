const nom = "John";
var y = 24.63;
var  x = 12;
var myString = 'Hello John';
var string1 = "Hello";
var string2 = 'John';
var myBoolean = true;
var myBoolean2 = false;

/* fait la concaténation des deux string avec un espace */
var myNewString2 = string1 + " " + string2;

/* remplace la nouvelle string qui était contenu dans string */
var myNewString = myString.replace("John","Tim");

/* nous donnes la position de John dans l'élément mystring */
var position = myString.indexOf("John");

/* nous donnes la taille de l'élément ciblés */
var nameLenght = nom.length;

/* transforme le nombre en string */
var xString = '12';
var xdecimalString = '12.44';

/* transforme le string en nombre */
var xNumber = parseInt(xString);
var xdecimalString = parseFloat(xdecimalString);

/* xtostring sert à prendre la variable x et la transforme en string */
var xToString = x.toString()



console.log(nom);
console.log(x);
console.log(xToString);
console.log(nameLenght);
console.log(xNumber);
console.log(xdecimalString);
console.log(position);
console.log(myNewString);
console.log(myNewString2);
console.log(myBoolean);
console.log(myBoolean2);