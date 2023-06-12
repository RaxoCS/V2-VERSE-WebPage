window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (scrolled === 0) {
    navbar.classList.add('transparent'); // Agregar la clase transparent cuando la barra de navegación está en la parte superior
  } else {
    navbar.classList.remove('transparent'); // Eliminar la clase transparent cuando se desplaza hacia abajo
  }
});



window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 0;
  
  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const welcomeWord = document.getElementById('welcome-word');
const words = ["V2-VERSE","Create","Build","Interact","Play"];
let index = 0;

function changeWelcomeWord() {
  welcomeWord.classList.remove('fade-in');
  welcomeWord.classList.add('fade-out');
  
  setTimeout(() => {
    welcomeWord.textContent = words[index];
    welcomeWord.classList.remove('fade-out');
    welcomeWord.classList.add('fade-in');
    
    index = (index + 1) % words.length;
  }, 2000);
}

changeWelcomeWord();
setInterval(changeWelcomeWord, 4000);
