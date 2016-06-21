$(document).ready(ready);
function ready(){

    var idSmartLife = getQueryVariable("id");

    getFromDB(idSmartLife);

}

function getFromDB(identificativo){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        data: {smartlife:identificativo}, 
        url: "http://progettohyp.altervista.org/php/getApplicazione.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            var smart = JSON.parse(response);
            var titolo ="";
            var descrizione ="";
            var attivazione ="";
            var immagine = "";
            var logo = "";
            var faq ="";
            
           immagine = "" + "<img src='"+smart[0].Copertina+"' > "+ "" ;
            
            logo = "" + "<img src='"+smart[0].Immagine+"'class='ridimensionaImmagine' > "+ "" ;
            
            titolo += "" + smart[0].Titolo + "";
            faq += "" + smart[0].FAQ + "";
            descrizione += "" + smart[0].Descrizione + "";
            attivazione += "" + smart[0].Attivazione + "";
                          
            $("#immagine").html(immagine);
            $("#logotim").html(logo);
            $("#titolo").html(titolo);
            
            $("#descrizione").html(descrizione);
            $("#attivazione").html(attivazione);
            $("#faq").html(faq);
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