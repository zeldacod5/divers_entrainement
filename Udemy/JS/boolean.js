var myBoolean1 = true;
var myBoolean2 = false;

var x = 5;
var y = 12;

/* x!==       /!\ <-  /!\   est t'il dfiférent de x ? */

var test = (x>=5 && y == 12)
/* est ce que test est supérieur ou égal à 5 et strictement égale à 12? */

/* && veut dire et
/* || veut dire ou */

var myBoo = (x===5);

console.log(myBoo);
console.log(test)


/* syntaxe d'une condition */

if(condition)
{
    console.log("Executes ce code");
}
else if(condition2)
{
    console.log("La condition 1 n'est vraie mais la 2 l'est")
}
else                                            // Si condition 1 et 2 ne sont pas respectée alors le dernier else /!\
/* sinon (si elle n'était pas vrai) */
{
    console.log("Alors executes ce code la!");
}


/* exo */

var speed = 82;

if(speed>80)
{
    console.log("Vous êtes en excès de vitesse!");
}
else if(speed==80)
{
    console.log("Attention, vous êtes à la limite");
}
else
{
    console.log("Vous n'êtes pas en excès de vitesse");
}

console.log(speed)

/* test réussi */