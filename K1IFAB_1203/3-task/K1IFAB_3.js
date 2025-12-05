$(document).ready(function(){
    $("#btnStart").click(function(){
        var box = $("#pti");
        var speed = 1000;

        box.animate({
            left: '+=200px',
            width: '500px',
            fontSize: '30pt',
            lineHeight: '100px',
            height: '100px'
        }, speed)
        
        .animate({
            top: '+=100px',
            width: '200px',
            height: '+=10%'
        }, speed)

        .animate({
            left: '0px',
            opacity: '0.4'
        }, speed)

        .animate({
            top: '0px',
            width: '300px',
            height: '50px',
            fontSize: '12pt',
            opacity: '1',
            lineHeight: '50px'
        }, speed, function(){
            alert("VÉGE");
        });
    });

    $("#btnHideP").click(function(){
        $("p").hide();
        alert("Bekezdések elrejtése");
    });

    $("#btnToggleBox").click(function(){
        var box = $("#pti");
        box.slideToggle(1000, function(){
            if(box.is(":visible")){
                box.animate({
                    left: '+=100px'
                }, 1000);
            }
        });
    });
});