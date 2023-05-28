function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function() {
  $('.menu').hide();

  $('.open-menu').click(function() {
    $('.menu').toggle();
  });

  $('.menu li').click(function() {
    $('.menu').hide();
  });

});


// header

const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  const isScrollingDown = currentScrollPos > prevScrollPos;
  if (isScrollingDown) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  prevScrollPos = currentScrollPos;
});



