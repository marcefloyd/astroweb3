async function generarInterpretacion() {
  const resultadoDiv = document.getElementById("resultadoIA");

  resultadoDiv.innerHTML = "Cargando interpretación...";

  try {
    // 📂 leer JSON
    const resJSON = await fetch("./htmls/grados.json");
    const dataJSON = await resJSON.json();
    // 👇 DEBUG (pegalo acá)
    console.log(dataJSON);
    console.log(dataJSON.aries);
    console.log(dataJSON.aries["26"]);

    // 🔮 valores seleccionados
    const signo = document.getElementById("signo").value;
    const numero = document.getElementById("grado").value;

    const grado = dataJSON[signo][numero];

    if (!grado) {
      resultadoDiv.innerHTML = "No hay datos para este grado";
      return;
    }

    // 🎨 render completo
    resultadoDiv.innerHTML = `
      <h2>${grado.titulo}</h2>

      <p><b>Resumen:</b> ${grado.resumen}</p>

      <p><b>Palabras clave:</b> ${grado.palabras_clave.join(", ")}</p>

      <hr>

      <h3>🧠 Interpretación</h3>
      <p><b>General:</b> ${grado.interpretacion.general}</p>
      <p><b>Psicológica:</b> ${grado.interpretacion.psicologica}</p>
      <p><b>Espiritual:</b> ${grado.interpretacion.espiritual}</p>

      <hr>

      <h3>⚖️ Polaridad</h3>
      <p><b>Luz:</b> ${grado.polaridad.luz}</p>
      <p><b>Sombra:</b> ${grado.polaridad.sombra}</p>

      <hr>

      <h3>🔮 Mensaje evolutivo</h3>
      <p>${grado.mensaje_evolutivo}</p>

      <hr>

      <h3>🜂 Simbolismo</h3>
      <p>${grado.simbolismo}</p>

      <hr>

      <h3>📚 Autores</h3>
      <p>${Object.entries(grado.autores)
        .map(([autor, texto]) => `<b>${autor}:</b> ${texto}`)
        .join("<br>")}</p>

      <hr>

      <h3>${grado.analisis_final.titulo}</h3>
      <p style="white-space: pre-line;">
        ${grado.analisis_final.contenido}
      </p>
    `;

  } catch (error) {
    resultadoDiv.innerHTML = "Error cargando el JSON";
    console.error(error);
  }
}