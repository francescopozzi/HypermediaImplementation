$(document).ready(ready);
function ready(){

    getFromDB();

}

function getFromDB(){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        data: {gruppo:idGruppo}, //è la variabile globale della pagina
        url: "http://progettohyp.altervista.org/php/getAssPerGruppo.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            var assistenze = JSON.parse(response);
            
            var elementoRiga = "";

            for (var i = 0; i < assistenze.length; i=i+2) {
                elementoRiga += "<tr class='riga'>"
                        +"<td class='nomeAS blu titolo'>• "+ assistenze[i].Nome + "</td>"
                        +"<td class='nomeAS blu titolo'>• "+ assistenze[i+1].Nome + "</td>"
                        +"</tr>";
            }
            
              
            $("#dinamico").html(elementoRiga);
           
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
       

}