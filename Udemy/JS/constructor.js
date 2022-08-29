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


function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function()
    {
        console.log("Wouaf " + this.name);
    }
}

var petitCaniche = new Dog("Choupette", "White", 4);
/* console.log(petitCaniche); */

var grosPitbull = new Dog("Rex", "Black", 2);
/* console.log(grosPitbull); */


petitCaniche.aboie();
grosPitbull.aboie();