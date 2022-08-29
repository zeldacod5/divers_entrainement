var object = {
    propertyName1: propertyValue,
    propertyName2: propertyValue2,
    method1: function()
    {
        
    }
};
//l'objet
//la propriété et :la valeur 


var dog = {
    name : "Choupette",
    color: "white",
    age: 4,
};


// pour acceder au propriété
console.log(dog.age);
console.log(dog.color);

//une autre possibilité
console.log(dog["name"]);


for(var property in dog)
{
    console.log(dog.property);
    //ou
    //console.log(dog[property]);
}

//veut dire la propriété numéro 1
//property

var dog = new Object();
dog.name = "Choupette";
dog.color = "White";
dog.age = 4;


dog.aboie = function(number)
{
    while(number>0)
    {
        console.log(number.toString() + "Wouaf");
        number--;
    }
};

dog.aboie(4);
//la il éxécute la fonction, elle n'a pas de paramètre