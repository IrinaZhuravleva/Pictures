$(document).ready(function(){
  var link = $('.navbar-toggler');
  // var link = $('.main-nav__toggle');
  var link_active = $('.blockmenu_active');
  var menu = $('.blockmenu');
  var close = $('.blockmenu-close');


  link.click(function(){
    menu.addClass('blockmenu_active');
    link.css('display', 'none');
  });
  close.click(function(){
    menu.removeClass('blockmenu_active');
  });
  close.click(function(){
    link.css('display', 'block');
  });

});