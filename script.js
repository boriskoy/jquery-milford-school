$(document).ready(function(){
  $('#menu-img').click(function(){
    $('.dropdown-menu').toggle(300);
  });  
  
  $('form').submit(function() {  
    var email = $('#email').val();
    var password = $('#password').val();         
  
  if (email == "") {
    $('.email-error').html('Please enter your email.');
  };
  
  if (password == "") {
    $('.password-error').html('Please enter your password.');
  };
    return false;
 });
 });
