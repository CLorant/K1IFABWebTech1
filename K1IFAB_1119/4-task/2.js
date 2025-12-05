$(document).ready(function(){
    $("#k1").click(function(){
        $("li:lt(2)").hide();
        $("a").hide();
    });

    $("#k2").click(function(){
        $("li:lt(2)").hide();
        $("a").hide();
        $(this).hide(); 
    });

    $("#k3").click(function(){
        $("header, h1").hide();
        $("li:lt(2)").hide();
        $("a").hide();
    });

    $("#k4").click(function(){
        $("li:lt(2)").hide();
        $("a").hide(); 
    });

    $("#k5").click(function(){
        $("li:lt(2)").hide();
        $("a").hide();
        $("tr:odd").hide(); 
    });

});