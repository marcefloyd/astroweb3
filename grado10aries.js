document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".slides");
  const btnNext = document.getElementById("next");
  const btnPrev = document.getElementById("prev");

  let index = 0;

  // 👉 Mostrar slide
  function mostrarSlide(i) {
    container.style.transform = `translateX(-${i * 100}vw)`;

    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  // 👉 Botón siguiente
  function siguiente() {
    index++;
    if (index >= slides.length) index = 0;
    mostrarSlide(index);
  }

  // 👉 Botón anterior
  function anterior() {
    index--;
    if (index < 0) index = slides.length - 1;
    mostrarSlide(index);
  }

  // 👉 Eventos botones
  btnNext.addEventListener("click", siguiente);
  btnPrev.addEventListener("click", anterior);

  // 👉 Swipe táctil (celular 🔥)
  let startX = 0;
  let endX = 0;

  container.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) siguiente(); // izquierda
    if (endX - startX > 50) anterior();  // derecha
  });

  // 👉 Cambiar título automático (opcional 🔥)
  const grados = [
    "Grado 10–11 de Aries",
    "Grado 11–12 de Aries",
    "Grado 12–13 de Aries"
  ];

  const hoy = new Date().getDate() % grados.length;

  const titulo = document.getElementById("gradoTitulo");
  if (titulo) {
    titulo.textContent = grados[hoy];
  }

  // 👉 Inicializar
  mostrarSlide(index);

});