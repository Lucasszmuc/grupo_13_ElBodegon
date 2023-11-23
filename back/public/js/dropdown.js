
  document.addEventListener('DOMContentLoaded', function() {
    var burgerMenuButton = document.getElementById('burgerMenuButton');
    var lista = document.querySelector('.lista');

    burgerMenuButton.addEventListener('click', function(event) {
      event.preventDefault();
      lista.classList.toggle('is-active'); 
    });
  });
