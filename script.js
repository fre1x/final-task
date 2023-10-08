
$(document).ready(function(){

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
  
    $("#home").fadeIn(1000);
    $("#gallery").slideDown(1000);
    $("#contacts").fadeIn(1000);
  });
  