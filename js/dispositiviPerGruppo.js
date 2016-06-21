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
        url: "http://progettohyp.altervista.org/php/getDisPerGruppo.php", //Relative or absolute path to file.php file
        success: function(response) {

            console.log(JSON.parse(response));

            var dispositivi = JSON.parse(response);
            var num=0;
            var numRighe=0;
            var elementoDispositivo = "";
            var numPagine=1;
            
            numRighe=dispositivi.length/3;
            if(dispositivi.length%9==0)
                numPagine=dispositivi.length/9;
            else 
                numPagine=dispositivi.length/9+1;
            
            
            for (var i=0; i<numRighe && i<3; i++) {
                elementoDispositivo+= "<span class='rigaDispositivo'>";
                num=i*3;
                for(var j=0; j<3; j++){
                    if(num+j+1<=dispositivi.length){
                        elementoDispositivo+="<a href='./paginaDispositivo.html'>"
                        +"<div class='dispositivi sfondoGrigioChiaro'>"
                        +"<h2 class='scrittaAzzurra centro nomeDispositivo'>" +dispositivi[j+num].Nome + "</h2>"
                        +"<img src='"+dispositivi[j+num].Immagine+"' alt='telefono' class='imgDispositivi'>"
                        +" <h1 class='rosso centro'>" +dispositivi[j+num].Prezzo +   "</h1>"
                        +"</a>"
                        +"</div>";
                
                    }
                    else{
                        elementoDispositivo+="<div class='dispositivi'></div>"
                    }
                }
                    
                     
               elementoDispositivo+="</span>";
                
            }
            
              
            $("#dinamico").html(elementoDispositivo);
           
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });
   

}