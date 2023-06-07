import { Controller } from "@hotwired/stimulus"

window.addEventListener('scroll', function() {
  const scrollArrow = document.getElementById('scrollArrow');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    scrollArrow.classList.add('hidden');
  } else {
    scrollArrow.classList.remove('hidden');
  }
});
