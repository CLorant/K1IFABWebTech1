$(document).ready(function(){
    $("header").mouseleave(function(){
        alert("Elhúztad az egeret a fejlécről!");
    });

    $("#p1 .hide").click(function(){
        $("#p1").hide();
    });

    $("#p2 .double-click").dblclick(function(){
        $("#p2").hide();
    });

    $("#btnJelentkezes").mouseenter(function(){
        alert("Ez a Jelentkezés gomb!");
    });
    $("input").hover(
        function() {
            $(this).css("border-color", "red");
        }, 
        function() {
            $(this).css("border-color", "#ccc");
        }
    );

    $("input").focus(function(){
        $(this).css("background-color", "#e0f7fa");
    });

    $("input").blur(function(){
        $(this).css("background-color", "white");
    });
});