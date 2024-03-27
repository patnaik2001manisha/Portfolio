$(document).ready(function(){


    $(".navbar-mobile-icon i").click(function(){
        $(".navbar-navlinks").toggleClass("navbar-burger-trigger");
    })

    $(".navbar-mobile-icon i").click(function(){
        $(".navbar").toggleClass("navbarMobileColor");
    })


     $("#nav-login-trigger").click(function(){
        $(".userLoginForm-container").toggleClass("userLogin-form-triiger");
     })

     $(".form-cross").click(function(){
        $(".userLoginForm-container").toggleClass("userLogin-form-triiger");
     })
    });