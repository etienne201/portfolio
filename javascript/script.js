$(document).ready(function(){
    $(window).scroll(function(){
           // sticky navbar on scroll script
           if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
     })
       // slide-up script
       $('.scroll-up-btn').click(function(){
           $('html').animate({scrollTop:0})
                   // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
        
       });
         // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script


    var typed = new Typed (".typing",{
        strings: ["Full stack web developer ,","Mobile developer,", "Designer,", "Freelancer ."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed (".typing-2",{
        strings: ["web developer,","Mobile developer,", "Designer,"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    //   owl-carousel  script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav: false,
            },
            600:{
                items:2,
                nav: false,
            },
            1000:{
                items:3,
                nav: false,
            }
        }
    })
 });
 function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
 