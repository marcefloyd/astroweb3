// 🔥 SLIDES
const slides = document.querySelectorAll(".slide");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

let index = 0;

// 👉 Mostrar slide
function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

// 👉 Siguiente
function siguiente() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

// 👉 Anterior
function anterior() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

// 👉 Eventos botones
btnNext.addEventListener("click", siguiente);
btnPrev.addEventListener("click", anterior);

// 👉 Soporte teclado (PRO 🔥)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") siguiente();
  if (e.key === "ArrowLeft") anterior();
});

// 👉 Inicializar seguro
mostrarSlide(index);