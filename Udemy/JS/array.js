var tableau = [valeur1, valeur2, valeur3];

var tableaudefruits = ["pomme","poire","banane","pêche"];

console.log(tableaudefruits);
console.log(tableaudefruits[1]); //poire  //entre crochets []
console.log(tableaudefruits[0]); //pomme
console.log(tableaudefruits.length) //donne la taille

for(var i = 0; i < tableaudefruits.length; i++)
{
    console.log(tableaudefruits[i])
}

tableaudefruits.push("Kiwi"); //le push rajoute la valeur Kiwi à la fin du  tableau
tableaudefruits.pop(); //enlève la dernière valeur qu'il y as dans le array
tableaudefruits.slice(); //prend 2 arguments, 1 index de début et 1 index de fin...
//donc si on voulait que les fruits de couleur jaune, on pourrait slice banane et poire de notre premier tableau
// va de 2 inclus à 4 non inclus.
// slice marche aussi avec 1 seul argument


var myArray = ["Pomme", 15, true];
console.log(myArray);

var newArray = [[0,1] , [5,7,8] , [12,18]];

console.log(newArray[2][1]);
//ce console.log ne nous donne que la valeur 18, car le array 3 est le 2ème car ya les 0