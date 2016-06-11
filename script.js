$(document).ready(function (){

    $("#s-home").click(function (){
        $('html, body').animate({
                    scrollTop: $("#home").offset().top
                }, 1500);
    });
    $("#s-Weather forecast, #c-s-Weather forecast").click(function (){
        $('html, body').animate({
                    scrollTop: $("#Weather forecast").offset().top
                }, 1500);
    });
    $("#s-books, #c-s-books").click(function (){
        $('html, body').animate({
                    scrollTop: $("#books").offset().top
                }, 1500);
    });
    $("#s-contact, #c-s-contact").click(function (){
        $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1500);
    });
});

$(document).ready(function() {
 $("#skill").mouseenter(function(){
  $('.graph-bar').each(function() {
     var dataWidth = $(this).data('value');
     $(this).css("width", dataWidth + "%");
  });
 }); 
});

$(document).ready(function (){

    $("#header").mouseenter(function(){
        $("#header").css({"opacity":"1", "transition": "all,1s"});		
    });  
    $("#home").mouseenter(function(){
        $("#header").css({"opacity":"0.7", "transition": "all,1s"});		
    });
    $("#profile").mouseenter(function(){
        $("#header").css({"opacity":"1", "transition": "all,1s"});
    });
    $("#contact").mouseenter(function(){
        $("#header").css({"opacity":"1", "transition": "all,1s"});
    });
    $(".footer").mouseenter(function(){
        $("#header").css({"opacity":"1", "transition": "all,1s"});
    });
});

$(document).ready(function() {
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "index.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("message sent");
            $("#form").trigger("reset");
        });
        return false;
    }); 
});