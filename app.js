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

// ------


function toggleMenu() {
  var navItems = document.querySelectorAll(".active-li");
  var checkbox = document.getElementById("check");
  var menuText = document.getElementById("menu-text");
  var closeText = document.getElementById("close-text");
  
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      checkbox.checked = false; // Uncheck the checkbox to disable the menu
      menuText.classList.remove("hide"); // Show "Menu" text
      closeText.classList.add("hide"); // Hide "Close" text
    });
  }
  
  if (checkbox.checked) {
    menuText.classList.add("hide"); // Hide "Menu" text
    closeText.classList.remove("hide"); // Show "Close" text
  } else {
    menuText.classList.remove("hide"); // Show "Menu" text
    closeText.classList.add("hide"); // Hide "Close" text
  }
}




// animation


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
