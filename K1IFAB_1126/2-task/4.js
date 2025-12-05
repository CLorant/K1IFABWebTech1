$(document).ready(function(){
    $("#btnP_Hide").click(function(){
        $("p").hide();
    });
    $("#btnP_Show").click(function(){
        $("p").show();
    });
    $("#btnP_Toggle").click(function(){
        $("p").toggle();
    });

    $("#btnOp_01").click(function(){
        $(".form-container").fadeTo("slow", 0.1);
    });
    $("#btnOp_05").click(function(){
        $(".form-container").fadeTo("slow", 0.5);
    });
    $("#btnOp_08").click(function(){
        $(".form-container").fadeTo("slow", 0.8);
    });

    $("#btnForm_Hide").click(function(){
        $(".form-container").hide();
    });
    $("#btnForm_Show").click(function(){
        $(".form-container").show();
        $(".form-container").css("opacity", "1");
    });
    $("#btnForm_Toggle").click(function(){
        $(".form-container").toggle();
    });
});