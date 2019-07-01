//gotop
$(function(){
  $('#gotop').on('click',function(){
    $('html,body').animate({
      scrollTop: 0
    },400);
  });
  $(window).on('scroll',function(){
    if($(this).scrollTop()>300){
      $('#gotop').fadeIn('fast');
    }else{
      $('#gotop').stop().fadeOut('fast');
    }
  });
})