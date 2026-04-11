document.addEventListener("DOMContentLoaded", () => {

  console.log("Proyecto zodiacal iniciado 🔮");

  const canvas = document.getElementById("estrellas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  ajustarCanvas();

  let estrellas = [];

  function crearEstrellas() {
    estrellas = [];

    for (let i = 0; i < 200; i++) {
      estrellas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        speed: (Math.random() * 0.02) + 0.005
      });
    }
  }

  crearEstrellas();

  function dibujarEstrellas() {
    estrellas.forEach((e) => {
      e.alpha += e.speed;

      if (e.alpha <= 0 || e.alpha >= 1) {
        e.speed *= -1;
      }

      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${e.alpha})`;
      ctx.fill();
    });
  }

  function dibujarLineas() {
    for (let i = 0; i < estrellas.length; i++) {
      for (let j = i + 1; j < estrellas.length; j++) {

        let dx = estrellas[i].x - estrellas[j].x;
        let dy = estrellas[i].y - estrellas[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(estrellas[i].x, estrellas[i].y);
          ctx.lineTo(estrellas[j].x, estrellas[j].y);
          ctx.strokeStyle = "rgba(255,255,255,0.1)";
          ctx.stroke();
        }
      }
    }
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarEstrellas();
    dibujarLineas();
    requestAnimationFrame(animar);
  }

  animar();

  window.addEventListener("resize", () => {
    ajustarCanvas();
    crearEstrellas();
  });

  // 🔥 CLICK + TRANSICIÓN (FIX REAL)
  document.querySelectorAll(".signo").forEach(signo => {

    signo.addEventListener("click", (e) => {
      e.preventDefault();

      const link = signo.getAttribute("href");

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = link;
      }, 600);
    });

    // 📱 TOUCH (SIN ROMPER TRANSFORM)
    signo.addEventListener("touchstart", () => {
      signo.style.scale = "1.3"; // 👈 usamos scale moderno
    });

    signo.addEventListener("touchend", () => {
      signo.style.scale = "1";
    });

  });

});
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("activo");
});