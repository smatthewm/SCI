$(document).ready(function(){
    $(".img").hover(function(){
$(this).css({"width": "100px", "height": "100px"});
    }, function(){
        $(this).css({"width": "50px", "height": "50px"});
    })
});