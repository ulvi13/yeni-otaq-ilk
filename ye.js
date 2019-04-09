
(function($){
  $.fn.divP=function(option){
    var myOption={
      speed:'300',
      distance:'200',
      trigger:'click'
    }
    var settings=$.extend(myOption,option)
      $(this).on(settings.trigger,function(){
        $(this).css({
      'position':'relative',
      'background':'red'
      }).animate({

          'left':'+='+settings.distance+'px'

        },settings.speed)
      })
    }


}(jQuery));

$('div').divP({
speed:2000,
distance:500,
trigger:'mouseover'
})
// $('.wrapper').slick({
//     infinite:true,
//     slidesToShow:3,
//     slidesToScroll:1,
//     dots:true,
//     speed:300,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ]
// })