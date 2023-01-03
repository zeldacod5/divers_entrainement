var nombre = window.prompt("Veuillez saisir un nombre entre 1 et 1000");

if (nombre%3 == 0 && nombre%5 == 0){
    document.write("Fizzbuzz");
} else if(nombre%3 == 0){
    document.write("Fizz");
} else if(nombre%5 == 0){
    document.write("Buzz");
} else{
    document.write(nombre);
} 
