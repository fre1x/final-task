// script.js

$(document).ready(function(){
    // Плавна прокрутка при кліці на посилання навігації
    $(".navbar a, .btn").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  
    // Додайте більше анімацій тут
    $("#home").fadeIn(1000);
    $("#gallery").slideDown(1000);
    $("#contacts").fadeIn(1000);
  });
  