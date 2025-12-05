$(document).ready(function(){

    $("#btnCalc").click(function(){
        let num1 = $("#num1").val();
        let num2 = $("#num2").val();
        let op = $("input[name='operation']:checked").val();
        let result = 0;

        if(num1 === "" || num2 === "") {
            alert("Kérem töltsön ki minden szám mezőt!");
            return;
        }

        let a = parseInt(num1);
        let b = parseInt(num2);

        if (op === "addition") {
            result = a + b;
        }
        else if (op === "substraction") {
            result = a - b;
        }
        else if (op === "multiplication") {
            result = a * b;
        }
        else if (op === "division") {
            if (b === 0) {
                alert("Nullával nem oszthatunk!");
                $("#result").text("Hiba");
                return;
            }
            result = a / b;
        }

        $("#result").text(result);
    });

});