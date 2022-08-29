/* Cours numéro 1 les sélécteurs

$(document).ready(function(){
    
    $("h1").hide();   // tu peux cacher les éléments avec des hides en mettant h1 ou p dans les ""
                    // tu peux cacher les id en mettant des # et des class en mettant des .  les éléments sans rien du tout
});

 */



/* Cours numéro 2 - middle vidéo sur les events
$(function () {
    $("#p1").mouseenter(function () {
        $("#p5").hide();
    });
    $("#p1").mouseleave(function () {
        $("#p5").show();
    });
}); */

// il y as : click (donc supprime le p5 si je clique sur le p1)
//          mouseenter
//          mouseleave - show - hide
//          on
//          hover

//Fin de la vidéo sur les events
/* $(function(){
    $("#p1").on({
        mouseenter: function(){
            $('#p5').hide();
        },
        mouseleave: function(){
            $('#p5').show();
        },
        click: function(){
            $('#p4').hide();
        }
    });
}); */
// Donc il y as la fonction on d'activé qui cache le p5, et quand on clique sur p1 sa cache le 4 mec c'est incroyable mec



//Début du cours sur les effects

/* $(function(){
    $("#p1").click(function(){
        $('#p2').hide(5000, function(){
            $('#p3').hide(4000);
        }); // tu peut utiliser la commande slow et fast ou exprimer ta durée  (1000)
    });
}); */
// nous pouvons utiliser toggle pour faire l'effet de hide et show en même temps
// il y as aussi fade qui est un effet de flou
// dans mes souvenirs l'effet fadeOut et fadeIn était très apprécié


// Début du cours sur les animations
