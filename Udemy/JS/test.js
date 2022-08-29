window.onload = function() // est une fonction de javascript qui est lancée quand la fenêtre se lance
{
    var canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas); //le appendchild permet de choper l'élément contenu dans le body
}