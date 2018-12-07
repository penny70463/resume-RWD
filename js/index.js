$(function(){
   var elementTop = $('#box').offset().top;
var elementBottom = elementTop + $('#box').outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height(); 
    if(elementBottom > viewportTop && elementTop < viewportBottom){
$(function(){
 $('#num-bar div').each(function(){
  var percentage = $(this).data('percentage');
   $(this).animate({
      'width' : percentage + '%'
    }, 3000);
 }) ;

}) };
  });