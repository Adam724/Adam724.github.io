/*$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".navbar-nav").find(".active").removeClass("active")
        $(this).addClass("active")
     })
})*/

$(document).ready(function(){
    $(".nav-item").click(function(){
        window.location = $(this).find("a").attr("href"); 
        return false;
     })
})