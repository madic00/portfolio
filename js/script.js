// $(function () {
//   $(document).scroll(function () {
// 	  let nav = $("#navWrapper");
// 	  nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
// 	});
// });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testBlock");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    //   slides[i].style.display = "none"; 
    }
//   slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add('active');
}