$(document).ready(function () {
   
let AboutOffset = $("#About").offset().top;

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > AboutOffset -50){
      $('#Nav-Scroll').css("backgroundColor" , "#dc3545" ,)
      $('#Nav-Scroll').addClass("pad")
      
      

}else{
    $('#Nav-Scroll').css("backgroundColor" , "transparent" ,)
    $('#Nav-Scroll').removeClass("removepad")
    $('.fab').css({ 'color': 'white'});



}
})


$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
        
    }
})
   

$("#setting").click(function(){
    $("#box").toggle({left: '250px',});
    
   
})

    
});

