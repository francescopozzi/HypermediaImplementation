$(document).ready(ready);
function ready(){
    $("#1").on("click", attivaSpecifiche);
    $("#2").on("click", attivaSmartlife);
    $("#3").on("click", attivaAssistenza);
    $("#specifiche").show();
    $("#toSmarlife").hide();
    $("#toAssistenza").hide();
    
}

function attivaSpecifiche(){
    $("#SL").removeClass("azzurro");
    $("#AS").removeClass("azzurro");
    $("#SP").removeClass("sfondoGrigioChiaro");
    $("#SP").addClass("azzurro");
    $("#specifiche").show();
    $("#toSmarlife").hide();
    $("#toAssistenza").hide();
}

function attivaSmartlife(){
    $("#SP").removeClass("azzurro");
    $("#AS").removeClass("azzurro");
    $("#SL").removeClass("sfondoGrigioChiaro");
    $("#SL").addClass("azzurro");
    $("#toSmarlife").show();
    $("#specifiche").hide();
    $("#toAssistenza").hide();
}

function attivaAssistenza(){
    $("#SP").removeClass("azzurro");
    $("#SL").removeClass("azzurro");
    $("#AS").removeClass("sfondoGrigioChiaro");
    $("#AS").addClass("azzurro");
    $("#toAssistenza").show();
    $("#toSmarlife").hide();
    $("#specifiche").hide();
}

