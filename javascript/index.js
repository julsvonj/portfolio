/*
$(document).ready(function(){
    $('.slick-slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
  });
*/
/*
  $(function () {
    var slickOpts = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true
    };
    // Init the slick
    $('.single-item').slick(slickOpts);
    var slickEnabled = true;
   
});
*/
/*
$(function () {
    var slickOpts = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        
    };
    // Init the slick
    $('.slick-slider').slick(slickOpts);
    var slickEnabled = true;
   
});
*/

$(function () {
    var slickOpts = {
        dots: false,
        arrows:false,
        autoplay: true,
    };
    // Init the slick
    $('.single-item').slick(slickOpts);
    var slickEnabled = true;
});


//modal popup
  $("#submit-button").submit(function(e){
    $('#registration').modal('show');
    return false;
});
