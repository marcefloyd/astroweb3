# 🌌 AstroWeb – Plataforma Astrológica Interactiva
![AstroWeb](https://github.com/user-attachments/assets/d2946530-b423-4b1a-84b8-44e1597f3da2)
## Descripción

AstroWeb es una página web interactiva enfocada en la exploración de los grados del zodiaco.  
El proyecto busca representar de forma visual, clara y dinámica el contenido astrológico, combinando diseño moderno con experiencia de usuario.

Incluye navegación por signos, grados específicos y textos interpretativos desarrollados a partir de distintas corrientes astrológicas.

---

## Demo en vivo

🔗 https://astroweb3.vercel.app/

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON (estructura de datos)
- Fetch API
- Node.js (preparado para integración con IA)
---
## Estructura de datos

El contenido se organiza mediante archivos JSON estructurados por signo y grado, lo que permite:

- Escalabilidad del sistema
- Separación entre lógica y contenido
- Renderizado dinámico en el frontend

## Funcionalidades

- Navegación por signos zodiacales  
- Sistema de slides interactivos  
- Contenido dinámico por grados  
- Diseño visual personalizado  
- Experiencia adaptable a dispositivos móviles  

---
## Integración con IA (en desarrollo)

El proyecto está preparado para integrar inteligencia artificial mediante API (futuro).

- Generación automática de interpretaciones
- Expansión de contenido
- Personalización de resultados

> Actualmente esta funcionalidad se encuentra en desarrollo.

##  Objetivo del proyecto

El objetivo es construir una plataforma que combine:

- Contenido astrológico profundo  
- Interfaz clara y moderna  
- Navegación intuitiva
- integrar inteligencia artificial mediante API 

Además, funciona como práctica real de desarrollo web y diseño UX/UI.

---

##  Capturas

<img width="1365" height="681" alt="390529bb-846f-4e29-966e-1442a3ab4a82" src="https://github.com/user-attachments/assets/49d947a8-aaae-4fbb-8be8-39311ea1371e" />
<img width="1363" height="681" alt="b841805e-6485-491c-bd28-387731cd4879" src="https://github.com/user-attachments/assets/d2946530-b423-4b1a-84b8-44e1597f3da2" />


---

## 📂 Estructura del proyecto

---

astroweb3/
│
├── assets/                # Imágenes y recursos visuales
│
├── css/                   # Estilos
│   └── elementos.css
│
├── htmls/                 # Páginas y datos
│   ├── aries.html
│   ├── acuario.html
│   ├── capricornio.html
│   ├── ...
│   └── grados.json        # Base de datos estructurada por signo y grado
│
├── js/ (o raíz)           # Lógica del frontend
│   ├── script.js          # Render dinámico principal
│   ├── ia.js              # Conexión con backend (IA en desarrollo)
│   ├── grado10aries.js    # Lógica específica (legacy/sliders)
│
├── grados individuales    # (legacy - migrando a JSON)
│   ├── grado22aries.html
│   ├── grado23aries.html
│   ├── grado24aries.html
│   ├── grado25aries.html
│   ├── grado26aries.html
│
├── server.js              # Backend Node.js (endpoint /interpretar)
├── package.json
├── .env                   # Variables sensibles (API KEY no incluida)
│
└── README.md
---
