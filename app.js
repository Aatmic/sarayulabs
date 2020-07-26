var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else   {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


$(window).on("scroll touchmove", function() 
{
    if ($(document).scrollTop() >= $("#one").position().top && $(document).scrollTop() < $("#two").position().top  ) 
    {
        $('body').css('background-image', 'url(https://static1.srcdn.com/wordpress/wp-content/uploads/2017/03/Jiraiya-from-Naruto-Shippuden.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5)')
    };
    if ($(document).scrollTop() >= $("#two").position().top && $(document).scrollTop() < $("#three").position().top)
    {
        $('body').css('background-image', 'url(https://static3.srcdn.com/wordpress/wp-content/uploads/2017/03/Kakashi-in-Naruto.jpg?q=50&fit=crop&w=737&h=368&dpr=1.5)')
    };
   if ($(document).scrollTop() >= $("#three").position().top && $(document).scrollTop() < $("#four").position().top ) 
   {
        $('body').css('background-image', 'url(https://static1.srcdn.com/wordpress/wp-content/uploads/2017/03/Jiraiya-from-Naruto-Shippuden.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5)')
   };
   if ($(document).scrollTop() >= $("#four").position().top) 
   {
        $('body').css('background-image', 'url(https://static3.srcdn.com/wordpress/wp-content/uploads/2017/03/Shikamaru-in-Naruto.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5)')
   };

});
