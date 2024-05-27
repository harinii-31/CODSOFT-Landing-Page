$(document).ready(function(){
    var slideIndex = 0;

    $(".next").click(function(){
        showSlide(slideIndex + 1);
    });

    $(".prev").click(function(){
        showSlide(slideIndex - 1);
    });

    function showSlide(index){
        var slides = $(".testimonial-slide");
        if(index >= slides.length){
            slideIndex = 0;
        } else if(index < 0){
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }
        slides.removeClass("active");
        slides.eq(slideIndex).addClass("active");
    }
});

var modal = document.getElementById('consultationModal');


var btn = document.getElementById('requestConsultationBtn');

var span = document.getElementsByClassName('close')[0];


btn.onclick = function() {
  modal.style.display = 'block';
};


span.onclick = function() {
  modal.style.display = 'none';
};


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};