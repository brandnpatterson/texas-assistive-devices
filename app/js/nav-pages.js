$(document).ready(function(){
  $('#about, #carpentry, #components, #contact, #cutlery, #gardening, #hygiene, #mechanic, #n-abler, #sports-gear, #utencils').hide();

  $('#nav-about').click(function about(){
    $('#about').siblings().hide();
    $('#about').show();
  });

  $('#nav-carpentry, #footer-carpentry').click(function carpentry(){
    $('#carpentry').siblings().hide();
    $('#carpentry').show();
    window.scrollTo(0, 0);
  });

  $('#nav-components, #footer-components').click(function(){
    $('#components').siblings().hide();
    $('#components').show();
    window.scrollTo(0, 0);
  });

  $('#nav-contact').click(function(){
    $('#contact').siblings().hide();
    $('#contact').show();
    window.scrollTo(0, 0);
  });

  $('#nav-cutlery, #footer-cutlery').click(function(){
    $('#cutlery').siblings().hide();
    $('#cutlery').show();
    window.scrollTo(0, 0);
  });

  $('#nav-gardening, #footer-gardening').click(function(){
    $('#gardening').siblings().hide();
    $('#gardening').show();
    window.scrollTo(0, 0);
  });

  $('#nav-home').click(function(){
    $('#home').siblings().hide();
    $('#home').show();
    window.scrollTo(0, 0);
  });

  $('#nav-hygiene, #footer-hygiene').click(function(){
    $('#hygiene').siblings().hide();
    $('#hygiene').show();
    window.scrollTo(0, 0);
  });

  $('#nav-mechanic, #footer-mechanic').click(function(){
    $('#mechanic').siblings().hide();
    $('#mechanic').show();
    window.scrollTo(0, 0);
  });

  $('#nav-n-abler, #footer-n-abler, #footer-n-abler_V').click(function(){
    $('#n-abler').siblings().hide();
    $('#n-abler').show();
    window.scrollTo(0, 0);
  });

  $('#nav-sports-gear, #footer-sports-gear').click(function(){
    $('#sports-gear').siblings().hide();
    $('#sports-gear').show();
    window.scrollTo(0, 0);
  });

  $('#nav-utencils, #footer-utencils').click(function(){
    $('#utencils').siblings().hide();
    $('#utencils').show();
    window.scrollTo(0, 0);
  });

});