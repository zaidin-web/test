
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        dots: false,
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});

$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        dots:false,
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    $('.header-contacts,.header-contacts__signIn').on('click', function (){
        $('.overlay, .popup, .form-consult').fadeIn()
    });
    $('.popup__close').on('click', function (){
        $('.overlay, .popup, .form-consult, .thanks, .buyForm').fadeOut()
    })
    $('.consultation__btn, .form-consult, .buyForm__btn').on('click',function (){
        $('.form-consult, .buyForm').fadeOut(1)
        $('.overlay, .popup, .thanks').fadeIn(1000)
    })
});