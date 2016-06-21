$(document).ready(ready);
function ready(){
    
    var idDispositivo = getQueryVariable("id")
    
    getFromDB(idDispositivo);

}

function getFromDB(identificativo){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        data: {dispositivo:identificativo},
        url: "http://progettohyp.altervista.org/php/getDispositivo.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            var dispositivi = JSON.parse(response);
    
            var elementoDispositivo = "";

           
             elementoDispositivo+=dispositivi[0].Descrizione
            
              
            $("#descrizione").html(elementoDispositivo);
           
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
   

}

function getFromDB(identificativo){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        data: {dispositivo:identificativo},
        url: "http://progettohyp.altervista.org/php/getDispositivo.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            var dispositivi = JSON.parse(response);
    
            var elementoDispositivo = "";

           
             elementoDispositivo+=dispositivi[0].Nome
            
              
            $("#nomeDispositivo").html(elementoDispositivo);
           
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