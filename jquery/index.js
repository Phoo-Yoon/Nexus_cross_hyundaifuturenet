$(document).ready(function(){
  // main menu color
  $('.main_menu').hover(function(){
    $(this).children('a').css({
      color : '#90a4d2'
    });
  },function(){
    $(this).children('a').css({
      color : '#161616'
    });
  });
  // main menu color End

  // main img slide auto
  setInterval(function(){
    $('.swiper-button-next').trigger('click');
  },5000);
  // main img slide auto End

  // header scroll color / top btn css
  $(window).scroll(function(){
    let sct = $(window).scrollTop();
    let hh = $('header').height();

    if(sct < hh){
      $('header').css({
        backgroundColor : 'transparent'
      });
      $('#top_btn').css({
        opacity : 0
      });
    }else if(sct > hh){
      $('header').css({
        backgroundColor : '#ffffff'
      });
      $('#top_btn').css({
        opacity : 1
      });
    };
  });
  // header scroll color / top btn css End 

  // top btn function
  $('#top_btn').click(function(){
    $('html,body').animate({
      scrollTop : 0
    },1000);
  });
  // top btn function End

});