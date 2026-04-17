// 🔥 SLIDER MARTE (independiente)

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// 👉 Botón siguiente
next.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

// 👉 Botón anterior
prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

// 👉 Teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next.click();
  if (e.key === "ArrowLeft") prev.click();
});

// 👉 Init
updateSlider();