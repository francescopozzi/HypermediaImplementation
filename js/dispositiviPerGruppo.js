$(document).ready(ready);
function ready(){
    
    getFromDB();

   
}

var dispositivi                 = null;
var numeroDispositiviPerRiga    = 3;
var numeroDispositiviPerPagina  = 9;

function popolaHtmlConDispositivi( pagina,gruppo ) { 
    
    var conteggioDispositivi    = 0;
    var elementoDispositivo     = "";
    
    var inizio = pagina * numeroDispositiviPerPagina;
    
    for (var i = inizio; i < (inizio + numeroDispositiviPerPagina) && i < dispositivi.length; i++) {
        
        if ( conteggioDispositivi == 0 ) {
             elementoDispositivo += "<span class='rigaDispositivo'>";
        }
        conteggioDispositivi++;
        
        if(gruppo!=4){
            elementoDispositivo += "<a href='./paginaDispositivo.html?"
                            + "id="+dispositivi[i].ID+"'>"
                            + "<div class='dispositivi sfondoGrigioChiaro'>"
                            + "<h2 class='scrittaAzzurra centro nomeDispositivo'>" +dispositivi[i].Nome + "</h2>"
                            + "<img src='"+dispositivi[i].Immagine+"' alt='telefono' class='imgDispositivi'>"
                            + " <h1 class='rosso centro'>" + dispositivi[i].Prezzo +   "</h1>"
                            + "</a>"
                            + "</div>";
        }
        else{
            elementoDispositivo += "<a href='./paginaDispositivo.html?"
                            + "id="+dispositivi[i].ID+"'>"
                            + "<div class='dispositivi sfondoGrigioChiaro'>"
                            + "<h2 class='scrittaAzzurra centro nomeDispositivo'>" +dispositivi[i].Nome + "</h2>"
                            + "<img src='"+dispositivi[i].Immagine+"' alt='telefono' class='imgDispositivi'>"
                            + "<span class='prezziPromozioni'>"
                            + "<h2 class='rosso prezzo barrato'>"
                            + dispositivi[i].Prezzo + "</h2>"
                            + " <h1 class='rosso prezzo'>" + dispositivi[i].prezzoPromozione +   "</h1>"
                            + "</span>"
                            + "</a>"
                            + "</div>";
            
        }
        
        
        if ( conteggioDispositivi == numeroDispositiviPerRiga ) {
            conteggioDispositivi = 0;
            elementoDispositivo += "</span>";
        }
        
    }
    
    $("#dinamico").html( elementoDispositivo );
    
    $(".cambiaPagina a").removeClass("rosso");
    $("#pag" + pagina + " a").addClass("rosso");
    
} 

function getFromDB(){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        data: {gruppo:idGruppo}, //è la variabile globale della pagina
        url: "http://progettohyp.altervista.org/php/getDisPerGruppo.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            dispositivi = JSON.parse(response);
            
            var numPagine = Math.ceil( dispositivi.length / numeroDispositiviPerPagina );
            
            
            var elementoDispositivo = "";
            for ( var i = 0; i < numPagine; i++ ) {
                 elementoDispositivo += "<li class='cambiaPagina' id='pag" + i + "' >"
                                    + "<a href='#' onclick='javascript:popolaHtmlConDispositivi(" + i + "); return false;' class='sfondoGrigioChiaro' >" + (i + 1) + "</a>"
                                    + "</li>";
            }
           
            $(".spanCambioPagina").html( elementoDispositivo );
            
            popolaHtmlConDispositivi( 0,idGruppo );
           
        },
        
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
   

}