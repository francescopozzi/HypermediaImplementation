$(document).ready(ready);
function ready(){
    $("#1").on("click", attivaSpecifiche);
    $("#2").on("click", attivaSmartlife);
    $("#3").on("click", attivaAssistenza);
    $("#light-slider").show();
    $("#specifiche").hide();
    $("#toAssistenza").hide();
    
    
}

function attivaSpecifiche(){
    $("#SL").removeClass("azzurro");
    $("#AS").removeClass("azzurro");
    $("#SL").addClass("sfondoGrigioChiaro");
    $("#AS").addClass("sfondoGrigioChiaro");
    $("#SP").removeClass("sfondoGrigioChiaro");
    $("#SP").addClass("azzurro");
    $("#specifiche").show();
    $("#light-slider").hide();
    $("#toAssistenza").hide();
    $("li").hide();
}

function attivaSmartlife(){
    $("#SP").removeClass("azzurro");
    $("#AS").removeClass("azzurro");
    $("#SP").addClass("sfondoGrigioChiaro");
    $("#AS").addClass("sfondoGrigioChiaro");
    $("#SL").removeClass("sfondoGrigioChiaro");
    $("#SL").addClass("azzurro");
    $("li").show();
    $("#light-slider").show();
    $("#specifiche").hide();
    $("#toAssistenza").hide();
}

function attivaAssistenza(){
    $("#SP").removeClass("azzurro");
    $("#SL").removeClass("azzurro");
    $("#SP").addClass("sfondoGrigioChiaro");
    $("#SL").addClass("sfondoGrigioChiaro");
    $("#AS").removeClass("sfondoGrigioChiaro");
    $("#AS").addClass("azzurro");
    $("#toAssistenza").show();
    $("#light-slider").hide();
    $("#specifiche").hide();
    $("li").hide();
}

