$(document).ready(ready);
function ready(){

    var idAssistenza = getQueryVariable("id");

    getFromDB(idAssistenza);

}

function getFromDB(identificativo){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        data: {assistenza:identificativo}, 
        url: "http://progettohyp.altervista.org/php/getAssistenza.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            var assistenze = JSON.parse(response);
            
            var elementoRiga = "";

            for (var i = 0; i < assistenze.length; i=i+2) {
                elementoRiga += "<h1> ciao </h1>"
            }
            
              
            $("#dinamico").html(elementoRiga);
           
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });       

}

// funzione trovata online per ottenere le variabili di una query string
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}