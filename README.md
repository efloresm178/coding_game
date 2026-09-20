# ⚡ CodeAcademy Game — Plataforma Educativa Gamificada

Plataforma web educativa interactiva masiva de programación y puzzles diseñada para jugarse localmente y compartirse fácilmente. Sin dependencias externas ni compiladores pesados: funciona al 100% de forma offline en cualquier navegador moderno.

---

## 🚀 Características Principales

- **🎮 45 Niveles Progresivos en 3 Rutas de Aprendizaje:**
  - **Ruta 1 — Web & UI (15 Niveles):** HTML5, CSS3 moderno, TypeScript y manipulación de interfaces.
  - **Ruta 2 — Juegos & Lógica (15 Niveles):** Python, C#, C++ y Lua aplicados a mecánicas de juego.
  - **Ruta 3 — Servidores & Datos (15 Niveles):** Linux (Bash scripting) y Bases de Datos relacionales (SQL).
- **📝 Editor de Código con Resaltado de Sintaxis en Tiempo Real:**
  - Desarrollado en JavaScript puro con un *Single-Pass Lexer* rápido, limpio y sin librerías externas.
  - Soporte completo para 8 lenguajes y formatos.
- **⚡ Panel Visual de Resultados en Vivo:**
  - **Web & UI:** Previsualización dinámica en un `iframe` seguro en tiempo real.
  - **Juegos & Lógica:** Consola de ejecución que evalúa en vivo variables, f-strings y llamadas a `print()`, `Console.WriteLine()`, etc.
  - **Servidores & Datos:** Terminal Bash interactiva con prompt Linux y visor interactivo de tablas de base de datos SQL (`PostgreSQL 16`).
- **🏆 Sistema Gamificado Completo:**
  - Ganancia de XP y niveles de jugador.
  - Calificación con estrellas (1 a 3 estrellas según intentos y uso de pistas).
  - Pistas conceptuales por nivel.
  - Bloqueo y desbloqueo progresivo de desafíos.
- **💾 Persistencia y Portabilidad:**
  - Guardado automático en `localStorage`.
  - Botones de **Exportar** e **Importar** progreso en formato JSON para transferir partidas entre computadoras.

---

## 🛠️ Estructura del Proyecto

```
CodeAcademy_Game/
├── index.html            # Interfaz SPA completa (Dashboard, Rutas, Niveles)
├── css/
│   ├── style.css         # Sistema de diseño futurista, modo oscuro y glassmorphism
│   └── animations.css    # Micro-animaciones, partículas y transiciones suaves
├── js/
│   ├── levels.js         # Base de datos con los 45 niveles y sus validaciones
│   ├── editor.js         # Motor del editor y resaltador léxico
│   └── app.js            # Lógica central, estado, simuladores y enrutamiento
└── README.md
```

---

## 🕹️ Cómo Jugar

No requiere instalación de Node.js ni servidor web:
1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` directamente en tu navegador favorito (Chrome, Firefox, Edge, Safari).
3. ¡Elige una ruta y comienza a programar!
