// Animations

$(document).ready(function(){
    $(window).scroll(function(){
        let oTop=$(".col-md-4").offset().top-window.innerHeight;
        if($(window).scrollTop()>oTop){
            $('.col-md-4').addClass('animate__animated animate__pulse');
            
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        let oTop=$("#sub .card").offset().top-window.innerHeight;
        if($(window).scrollTop()>oTop){
            $('#sub .card').addClass('animate__animated animate__zoomIn');
            
        }
    });
});



// Hide / Show
function show(clicked_id){
    document.getElementById("category").style.display ="none";
    document.getElementById("sub").style.display ="block";
    // document.getElementsByClassName("jumbotron").style.display ="none";

    switch (clicked_id) {

    case "new": 
    document.getElementById("sub1").style.display ="block";
    break;

    case "animations": 
    document.getElementById("sub2").style.display ="block";
    break;

    case "icons": 
    document.getElementById("sub3").style.display ="block";
    break;

    case "fonts": 
    document.getElementById("sub4").style.display ="block";
    break;

    case "help": 
    document.getElementById("sub5").style.display ="block";
    break;

    case "images": 
    document.getElementById("sub6").style.display ="block";
    break;

    case "learning": 
    document.getElementById("sub7").style.display ="block";
    break;

    case "colors": 
    document.getElementById("sub8").style.display ="block";
    break;

    case "design": 
    document.getElementById("sub9").style.display ="block";
    break;

    
    }
}