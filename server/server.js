const express = require("express");
const cors = require("cors");
require("dotenv").config(); // 🔐 carga variables de entorno

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 API KEY desde .env (seguro)
// Integración de IA en desarrollo

app.post("/interpretar", async (req, res) => {
  const { texto } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        // Integración de IA en desarrollo
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: "Sos un astrólogo experto en grados zodiacales. Respondé de forma profunda, clara y mística."
          },
          {
            role: "user",
            content: `Interpretá este grado: ${texto}`
          }
        ]
      })
    });

    const data = await response.json();

    console.log("Respuesta OpenAI:", data);

    if (!data.choices || !data.choices[0]) {
      return res.json({
        resultado: "Error: la IA no devolvió datos"
      });
    }

    res.json({
      resultado: data.choices[0].message.content
    });

  } catch (error) {
    console.error("ERROR REAL:", error);

    res.json({
      resultado: "Error con la IA"
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});