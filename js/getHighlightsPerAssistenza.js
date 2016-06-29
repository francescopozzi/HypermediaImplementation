$(document).ready(ready);
function ready(){

    // è una funzione che chiama una funzione, qua non serve a niente
    alert("Inizio");
    getFromDB();
     alert("0");
}

function getFromDB(){
    alert("1");
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://progettohyp.altervista.org/php/getHighlights.php", //Relative or absolute path to file.php file
        success: function(response) {
             alert("2");
            console.log(JSON.parse(response));

            var assistenze = JSON.parse(response);
            
            var elementoRiga = "";

            for(var i=0; i<assistenze.length; i++){
                elementoRiga +="<a href='./paginaAssistenza.html?id="+ assistenze[i].ID +"'>"
                +"<div class='quartoWidth centro'>" 
                +"<img src='"+ assistenze[i].Immagine+"' class='immagine'>"
                +"<h2 class='nomeAS centro'>"+ assistenze[i].Nome + "</h2>"
                +"</a>"
                +"</div>";

                //"<a href=\"./ass.html?id= + assistenze[i].id + "\" Ciao "
            }
       
            $("#dinamico").html(elementoRiga);
           
        },
        error: function(request,error) 
        {
             alert("3");
            console.log("Error");
        }
    });
       

}