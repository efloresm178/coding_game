/* ============================================================
   CODEACADEMY_GAME — Levels Data
   45 Progressive Levels across 3 Learning Paths
   Route 1: Web & UI (15 levels) — HTML, CSS, TypeScript
   Route 2: Games & Logic (15 levels) — Python, C#, C++, Lua
   Route 3: Servers & Data (15 levels) — Linux, SQL, Bash
   ============================================================ */

const LEVELS_DATA = {

/* ================================================================
   ROUTE 1 — WEB & UI
   ================================================================ */
route1: [

/* ---- R1 L1 ---- */
{
  id:'r1l1', route:1, number:1, title:'Tu Primer Documento HTML',
  language:'HTML', editorLang:'html', difficulty:'easy', xp:50,
  theory:`
<h3>¿Qué es HTML?</h3>
<p>HTML (HyperText Markup Language) es el esqueleto de todas las páginas web. Define la <strong>estructura</strong> del contenido usando <em>etiquetas</em>.</p>
<h4>Estructura básica obligatoria</h4>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Mi Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hola Mundo&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
<ul>
  <li><code>&lt;!DOCTYPE html&gt;</code> — Le dice al navegador que es HTML5</li>
  <li><code>&lt;html&gt;</code> — Elemento raíz que envuelve todo</li>
  <li><code>&lt;head&gt;</code> — Metadatos (no visible en la página)</li>
  <li><code>&lt;body&gt;</code> — Contenido visible para el usuario</li>
</ul>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe un documento HTML completo y válido que incluya:</p>
<ul>
  <li>Declaración DOCTYPE correcta</li>
  <li>Elemento <code>&lt;html&gt;</code> con atributo <code>lang</code></li>
  <li>Sección <code>&lt;head&gt;</code> con <code>&lt;meta charset&gt;</code> y un <code>&lt;title&gt;</code></li>
  <li>Sección <code>&lt;body&gt;</code> con un <code>&lt;h1&gt;</code> y un <code>&lt;p&gt;</code></li>
</ul>
</div>`,
  hint:`Empieza siempre con <code>&lt;!DOCTYPE html&gt;</code> en la primera línea. Luego abre <code>&lt;html&gt;</code>, dentro coloca <code>&lt;head&gt;</code> y <code>&lt;body&gt;</code>. Recuerda que cada etiqueta que abres debe cerrarse con <code>&lt;/etiqueta&gt;</code>.`,
  starterCode:`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title><!-- Pon aquí el título --></title>
  </head>
  <body>
    <!-- Escribe tu contenido aquí -->
  </body>
</html>`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('<!doctype html')) return {success:false, message:'Falta la declaración <!DOCTYPE html> al inicio del documento.'};
    if (!lc.includes('<html'))          return {success:false, message:'Falta el elemento raíz <html>.'};
    if (!lc.includes('<head'))          return {success:false, message:'Falta la sección <head>.'};
    if (!lc.includes('<body'))          return {success:false, message:'Falta la sección <body>.'};
    if (!lc.includes('<title'))         return {success:false, message:'Falta el elemento <title> dentro de <head>.'};
    if (!lc.includes('<h1'))            return {success:false, message:'Añade un encabezado <h1> dentro del body.'};
    if (!lc.includes('<p'))             return {success:false, message:'Añade un párrafo <p> con algún texto.'};
    return {success:true, message:'¡Perfecto! Tu documento HTML está bien estructurado. La base de toda página web. 🎉'};
  }
},

/* ---- R1 L2 ---- */
{
  id:'r1l2', route:1, number:2, title:'Etiquetas Semánticas HTML5',
  language:'HTML', editorLang:'html', difficulty:'easy', xp:50,
  theory:`
<h3>HTML Semántico</h3>
<p>Las etiquetas <strong>semánticas</strong> describen el <em>significado</em> del contenido, no solo su apariencia. Mejoran el SEO y la accesibilidad.</p>
<h4>Etiquetas semánticas clave</h4>
<ul>
  <li><code>&lt;header&gt;</code> — Encabezado de página o sección</li>
  <li><code>&lt;nav&gt;</code> — Navegación principal</li>
  <li><code>&lt;main&gt;</code> — Contenido principal (único por página)</li>
  <li><code>&lt;article&gt;</code> — Contenido independiente</li>
  <li><code>&lt;section&gt;</code> — Sección temática</li>
  <li><code>&lt;aside&gt;</code> — Contenido relacionado/lateral</li>
  <li><code>&lt;footer&gt;</code> — Pie de página o sección</li>
</ul>
<pre>&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;nav&gt;...&lt;/nav&gt;
  &lt;main&gt;
    &lt;article&gt;...&lt;/article&gt;
    &lt;aside&gt;...&lt;/aside&gt;
  &lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Construye la estructura semántica de un blog con:</p>
<ul>
  <li><code>&lt;header&gt;</code> con el nombre del blog</li>
  <li><code>&lt;nav&gt;</code> con al menos 2 enlaces</li>
  <li><code>&lt;main&gt;</code> con un <code>&lt;article&gt;</code></li>
  <li><code>&lt;footer&gt;</code> con información de copyright</li>
</ul>
</div>`,
  hint:`Las etiquetas semánticas van dentro del <code>&lt;body&gt;</code>. Piensa en la estructura como una página de periódico: arriba el encabezado, en medio el contenido principal, abajo el pie. Usa <code>&lt;a href="#"&gt;</code> para los enlaces de navegación.`,
  starterCode:`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Blog</title>
</head>
<body>

  <!-- 1. Encabezado del blog -->

  <!-- 2. Navegación -->

  <!-- 3. Contenido principal con un artículo -->

  <!-- 4. Pie de página -->

</body>
</html>`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('<header'))  return {success:false, message:'Necesitas un elemento <header>.'};
    if (!lc.includes('<nav'))     return {success:false, message:'Añade un elemento <nav> para la navegación.'};
    if (!lc.includes('<main'))    return {success:false, message:'Falta el elemento <main> con el contenido principal.'};
    if (!lc.includes('<article')) return {success:false, message:'Incluye un <article> dentro de <main>.'};
    if (!lc.includes('<footer'))  return {success:false, message:'Falta el <footer> al final de la página.'};
    if (!lc.includes('<a ') && !lc.includes('<a\n')) return {success:false, message:'Añade al menos un enlace <a> en el nav.'};
    return {success:true, message:'¡Excelente semántica! Tu HTML es accesible y optimizado para SEO. 🌐'};
  }
},

/* ---- R1 L3 ---- */
{
  id:'r1l3', route:1, number:3, title:'Atributos HTML Esenciales',
  language:'HTML', editorLang:'html', difficulty:'easy', xp:50,
  theory:`
<h3>Los Atributos HTML</h3>
<p>Los atributos dan información adicional a las etiquetas. Van siempre en la etiqueta de apertura.</p>
<h4>Atributos imprescindibles</h4>
<ul>
  <li><code>href</code> — URL de un enlace <code>&lt;a&gt;</code></li>
  <li><code>src</code> — Fuente de imagen o script</li>
  <li><code>alt</code> — Texto alternativo para imágenes (accesibilidad)</li>
  <li><code>class</code> — Clase CSS</li>
  <li><code>id</code> — Identificador único</li>
  <li><code>type</code> — Tipo de input</li>
  <li><code>placeholder</code> — Texto de ayuda en inputs</li>
</ul>
<pre>&lt;a href="https://ejemplo.com" target="_blank"&gt;Enlace&lt;/a&gt;
&lt;img src="foto.jpg" alt="Descripción" width="200"&gt;
&lt;input type="email" id="correo" placeholder="tu@email.com"&gt;</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un formulario de contacto con:</p>
<ul>
  <li>Un <code>&lt;img&gt;</code> con <code>src</code> y <code>alt</code></li>
  <li>Un <code>&lt;a&gt;</code> con <code>href</code> y <code>target="_blank"</code></li>
  <li>Un <code>&lt;input&gt;</code> con <code>type</code>, <code>id</code> y <code>placeholder</code></li>
  <li>Un <code>&lt;button&gt;</code> con <code>type="submit"</code></li>
</ul>
</div>`,
  hint:`Recuerda: los atributos van DENTRO de la etiqueta de apertura: <code>&lt;etiqueta atributo="valor"&gt;</code>. El atributo <code>alt</code> en las imágenes es OBLIGATORIO para accesibilidad. El atributo <code>target="_blank"</code> abre el enlace en una nueva pestaña.`,
  starterCode:`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Contacto</title>
</head>
<body>
  <h1>Contáctanos</h1>

  <!-- Imagen con src y alt -->

  <!-- Enlace externo -->

  <!-- Formulario con input -->
  <form>

  </form>
</body>
</html>`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('src='))            return {success:false, message:'Añade una imagen con el atributo src="...".'};
    if (!lc.includes('alt='))            return {success:false, message:'La imagen necesita el atributo alt="descripción".'};
    if (!lc.includes('href='))           return {success:false, message:'Añade un enlace <a> con href="url".'};
    if (!lc.includes('target="_blank"') && !lc.includes("target='_blank'")) return {success:false, message:'El enlace debe tener target="_blank" para abrir en nueva pestaña.'};
    if (!lc.includes('placeholder='))    return {success:false, message:'El input necesita un placeholder="..." descriptivo.'};
    if (!lc.includes('type='))           return {success:false, message:'El input necesita un atributo type (text, email, etc.).'};
    return {success:true, message:'¡Atributos perfectos! Tu HTML es semántico y accesible. 🏆'};
  }
},

/* ---- R1 L4 ---- */
{
  id:'r1l4', route:1, number:4, title:'Selectores CSS',
  language:'CSS', editorLang:'css', difficulty:'medium', xp:75,
  theory:`
<h3>Selectores CSS</h3>
<p>Los selectores indican <em>qué elementos</em> quieres estilizar. Son la base de CSS.</p>
<h4>Selectores fundamentales</h4>
<ul>
  <li><code>p { }</code> — Selector de tipo (todos los párrafos)</li>
  <li><code>.clase { }</code> — Selector de clase</li>
  <li><code>#id { }</code> — Selector de ID (único)</li>
  <li><code>a:hover { }</code> — Pseudo-clase (estado)</li>
  <li><code>div > p { }</code> — Hijo directo</li>
  <li><code>h1, h2, h3 { }</code> — Múltiples selectores</li>
</ul>
<pre>.tarjeta {
  background-color: #1a1a2e;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

#titulo {
  font-size: 2rem;
  font-weight: bold;
}

a:hover {
  color: #00d4ff;
  text-decoration: underline;
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe CSS que incluya:</p>
<ul>
  <li>Un selector de clase <code>.container</code> con <code>padding</code>, <code>max-width</code> y <code>margin</code></li>
  <li>Un selector de ID <code>#titulo</code> con <code>color</code> y <code>font-size</code></li>
  <li>Un selector de tipo <code>p</code> con <code>line-height</code></li>
  <li>Un pseudo-selector <code>a:hover</code> con <code>color</code></li>
</ul>
</div>`,
  hint:`Los selectores de clase empiezan con punto: <code>.miClase { }</code>. Los de ID con numeral: <code>#miId { }</code>. Asegúrate de usar llaves <code>{ }</code> y terminar cada propiedad con punto y coma <code>;</code>.`,
  starterCode:`/* Escribe tus reglas CSS aquí */

/* Selector de clase: .container */


/* Selector de ID: #titulo */


/* Selector de tipo: p */


/* Pseudo-clase: a:hover */
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('.container'))      return {success:false, message:'Necesitas un selector de clase .container { }.'};
    if (!lc.includes('#titulo'))         return {success:false, message:'Falta el selector de ID #titulo { }.'};
    if (!/\bp\s*\{/.test(lc))           return {success:false, message:'Añade un selector de tipo p { } para los párrafos.'};
    if (!lc.includes('a:hover'))         return {success:false, message:'Falta el pseudo-selector a:hover { }.'};
    if (!lc.includes('padding'))         return {success:false, message:'El .container necesita padding.'};
    if (!lc.includes('color'))           return {success:false, message:'Añade al menos una propiedad color.'};
    return {success:true, message:'¡Selectores dominados! Ya puedes apuntar a cualquier elemento. 🎨'};
  }
},

/* ---- R1 L5 ---- */
{
  id:'r1l5', route:1, number:5, title:'Flexbox: El Layout Moderno',
  language:'CSS', editorLang:'css', difficulty:'medium', xp:75,
  theory:`
<h3>CSS Flexbox</h3>
<p>Flexbox hace que el layout en CSS sea <strong>intuitivo y poderoso</strong>. Con pocas propiedades controlas la alineación completa.</p>
<h4>Propiedades del contenedor flex</h4>
<pre>.contenedor {
  display: flex;
  flex-direction: row;       /* fila (por defecto) o column */
  justify-content: center;   /* eje principal */
  align-items: center;       /* eje cruzado */
  flex-wrap: wrap;           /* permite salto de línea */
  gap: 1rem;                 /* espacio entre hijos */
}</pre>
<h4>Propiedades de los hijos flex</h4>
<pre>.hijo {
  flex: 1;           /* crecer proporcionalmente */
  flex-grow: 2;      /* prioridad de crecimiento */
  flex-shrink: 0;    /* no se encoge */
  align-self: flex-start;  /* alineación individual */
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea una barra de navegación responsive usando Flexbox:</p>
<ul>
  <li>Un <code>.navbar</code> con <code>display: flex</code></li>
  <li>Usa <code>justify-content</code> para separar logo y links</li>
  <li>Usa <code>align-items</code> para centrar verticalmente</li>
  <li>Añade <code>gap</code> entre los elementos</li>
  <li>Haz que los links sean <code>.nav-links</code> con flex también</li>
</ul>
</div>`,
  hint:`El truco de Flexbox es que las propiedades van en el <strong>contenedor padre</strong>, no en los hijos. Con <code>display: flex</code> activas flexbox, luego <code>justify-content: space-between</code> pone elementos en extremos opuestos.`,
  starterCode:`/* Barra de navegación con Flexbox */

.navbar {
  /* Activa flexbox aquí */

  /* Separa logo y links */

  /* Centra verticalmente */

  padding: 1rem 2rem;
  background: #12121f;
}

.nav-links {
  /* Convierte la lista de links en flex también */

  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  color: #f0f0ff;
  text-decoration: none;
}`,
  validate(code) {
    const lc = code.toLowerCase().replace(/\s+/g,' ');
    if (!lc.includes('display: flex') && !lc.includes('display:flex'))
      return {success:false, message:'Falta display: flex en el contenedor.'};
    if (!lc.includes('justify-content'))
      return {success:false, message:'Necesitas justify-content para controlar la distribución horizontal.'};
    if (!lc.includes('align-items'))
      return {success:false, message:'Añade align-items para centrar verticalmente los elementos.'};
    if (!lc.includes('gap'))
      return {success:false, message:'Usa gap para añadir espacio entre los elementos flex.'};
    return {success:true, message:'¡Flexbox conquistado! Ya puedes hacer layouts perfectos en minutos. 💪'};
  }
},

/* ---- R1 L6 ---- */
{
  id:'r1l6', route:1, number:6, title:'CSS Grid: Control Total del Layout',
  language:'CSS', editorLang:'css', difficulty:'medium', xp:75,
  theory:`
<h3>CSS Grid</h3>
<p>Grid es el sistema de layout <strong>bidimensional</strong> de CSS. Controlas filas Y columnas al mismo tiempo.</p>
<pre>.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 columnas */
  grid-template-rows: auto 1fr auto;   /* 3 filas */
  gap: 1rem;                           /* espacio entre celdas */
}

/* Posicionar un elemento en el grid */
.hero {
  grid-column: 1 / -1;  /* ocupa toda la fila */
  grid-row: 1;
}

/* Shorthand con areas nombradas */
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea el layout de un dashboard con Grid:</p>
<ul>
  <li><code>.dashboard</code> con <code>display: grid</code></li>
  <li>Define <code>grid-template-columns</code> con al menos 3 columnas</li>
  <li>Usa <code>grid-template-rows</code></li>
  <li>Una tarjeta que use <code>grid-column: span 2</code> o similar</li>
  <li>Añade <code>gap</code></li>
</ul>
</div>`,
  hint:`<code>1fr</code> significa "1 fracción del espacio disponible". <code>repeat(3, 1fr)</code> crea 3 columnas iguales. Para que un elemento ocupe varias columnas usa <code>grid-column: span 2</code> o <code>grid-column: 1 / 3</code>.`,
  starterCode:`/* Layout de Dashboard con CSS Grid */

.dashboard {
  /* Activa grid aquí */

  /* Define 3 columnas: pequeña, grande, pequeña */

  /* Define las filas */

  gap: 1.5rem;
  padding: 2rem;
  min-height: 100vh;
  background: #070711;
}

/* Tarjeta que ocupa 2 columnas */
.card-wide {
  /* Ocupa columnas 1 y 2 */
}

/* Tarjeta normal */
.card {
  background: #12121f;
  border-radius: 12px;
  padding: 1.5rem;
}`,
  validate(code) {
    const lc = code.toLowerCase().replace(/\s+/g,' ');
    if (!lc.includes('display: grid') && !lc.includes('display:grid'))
      return {success:false, message:'Falta display: grid en el contenedor.'};
    if (!lc.includes('grid-template-columns'))
      return {success:false, message:'Define grid-template-columns para las columnas.'};
    if (!lc.includes('grid-template-rows') && !lc.includes('grid-template-areas'))
      return {success:false, message:'Define grid-template-rows o grid-template-areas para las filas.'};
    if (!lc.includes('gap'))
      return {success:false, message:'Añade gap para el espacio entre celdas.'};
    if (!lc.includes('grid-column') && !lc.includes('grid-area'))
      return {success:false, message:'Usa grid-column o grid-area para posicionar algún elemento en varias columnas.'};
    return {success:true, message:'¡Grid mastered! Tu layout es profesional y escalable. 🗺️'};
  }
},

/* ---- R1 L7 ---- */
{
  id:'r1l7', route:1, number:7, title:'Variables CSS (Custom Properties)',
  language:'CSS', editorLang:'css', difficulty:'medium', xp:75,
  theory:`
<h3>CSS Custom Properties</h3>
<p>Las variables CSS permiten reutilizar valores y crear <strong>temas</strong> fácilmente. Se definen con <code>--</code> y se usan con <code>var()</code>.</p>
<pre>/* Definición global en :root */
:root {
  --color-primary:  #00d4ff;
  --color-bg:       #070711;
  --font-size-base: 16px;
  --spacing-md:     1rem;
  --radius:         8px;
}

/* Uso de las variables */
.button {
  background: var(--color-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
  border-radius: var(--radius);
}

/* Con fallback */
.texto {
  color: var(--color-accent, #ff6b6b);
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un sistema de diseño con Custom Properties:</p>
<ul>
  <li>Define al menos <strong>4 variables</strong> en <code>:root</code> (colores, tipografía, espaciado)</li>
  <li>Usa <code>var(--nombre)</code> en al menos 3 reglas CSS</li>
  <li>Incluye una variable de color primario y una de fondo</li>
  <li>Aplícalas a un componente como <code>.card</code> o <code>.button</code></li>
</ul>
</div>`,
  hint:`Las variables se definen con dos guiones: <code>--mi-variable: valor;</code> dentro de <code>:root { }</code>. Para usarlas escribes <code>var(--mi-variable)</code>. Esto es muy útil para temas oscuros/claros porque solo cambias las variables en <code>:root</code>.`,
  starterCode:`/* Sistema de diseño con CSS Custom Properties */

:root {
  /* Define aquí tus variables de diseño */
  /* Colores, fuentes, espaciado, radios... */
}

/* Componente Button */
.button {
  /* Usa tus variables aquí con var(--nombre) */
}

/* Componente Card */
.card {
  /* Usa variables aquí también */
}`,
  validate(code) {
    const lc = code.toLowerCase();
    const varCount = (lc.match(/--[\w-]+\s*:/g) || []).length;
    const useCount = (lc.match(/var\(--/g) || []).length;
    if (!lc.includes(':root'))
      return {success:false, message:'Define tus variables dentro de :root { }.'};
    if (varCount < 4)
      return {success:false, message:`Defines ${varCount} variable(s), necesitas al menos 4.`};
    if (!lc.includes('var(--'))
      return {success:false, message:'Usa var(--nombre) para aplicar tus variables en los componentes.'};
    if (useCount < 3)
      return {success:false, message:`Usas var() ${useCount} vez/veces. Úsala en al menos 3 propiedades.`};
    return {success:true, message:'¡Sistema de diseño creado! Las Custom Properties son el corazón de cualquier design system. 🎨'};
  }
},

/* ---- R1 L8 ---- */
{
  id:'r1l8', route:1, number:8, title:'TypeScript: Variables y Tipos',
  language:'TypeScript', editorLang:'typescript', difficulty:'medium', xp:75,
  theory:`
<h3>TypeScript: Tipado Estático</h3>
<p>TypeScript añade <strong>tipos</strong> a JavaScript. Esto atrapa errores en el editor antes de que lleguen al navegador.</p>
<h4>Tipos primitivos</h4>
<pre>// Tipos básicos
let nombre: string = "Alejandro";
let edad: number = 25;
let activo: boolean = true;
let nada: null = null;
let indefinido: undefined = undefined;

// Arrays
let numeros: number[] = [1, 2, 3];
let palabras: Array&lt;string&gt; = ["hola", "mundo"];

// Tuplas
let coordenada: [number, number] = [10, 20];

// Literales de tipo
let direccion: "norte" | "sur" | "este" | "oeste" = "norte";</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Declara las siguientes variables con sus tipos explícitos:</p>
<ul>
  <li>Una <code>string</code> con tu nombre</li>
  <li>Un <code>number</code> con tu año de nacimiento</li>
  <li>Un <code>boolean</code> indicando si eres programador</li>
  <li>Un array de <code>string</code> con 3 lenguajes favoritos</li>
  <li>Un tipo unión <code>string | number</code> para un ID</li>
</ul>
</div>`,
  hint:`La sintaxis para tipar es <code>nombreVariable: Tipo = valor</code>. Los tipos primitivos son <code>string</code>, <code>number</code>, <code>boolean</code>. Para arrays: <code>string[]</code> o <code>Array&lt;string&gt;</code>. Los tipos unión usan <code>|</code>: <code>string | number</code>.`,
  starterCode:`// TypeScript - Variables Tipadas

// Tu nombre (string)
const nombre: string = "";

// Tu año de nacimiento (number)


// ¿Eres programador? (boolean)


// Tus 3 lenguajes favoritos (array de strings)


// Un ID que puede ser string o number (tipo unión)
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes(': string'))   return {success:false, message:'Declara al menos una variable con tipo : string.'};
    if (!lc.includes(': number'))   return {success:false, message:'Declara una variable con tipo : number.'};
    if (!lc.includes(': boolean'))  return {success:false, message:'Declara una variable con tipo : boolean.'};
    if (!lc.includes('string[]') && !lc.includes('array<string>'))
      return {success:false, message:'Declara un array de strings: string[] o Array<string>.'};
    if (!lc.includes('string | number') && !lc.includes('number | string'))
      return {success:false, message:'Crea una variable con tipo unión: string | number.'};
    return {success:true, message:'¡El tipado estático es tu superpoder! TypeScript atrapa errores antes de que el usuario los vea. 🛡️'};
  }
},

/* ---- R1 L9 ---- */
{
  id:'r1l9', route:1, number:9, title:'Interfaces TypeScript',
  language:'TypeScript', editorLang:'typescript', difficulty:'medium', xp:75,
  theory:`
<h3>Interfaces en TypeScript</h3>
<p>Una <strong>interface</strong> define la "forma" que debe tener un objeto. Es un contrato que el objeto debe cumplir.</p>
<pre>interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
  rol: "admin" | "user" | "guest";
  createdAt?: Date;  // ? = opcional
}

// Implementación
const user: Usuario = {
  id: 1,
  nombre: "Ana García",
  email: "ana@ejemplo.com",
  activo: true,
  rol: "admin"
};

// Interfaces para funciones
interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
}

// Extensión de interfaces
interface Administrador extends Usuario {
  permisos: string[];
  departamento: string;
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Define las siguientes interfaces para un sistema de e-commerce:</p>
<ul>
  <li><code>Producto</code> con: id, nombre, precio, categoria, en_stock</li>
  <li><code>Carrito</code> con: items (array de Producto) y total</li>
  <li>Al menos un campo opcional en alguna interface</li>
</ul>
</div>`,
  hint:`La sintaxis de una interface es: <code>interface NombreInterface { propiedad: tipo; }</code>. Para campos opcionales usa <code>?</code>: <code>descripcion?: string</code>. Una interface puede referenciar a otra: <code>items: Producto[]</code>.`,
  starterCode:`// TypeScript - Interfaces para e-commerce

interface Producto {
  // Define las propiedades del producto aquí
}

interface Carrito {
  // El carrito tiene items (array de Producto) y total
}

// Prueba tu interface creando un objeto
const miProducto: Producto = {
  // ...
};
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('interface producto'))
      return {success:false, message:'Define la interface Producto.'};
    if (!lc.includes('interface carrito'))
      return {success:false, message:'Define la interface Carrito.'};
    if (!lc.includes(': number') && !lc.includes(':number'))
      return {success:false, message:'El precio y el id deben ser de tipo number.'};
    if (!lc.includes(': string') && !lc.includes(':string'))
      return {success:false, message:'Nombre y categoría deben ser de tipo string.'};
    if (!lc.includes(': boolean') && !lc.includes(':boolean'))
      return {success:false, message:'El campo en_stock debe ser de tipo boolean.'};
    if (!code.includes('?'))
      return {success:false, message:'Añade al menos un campo opcional con ?.'};
    return {success:true, message:'¡Interfaces perfectas! Ahora TypeScript puede validar la forma de todos tus objetos. 🏗️'};
  }
},

/* ---- R1 L10 ---- */
{
  id:'r1l10', route:1, number:10, title:'Generics TypeScript',
  language:'TypeScript', editorLang:'typescript', difficulty:'hard', xp:110,
  theory:`
<h3>Generics — Código Reutilizable con Tipos</h3>
<p>Los Generics permiten crear funciones y clases que funcionan con <strong>cualquier tipo</strong> sin perder la seguridad de tipos.</p>
<pre>// Sin generics — solo funciona con strings
function primerElemento(arr: string[]): string {
  return arr[0];
}

// Con generics — funciona con cualquier tipo
function primerElemento&lt;T&gt;(arr: T[]): T {
  return arr[0];
}

// Uso
const num  = primerElemento&lt;number&gt;([1, 2, 3]);  // number
const str  = primerElemento&lt;string&gt;(["a","b"]);   // string

// Generic con restricción
function obtenerLongitud&lt;T extends { length: number }&gt;(item: T): number {
  return item.length;
}

// Interface genérica
interface Respuesta&lt;T&gt; {
  data: T;
  error: string | null;
  loading: boolean;
}

// Función con múltiples generics
function mapear&lt;T, U&gt;(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Implementa las siguientes funciones genéricas:</p>
<ul>
  <li><code>ultimo&lt;T&gt;(arr: T[]): T</code> — Retorna el último elemento</li>
  <li><code>intercambiar&lt;T, U&gt;(a: T, b: U): [U, T]</code> — Intercambia tipos</li>
  <li>Una interface genérica <code>Pila&lt;T&gt;</code> con <code>items: T[]</code> y <code>push/pop</code></li>
</ul>
</div>`,
  hint:`El parámetro de tipo genérico se pone entre <code>&lt;&gt;</code> después del nombre de la función: <code>function nombre&lt;T&gt;</code>. Luego puedes usar <code>T</code> como cualquier tipo. Para múltiples tipos: <code>&lt;T, U&gt;</code>. Las tuplas se anotan así: <code>[string, number]</code>.`,
  starterCode:`// TypeScript - Generics

// Función que retorna el último elemento de cualquier array
function ultimo<T>(arr: T[]): T {
  // implementa aquí
}

// Función que intercambia el orden de dos valores de distintos tipos
function intercambiar<T, U>(a: T, b: U): [U, T] {
  // implementa aquí
}

// Interface genérica para una pila (stack)
interface Pila<T> {
  // ...
}

// Prueba tus generics
const ultimoNum = ultimo<number>([1, 2, 3, 99]);
const ultimaStr = ultimo<string>(["a", "b", "z"]);
`,
  validate(code) {
    if (!code.includes('<T>') && !code.includes('<T,') && !code.includes('<T '))
      return {success:false, message:'Usa sintaxis genérica <T> en tus funciones.'};
    if (!code.includes('function ultimo') && !code.includes('const ultimo'))
      return {success:false, message:'Implementa la función ultimo<T>.'};
    if (!code.includes('function intercambiar') && !code.includes('const intercambiar'))
      return {success:false, message:'Implementa la función intercambiar<T, U>.'};
    if (!code.includes('<T, U>') && !code.includes('<T,U>'))
      return {success:false, message:'La función intercambiar necesita dos parámetros de tipo: <T, U>.'};
    if (!code.includes('interface Pila') && !code.includes('interface pila'))
      return {success:false, message:'Define la interface genérica Pila<T>.'};
    return {success:true, message:'¡Generics dominados! Escribes código reutilizable con seguridad de tipos completa. 🧬'};
  }
},

/* ---- R1 L11 ---- */
{
  id:'r1l11', route:1, number:11, title:'Clases TypeScript',
  language:'TypeScript', editorLang:'typescript', difficulty:'hard', xp:110,
  theory:`
<h3>Clases en TypeScript</h3>
<p>TypeScript potencia las clases de JS con <strong>modificadores de acceso</strong>, <strong>propiedades tipadas</strong> y <strong>interfaces implementadas</strong>.</p>
<pre>interface IAnimal {
  nombre: string;
  sonido(): string;
}

abstract class Animal implements IAnimal {
  constructor(
    public nombre: string,
    protected energia: number = 100
  ) {}

  abstract sonido(): string;

  comer(cantidad: number): void {
    this.energia += cantidad;
    console.log(\`\${this.nombre} come. Energía: \${this.energia}\`);
  }

  get estado(): string {
    return this.energia > 50 ? "saludable" : "cansado";
  }
}

class Perro extends Animal {
  private raza: string;

  constructor(nombre: string, raza: string) {
    super(nombre);
    this.raza = raza;
  }

  sonido(): string { return "¡Guau!"; }

  info(): string {
    return \`\${this.nombre} (\${this.raza}) — \${this.estado}\`;
  }
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un sistema de empleados:</p>
<ul>
  <li>Clase base <code>Empleado</code> con <code>nombre</code>, <code>salario</code>, método <code>calcularBonus()</code></li>
  <li>Subclase <code>Gerente</code> que extienda <code>Empleado</code> con <code>equipo: string[]</code></li>
  <li>Usa <code>public</code>, <code>private</code>, <code>protected</code> correctamente</li>
  <li>Implementa un <code>getter</code> para el salario anual</li>
</ul>
</div>`,
  hint:`La herencia usa <code>extends</code>. El constructor de la subclase debe llamar a <code>super()</code> para inicializar la clase padre. Los getters se definen con la palabra clave <code>get</code> antes del nombre del método. Los modificadores <code>public/private/protected</code> van antes del tipo de propiedad.`,
  starterCode:`// TypeScript - Clases y Herencia

class Empleado {
  // Declara propiedades tipadas con modificadores de acceso
  constructor(
    public nombre: string,
    protected salario: number
  ) {}

  // Método para calcular bonus
  calcularBonus(): number {
    // 10% del salario
    return this.salario * 0.1;
  }

  // Getter para salario anual
  get salarioAnual(): number {
    return this.salario * 12;
  }
}

// Extiende Empleado con Gerente
class Gerente extends Empleado {
  // Añade equipo: string[]
}

// Prueba
const emp = new Empleado("Carlos", 3000);
const ger = new Gerente("Laura", 5000);
console.log(emp.salarioAnual);
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('class empleado')) return {success:false, message:'Define la clase Empleado.'};
    if (!lc.includes('class gerente'))  return {success:false, message:'Define la clase Gerente.'};
    if (!lc.includes('extends'))        return {success:false, message:'Gerente debe extender (heredar de) Empleado.'};
    if (!lc.includes('constructor'))    return {success:false, message:'Añade un constructor a la clase.'};
    if (!lc.includes('super('))         return {success:false, message:'El constructor de Gerente debe llamar a super().'};
    if (!lc.includes('get '))           return {success:false, message:'Implementa un getter con la palabra clave get.'};
    if (!lc.includes('private') && !lc.includes('protected') && !lc.includes('public'))
      return {success:false, message:'Usa modificadores de acceso: public, private o protected.'};
    return {success:true, message:'¡OOP en TypeScript dominado! El encapsulamiento y la herencia son tu caja de herramientas. 🏛️'};
  }
},

/* ---- R1 L12 ---- */
{
  id:'r1l12', route:1, number:12, title:'Animaciones CSS con @keyframes',
  language:'CSS', editorLang:'css', difficulty:'hard', xp:100,
  theory:`
<h3>CSS Animations & @keyframes</h3>
<p>Las animaciones CSS permiten crear movimiento <strong>sin JavaScript</strong>. Son fluidas, performativas y fáciles de controlar.</p>
<pre>/* 1. Define los keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Con múltiples paradas */
@keyframes pulso {
  0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(0,212,255,0.4); }
  70%  { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(0,212,255,0); }
  100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(0,212,255,0); }
}

/* 2. Aplica la animación */
.card {
  animation: fadeInUp 0.6s ease both;
  /* nombre | duración | easing | fill-mode */
}

.boton {
  animation: pulso 2s infinite;
  /* nombre | duración | iteraciones */
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea dos animaciones con @keyframes:</p>
<ul>
  <li><code>@keyframes aparecerDesdeAbajo</code> con opacity y translateY</li>
  <li><code>@keyframes girar</code> con rotation de 0 a 360deg</li>
  <li>Aplica la primera a un <code>.card</code> con duración 0.5s</li>
  <li>Aplica la segunda a un <code>.loader</code> con infinite</li>
</ul>
</div>`,
  hint:`Los <code>@keyframes</code> van separados de las reglas que los usan. El nombre que le das al keyframe es el que usas en <code>animation: nombreKeyframe</code>. Para rotación: <code>transform: rotate(360deg)</code>. Para hacerla infinita: <code>animation-iteration-count: infinite</code> o simplemente <code>animation: girar 1s linear infinite</code>.`,
  starterCode:`/* Animaciones CSS */

/* Keyframe 1: Aparecer desde abajo */
@keyframes aparecerDesdeAbajo {
  /* define from/to o 0%/100% */
}

/* Keyframe 2: Girar 360 grados */
@keyframes girar {

}

/* Aplica las animaciones */
.card {
  /* animation: nombre duración easing fill-mode */
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid #00d4ff;
  border-top-color: transparent;
  border-radius: 50%;
  /* animation: nombre duración linear infinite */
}`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('@keyframes')) return {success:false, message:'Define al menos un @keyframes.'};
    const kfCount = (lc.match(/@keyframes/g)||[]).length;
    if (kfCount < 2) return {success:false, message:`Tienes ${kfCount} @keyframes. Necesitas 2.`};
    if (!lc.includes('opacity'))    return {success:false, message:'Usa opacity en uno de los keyframes para un fade-in.'};
    if (!lc.includes('rotate') && !lc.includes('translatey'))
      return {success:false, message:'Usa transform: rotate() o translateY() en los keyframes.'};
    if (!lc.includes('animation')) return {success:false, message:'Aplica las animaciones con la propiedad animation.'};
    if (!lc.includes('infinite'))  return {success:false, message:'El loader debe tener animation-iteration-count: infinite.'};
    return {success:true, message:'¡Animaciones CSS perfectas! Tu UI ya tiene vida propia. ✨'};
  }
},

/* ---- R1 L13 ---- */
{
  id:'r1l13', route:1, number:13, title:'DOM Manipulation Avanzada',
  language:'JavaScript', editorLang:'javascript', difficulty:'hard', xp:110,
  theory:`
<h3>DOM Manipulation</h3>
<p>El DOM (Document Object Model) es la representación en árbol de tu HTML. Con JS puedes modificarlo dinámicamente.</p>
<pre>// Selección de elementos
const btn = document.querySelector('#mi-boton');
const items = document.querySelectorAll('.item');
const header = document.getElementById('header');

// Modificar contenido
btn.textContent = 'Nuevo texto';
btn.innerHTML = '&lt;span&gt;Con HTML&lt;/span&gt;';

// Modificar estilos
btn.style.color = 'white';
btn.classList.add('activo');
btn.classList.toggle('visible');
btn.classList.remove('oculto');

// Crear y añadir elementos
const nuevoDiv = document.createElement('div');
nuevoDiv.className = 'tarjeta';
nuevoDiv.textContent = 'Soy nuevo!';
document.body.appendChild(nuevoDiv);

// Event Listeners
btn.addEventListener('click', (evento) => {
  console.log('Clickeado!', evento.target);
});

// Delegación de eventos
document.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    e.target.classList.toggle('seleccionado');
  }
});</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe JavaScript que:</p>
<ul>
  <li>Use <code>querySelector</code> o <code>getElementById</code> para seleccionar elementos</li>
  <li>Añada un <code>addEventListener</code> para el evento <code>click</code></li>
  <li>Modifique el DOM (textContent, classList, innerHTML o style)</li>
  <li>Cree un elemento nuevo con <code>createElement</code> y lo añada al DOM</li>
</ul>
</div>`,
  hint:`El patrón más común: seleccionar → añadir listener → en el listener, modificar el DOM. <code>querySelector</code> acepta cualquier selector CSS. Recuerda que <code>classList.toggle()</code> añade la clase si no está, y la quita si está.`,
  starterCode:`// DOM Manipulation Avanzada

// 1. Selecciona el botón con querySelector
const btn = document.querySelector('#mi-boton');
const lista = document.querySelector('#mi-lista');

// 2. Añade un event listener para click
btn.addEventListener('click', function() {
  // 3. Modifica el DOM aquí
  // (cambia texto, clases, estilos)

});

// 4. Crea un nuevo elemento y añádelo al DOM
function crearItem(texto) {
  const item = document.createElement('li');
  // ... configura el item
  lista.appendChild(item);
}

// Prueba
crearItem('Primer item dinámico');
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('queryselector') && !lc.includes('getelementbyid') && !lc.includes('queryselectorall'))
      return {success:false, message:'Selecciona elementos con querySelector o getElementById.'};
    if (!lc.includes('addeventlistener'))
      return {success:false, message:'Añade al menos un addEventListener.'};
    if (!lc.includes('click'))
      return {success:false, message:'El event listener debe escuchar el evento click.'};
    if (!lc.includes('textcontent') && !lc.includes('innerhtml') && !lc.includes('classlist') && !lc.includes('.style'))
      return {success:false, message:'Modifica el DOM cambiando textContent, innerHTML, classList o style.'};
    if (!lc.includes('createelement'))
      return {success:false, message:'Usa createElement para crear un nuevo elemento dinámicamente.'};
    if (!lc.includes('appendchild') && !lc.includes('append(') && !lc.includes('insertbefore'))
      return {success:false, message:'Añade el nuevo elemento al DOM con appendChild o append.'};
    return {success:true, message:'¡DOM Mastered! Puedes manipular cualquier página web dinámicamente. ⚡'};
  }
},

/* ---- R1 L14 ---- */
{
  id:'r1l14', route:1, number:14, title:'Responsive Design con Media Queries',
  language:'CSS', editorLang:'css', difficulty:'hard', xp:100,
  theory:`
<h3>CSS Media Queries</h3>
<p>Las media queries permiten aplicar CSS <strong>condicionalmente</strong> según el tamaño de pantalla u otras características del dispositivo.</p>
<pre>/* Mobile First (recomendado) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 2rem;
  }
}

/* Orientación */
@media (orientation: landscape) { ... }

/* Pantalla de alta densidad */
@media (-webkit-min-device-pixel-ratio: 2) { ... }

/* Preferencia de modo oscuro */
@media (prefers-color-scheme: dark) { ... }

/* Breakpoints comunes */
/* 480px: Mobile grande */
/* 768px: Tablet */
/* 1024px: Desktop pequeño */
/* 1280px: Desktop */
/* 1536px: Desktop grande */</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un layout responsive completo:</p>
<ul>
  <li>En mobile: columna única (<code>flex-direction: column</code>)</li>
  <li>En tablet (<code>@media min-width: 768px</code>): 2 columnas</li>
  <li>En desktop (<code>@media min-width: 1024px</code>): 3 columnas</li>
  <li>Tipografía que escale con las pantallas</li>
</ul>
</div>`,
  hint:`El enfoque "Mobile First" significa que escribes los estilos base para mobile y luego usas <code>@media (min-width: ...)</code> para añadir estilos para pantallas más grandes. Esto es mejor que "Desktop First" porque los navegadores móviles no descargan lo que no necesitan.`,
  starterCode:`/* Responsive Design — Mobile First */

/* Estilos base (Mobile) */
.grid-posts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.post-card {
  background: #12121f;
  border-radius: 12px;
  padding: 1.5rem;
}

h1 { font-size: 1.5rem; }

/* Tablet (768px y más) */
@media (min-width: 768px) {
  /* Aquí el grid pasa a 2 columnas */

  h1 { /* font-size más grande */ }
}

/* Desktop (1024px y más) */
@media (min-width: 1024px) {
  /* Aquí el grid pasa a 3 columnas */

}`,
  validate(code) {
    const lc = code.toLowerCase();
    const mqCount = (lc.match(/@media/g)||[]).length;
    if (mqCount < 2) return {success:false, message:`Tienes ${mqCount} @media query. Necesitas al menos 2 (tablet y desktop).`};
    if (!lc.includes('min-width')) return {success:false, message:'Usa min-width en tus media queries (enfoque Mobile First).'};
    if (!lc.includes('768'))       return {success:false, message:'Añade el breakpoint de tablet en 768px.'};
    if (!lc.includes('1024') && !lc.includes('1200') && !lc.includes('1280'))
      return {success:false, message:'Añade el breakpoint de desktop (1024px o 1200px).'};
    if (!lc.includes('flex-direction') && !lc.includes('grid-template-columns'))
      return {success:false, message:'Cambia el layout entre breakpoints con flex-direction o grid-template-columns.'};
    return {success:true, message:'¡Responsive mastered! Tu diseño se adapta a cualquier pantalla. 📱💻🖥️'};
  }
},

/* ---- R1 L15 ---- */
{
  id:'r1l15', route:1, number:15, title:'Async/Await y Promesas Tipadas',
  language:'TypeScript', editorLang:'typescript', difficulty:'hard', xp:130,
  theory:`
<h3>Programación Asíncrona en TypeScript</h3>
<p>Las operaciones asíncronas (API calls, I/O) no bloquean el hilo principal. TypeScript añade tipos a las Promesas.</p>
<pre>// Tipo de retorno: Promise&lt;T&gt;
async function obtenerUsuario(id: number): Promise&lt;Usuario&gt; {
  const respuesta = await fetch(\`/api/users/\${id}\`);
  if (!respuesta.ok) {
    throw new Error(\`HTTP \${respuesta.status}\`);
  }
  const data: Usuario = await respuesta.json();
  return data;
}

// Manejo de errores tipado
async function main(): Promise&lt;void&gt; {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario.nombre);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}

// Promesas paralelas
const [usuarios, productos] = await Promise.all([
  obtenerUsuarios(),
  obtenerProductos()
]);

// Promise tipada desde cero
function esperar(ms: number): Promise&lt;void&gt; {
  return new Promise((resolve) => setTimeout(resolve, ms));
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Implementa un servicio de datos asíncrono:</p>
<ul>
  <li>Una interface <code>Post</code> con id, titulo, cuerpo</li>
  <li>Función <code>async</code> tipada que retorne <code>Promise&lt;Post[]&gt;</code></li>
  <li>Uso de <code>await</code> dentro de la función</li>
  <li>Manejo de errores con <code>try/catch</code></li>
  <li>Llama <code>Promise.all</code> o usa <code>async/await</code></li>
</ul>
</div>`,
  hint:`Las funciones <code>async</code> SIEMPRE retornan una <code>Promise</code>. Dentro de ellas usas <code>await</code> para "esperar" otras promesas. El tipo de retorno se escribe como <code>Promise&lt;TipoDelDato&gt;</code>. Si la función no retorna nada útil: <code>Promise&lt;void&gt;</code>.`,
  starterCode:`// TypeScript - Async/Await con tipos

// 1. Define la interface
interface Post {
  id: number;
  titulo: string;
  cuerpo: string;
}

// 2. Función async que simula fetch
async function obtenerPosts(): Promise<Post[]> {
  // Simula una llamada a API con un delay
  await new Promise(resolve => setTimeout(resolve, 100));

  // Retorna datos mock tipados
  return [
    { id: 1, titulo: "Primer post", cuerpo: "..." }
  ];
}

// 3. Función async con manejo de errores
async function cargarDatos(): Promise<void> {
  try {
    const posts = await obtenerPosts();
    console.log(\`Cargados \${posts.length} posts\`);
  } catch (error: unknown) {
    // maneja el error tipado
  }
}

// 4. Llama la función
cargarDatos();
`,
  validate(code) {
    if (!code.includes('async '))        return {success:false, message:'Usa la palabra clave async en al menos una función.'};
    if (!code.includes('await '))        return {success:false, message:'Usa await para esperar las promesas.'};
    if (!code.includes('Promise<'))      return {success:false, message:'Tipea el retorno de las funciones async como Promise<Tipo>.'};
    if (!code.includes('try') || !code.includes('catch'))
      return {success:false, message:'Maneja errores con un bloque try/catch.'};
    if (!code.includes('interface '))    return {success:false, message:'Define una interface para el tipo de datos.'};
    return {success:true, message:'¡Async/Await con tipos dominado! Puedes consumir APIs de forma segura y eficiente. 🚀'};
  }
}

], // end route1

/* ================================================================
   ROUTE 2 — GAMES & LOGIC
   ================================================================ */
route2: [

/* ---- R2 L1 ---- */
{
  id:'r2l1', route:2, number:1, title:'Variables y Print en Python',
  language:'Python', editorLang:'python', difficulty:'easy', xp:50,
  theory:`
<h3>Python: El Lenguaje de los Makers</h3>
<p>Python es el lenguaje más popular del mundo gracias a su sintaxis <strong>limpia y legible</strong>. No necesitas punto y coma ni llaves.</p>
<pre># Tipos básicos
nombre = "Link"            # str
vida = 3                   # int
velocidad = 1.5            # float
es_heroe = True            # bool
inventario = None          # NoneType

# Print con f-strings (moderno)
print(f"Hola, {nombre}! Vidas: {vida}")

# Print con múltiples argumentos
print("Vel:", velocidad, "| Heroe:", es_heroe)

# Input del usuario
# nombre = input("¿Cómo te llamas? ")

# type() para ver el tipo
print(type(nombre))   # &lt;class 'str'&gt;</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un perfil de personaje de videojuego:</p>
<ul>
  <li>Variable <code>nombre</code> (str) con el nombre del personaje</li>
  <li>Variable <code>nivel</code> (int) con el nivel actual</li>
  <li>Variable <code>vida</code> (float) con puntos de vida</li>
  <li>Variable <code>es_jefe</code> (bool)</li>
  <li>Usa <code>print()</code> con f-string para mostrar el perfil</li>
</ul>
</div>`,
  hint:`En Python no se declaran tipos explícitamente (aunque puedes con type hints). Para f-strings usa las comillas con f antes: <code>f"Hola {variable}"</code>. Las variables booleanas son <code>True</code> y <code>False</code> (con mayúscula).`,
  starterCode:`# Perfil de personaje en Python

# Declara las variables del personaje
nombre = ""
nivel = 0
vida = 100.0
es_jefe = False

# Muestra el perfil con print y f-string
print(f"=== PERFIL DE PERSONAJE ===")
print(f"Nombre: {nombre}")
# Añade más prints aquí
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('nombre'))    return {success:false, message:'Declara la variable nombre.'};
    if (!lc.includes('nivel'))     return {success:false, message:'Declara la variable nivel.'};
    if (!lc.includes('vida'))      return {success:false, message:'Declara la variable vida.'};
    if (!lc.includes('es_jefe') && !lc.includes('jefe'))
      return {success:false, message:'Declara la variable es_jefe con un valor booleano.'};
    if (!lc.includes('print'))     return {success:false, message:'Usa print() para mostrar las variables.'};
    if (!code.includes('f"') && !code.includes("f'"))
      return {success:false, message:'Usa f-strings: print(f"Nombre: {nombre}") para interpolar variables.'};
    return {success:true, message:'¡Python despertó! El lenguaje más amigable del mundo ya es tuyo. 🐍'};
  }
},

/* ---- R2 L2 ---- */
{
  id:'r2l2', route:2, number:2, title:'Condicionales Python: if/elif/else',
  language:'Python', editorLang:'python', difficulty:'easy', xp:50,
  theory:`
<h3>Condicionales Python</h3>
<p>Python usa <strong>indentación</strong> (espacios) para definir bloques. No hay llaves.</p>
<pre>nivel = 15

if nivel >= 50:
    print("Maestro")
elif nivel >= 30:
    print("Experto")
elif nivel >= 10:
    print("Intermedio")
else:
    print("Principiante")

# Operadores de comparación
# ==  igual a
# !=  diferente de
# >   mayor que
# <   menor que
# >=  mayor o igual
# <=  menor o igual

# Operadores lógicos
# and, or, not

salud = 20
tiene_pocion = True

if salud < 30 and tiene_pocion:
    print("¡Usa la poción!")
elif salud < 30:
    print("¡Cuidado! Vida baja")

# Ternario
estado = "vivo" if salud > 0 else "muerto"</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Sistema de clasificación para un videojuego RPG:</p>
<ul>
  <li>Usa <code>if/elif/else</code> para clasificar al jugador por nivel (1-10: Novato, 11-30: Guerrero, 31-60: Héroe, 61+: Leyenda)</li>
  <li>Añade una condición con <code>and</code> o <code>or</code></li>
  <li>Usa un operador ternario</li>
</ul>
</div>`,
  hint:`Python usa <code>elif</code> (no "else if"). La indentación es de 4 espacios por nivel. Los operadores lógicos son palabras: <code>and</code>, <code>or</code>, <code>not</code>. El ternario es: <code>valor_si_verdad if condicion else valor_si_falso</code>.`,
  starterCode:`# Sistema de clasificación RPG

nivel = 25
vida = 80
tiene_escudo = True

# Clasificación por nivel
if nivel >= 61:
    rango = "Leyenda"
elif nivel >= 31:
    rango = "Heroe"
elif nivel >= 11:
    rango = "Guerrero"
else:
    rango = "Novato"

print(f"Rango: {rango}")

# Condición con 'and' o 'or'
# (ej: si tiene escudo Y vida alta = "Invencible")


# Operador ternario
# estado = "en guardia" if ??? else "vulnerable"
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('if'))     return {success:false, message:'Usa if para la primera condición.'};
    if (!lc.includes('elif'))   return {success:false, message:'Usa elif para condiciones intermedias.'};
    if (!lc.includes('else'))   return {success:false, message:'Añade un else para el caso por defecto.'};
    if (!lc.includes(' and ') && !lc.includes(' or '))
      return {success:false, message:'Usa and o or para combinar condiciones.'};
    if (!lc.includes(' if ') || (!lc.includes(' else ') && !lc.search(/\belse\b/)))
      return {success:false, message:'Usa un operador ternario: valor_a if condicion else valor_b.'};
    return {success:true, message:'¡Condicionales Python dominadas! La lógica de tu código ya toma decisiones. 🧠'};
  }
},

/* ---- R2 L3 ---- */
{
  id:'r2l3', route:2, number:3, title:'Bucles For en Python',
  language:'Python', editorLang:'python', difficulty:'easy', xp:50,
  theory:`
<h3>Bucles en Python</h3>
<p>Python tiene dos bucles: <code>for</code> (iteración) y <code>while</code> (condición).</p>
<pre># for con range()
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 11):   # 1 hasta 10
    print(i)

for i in range(0, 10, 2):  # pares: 0,2,4,6,8
    print(i)

# for sobre listas
enemigos = ["Slime", "Orc", "Dragón"]
for enemigo in enemigos:
    print(f"Derrotaste a {enemigo}!")

# enumerate() para índice y valor
for i, enemigo in enumerate(enemigos, 1):
    print(f"{i}. {enemigo}")

# while
vidas = 3
while vidas > 0:
    print(f"Quedan {vidas} vidas")
    vidas -= 1

# break y continue
for n in range(100):
    if n == 5: break        # para el bucle
    if n % 2 == 0: continue  # salta al siguiente</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Simula una batalla de videojuego:</p>
<ul>
  <li>Lista de 5 enemigos</li>
  <li>Bucle <code>for</code> con <code>enumerate</code> para combatirlos</li>
  <li>Dentro, usa <code>range()</code> para simular rondas de ataque</li>
  <li>Usa <code>break</code> si el jugador "pierde" (condición inventada)</li>
</ul>
</div>`,
  hint:`<code>range(start, stop, step)</code> — el stop es exclusivo. <code>enumerate(lista)</code> te da tuplas de (índice, elemento). Para recorrer una lista de strings puedes hacer directamente <code>for item in mi_lista:</code> sin necesidad de range.`,
  starterCode:`# Simulador de batalla RPG

enemigos = ["Slime", "Goblin", "Orc", "Troll", "Dragon Boss"]
vida_jugador = 100

print("=== INICIO DE BATALLA ===")

# Recorre la lista con enumerate
for i, enemigo in enumerate(enemigos, 1):
    print(f"\nEnemigo {i}: {enemigo}")

    # Simula rondas de ataque con range
    for ronda in range(1, 4):
        print(f"  Ronda {ronda}: ataque!")

    # Si la vida llega a 0, usa break
    vida_jugador -= 10
    if vida_jugador <= 0:
        print("Has sido derrotado!")
        break

    print(f"  {enemigo} derrotado! Vida: {vida_jugador}")

print("\n=== FIN DE BATALLA ===")
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('for '))      return {success:false, message:'Usa un bucle for para iterar.'};
    if (!lc.includes('enumerate')) return {success:false, message:'Usa enumerate() para obtener índice y elemento.'};
    if (!lc.includes('range('))    return {success:false, message:'Usa range() dentro de un bucle for anidado.'};
    if (!lc.includes('break'))     return {success:false, message:'Añade un break para detener el bucle en alguna condición.'};
    if (!lc.includes('f"') && !lc.includes("f'"))
      return {success:false, message:'Usa f-strings para mostrar información dinámica.'};
    return {success:true, message:'¡Bucles Python dominados! Puedes iterar cualquier estructura de datos. 🔄'};
  }
},

/* ---- R2 L4 ---- */
{
  id:'r2l4', route:2, number:4, title:'Funciones Python',
  language:'Python', editorLang:'python', difficulty:'medium', xp:75,
  theory:`
<h3>Funciones en Python</h3>
<p>Las funciones son bloques reutilizables de código. En Python son <strong>ciudadanos de primera clase</strong> (se pueden pasar como variables).</p>
<pre>def saludar(nombre: str, formal: bool = False) -> str:
    if formal:
        return f"Buenos días, {nombre}."
    return f"¡Hola, {nombre}!"

# Parámetros por defecto
def crear_personaje(nombre, clase="Guerrero", nivel=1):
    return {"nombre": nombre, "clase": clase, "nivel": nivel}

# *args — múltiples argumentos
def suma(*numeros):
    return sum(numeros)

# **kwargs — argumentos nombrados
def mostrar_stats(**stats):
    for clave, valor in stats.items():
        print(f"  {clave}: {valor}")

# Lambdas (funciones anónimas)
doblar = lambda x: x * 2
ordenar = lambda item: item["nivel"]

# Uso
print(saludar("Zelda"))
print(saludar("Ganon", formal=True))
personaje = crear_personaje("Link", "Arquero")
mostrar_stats(vida=100, mana=50, defensa=30)</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea el sistema de combate de un juego:</p>
<ul>
  <li>Función <code>calcular_dano(ataque, defensa, critico=False)</code></li>
  <li>Función <code>nivel_up(personaje: dict)</code> que modifique el dict</li>
  <li>Función con <code>*args</code> para acumular experiencia</li>
  <li>Una lambda para ordenar personajes por nivel</li>
</ul>
</div>`,
  hint:`Las funciones en Python se definen con <code>def</code>. Los parámetros con valor por defecto van al final. <code>return</code> devuelve el valor. Para type hints: <code>def func(param: tipo) -> tipo_retorno</code>. Las lambdas son <code>lambda params: expresion</code>.`,
  starterCode:`# Sistema de combate Python

def calcular_dano(ataque: int, defensa: int, critico: bool = False) -> int:
    """Calcula el daño infligido en un ataque."""
    base = max(0, ataque - defensa)
    return base * 2 if critico else base

def nivel_up(personaje: dict) -> None:
    """Sube el nivel del personaje y mejora sus stats."""
    personaje["nivel"] += 1
    personaje["vida"] += 20
    print(f"{personaje['nombre']} subio a nivel {personaje['nivel']}!")

# Función con *args
def acumular_exp(*experiencias: int) -> int:
    """Suma toda la experiencia ganada."""
    return sum(experiencias)

# Lambda para ordenar
ordenar_por_nivel = lambda p: p["nivel"]

# Pruebas
print(calcular_dano(50, 20))           # 30
print(calcular_dano(50, 20, True))     # 60

heroe = {"nombre": "Link", "nivel": 5, "vida": 100}
nivel_up(heroe)

exp_total = acumular_exp(100, 250, 75, 300)
print(f"Experiencia total: {exp_total}")

equipo = [
    {"nombre": "Link", "nivel": 10},
    {"nombre": "Zelda", "nivel": 15},
    {"nombre": "Navi", "nivel": 3}
]
equipo_ordenado = sorted(equipo, key=ordenar_por_nivel, reverse=True)
print([p["nombre"] for p in equipo_ordenado])
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('def '))      return {success:false, message:'Define al menos una función con def.'};
    if (!lc.includes('return'))    return {success:false, message:'Al menos una función debe retornar un valor con return.'};
    if (!lc.includes('*'))         return {success:false, message:'Usa *args para aceptar múltiples argumentos.'};
    if (!lc.includes('lambda'))    return {success:false, message:'Crea una lambda para ordenar o transformar datos.'};
    const defCount = (lc.match(/\bdef /g)||[]).length;
    if (defCount < 2)              return {success:false, message:`Solo tienes ${defCount} función. Necesitas al menos 2.`};
    return {success:true, message:'¡Funciones Python perfectas! Tu código es modular y reutilizable. 🔧'};
  }
},

/* ---- R2 L5 ---- */
{
  id:'r2l5', route:2, number:5, title:'Listas y Métodos Python',
  language:'Python', editorLang:'python', difficulty:'medium', xp:75,
  theory:`
<h3>Listas Python</h3>
<p>Las listas son la estructura de datos más usada en Python. Son <strong>mutables, ordenadas y permiten duplicados</strong>.</p>
<pre>inventario = ["espada", "escudo", "pocion"]

# Métodos principales
inventario.append("llave")        # añadir al final
inventario.insert(1, "arco")      # insertar en posición
inventario.remove("escudo")       # eliminar elemento
ultimo = inventario.pop()         # elimina y retorna el último
inventario.sort()                 # ordenar (in-place)
copia = inventario.copy()         # copia superficial

# Acceso y slicing
primero = inventario[0]           # primer elemento
ultimo  = inventario[-1]          # último elemento
mitad   = inventario[1:3]         # slice [inicio:fin]
reversa = inventario[::-1]        # invertida

# List comprehensions (POTENTE)
cuadrados = [x**2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

filtrados = [x for x in cuadrados if x > 5]
# [9, 16, 25]

# Funciones útiles
longitud = len(inventario)
maximo   = max([3, 1, 4, 1, 5])
total    = sum([10, 20, 30])</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Administra el inventario de un RPG:</p>
<ul>
  <li>Lista inicial con 5 items</li>
  <li>Usa <code>append</code>, <code>remove</code>, <code>insert</code></li>
  <li>Usa slicing para obtener los primeros 3 items</li>
  <li>Crea una <strong>list comprehension</strong> que filtre items por una condición</li>
  <li>Muestra el resultado ordenado</li>
</ul>
</div>`,
  hint:`Las list comprehensions tienen la forma <code>[expresion for item in lista if condicion]</code>. El slicing usa <code>lista[inicio:fin:paso]</code> donde el fin es exclusivo. <code>sorted(lista)</code> retorna una nueva lista ordenada, mientras que <code>lista.sort()</code> ordena in-place.`,
  starterCode:`# Gestión de inventario RPG

inventario = ["Espada", "Escudo", "Pocion", "Llave", "Antorcha"]
print("Inventario inicial:", inventario)

# Añadir items
inventario.append("Arco")
inventario.insert(2, "Flecha")

# Eliminar un item
inventario.remove("Antorcha")

print("Inventario actualizado:", inventario)

# Slicing: primeros 3 items
primeros = inventario[:3]
print("Primeros 3:", primeros)

# List comprehension: items que empiezan con mayúscula y tienen más de 4 letras
items_largos = [item for item in inventario if len(item) > 4]
print("Items largos:", items_largos)

# Ordenar y mostrar
inventario_ordenado = sorted(inventario)
print("Ordenado:", inventario_ordenado)

print(f"Total de items: {len(inventario)}")
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('.append('))  return {success:false, message:'Usa .append() para añadir elementos.'};
    if (!lc.includes('.insert('))  return {success:false, message:'Usa .insert() para insertar en una posición específica.'};
    if (!lc.includes('.remove('))  return {success:false, message:'Usa .remove() para eliminar un elemento.'};
    if (!lc.includes('[') || (!lc.includes(':') && !lc.includes('for ')))
      return {success:false, message:'Usa slicing (lista[:3]) y/o list comprehension.'};
    if (!lc.includes(' for '))     return {success:false, message:'Crea una list comprehension: [x for x in lista if ...].'};
    if (!lc.includes('sorted(') && !lc.includes('.sort('))
      return {success:false, message:'Ordena la lista con sorted() o .sort().'};
    return {success:true, message:'¡Listas Python dominadas! La estructura de datos más flexible te pertenece. 📦'};
  }
},

/* ---- R2 L6 ---- */
{
  id:'r2l6', route:2, number:6, title:'Diccionarios Python',
  language:'Python', editorLang:'python', difficulty:'medium', xp:75,
  theory:`
<h3>Diccionarios Python</h3>
<p>Los diccionarios almacenan pares <strong>clave: valor</strong>. Son la estructura de datos más poderosa de Python.</p>
<pre>personaje = {
    "nombre": "Link",
    "vida": 100,
    "mana": 50,
    "inventario": ["espada", "escudo"],
    "stats": {"fuerza": 15, "agilidad": 20}
}

# Acceso
print(personaje["nombre"])           # Link
print(personaje.get("mana", 0))      # 50 (con default)

# Modificar
personaje["vida"] = 80
personaje["oro"] = 500               # añadir clave nueva
del personaje["mana"]               # eliminar

# Métodos
claves  = personaje.keys()
valores = personaje.values()
pares   = personaje.items()

# Iterar
for clave, valor in personaje.items():
    print(f"{clave}: {valor}")

# Dict comprehension
cuadrados = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Merge (Python 3.9+)
base   = {"vida": 100}
extras = {"mana": 50, "oro": 200}
completo = base | extras</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un sistema de configuración de personaje:</p>
<ul>
  <li>Diccionario <code>personaje</code> con al menos 5 claves</li>
  <li>Accede con <code>.get()</code> con valor por defecto</li>
  <li>Modifica y añade claves</li>
  <li>Itera con <code>.items()</code></li>
  <li>Crea un <strong>dict comprehension</strong></li>
</ul>
</div>`,
  hint:`<code>dict.get(clave, default)</code> es más seguro que <code>dict[clave]</code> porque no lanza error si la clave no existe. Para dict comprehension: <code>{clave: valor for item in iterable}</code>. Los diccionarios anidados se acceden encadenando: <code>dic["stats"]["fuerza"]</code>.`,
  starterCode:`# Sistema de personaje con diccionarios

personaje = {
    "nombre": "Geralt",
    "clase": "Brujo",
    "nivel": 20,
    "vida": 150,
    "inventario": ["Plata", "Acero", "Pocion"]
}

# Acceso seguro con .get()
oro = personaje.get("oro", 0)
print(f"Oro: {oro}")

# Modificar y añadir
personaje["nivel"] += 1
personaje["exp"] = 1500

# Mostrar todos los datos
print("\n=== HOJA DE PERSONAJE ===")
for clave, valor in personaje.items():
    print(f"  {clave}: {valor}")

# Dict comprehension: multiplicar todos los stats numericos por 1.1
stats_base = {"fuerza": 10, "agilidad": 8, "inteligencia": 15}
stats_mejorados = {stat: round(val * 1.1) for stat, val in stats_base.items()}
print("\nStats mejorados:", stats_mejorados)
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('{'))         return {success:false, message:'Define un diccionario con llaves {}.'};
    if (!lc.includes('.get('))     return {success:false, message:'Usa .get(clave, default) para acceso seguro.'};
    if (!lc.includes('.items('))   return {success:false, message:'Itera el diccionario con .items().'};
    if (!lc.includes('for ') || !lc.includes(' in '))
      return {success:false, message:'Usa un bucle for ... in ... para iterar.'};
    if (!lc.includes(': ') || !lc.includes(' for '))
      return {success:false, message:'Crea un dict comprehension: {clave: valor for ...}.'};
    return {success:true, message:'¡Diccionarios dominados! Son el JSON de Python. 🗝️'};
  }
},

/* ---- R2 L7 ---- */
{
  id:'r2l7', route:2, number:7, title:'C#: Tu Primer Programa',
  language:'C#', editorLang:'csharp', difficulty:'medium', xp:75,
  theory:`
<h3>C# — El Lenguaje de Unity y .NET</h3>
<p>C# es fuertemente tipado, orientado a objetos y es el lenguaje de Unity para videojuegos.</p>
<pre>using System;
using System.Collections.Generic;

namespace MiJuego {
    class Program {
        static void Main(string[] args) {
            // Tipos básicos
            int    nivel   = 1;
            float  velocidad = 5.5f;
            double pi      = 3.14159;
            bool   activo  = true;
            string nombre  = "Link";
            char   inicial = 'L';

            // Console output
            Console.WriteLine($"Personaje: {nombre}, Nivel: {nivel}");
            Console.WriteLine("Activo: " + activo);

            // Lectura de consola
            // string entrada = Console.ReadLine();

            // Conversión
            int numero = int.Parse("42");
            string texto = nivel.ToString();
        }
    }
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe un programa C# que:</p>
<ul>
  <li>Use <code>using System;</code></li>
  <li>Declare variables de tipos: <code>int</code>, <code>string</code>, <code>bool</code>, <code>float</code></li>
  <li>Use <code>Console.WriteLine</code> con interpolación de strings</li>
  <li>Tenga una estructura de clase con <code>Main</code></li>
</ul>
</div>`,
  hint:`En C# los tipos van antes del nombre de la variable: <code>int vida = 100;</code>. Para strings interpolados: <code>$"Hola {nombre}"</code>. Los floats necesitan la <code>f</code> al final: <code>float vel = 5.5f;</code>. Cada sentencia termina con <code>;</code>.`,
  starterCode:`using System;

namespace MiJuego {
    class Personaje {
        static void Main(string[] args) {
            // Declara variables con sus tipos correctos
            string nombre = "Link";
            int nivel = 1;
            float vida = 100.0f;
            bool esHeroe = true;

            // Muestra información con Console.WriteLine e interpolación
            Console.WriteLine($"=== PERSONAJE ===");
            Console.WriteLine($"Nombre: {nombre}");
            Console.WriteLine($"Nivel: {nivel}");
            Console.WriteLine($"Vida: {vida}");
            Console.WriteLine($"Es heroe: {esHeroe}");

            // Operaciones básicas
            int dano = 25;
            vida -= dano;
            Console.WriteLine($"Vida tras recibir dano: {vida}");
        }
    }
}`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('using system'))        return {success:false, message:'Añade using System; al inicio.'};
    if (!lc.includes('class '))              return {success:false, message:'Define una clase con la palabra clave class.'};
    if (!lc.includes('static void main') && !lc.includes('static void main'))
      return {success:false, message:'Añade el método Main: static void Main(string[] args).'};
    if (!lc.includes('console.writeline'))   return {success:false, message:'Usa Console.WriteLine() para mostrar datos.'};
    if (!lc.includes('int '))                return {success:false, message:'Declara una variable int.'};
    if (!lc.includes('string '))             return {success:false, message:'Declara una variable string.'};
    if (!lc.includes('bool '))               return {success:false, message:'Declara una variable bool.'};
    return {success:true, message:'¡C# activado! Unity y el ecosistema .NET ya están a tu alcance. 🎮'};
  }
},

/* ---- R2 L8 ---- */
{
  id:'r2l8', route:2, number:8, title:'Clases en C#',
  language:'C#', editorLang:'csharp', difficulty:'medium', xp:75,
  theory:`
<h3>Clases en C#</h3>
<p>C# tiene un sistema de OOP muy robusto con <strong>propiedades con getters/setters automáticos</strong>.</p>
<pre>public class Personaje {
    // Propiedades automáticas
    public string Nombre { get; set; }
    public int Vida { get; private set; }

    // Campo privado
    private int _nivel;

    // Constructor
    public Personaje(string nombre, int vidaInicial = 100) {
        Nombre = nombre;
        Vida = vidaInicial;
        _nivel = 1;
    }

    // Método público
    public void RecibirDano(int cantidad) {
        Vida = Math.Max(0, Vida - cantidad);
        Console.WriteLine($"{Nombre} recibe {cantidad} de daño. Vida: {Vida}");
    }

    // Propiedad calculada (solo lectura)
    public bool EstaVivo => Vida > 0;

    // Override de ToString
    public override string ToString() {
        return $"[{Nombre}] Vida:{Vida} Nivel:{_nivel}";
    }
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea una clase <code>Arma</code> con:</p>
<ul>
  <li>Propiedades: <code>Nombre</code>, <code>Dano</code>, <code>Durabilidad</code></li>
  <li>Constructor que inicialice las propiedades</li>
  <li>Método <code>Usar()</code> que reduzca la durabilidad</li>
  <li>Propiedad calculada <code>EstaRota</code> (bool)</li>
  <li>Override de <code>ToString()</code></li>
</ul>
</div>`,
  hint:`Las propiedades automáticas de C# son increíbles: <code>public string Nombre { get; set; }</code>. Para hacer una propiedad de solo lectura desde fuera: <code>{ get; private set; }</code>. Las propiedades calculadas de solo lectura usan la sintaxis flecha: <code>public bool EstaRota => Durabilidad <= 0;</code>.`,
  starterCode:`using System;

public class Arma {
    // Propiedades automáticas
    public string Nombre { get; set; }
    public int Dano { get; private set; }
    public int Durabilidad { get; private set; }

    // Constructor
    public Arma(string nombre, int dano, int durabilidad = 100) {
        Nombre = nombre;
        Dano = dano;
        Durabilidad = durabilidad;
    }

    // Método Usar
    public void Usar() {
        if (EstaRota) {
            Console.WriteLine($"{Nombre} esta rota!");
            return;
        }
        Durabilidad -= 10;
        Console.WriteLine($"Usaste {Nombre}. Durabilidad: {Durabilidad}%");
    }

    // Propiedad calculada
    public bool EstaRota => Durabilidad <= 0;

    // ToString
    public override string ToString() {
        return $"{Nombre} | Dano: {Dano} | Durabilidad: {Durabilidad}%";
    }
}

// Test
class Program {
    static void Main() {
        var espada = new Arma("Espada Maestra", 45);
        Console.WriteLine(espada);
        espada.Usar();
    }
}`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('class '))          return {success:false, message:'Define una clase.'};
    if (!lc.includes('{ get;') && !lc.includes('{get;'))
      return {success:false, message:'Usa propiedades automáticas: { get; set; }'};
    if (!lc.includes('constructor') && !code.includes('public Arma(') && !lc.includes('public personaje(') && !code.match(/public \w+\s*\(/))
      return {success:false, message:'Añade un constructor a la clase.'};
    if (!lc.includes('public void ') && !lc.includes('public int ') && !lc.includes('public bool ') && !lc.includes('public string '))
      return {success:false, message:'Añade métodos o propiedades públicas.'};
    if (!lc.includes('=>'))              return {success:false, message:'Usa una propiedad calculada con =>: public bool EstaRota => Durabilidad <= 0;'};
    if (!lc.includes('tostring'))        return {success:false, message:'Override el método ToString().'};
    return {success:true, message:'¡Clases C# dominadas! Unity ya espera tus scripts. 🏰'};
  }
},

/* ---- R2 L9 ---- */
{
  id:'r2l9', route:2, number:9, title:'Métodos y Propiedades C#',
  language:'C#', editorLang:'csharp', difficulty:'medium', xp:75,
  theory:`
<h3>Métodos Avanzados en C#</h3>
<pre>public class Inventario {
    private List&lt;string&gt; _items = new List&lt;string&gt;();
    public int Capacidad { get; }

    // Propiedad con lógica
    public int Cantidad => _items.Count;
    public bool EstaLleno => Cantidad >= Capacidad;

    // Métodos con diferentes firmas
    public bool AgregarItem(string item) {
        if (EstaLleno) return false;
        _items.Add(item);
        return true;
    }

    // Método estático (de clase, no de instancia)
    public static Inventario CrearBasico() {
        return new Inventario(10);
    }

    // Sobrecarga de métodos
    public void Mostrar() => Mostrar("Todos los items:");
    public void Mostrar(string titulo) {
        Console.WriteLine(titulo);
        foreach (var item in _items) {
            Console.WriteLine($"  - {item}");
        }
    }
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea una clase <code>Mazmorra</code> con:</p>
<ul>
  <li>Lista de <code>List&lt;string&gt; enemigos</code></li>
  <li>Propiedad calculada <code>EstaLimpia</code></li>
  <li>Método <code>EliminarEnemigo(string nombre)</code></li>
  <li>Método estático <code>CrearMazmorra(string nombre)</code></li>
  <li>Sobrecarga de método <code>Describir()</code></li>
</ul>
</div>`,
  hint:`<code>List&lt;T&gt;</code> en C# es el equivalente de la lista de Python. Usa <code>new List&lt;string&gt;()</code> para crear una. <code>list.Remove(item)</code> elimina el primero que encuentra. Los métodos estáticos pertenecen a la clase, no a instancias: <code>static TipoRetorno NombreMetodo()</code>.`,
  starterCode:`using System;
using System.Collections.Generic;

public class Mazmorra {
    public string Nombre { get; }
    private List<string> _enemigos;

    public Mazmorra(string nombre, List<string> enemigos) {
        Nombre = nombre;
        _enemigos = new List<string>(enemigos);
    }

    // Propiedad calculada
    public bool EstaLimpia => _enemigos.Count == 0;

    // Eliminar enemigo
    public bool EliminarEnemigo(string nombre) {
        bool eliminado = _enemigos.Remove(nombre);
        if (eliminado)
            Console.WriteLine($"{nombre} eliminado!");
        return eliminado;
    }

    // Método estático factory
    public static Mazmorra CrearMazmorra(string nombre) {
        return new Mazmorra(nombre, new List<string> { "Slime", "Goblin", "Boss" });
    }

    // Sobrecarga
    public void Describir() => Describir("=== MAZMORRA ===");
    public void Describir(string titulo) {
        Console.WriteLine(titulo);
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Enemigos: {_enemigos.Count}");
        Console.WriteLine($"Limpia: {EstaLimpia}");
    }
}

class Program {
    static void Main() {
        var maz = Mazmorra.CrearMazmorra("Cueva del Dragon");
        maz.Describir();
        maz.EliminarEnemigo("Slime");
        maz.Describir("--- Actualizado ---");
    }
}`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('list<'))            return {success:false, message:'Usa List<string> para la lista de enemigos.'};
    if (!lc.includes('=>') )              return {success:false, message:'Usa => para propiedades calculadas.'};
    if (!lc.includes('static '))          return {success:false, message:'Añade un método estático con static.'};
    if (!code.includes('.Remove(') && !code.includes('.remove('))
      return {success:false, message:'Usa .Remove() para eliminar de la lista.'};
    const voidCount = (lc.match(/\bvoid \w+\(/g)||[]).length;
    if (voidCount < 2)                    return {success:false, message:'Necesitas al menos 2 métodos (sobrecarga) con el mismo nombre.'};
    return {success:true, message:'¡Métodos C# avanzados dominados! Tu código es modular y profesional. ⚔️'};
  }
},

/* ---- R2 L10 ---- */
{
  id:'r2l10', route:2, number:10, title:'Recursión Python',
  language:'Python', editorLang:'python', difficulty:'hard', xp:110,
  theory:`
<h3>Recursión — Funciones que se llaman a sí mismas</h3>
<p>Una función recursiva se llama a sí misma con datos más simples hasta llegar al <strong>caso base</strong>.</p>
<pre>def factorial(n: int) -> int:
    # CASO BASE: sin él, loop infinito!
    if n <= 1:
        return 1
    # CASO RECURSIVO
    return n * factorial(n - 1)

# Fibonacci con memoización
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Torres de Hanói
def hanoi(n: int, origen: str, destino: str, aux: str) -> None:
    if n == 1:
        print(f"Mover disco 1 de {origen} a {destino}")
        return
    hanoi(n-1, origen, aux, destino)
    print(f"Mover disco {n} de {origen} a {destino}")
    hanoi(n-1, aux, destino, origen)

# Búsqueda en árbol (recursivo)
def buscar(arbol: dict, objetivo: str) -> bool:
    if arbol is None: return False
    if arbol["valor"] == objetivo: return True
    return buscar(arbol.get("izq"), objetivo) or \
           buscar(arbol.get("der"), objetivo)</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Implementa dos algoritmos recursivos:</p>
<ul>
  <li><code>factorial(n)</code> — n! con su caso base</li>
  <li><code>fibonacci(n)</code> — Secuencia de Fibonacci</li>
  <li>Verifica que ambos tengan un caso base claro</li>
  <li>Prueba con: factorial(5) == 120, fibonacci(8) == 21</li>
</ul>
</div>`,
  hint:`La clave de la recursión es el <strong>caso base</strong>: la condición que detiene las llamadas recursivas. Sin él, el programa entra en loop infinito. Para factorial: el caso base es <code>if n <= 1: return 1</code>. Para fibonacci: los casos base son <code>if n <= 1: return n</code>.`,
  starterCode:`# Recursión Python

def factorial(n: int) -> int:
    """Calcula n! recursivamente."""
    # Caso base
    if n <= 1:
        return 1
    # Caso recursivo
    return n * factorial(n - 1)

def fibonacci(n: int) -> int:
    """Retorna el n-esimo numero de Fibonacci."""
    # Caso base
    if n <= 1:
        return n
    # Caso recursivo
    return fibonacci(n - 1) + fibonacci(n - 2)

def sumar_lista(lst: list) -> int:
    """Suma una lista recursivamente (sin sum())."""
    if len(lst) == 0:
        return 0
    return lst[0] + sumar_lista(lst[1:])

# Pruebas
print(f"5! = {factorial(5)}")         # 120
print(f"10! = {factorial(10)}")       # 3628800

for i in range(10):
    print(f"fib({i}) = {fibonacci(i)}", end="  ")
print()

print(f"Suma [1..5] = {sumar_lista([1,2,3,4,5])}")  # 15
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('def factorial'))    return {success:false, message:'Implementa la función factorial.'};
    if (!lc.includes('def fibonacci'))    return {success:false, message:'Implementa la función fibonacci.'};
    if (!lc.includes('return 1') && !lc.includes('return n'))
      return {success:false, message:'Falta el caso base en alguna función.'};
    // Check if function calls itself
    if (!code.includes('factorial(n') && !code.includes('factorial(n-') && !code.includes('factorial(n -'))
      return {success:false, message:'La función factorial debe llamarse a sí misma (recursión).'};
    if (!code.includes('fibonacci(n') && !code.includes('fibonacci(n-'))
      return {success:false, message:'La función fibonacci debe llamarse a sí misma (recursión).'};
    return {success:true, message:'¡Recursión dominada! Las funciones que se llaman a sí mismas son mágicas. 🌀'};
  }
},

/* ---- R2 L11 ---- */
{
  id:'r2l11', route:2, number:11, title:'OOP Completo Python',
  language:'Python', editorLang:'python', difficulty:'hard', xp:110,
  theory:`
<h3>OOP en Python: El Cuarteto Completo</h3>
<p>Los 4 pilares: <strong>Encapsulamiento, Herencia, Polimorfismo, Abstracción</strong></p>
<pre>from abc import ABC, abstractmethod

class Entidad(ABC):
    """Clase base abstracta"""
    def __init__(self, nombre: str, vida: int):
        self._nombre = nombre     # protegido
        self.__vida = vida         # privado
        self._nivel = 1

    @property
    def nombre(self) -> str:
        return self._nombre

    @property
    def vida(self) -> int:
        return self.__vida

    @vida.setter
    def vida(self, valor: int) -> None:
        self.__vida = max(0, valor)

    @abstractmethod
    def atacar(self) -> int:
        """Método abstracto que cada subclase implementa"""
        pass

    def __str__(self) -> str:
        return f"{self._nombre} [{self.__vida}hp]"

class Heroe(Entidad):
    def __init__(self, nombre: str, clase: str):
        super().__init__(nombre, vida=100)
        self.clase = clase
        self.__exp = 0

    def atacar(self) -> int:
        return self._nivel * 10

    def ganar_exp(self, puntos: int) -> None:
        self.__exp += puntos
        if self.__exp >= 100:
            self._nivel += 1
            self.__exp = 0

class Enemigo(Entidad):
    def atacar(self) -> int:
        return 5 * self._nivel</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea una jerarquía de clases para un RPG:</p>
<ul>
  <li>Clase abstracta <code>Personaje</code> con <code>@abstractmethod atacar()</code></li>
  <li>Subclases <code>Mago</code> y <code>Arquero</code> que implementen <code>atacar()</code></li>
  <li>Propiedades con <code>@property</code> y setters</li>
  <li>Herencia correcta con <code>super().__init__()</code></li>
</ul>
</div>`,
  hint:`Para crear una clase abstracta: <code>from abc import ABC, abstractmethod</code> y la clase hereda de <code>ABC</code>. Los métodos abstractos usan el decorador <code>@abstractmethod</code>. Las propiedades usan <code>@property</code> para el getter y <code>@nombre_propiedad.setter</code> para el setter.`,
  starterCode:`from abc import ABC, abstractmethod

class Personaje(ABC):
    def __init__(self, nombre: str, vida: int = 100):
        self._nombre = nombre
        self.__vida = vida
        self._nivel = 1

    @property
    def nombre(self) -> str:
        return self._nombre

    @property
    def vida(self) -> int:
        return self.__vida

    @vida.setter
    def vida(self, valor: int) -> None:
        self.__vida = max(0, min(200, valor))

    @abstractmethod
    def atacar(self) -> int:
        pass

    def __str__(self) -> str:
        return f"{self._nombre} | Vida: {self.__vida} | Nivel: {self._nivel}"


class Mago(Personaje):
    def __init__(self, nombre: str, mana: int = 100):
        super().__init__(nombre, vida=80)
        self.__mana = mana

    def atacar(self) -> int:
        if self.__mana >= 10:
            self.__mana -= 10
            return self._nivel * 25  # Magia poderosa
        return self._nivel * 5  # Ataque basico sin mana

class Arquero(Personaje):
    def __init__(self, nombre: str, flechas: int = 20):
        super().__init__(nombre, vida=90)
        self.__flechas = flechas

    def atacar(self) -> int:
        if self.__flechas > 0:
            self.__flechas -= 1
            return self._nivel * 15
        return self._nivel * 5

# Polimorfismo
equipo = [Mago("Gandalf"), Arquero("Legolas")]
for personaje in equipo:
    print(f"{personaje} -> Dano: {personaje.atacar()}")
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('from abc import') && !lc.includes('import abc'))
      return {success:false, message:'Importa ABC: from abc import ABC, abstractmethod.'};
    if (!lc.includes('(abc)') && !lc.includes(', abc)') && !lc.includes('(abc,'))
      return {success:false, message:'La clase base debe heredar de ABC.'};
    if (!lc.includes('@abstractmethod'))
      return {success:false, message:'Usa @abstractmethod para declarar métodos abstractos.'};
    if (!lc.includes('@property'))
      return {success:false, message:'Usa @property para crear propiedades con getter.'};
    if (!lc.includes('super().__init__'))
      return {success:false, message:'Las subclases deben llamar super().__init__() en su constructor.'};
    if ((lc.match(/\bclass \w+/g)||[]).length < 3)
      return {success:false, message:'Necesitas al menos 3 clases: 1 base + 2 subclases.'};
    return {success:true, message:'¡OOP Python completo! Los 4 pilares del desarrollo orientado a objetos son tuyos. 🏛️'};
  }
},

/* ---- R2 L12 ---- */
{
  id:'r2l12', route:2, number:12, title:'Punteros en C++',
  language:'C++', editorLang:'cpp', difficulty:'hard', xp:120,
  theory:`
<h3>Punteros C++ — El Corazón de la Memoria</h3>
<p>Un puntero almacena la <strong>dirección de memoria</strong> de otro dato. Son la base del rendimiento en C++.</p>
<pre>#include &lt;iostream&gt;
using namespace std;

int main() {
    int vida = 100;

    // & = "dirección de" (address-of)
    int* ptr = &vida;     // ptr almacena la dirección de vida

    // * = "valor en" (dereference)
    cout &lt;&lt; "Valor: "     &lt;&lt; *ptr  &lt;&lt; endl;  // 100
    cout &lt;&lt; "Direccion: " &lt;&lt; ptr   &lt;&lt; endl;  // 0x7ffd...

    // Modificar a través del puntero
    *ptr = 80;            // vida ahora es 80
    cout &lt;&lt; vida &lt;&lt; endl; // 80

    // Puntero a puntero
    int** pptr = &ptr;

    // Aritmética de punteros
    int arr[] = {10, 20, 30, 40};
    int* p = arr;
    p++;                  // avanza al siguiente elemento
    cout &lt;&lt; *p &lt;&lt; endl;  // 20

    // Puntero nulo
    int* nulo = nullptr;

    return 0;
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Demuestra el manejo de punteros:</p>
<ul>
  <li>Declara una variable y un puntero a ella (<code>int* ptr = &var</code>)</li>
  <li>Modifica la variable a través del puntero con <code>*ptr</code></li>
  <li>Usa aritmética de punteros en un array</li>
  <li>Declara un <code>nullptr</code></li>
  <li>Muestra con <code>cout</code> el valor y la dirección</li>
</ul>
</div>`,
  hint:`El operador <code>&</code> obtiene la dirección de una variable. El operador <code>*</code> tiene dos usos: al declarar un puntero (<code>int* ptr</code>) y al desreferenciar (<code>*ptr</code> = acceder al valor). Nunca desreferences un <code>nullptr</code> — causará un crash.`,
  starterCode:`#include <iostream>
using namespace std;

int main() {
    // Variable normal
    int vida = 100;

    // Puntero que apunta a vida
    int* ptr = &vida;

    // Muestra valor y dirección
    cout << "Valor de vida: " << vida << endl;
    cout << "Direccion de vida: " << ptr << endl;
    cout << "Valor via puntero: " << *ptr << endl;

    // Modifica via puntero
    *ptr = 75;
    cout << "Vida tras modificar via puntero: " << vida << endl;

    // Aritmética de punteros en un array
    int stats[] = {10, 20, 30, 40, 50};
    int* pStats = stats;

    cout << "Primer stat: " << *pStats << endl;
    pStats++;
    cout << "Segundo stat: " << *pStats << endl;

    // Puntero nulo
    int* pNulo = nullptr;
    if (pNulo == nullptr) {
        cout << "Puntero nulo detectado, no se dereferencia!" << endl;
    }

    return 0;
}`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('int*') && !lc.includes('int *'))
      return {success:false, message:'Declara un puntero: int* ptr;'};
    if (!lc.includes('&') )
      return {success:false, message:'Usa & para obtener la dirección de una variable.'};
    if (!lc.includes('*ptr') && !lc.includes('* ptr') && !code.match(/\*p\w+/))
      return {success:false, message:'Desreferencia el puntero con *ptr para leer/modificar el valor.'};
    if (!lc.includes('nullptr'))
      return {success:false, message:'Declara un puntero nulo con nullptr.'};
    if (!lc.includes('cout'))
      return {success:false, message:'Usa cout << para mostrar valores.'};
    return {success:true, message:'¡Punteros C++ dominados! Ahora entiendes cómo los programas manejan la memoria. 🎯'};
  }
},

/* ---- R2 L13 ---- */
{
  id:'r2l13', route:2, number:13, title:'STL: Vectores y Algoritmos C++',
  language:'C++', editorLang:'cpp', difficulty:'hard', xp:120,
  theory:`
<h3>STL — Standard Template Library</h3>
<p>La STL de C++ ofrece contenedores y algoritmos de alto rendimiento listos para usar.</p>
<pre>#include &lt;vector&gt;
#include &lt;algorithm&gt;
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Vector (array dinámico)
    vector&lt;int&gt; numeros = {5, 2, 8, 1, 9};

    numeros.push_back(3);      // añadir al final
    numeros.pop_back();        // quitar del final
    numeros.insert(numeros.begin(), 0);  // insertar al inicio
    numeros.erase(numeros.begin() + 2);  // eliminar por posición

    // Iteradores
    for (auto it = numeros.begin(); it != numeros.end(); ++it) {
        cout &lt;&lt; *it &lt;&lt; " ";
    }

    // Range-based for (moderno)
    for (const auto& n : numeros) {
        cout &lt;&lt; n &lt;&lt; " ";
    }

    // Algoritmos
    sort(numeros.begin(), numeros.end());         // ascendente
    sort(numeros.begin(), numeros.end(), greater&lt;int&gt;()); // desc
    auto pos = find(numeros.begin(), numeros.end(), 5);
    int contador = count(numeros.begin(), numeros.end(), 5);
    int suma = accumulate(numeros.begin(), numeros.end(), 0);
    return 0;
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Gestiona el inventario de un juego con STL:</p>
<ul>
  <li><code>vector&lt;string&gt;</code> con items del inventario</li>
  <li>Usa <code>push_back</code>, <code>pop_back</code>, <code>erase</code></li>
  <li>Ordena con <code>sort()</code></li>
  <li>Busca con <code>find()</code></li>
  <li>Itera con range-based for</li>
</ul>
</div>`,
  hint:`Para usar <code>vector</code> necesitas <code>#include &lt;vector&gt;</code>. Para algoritmos como <code>sort</code> y <code>find</code>: <code>#include &lt;algorithm&gt;</code>. El range-based for es: <code>for (const auto& item : vector) { }</code>. <code>auto</code> infiere el tipo automáticamente.`,
  starterCode:`#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

int main() {
    // Inventario como vector de strings
    vector<string> inventario = {"Espada", "Escudo", "Pocion"};

    // Añadir items
    inventario.push_back("Arco");
    inventario.push_back("Llave");

    // Mostrar inventario inicial
    cout << "Inventario inicial:" << endl;
    for (const auto& item : inventario) {
        cout << "  - " << item << endl;
    }

    // Quitar el último item
    inventario.pop_back();

    // Buscar un item
    auto it = find(inventario.begin(), inventario.end(), "Escudo");
    if (it != inventario.end()) {
        cout << "Escudo encontrado en posicion: " << (it - inventario.begin()) << endl;
        inventario.erase(it);  // Eliminar el escudo
    }

    // Ordenar alfabeticamente
    sort(inventario.begin(), inventario.end());

    cout << "\nInventario ordenado:" << endl;
    for (size_t i = 0; i < inventario.size(); i++) {
        cout << "  " << (i+1) << ". " << inventario[i] << endl;
    }

    cout << "Total items: " << inventario.size() << endl;
    return 0;
}`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('vector<'))    return {success:false, message:'Usa vector<string> o similar para el inventario.'};
    if (!lc.includes('.push_back')) return {success:false, message:'Usa .push_back() para añadir elementos.'};
    if (!lc.includes('sort('))      return {success:false, message:'Usa sort() para ordenar el vector.'};
    if (!lc.includes('find('))      return {success:false, message:'Usa find() para buscar un elemento.'};
    if (!lc.includes('for ') || !lc.includes('auto'))
      return {success:false, message:'Usa range-based for con auto: for (const auto& item : vec).'};
    return {success:true, message:'¡STL C++ dominada! Tienes acceso a los contenedores más eficientes del mundo. 🗡️'};
  }
},

/* ---- R2 L14 ---- */
{
  id:'r2l14', route:2, number:14, title:'Lua para Videojuegos',
  language:'Lua', editorLang:'lua', difficulty:'hard', xp:110,
  theory:`
<h3>Lua — El Lenguaje de los Videojuegos</h3>
<p>Lua es el lenguaje de scripting embebido en juegos como <strong>World of Warcraft, Roblox, LÖVE2D</strong> y muchos más.</p>
<pre>-- Variables (sin tipos estáticos)
local nombre = "Link"
local vida = 100
local activo = true

-- Funciones
local function saludar(n)
    return "Hola, " .. n  -- concatenación con ..
end

-- Tablas (listas y diccionarios)
local personaje = {
    nombre = "Zelda",
    vida = 100,
    inventario = {"espada", "escudo", "llave"}
}

-- Acceso
print(personaje.nombre)
print(personaje["vida"])

-- Función como método (OOP con tablas)
function personaje:atacar(objetivo)
    local dano = 25
    objetivo.vida = objetivo.vida - dano
    print(self.nombre .. " ataca por " .. dano)
end

-- Iteración
for i, item in ipairs(personaje.inventario) do
    print(i, item)
end

for clave, valor in pairs(personaje) do
    print(clave, valor)
end</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un sistema de juego en Lua:</p>
<ul>
  <li>Tabla <code>Jugador</code> con nombre, vida, nivel</li>
  <li>Función <code>Jugador:subirNivel()</code> como método</li>
  <li>Loop <code>for</code> con <code>ipairs</code></li>
  <li>Concatenación con <code>..</code></li>
  <li>Usa <code>local</code> para variables locales</li>
</ul>
</div>`,
  hint:`En Lua las variables locales usan <code>local</code>. La concatenación de strings es con <code>..</code> (dos puntos). Las tablas son todo a la vez: arrays y diccionarios. Para métodos, el colon <code>:</code> es azúcar sintáctica que pasa <code>self</code> automáticamente. <code>ipairs</code> itera arrays, <code>pairs</code> itera tablas.`,
  starterCode:`-- Sistema de juego en Lua

-- Tabla del jugador (como objeto)
local Jugador = {
    nombre = "Link",
    vida = 100,
    nivel = 1,
    exp = 0,
    inventario = {"Espada", "Escudo", "Pocion"}
}

-- Método para subir de nivel
function Jugador:subirNivel()
    self.nivel = self.nivel + 1
    self.vida = self.vida + 20
    self.exp = 0
    print(self.nombre .. " subio al nivel " .. self.nivel .. "!")
end

-- Método para ganar experiencia
function Jugador:ganarExp(cantidad)
    self.exp = self.exp + cantidad
    print("+" .. cantidad .. " EXP")
    if self.exp >= 100 then
        self:subirNivel()
    end
end

-- Mostrar inventario con ipairs
print("=== INVENTARIO ===")
for i, item in ipairs(Jugador.inventario) do
    print(i .. ". " .. item)
end

-- Probar el sistema
print("\n=== INICIO DE JUEGO ===")
print("Jugador: " .. Jugador.nombre)
Jugador:ganarExp(60)
Jugador:ganarExp(50)  -- sube de nivel aqui
print("Vida actual: " .. Jugador.vida)
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('local '))    return {success:false, message:'Usa local para declarar variables locales en Lua.'};
    if (!lc.includes('function ')) return {success:false, message:'Define al menos una función.'};
    if (!lc.includes('end'))       return {success:false, message:'Las funciones y bloques en Lua terminan con end.'};
    if (!lc.includes('ipairs') && !lc.includes('pairs'))
      return {success:false, message:'Itera con ipairs (arrays) o pairs (tablas).'};
    if (!code.includes('..'))      return {success:false, message:'Usa .. para concatenar strings en Lua.'};
    if (!lc.includes('self') && !code.includes(':'))
      return {success:false, message:'Usa métodos con : para pasar self automáticamente.'};
    return {success:true, message:'¡Lua dominado! Ahora puedes scripting en Roblox, WoW y LÖVE2D. 🎮'};
  }
},

/* ---- R2 L15 ---- */
{
  id:'r2l15', route:2, number:15, title:'Búsqueda Binaria: Algoritmo Clásico',
  language:'Python', editorLang:'python', difficulty:'hard', xp:130,
  theory:`
<h3>Búsqueda Binaria — O(log n)</h3>
<p>Divide el problema a la mitad en cada paso. En un millón de elementos, solo necesita <strong>20 pasos</strong>.</p>
<pre>def busqueda_binaria(arr: list, objetivo: int) -> int:
    """
    Retorna el índice del objetivo o -1 si no existe.
    REQUIERE: lista ordenada.
    Complejidad: O(log n)
    """
    izquierda, derecha = 0, len(arr) - 1

    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2  # división entera

        if arr[medio] == objetivo:
            return medio          # encontrado!
        elif arr[medio] < objetivo:
            izquierda = medio + 1  # busca a la derecha
        else:
            derecha = medio - 1    # busca a la izquierda

    return -1  # no encontrado

# Versión recursiva
def busqueda_binaria_rec(arr, objetivo, izq=0, der=None):
    if der is None: der = len(arr) - 1
    if izq > der: return -1

    medio = (izq + der) // 2
    if arr[medio] == objetivo: return medio
    if arr[medio] < objetivo:
        return busqueda_binaria_rec(arr, objetivo, medio+1, der)
    return busqueda_binaria_rec(arr, objetivo, izq, medio-1)</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Implementa la búsqueda binaria completa:</p>
<ul>
  <li>Función iterativa con <code>while izquierda <= derecha</code></li>
  <li>Cálculo correcto del <code>medio</code></li>
  <li>Los tres casos: encontrado, buscar derecha, buscar izquierda</li>
  <li>Retorna el índice o -1</li>
  <li>Prueba con al menos 5 casos (existente y no existente)</li>
</ul>
</div>`,
  hint:`La búsqueda binaria SOLO funciona en listas <strong>ordenadas</strong>. El truco es calcular el elemento del medio y descartar la mitad que NO puede contener el objetivo. El cálculo del medio: <code>medio = (izquierda + derecha) // 2</code>. Si el objetivo es mayor al medio, el número está en la mitad derecha.`,
  starterCode:`# Búsqueda Binaria

def busqueda_binaria(arr: list, objetivo: int) -> int:
    """
    Busca 'objetivo' en la lista ordenada 'arr'.
    Retorna el indice si lo encuentra, -1 si no.
    """
    izquierda = 0
    derecha = len(arr) - 1

    while izquierda <= derecha:
        # Calcula el indice del medio
        medio = (izquierda + derecha) // 2

        if arr[medio] == objetivo:
            return medio          # Encontrado!
        elif arr[medio] < objetivo:
            izquierda = medio + 1  # Busca en la mitad derecha
        else:
            derecha = medio - 1    # Busca en la mitad izquierda

    return -1  # No encontrado

# === PRUEBAS ===
numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
print("Lista:", numeros)
print()

casos = [1, 7, 15, 21, 4, 100, -5]
for objetivo in casos:
    resultado = busqueda_binaria(numeros, objetivo)
    if resultado != -1:
        print(f"  {objetivo} encontrado en indice {resultado}")
    else:
        print(f"  {objetivo} NO encontrado")

# Medición de eficiencia
import time
lista_grande = list(range(0, 1_000_000, 2))  # 500k numeros pares
inicio = time.time()
idx = busqueda_binaria(lista_grande, 499_998)
print(f"\nBusqueda en 500k elementos: indice {idx}")
print(f"Tiempo: {(time.time()-inicio)*1000:.3f}ms")
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('def busqueda'))    return {success:false, message:'Define la función busqueda_binaria.'};
    if (!lc.includes('while '))          return {success:false, message:'Usa while para el bucle principal.'};
    if (!lc.includes('izquierda') && !lc.includes('left') && !lc.includes('low'))
      return {success:false, message:'Necesitas punteros izquierda y derecha.'};
    if (!lc.includes('// 2'))            return {success:false, message:'Calcula el medio con // 2 (división entera).'};
    if (!lc.includes('return -1') && !lc.includes('return -1'))
      return {success:false, message:'Retorna -1 cuando el elemento no se encuentra.'};
    if (!lc.includes('== objetivo') && !lc.includes('== target') && !lc.includes('== obj'))
      return {success:false, message:'Compara arr[medio] con el objetivo en los tres casos.'};
    return {success:true, message:'¡Búsqueda Binaria implementada! O(log n) — en 1 millón de datos solo 20 pasos. 🚀'};
  }
}

], // end route2

/* ================================================================
   ROUTE 3 — SERVERS & DATA
   ================================================================ */
route3: [

/* ---- R3 L1 ---- */
{
  id:'r3l1', route:3, number:1, title:'Comandos Linux Básicos de Navegación',
  language:'Linux / Bash', editorLang:'bash', difficulty:'easy', xp:50,
  theory:`
<h3>Navegación en Linux</h3>
<p>La terminal de Linux es tu <strong>superpoder</strong>. Con ella controlas servidores sin interfaz gráfica.</p>
<pre># Dónde estás?
pwd                     # print working directory
# /home/usuario

# ¿Qué hay aquí?
ls                      # listar archivos
ls -l                   # con detalles (permisos, tamaño, fecha)
ls -la                  # incluyendo archivos ocultos (empiezan con .)
ls -lh                  # tamaños legibles (KB, MB)

# Moverse
cd /home/usuario        # ir a una ruta absoluta
cd ..                   # subir un nivel
cd ~                    # ir al home
cd -                    # volver al directorio anterior

# Atajos útiles
Tab                     # autocompletar
Ctrl+C                  # cancelar comando
Ctrl+L                  # limpiar pantalla (= clear)
Ctrl+A                  # ir al inicio de la línea
!!                      # repetir último comando</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe los comandos para la siguiente secuencia:</p>
<ul>
  <li>Ver el directorio actual con <code>pwd</code></li>
  <li>Listar archivos con detalles y archivos ocultos (<code>ls -la</code>)</li>
  <li>Ir al directorio home (<code>cd ~</code>)</li>
  <li>Ir a <code>/var/log</code></li>
  <li>Volver al directorio anterior con <code>cd -</code></li>
</ul>
</div>`,
  hint:`En Linux las rutas absolutas empiezan con <code>/</code> (raíz). Las relativas no. <code>~</code> es un alias para tu directorio home (<code>/home/tuusuario</code>). Los comandos pueden combinarse con <code>&&</code>: <code>cd /tmp && ls</code>. Los flags se combinan: <code>-la</code> = <code>-l -a</code>.`,
  starterCode:`#!/bin/bash
# Navegación básica en Linux

# Ver directorio actual
pwd

# Listar todos los archivos con detalles (incluyendo ocultos)
ls -la

# Ir al directorio home
cd ~

# Verificar que cambiamos
pwd

# Ir a /var/log
cd /var/log

# Volver al directorio anterior
cd -

# Ver qué hay en /var/log con tamaños legibles
ls -lh
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('pwd'))        return {success:false, message:'Usa pwd para mostrar el directorio actual.'};
    if (!lc.includes('ls ') && !lc.includes('ls\n'))
      return {success:false, message:'Usa ls para listar archivos.'};
    if (!lc.includes('ls -la') && !lc.includes('ls -al') && !lc.includes('ls -a'))
      return {success:false, message:'Usa ls -la para ver archivos ocultos con detalles.'};
    if (!lc.includes('cd ~') && !lc.includes('cd ~/') && !lc.includes('cd $home'))
      return {success:false, message:'Usa cd ~ para ir al directorio home.'};
    if (!lc.includes('cd -'))       return {success:false, message:'Usa cd - para volver al directorio anterior.'};
    return {success:true, message:'¡Navegación Linux dominada! Ya puedes moverte por cualquier servidor. 🐧'};
  }
},

/* ---- R3 L2 ---- */
{
  id:'r3l2', route:3, number:2, title:'Gestión de Archivos y Directorios Linux',
  language:'Linux / Bash', editorLang:'bash', difficulty:'easy', xp:50,
  theory:`
<h3>Crear y Gestionar Archivos</h3>
<pre># Crear
touch archivo.txt           # crear archivo vacío
mkdir mi_directorio         # crear directorio
mkdir -p a/b/c              # crear estructura de dirs

# Copiar y mover
cp origen.txt destino.txt   # copiar
cp -r carpeta/ backup/      # copiar directorio (-r = recursivo)
mv archivo.txt nuevo.txt    # mover o renombrar
mv carpeta/ /tmp/           # mover directorio

# Eliminar (¡CUIDADO! No hay papelera)
rm archivo.txt              # eliminar archivo
rm -rf carpeta/             # eliminar directorio (fuerza recursivo)
rmdir carpeta/              # solo si está vacío

# Ver contenido
cat archivo.txt             # ver todo el archivo
less archivo.txt            # ver paginado
head -5 archivo.txt         # primeras 5 líneas
tail -10 archivo.txt        # últimas 10 líneas
tail -f /var/log/syslog     # seguir en tiempo real

# Escribir en archivos
echo "Hola Mundo" > archivo.txt     # sobreescribir
echo "Segunda línea" >> archivo.txt # añadir al final</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea la estructura de un proyecto web:</p>
<ul>
  <li><code>mkdir -p proyecto/{css,js,img}</code> — estructura de carpetas</li>
  <li><code>touch</code> para crear archivos (index.html, style.css, app.js)</li>
  <li><code>echo "..."</code> con <code>></code> para escribir en un archivo</li>
  <li><code>cp</code> para hacer un backup</li>
  <li><code>cat</code> para verificar el contenido</li>
</ul>
</div>`,
  hint:`El flag <code>-p</code> en mkdir crea la jerarquía completa sin error. La expansión de llaves <code>{css,js,img}</code> crea múltiples directorios a la vez. <code>></code> sobreescribe el archivo, <code>>></code> añade al final. <code>rm -rf</code> es peligroso — elimina sin confirmación ni papelera.`,
  starterCode:`#!/bin/bash
# Gestión de archivos - Estructura de proyecto web

# Crear estructura de directorios
mkdir -p proyecto/{css,js,img}

# Crear archivos vacíos
touch proyecto/index.html
touch proyecto/css/style.css
touch proyecto/js/app.js

# Escribir contenido inicial en index.html
echo "<!DOCTYPE html>" > proyecto/index.html
echo "<html><head><title>Mi Proyecto</title></head>" >> proyecto/index.html
echo "<body><h1>Hola Mundo</h1></body></html>" >> proyecto/index.html

# Verificar el contenido
cat proyecto/index.html

# Hacer backup del archivo
cp proyecto/index.html proyecto/index.backup.html

# Ver estructura creada
ls -la proyecto/
ls -la proyecto/css/
ls -la proyecto/js/
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('mkdir'))    return {success:false, message:'Usa mkdir para crear directorios.'};
    if (!lc.includes('touch'))    return {success:false, message:'Usa touch para crear archivos vacíos.'};
    if (!lc.includes('echo'))     return {success:false, message:'Usa echo para escribir contenido en archivos.'};
    if (!lc.includes(' > ') && !lc.includes('>>'))
      return {success:false, message:'Usa > (sobreescribir) o >> (añadir) para redirigir echo a un archivo.'};
    if (!lc.includes('cp '))      return {success:false, message:'Usa cp para copiar archivos.'};
    if (!lc.includes('cat ') && !lc.includes('ls '))
      return {success:false, message:'Verifica tu trabajo con cat o ls.'};
    return {success:true, message:'¡Gestión de archivos Linux dominada! Puedes crear cualquier estructura de proyecto. 📁'};
  }
},

/* ---- R3 L3 ---- */
{
  id:'r3l3', route:3, number:3, title:'SELECT SQL: Tu Primera Consulta',
  language:'SQL', editorLang:'sql', difficulty:'easy', xp:50,
  theory:`
<h3>SQL: Lenguaje de los Datos</h3>
<p>SQL (Structured Query Language) permite consultar y manipular bases de datos relacionales.</p>
<pre>-- Seleccionar todas las columnas
SELECT * FROM usuarios;

-- Seleccionar columnas específicas
SELECT nombre, email, edad FROM usuarios;

-- Con alias para las columnas
SELECT
    nombre   AS nombre_completo,
    email    AS correo,
    edad     AS años
FROM usuarios;

-- Limitar resultados
SELECT * FROM productos LIMIT 10;

-- Seleccionar valores únicos
SELECT DISTINCT categoria FROM productos;

-- Ordenar resultados
SELECT * FROM productos
ORDER BY precio DESC;   -- DESC = mayor a menor

SELECT * FROM usuarios
ORDER BY apellido ASC, nombre ASC;  -- múltiple</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe consultas SQL para una tienda en línea:</p>
<ul>
  <li>Selecciona <strong>todos</strong> los productos</li>
  <li>Selecciona solo <code>nombre</code>, <code>precio</code>, <code>stock</code> de productos</li>
  <li>Muestra los 5 productos más baratos</li>
  <li>Lista categorías únicas con <code>DISTINCT</code></li>
</ul>
</div>`,
  hint:`En SQL las palabras clave se escriben en mayúsculas por convención (aunque no es obligatorio). <code>SELECT *</code> selecciona todas las columnas. <code>FROM tabla</code> indica de qué tabla. <code>LIMIT n</code> limita los resultados. <code>ORDER BY columna ASC/DESC</code> ordena.`,
  starterCode:`-- Consultas SQL para tienda online

-- 1. Seleccionar TODOS los productos
SELECT * FROM productos;

-- 2. Seleccionar solo nombre, precio y stock
SELECT nombre, precio, stock
FROM productos;

-- 3. Los 5 productos más baratos (ORDER BY + LIMIT)
SELECT nombre, precio
FROM productos
ORDER BY precio ASC
LIMIT 5;

-- 4. Categorías únicas (sin duplicados)
SELECT DISTINCT categoria
FROM productos
ORDER BY categoria ASC;

-- 5. Extra: contar cuántos productos hay
SELECT COUNT(*) AS total_productos
FROM productos;
`,
  validate(code) {
    const uc = code.toUpperCase();
    if (!uc.includes('SELECT'))   return {success:false, message:'Usa SELECT para consultar datos.'};
    if (!uc.includes('FROM'))     return {success:false, message:'Añade FROM para indicar la tabla.'};
    if (!uc.includes('ORDER BY')) return {success:false, message:'Usa ORDER BY para ordenar los resultados.'};
    if (!uc.includes('LIMIT'))    return {success:false, message:'Usa LIMIT para limitar el número de resultados.'};
    if (!uc.includes('DISTINCT')) return {success:false, message:'Usa DISTINCT para obtener valores únicos.'};
    return {success:true, message:'¡Primera consulta SQL ejecutada! Los datos ahora te responden. 📊'};
  }
},

/* ---- R3 L4 ---- */
{
  id:'r3l4', route:3, number:4, title:'Permisos Linux: chmod y chown',
  language:'Linux / Bash', editorLang:'bash', difficulty:'medium', xp:75,
  theory:`
<h3>Permisos Linux</h3>
<p>Cada archivo tiene 3 grupos de permisos: <strong>propietario, grupo, otros</strong>.</p>
<pre>ls -l script.sh
# -rwxr-xr-- 1 usuario grupo 1234 Sep 20 script.sh
#  ||| ||| |||
#  rwx r-x r--
#  propietario | grupo | otros

# r = read (4)
# w = write (2)
# x = execute (1)
# - = sin permiso (0)

# chmod con notación octal (más rápido)
chmod 755 script.sh    # rwxr-xr-x (propietario: 7=rwx, grupo: 5=r-x, otros: 5=r-x)
chmod 644 archivo.txt  # rw-r--r-- (propietario: 6=rw, resto: 4=r)
chmod 600 clave.pem    # rw------- (solo propietario)
chmod 777 publico.sh   # rwxrwxrwx (todos todo — ¡PELIGROSO!)

# chmod con notación simbólica (más legible)
chmod u+x script.sh    # añadir execute al propietario (u=user)
chmod g-w archivo.txt  # quitar write al grupo (g=group)
chmod o+r archivo.txt  # añadir read a otros (o=others)
chmod a+x script.sh    # añadir execute a todos (a=all)

# Recursivo (toda la carpeta)
chmod -R 755 mi_directorio/

# Cambiar propietario
chown usuario:grupo archivo.txt
chown -R www-data:www-data /var/www/
sudo chown root:root /etc/hosts</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Configura los permisos de una aplicación web:</p>
<ul>
  <li>Script ejecutable solo por el propietario: <code>chmod 700</code></li>
  <li>Archivos web legibles por todos: <code>chmod 644</code></li>
  <li>Directorio con todos los permisos para propietario, solo lectura para grupo: <code>chmod 750</code></li>
  <li>Añadir permisos de ejecución con notación simbólica: <code>chmod a+x</code></li>
  <li>Cambiar propietario con <code>chown</code></li>
</ul>
</div>`,
  hint:`El número octal de chmod se calcula sumando: read=4, write=2, execute=1. Así: 7=4+2+1 (todo), 6=4+2 (leer+escribir), 5=4+1 (leer+ejecutar), 4=solo leer. El primer dígito es propietario, el segundo el grupo, el tercero los demás.`,
  starterCode:`#!/bin/bash
# Configuración de permisos para app web

# El script de inicio: solo ejecutable por el propietario
chmod 700 start.sh

# Archivos HTML/CSS/JS: legibles por todos
chmod 644 index.html
chmod 644 style.css

# Directorio de la app: propietario todo, grupo solo leer
chmod 750 /var/www/mi-app/

# Hacer ejecutable para todos (forma simbólica)
chmod a+x deploy.sh

# Solo el propietario puede leer la clave privada
chmod 600 private.key

# Cambiar propietario de los archivos web al usuario nginx
chown www-data:www-data index.html
chown -R www-data:www-data /var/www/mi-app/

# Verificar permisos
ls -la
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('chmod'))     return {success:false, message:'Usa chmod para cambiar permisos.'};
    const chmodCount = (lc.match(/chmod/g)||[]).length;
    if (chmodCount < 3)            return {success:false, message:`Solo tienes ${chmodCount} chmod. Necesitas al menos 3.`};
    if (!lc.includes('chown'))     return {success:false, message:'Usa chown para cambiar el propietario.'};
    if (!code.includes('+x') && !code.match(/chmod \d{3}/))
      return {success:false, message:'Usa tanto notación octal (chmod 755) como simbólica (chmod a+x).'};
    return {success:true, message:'¡Permisos Linux dominados! La seguridad de tu servidor está bajo control. 🔐'};
  }
},

/* ---- R3 L5 ---- */
{
  id:'r3l5', route:3, number:5, title:'Pipes y Redirección Linux',
  language:'Linux / Bash', editorLang:'bash', difficulty:'medium', xp:75,
  theory:`
<h3>El Arte de los Pipes</h3>
<p>Los pipes (<code>|</code>) y la redirección (<code>>, >>, <</code>) hacen de Linux el sistema más poderoso del mundo.</p>
<pre># Pipe | — La salida de uno es la entrada del otro
ls -la | grep ".sh"          # archivos .sh
ps aux | grep nginx          # procesos de nginx
cat log.txt | wc -l          # contar líneas
history | grep "git"         # comandos git usados
cat /etc/passwd | cut -d: -f1 | sort  # usuarios ordenados

# Redirección de salida
ls > lista.txt              # sobreescribir
echo "dato" >> archivo.txt  # añadir al final

# Redirección de entrada
wc -l < documento.txt       # contar líneas de un archivo

# Errores (stderr)
ls /ruta/no/existe 2> errores.txt   # redirigir errores
comando > salida.txt 2>&1           # todo (stdout + stderr)
comando > /dev/null 2>&1            # silenciar todo

# Comandos útiles para pipes
grep "patron" archivo       # filtrar líneas
sort -n                     # ordenar numérico
uniq -c                     # contar duplicados
head -n 20                  # primeras 20 líneas
tail -n 5                   # últimas 5 líneas
wc -l                       # contar líneas
awk '{print $1}'            # imprimir primer campo
sed 's/viejo/nuevo/g'       # reemplazar texto</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un pipeline de análisis de logs:</p>
<ul>
  <li>Usa <code>|</code> (pipe) para encadenar al menos 3 comandos</li>
  <li>Usa <code>grep</code> para filtrar líneas</li>
  <li>Usa <code>></code> o <code>>></code> para guardar resultados</li>
  <li>Usa <code>wc -l</code> para contar resultados</li>
</ul>
</div>`,
  hint:`El pipe <code>|</code> conecta la salida de un comando con la entrada del siguiente. Por ejemplo: <code>cat archivo.log | grep "ERROR" | sort | uniq -c | sort -rn</code> — filtra errores, los cuenta y los ordena por frecuencia. Es increíblemente poderoso.`,
  starterCode:`#!/bin/bash
# Análisis de logs con pipes

# Ver las 10 IPs que más aparecen en el access log
cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -10

# Contar errores 404
cat /var/log/nginx/access.log | grep " 404 " | wc -l > errores_404.txt
cat errores_404.txt

# Extraer líneas de error y guardarlas
cat /var/log/syslog | grep -i "error" | tail -20 > ultimos_errores.txt

# Ver los procesos que más memoria usan
ps aux | sort -k4 -rn | head -5

# Buscar archivos .log modificados en los últimos 7 días
find /var/log -name "*.log" -mtime -7 | wc -l

# Contar palabras únicas en un archivo de texto
cat /etc/hosts | tr ' ' '\n' | sort | uniq | wc -l
`,
  validate(code) {
    if (!code.includes('|'))      return {success:false, message:'Usa el pipe | para encadenar comandos.'};
    const pipeCount = (code.match(/\|/g)||[]).length;
    if (pipeCount < 2)            return {success:false, message:`Solo tienes ${pipeCount} pipe. Encadena al menos 3 comandos.`};
    const lc = code.toLowerCase();
    if (!lc.includes('grep'))     return {success:false, message:'Usa grep para filtrar líneas del output.'};
    if (!code.includes('>'))      return {success:false, message:'Usa > o >> para redirigir el output a un archivo.'};
    if (!lc.includes('wc'))       return {success:false, message:'Usa wc -l para contar líneas.'};
    return {success:true, message:'¡Pipes Linux dominados! Puedes procesar millones de líneas de log con una sola línea. 🔗'};
  }
},

/* ---- R3 L6 ---- */
{
  id:'r3l6', route:3, number:6, title:'WHERE: Filtrando Datos SQL',
  language:'SQL', editorLang:'sql', difficulty:'medium', xp:75,
  theory:`
<h3>Cláusula WHERE</h3>
<p>WHERE filtra las filas que cumplen una condición. Es la herramienta más usada en SQL.</p>
<pre>-- Comparaciones básicas
SELECT * FROM productos WHERE precio > 100;
SELECT * FROM usuarios WHERE activo = true;
SELECT * FROM pedidos WHERE estado = 'pendiente';

-- Operadores lógicos
SELECT * FROM productos
WHERE precio > 50 AND stock > 0;

SELECT * FROM usuarios
WHERE rol = 'admin' OR rol = 'moderador';

SELECT * FROM productos
WHERE NOT categoria = 'descontinuado';

-- BETWEEN (rango inclusivo)
SELECT * FROM productos
WHERE precio BETWEEN 10 AND 50;

-- IN (lista de valores)
SELECT * FROM usuarios
WHERE ciudad IN ('Madrid', 'Barcelona', 'Valencia');

-- LIKE (patrones)
SELECT * FROM usuarios
WHERE nombre LIKE 'An%';     -- empieza con "An"

SELECT * FROM emails
WHERE email LIKE '%@gmail.%'; -- contiene @gmail.

-- NULL
SELECT * FROM usuarios
WHERE telefono IS NULL;        -- no tiene teléfono
SELECT * FROM pedidos
WHERE enviado_at IS NOT NULL;  -- sí tiene fecha</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe consultas para filtrar datos de una tienda:</p>
<ul>
  <li>Productos con precio entre 20 y 100 (BETWEEN)</li>
  <li>Usuarios cuyo email contenga "gmail" (LIKE)</li>
  <li>Pedidos con estado IN ('enviado', 'entregado')</li>
  <li>Combina condiciones con AND y OR</li>
</ul>
</div>`,
  hint:`<code>LIKE</code> usa <code>%</code> como comodín para cualquier secuencia de caracteres. <code>_</code> es para un solo carácter. <code>BETWEEN a AND b</code> es inclusivo en ambos extremos. <code>IN (v1, v2, v3)</code> es más limpio que múltiples OR.`,
  starterCode:`-- Filtrado de datos con WHERE

-- 1. Productos entre $20 y $100 con stock disponible
SELECT nombre, precio, stock
FROM productos
WHERE precio BETWEEN 20 AND 100
  AND stock > 0
ORDER BY precio ASC;

-- 2. Usuarios con email de Gmail
SELECT nombre, email
FROM usuarios
WHERE email LIKE '%@gmail.%'
  AND activo = true;

-- 3. Pedidos en estados específicos
SELECT id, cliente_id, total, estado
FROM pedidos
WHERE estado IN ('enviado', 'entregado')
  AND created_at >= '2024-01-01';

-- 4. Usuarios sin teléfono registrado
SELECT nombre, email
FROM usuarios
WHERE telefono IS NULL;

-- 5. Productos de electrónica o juguetes con descuento
SELECT nombre, precio, categoria
FROM productos
WHERE categoria IN ('electrónica', 'juguetes')
  AND descuento > 0
ORDER BY descuento DESC;
`,
  validate(code) {
    const uc = code.toUpperCase();
    if (!uc.includes('WHERE'))     return {success:false, message:'Usa WHERE para filtrar filas.'};
    if (!uc.includes('BETWEEN'))   return {success:false, message:'Usa BETWEEN ... AND ... para rangos.'};
    if (!uc.includes('LIKE'))      return {success:false, message:'Usa LIKE con % para patrones de texto.'};
    if (!uc.includes('IN (') && !uc.includes('IN('))
      return {success:false, message:'Usa IN (v1, v2, ...) para listas de valores.'};
    if (!uc.includes(' AND ') && !uc.includes(' OR '))
      return {success:false, message:'Combina condiciones con AND u OR.'};
    return {success:true, message:'¡WHERE dominado! Puedes filtrar exactamente los datos que necesitas. 🔍'};
  }
},

/* ---- R3 L7 ---- */
{
  id:'r3l7', route:3, number:7, title:'SQL JOIN: Uniendo Tablas',
  language:'SQL', editorLang:'sql', difficulty:'medium', xp:75,
  theory:`
<h3>SQL JOINs — Unir Tablas</h3>
<pre>-- INNER JOIN: solo filas que coinciden en AMBAS tablas
SELECT u.nombre, p.total, p.estado
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

-- LEFT JOIN: todos de la izquierda + coincidencias derechas
SELECT u.nombre, COUNT(p.id) AS total_pedidos
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;

-- RIGHT JOIN: todos de la derecha + coincidencias izquierdas
SELECT p.nombre, c.nombre AS categoria
FROM productos p
RIGHT JOIN categorias c ON p.categoria_id = c.id;

-- Múltiples JOINs
SELECT
    u.nombre         AS cliente,
    p.id             AS pedido,
    pr.nombre        AS producto,
    dp.cantidad,
    dp.precio_unit
FROM usuarios u
JOIN pedidos p    ON u.id = p.usuario_id
JOIN detalle_pedido dp ON p.id = dp.pedido_id
JOIN productos pr ON dp.producto_id = pr.id
WHERE p.estado = 'entregado'
ORDER BY p.created_at DESC;</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Une tablas de una base de datos de blog:</p>
<ul>
  <li><code>INNER JOIN</code> para artículos con sus autores</li>
  <li><code>LEFT JOIN</code> para ver artículos aunque no tengan comentarios</li>
  <li>Usa aliases con <code>AS</code></li>
  <li>Filtra con <code>WHERE</code> después del JOIN</li>
</ul>
</div>`,
  hint:`El <code>ON</code> especifica la condición de unión, casi siempre es la clave foránea. <code>INNER JOIN</code> solo retorna filas donde HAY coincidencia en ambas tablas. <code>LEFT JOIN</code> retorna TODOS los de la tabla izquierda, con NULL donde no hay coincidencia a la derecha.`,
  starterCode:`-- SQL JOINs - Base de datos de Blog

-- Tablas: articulos (id, titulo, autor_id, publicado)
--         usuarios (id, nombre, email)
--         comentarios (id, articulo_id, usuario_id, texto)

-- 1. INNER JOIN: artículos con su autor
SELECT
    a.id          AS articulo_id,
    a.titulo,
    u.nombre      AS autor,
    u.email       AS email_autor
FROM articulos a
INNER JOIN usuarios u ON a.autor_id = u.id
WHERE a.publicado = true
ORDER BY a.id DESC;

-- 2. LEFT JOIN: artículos con cantidad de comentarios
SELECT
    a.titulo,
    u.nombre          AS autor,
    COUNT(c.id)       AS num_comentarios
FROM articulos a
INNER JOIN usuarios u ON a.autor_id = u.id
LEFT JOIN comentarios c ON a.id = c.articulo_id
GROUP BY a.id, a.titulo, u.nombre
ORDER BY num_comentarios DESC;

-- 3. Todos los comentarios con datos del artículo y del autor del comentario
SELECT
    a.titulo          AS articulo,
    uc.nombre         AS comentarista,
    c.texto           AS comentario
FROM comentarios c
JOIN articulos a  ON c.articulo_id = a.id
JOIN usuarios uc  ON c.usuario_id  = uc.id
ORDER BY c.id ASC;
`,
  validate(code) {
    const uc = code.toUpperCase();
    if (!uc.includes('JOIN'))         return {success:false, message:'Usa JOIN para unir tablas.'};
    if (!uc.includes(' ON '))         return {success:false, message:'Especifica la condición con ON tabla1.col = tabla2.col.'};
    if (!uc.includes('INNER JOIN') && !uc.includes('LEFT JOIN'))
      return {success:false, message:'Usa al menos un INNER JOIN o LEFT JOIN.'};
    if (!uc.includes('LEFT JOIN'))    return {success:false, message:'Añade un LEFT JOIN para incluir filas sin coincidencia.'};
    if (!uc.includes(' AS '))         return {success:false, message:'Usa AS para crear aliases descriptivos.'};
    return {success:true, message:'¡JOINs SQL dominados! Ya puedes consultar múltiples tablas como un DBA profesional. 🔗'};
  }
},

/* ---- R3 L8 ---- */
{
  id:'r3l8', route:3, number:8, title:'GROUP BY y Agregaciones SQL',
  language:'SQL', editorLang:'sql', difficulty:'medium', xp:75,
  theory:`
<h3>Agregaciones SQL</h3>
<pre>-- Funciones de agregación
SELECT COUNT(*) FROM pedidos;          -- total de filas
SELECT COUNT(DISTINCT usuario_id) FROM pedidos; -- usuarios únicos
SELECT SUM(total) FROM pedidos;        -- suma
SELECT AVG(precio) FROM productos;     -- promedio
SELECT MIN(precio) FROM productos;     -- mínimo
SELECT MAX(precio) FROM productos;     -- máximo

-- GROUP BY: agrupa filas con el mismo valor
SELECT
    categoria,
    COUNT(*)     AS total_productos,
    AVG(precio)  AS precio_promedio,
    SUM(stock)   AS stock_total
FROM productos
GROUP BY categoria
ORDER BY total_productos DESC;

-- HAVING: filtro DESPUÉS del GROUP BY
-- (WHERE filtra antes de agrupar)
SELECT
    usuario_id,
    COUNT(*)  AS pedidos,
    SUM(total) AS gasto_total
FROM pedidos
GROUP BY usuario_id
HAVING COUNT(*) >= 5           -- solo clientes con 5+ pedidos
ORDER BY gasto_total DESC;

-- Combinando todo
SELECT
    YEAR(fecha)  AS año,
    MONTH(fecha) AS mes,
    COUNT(*)     AS ventas,
    SUM(total)   AS ingresos
FROM pedidos
WHERE estado = 'entregado'
GROUP BY YEAR(fecha), MONTH(fecha)
HAVING ingresos > 10000
ORDER BY año, mes;</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Analiza las ventas de una tienda:</p>
<ul>
  <li>Total de ventas por categoría (COUNT + GROUP BY)</li>
  <li>Ingreso promedio por mes (AVG + GROUP BY)</li>
  <li>Clientes que han gastado más de $500 (SUM + HAVING)</li>
  <li>El producto más vendido (MAX o subconsulta)</li>
</ul>
</div>`,
  hint:`<code>GROUP BY</code> agrupa filas con el mismo valor. Las funciones de agregación (<code>COUNT</code>, <code>SUM</code>, <code>AVG</code>) calculan sobre cada grupo. <code>HAVING</code> es como <code>WHERE</code> pero para los grupos — se aplica DESPUÉS de agrupar. No puedes usar funciones de agregación en <code>WHERE</code>.`,
  starterCode:`-- Análisis de ventas con GROUP BY

-- 1. Ventas y revenue por categoría de producto
SELECT
    p.categoria,
    COUNT(dp.id)         AS unidades_vendidas,
    SUM(dp.cantidad)     AS total_cantidad,
    AVG(dp.precio_unit)  AS precio_promedio,
    SUM(dp.cantidad * dp.precio_unit) AS revenue
FROM detalle_pedido dp
JOIN productos p ON dp.producto_id = p.id
GROUP BY p.categoria
ORDER BY revenue DESC;

-- 2. Clientes que han gastado más de $500
SELECT
    u.nombre,
    COUNT(p.id)    AS total_pedidos,
    SUM(p.total)   AS gasto_total,
    AVG(p.total)   AS ticket_promedio
FROM usuarios u
JOIN pedidos p ON u.id = p.usuario_id
WHERE p.estado IN ('entregado', 'enviado')
GROUP BY u.id, u.nombre
HAVING SUM(p.total) > 500
ORDER BY gasto_total DESC;

-- 3. Ventas por mes
SELECT
    EXTRACT(YEAR FROM created_at)   AS año,
    EXTRACT(MONTH FROM created_at)  AS mes,
    COUNT(*)      AS num_pedidos,
    SUM(total)    AS ingresos_mes
FROM pedidos
GROUP BY año, mes
ORDER BY año, mes;
`,
  validate(code) {
    const uc = code.toUpperCase();
    if (!uc.includes('GROUP BY'))     return {success:false, message:'Usa GROUP BY para agrupar filas.'};
    if (!uc.includes('COUNT') && !uc.includes('SUM') && !uc.includes('AVG'))
      return {success:false, message:'Usa funciones de agregación: COUNT, SUM, AVG, etc.'};
    if (!uc.includes('HAVING'))       return {success:false, message:'Usa HAVING para filtrar grupos (como WHERE pero para grupos).'};
    if (!uc.includes('SUM'))          return {success:false, message:'Usa SUM() para sumar valores.'};
    if (!uc.includes('COUNT'))        return {success:false, message:'Usa COUNT() para contar filas.'};
    return {success:true, message:'¡Agregaciones SQL dominadas! Puedes generar reportes y métricas de cualquier base de datos. 📈'};
  }
},

/* ---- R3 L9 ---- */
{
  id:'r3l9', route:3, number:9, title:'Variables de Entorno Linux',
  language:'Linux / Bash', editorLang:'bash', difficulty:'medium', xp:75,
  theory:`
<h3>Variables de Entorno</h3>
<p>Las variables de entorno configuran el sistema y las aplicaciones. Son esenciales en DevOps y deployment.</p>
<pre># Ver variable de entorno
echo $HOME          # /home/usuario
echo $PATH          # rutas de ejecutables
echo $USER          # usuario actual
echo $SHELL         # shell actual
echo $PWD           # directorio actual

# Variables de sesión (solo la sesión actual)
MI_VARIABLE="hola"
echo $MI_VARIABLE

# export: disponible para procesos hijos
export DB_HOST="localhost"
export DB_PORT="5432"
export DB_NAME="mi_base"

# Ver todas las variables
env
printenv
printenv DB_HOST

# Hacer permanente: añadir a .bashrc o .bash_profile
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc    # recargar sin cerrar terminal

# Variables temporales para un comando
DEBUG=true node server.js
DATABASE_URL="postgres://..." npm start

# .env files (estilo moderno)
# Archivo .env:
# DB_HOST=localhost
# DB_PASSWORD=supersecret
# Cargar: source .env  o  set -a; . .env; set +a</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Configura las variables de entorno de una aplicación:</p>
<ul>
  <li>Exporta variables de base de datos (host, port, name, user)</li>
  <li>Muestra el valor de una variable con <code>echo $VAR</code></li>
  <li>Añade una ruta al <code>$PATH</code></li>
  <li>Usa <code>printenv</code> para verificar</li>
  <li>Simula cargar un archivo <code>.env</code></li>
</ul>
</div>`,
  hint:`La diferencia entre <code>VARIABLE=valor</code> y <code>export VARIABLE=valor</code>: sin export, la variable solo existe en el shell actual y los scripts no la pueden ver. Con export, los procesos hijos heredan la variable. En producción, las variables de entorno son la forma estándar de guardar secretos.`,
  starterCode:`#!/bin/bash
# Configuración de variables de entorno para una aplicación web

# Variables de base de datos
export DB_HOST="localhost"
export DB_PORT="5432"
export DB_NAME="mi_aplicacion"
export DB_USER="app_user"
export DB_PASSWORD="super_secreto_123"

# Variable de entorno de la aplicación
export APP_ENV="development"
export APP_PORT="3000"
export DEBUG="true"

# Verificar que se exportaron
echo "=== CONFIGURACIÓN ==="
echo "DB Host: $DB_HOST"
echo "DB Port: $DB_PORT"
echo "DB Name: $DB_NAME"
echo "App Port: $APP_PORT"
echo "Entorno: $APP_ENV"

# Ver con printenv
printenv DB_HOST
printenv APP_ENV

# Añadir directorio al PATH
export PATH="$HOME/.local/bin:$PATH"
echo "PATH actualizado: $PATH"

# Hacer permanente (simulación)
echo 'export APP_ENV="production"' >> ~/.bashrc
echo 'Añadido al .bashrc'
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('export '))      return {success:false, message:'Usa export para hacer las variables disponibles para procesos hijos.'};
    const exportCount = (lc.match(/\bexport /g)||[]).length;
    if (exportCount < 3)              return {success:false, message:`Solo tienes ${exportCount} export. Exporta al menos 3 variables.`};
    if (!code.includes('$'))          return {success:false, message:'Accede a las variables con $NOMBRE_VARIABLE.'};
    if (!lc.includes('echo'))         return {success:false, message:'Usa echo para mostrar el valor de las variables.'};
    if (!lc.includes('printenv') && !lc.includes('env'))
      return {success:false, message:'Usa printenv o env para listar variables de entorno.'};
    return {success:true, message:'¡Variables de entorno dominadas! Ahora tus apps son configurables sin cambiar código. ⚙️'};
  }
},

/* ---- R3 L10 ---- */
{
  id:'r3l10', route:3, number:10, title:'Tu Primer Script Bash',
  language:'Bash', editorLang:'bash', difficulty:'hard', xp:110,
  theory:`
<h3>Scripts Bash — Automatización Real</h3>
<pre>#!/bin/bash
# La primera línea es el "shebang" — indica el intérprete

# Variables
NOMBRE="Mundo"
FECHA=$(date +%Y-%m-%d)   # capturar output de comando
ARCHIVOS=$(ls | wc -l)

# Condicionales
if [ -f "archivo.txt" ]; then
    echo "El archivo existe"
elif [ -d "carpeta" ]; then
    echo "La carpeta existe"
else
    echo "Ninguno existe"
fi

# Comparaciones
if [ $ARCHIVOS -gt 10 ]; then   # -gt = greater than
    echo "Muchos archivos"       # -lt -eq -ne -ge -le
fi

# Bucle for
for i in {1..5}; do
    echo "Iteración $i"
done

for archivo in *.txt; do
    echo "Procesando: $archivo"
done

# Bucle while
CONTADOR=0
while [ $CONTADOR -lt 5 ]; do
    echo "Contador: $CONTADOR"
    ((CONTADOR++))
done

# Funciones
saludar() {
    local nombre=$1   # $1 = primer argumento
    echo "Hola, $nombre!"
}

saludar "Linux"</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un script de backup automatizado:</p>
<ul>
  <li>Shebang (<code>#!/bin/bash</code>) en la primera línea</li>
  <li>Al menos 3 variables con <code>$( )</code> para capturar comandos</li>
  <li>Un condicional <code>if [ ... ]; then ... fi</code></li>
  <li>Un bucle <code>for</code></li>
  <li>Al menos una función</li>
</ul>
</div>`,
  hint:`El shebang <code>#!/bin/bash</code> DEBE ser la primera línea. Las variables NO llevan espacios: <code>VAR=valor</code> (sin espacios alrededor del =). Para comparar números en <code>[ ]</code> usa <code>-eq, -ne, -gt, -lt</code>. Para strings: <code>==, !=</code>. <code>$1, $2</code>... son los argumentos de la función.`,
  starterCode:`#!/bin/bash
# Script de backup automatizado

# Variables de configuración
DIRECTORIO_ORIGEN="/var/www/mi-app"
DIRECTORIO_BACKUP="/backup"
FECHA=$(date +%Y%m%d_%H%M%S)
NOMBRE_BACKUP="backup_$FECHA.tar.gz"
LOG_FILE="/var/log/backup.log"

# Función para logging
log() {
    local mensaje="$1"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $mensaje" | tee -a "$LOG_FILE"
}

# Función para hacer backup
hacer_backup() {
    local origen="$1"
    local destino="$2"

    log "Iniciando backup de $origen..."

    if [ ! -d "$origen" ]; then
        log "ERROR: El directorio $origen no existe"
        return 1
    fi

    mkdir -p "$destino"
    tar -czf "$destino/$NOMBRE_BACKUP" "$origen" 2>/dev/null
    log "Backup completado: $destino/$NOMBRE_BACKUP"
}

# Limpiar backups viejos (más de 7 días)
limpiar_viejos() {
    local carpeta="$1"
    log "Limpiando backups de mas de 7 dias..."

    for archivo in "$carpeta"/*.tar.gz; do
        if [ -f "$archivo" ]; then
            log "  Verificando: $archivo"
        fi
    done
}

# Script principal
log "=== INICIO DEL BACKUP ==="
hacer_backup "$DIRECTORIO_ORIGEN" "$DIRECTORIO_BACKUP"
limpiar_viejos "$DIRECTORIO_BACKUP"
log "=== FIN DEL BACKUP ==="
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!code.startsWith('#!/bin/bash') && !code.includes('#!/bin/bash\n'))
      return {success:false, message:'El script debe comenzar con #!/bin/bash (el shebang).'};
    if (!code.includes('$('))         return {success:false, message:'Usa $( ) para capturar el output de un comando en una variable.'};
    if (!lc.includes('if [') && !lc.includes('if [ '))
      return {success:false, message:'Añade un condicional if [ condición ]; then ... fi.'};
    if (!lc.includes(' fi'))          return {success:false, message:'Los if en Bash terminan con fi.'};
    if (!lc.includes('for '))         return {success:false, message:'Añade un bucle for.'};
    if (!lc.includes(' do\n') && !lc.includes(' do '))
      return {success:false, message:'Los bucles for/while van: for ... ; do ... done.'};
    if (!code.match(/\w+\s*\(\s*\)/)) return {success:false, message:'Define al menos una función: nombre_funcion() { ... }'};
    return {success:true, message:'¡Script Bash creado! Puedes automatizar cualquier tarea del servidor. ⚡'};
  }
},

/* ---- R3 L11 ---- */
{
  id:'r3l11', route:3, number:11, title:'Subconsultas SQL',
  language:'SQL', editorLang:'sql', difficulty:'hard', xp:110,
  theory:`
<h3>Subconsultas (Subqueries)</h3>
<p>Una subconsulta es un SELECT dentro de otro SELECT. Permite consultas complejas sin tablas temporales.</p>
<pre>-- En WHERE
SELECT nombre, precio
FROM productos
WHERE precio > (SELECT AVG(precio) FROM productos);

-- Con IN
SELECT * FROM usuarios
WHERE id IN (
    SELECT DISTINCT usuario_id
    FROM pedidos
    WHERE total > 1000
);

-- Con EXISTS
SELECT u.nombre
FROM usuarios u
WHERE EXISTS (
    SELECT 1 FROM pedidos p
    WHERE p.usuario_id = u.id
    AND p.created_at > NOW() - INTERVAL '30 days'
);

-- Subconsulta correlacionada (referencia la consulta externa)
SELECT nombre,
    (SELECT COUNT(*) FROM pedidos p WHERE p.usuario_id = u.id) AS total_pedidos
FROM usuarios u;

-- En FROM (tabla derivada)
SELECT dept, avg_salario
FROM (
    SELECT departamento AS dept,
           AVG(salario)  AS avg_salario
    FROM empleados
    GROUP BY departamento
) AS stats_dept
WHERE avg_salario > 50000;</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Escribe subconsultas para análisis de datos:</p>
<ul>
  <li>Productos con precio mayor al promedio (subconsulta en WHERE)</li>
  <li>Usuarios que han realizado pedidos (subconsulta con IN)</li>
  <li>Una subconsulta en el FROM (tabla derivada)</li>
</ul>
</div>`,
  hint:`Las subconsultas van entre paréntesis. La consulta interna se ejecuta primero. Para subconsultas en <code>WHERE</code>: <code>WHERE columna operador (SELECT ...)</code>. Para <code>IN</code>: la subconsulta debe retornar una columna. Para <code>EXISTS</code>: retorna true si la subconsulta tiene al menos 1 fila.`,
  starterCode:`-- Subconsultas SQL

-- 1. Productos con precio MAYOR al precio promedio
SELECT nombre, precio
FROM productos
WHERE precio > (
    SELECT AVG(precio)
    FROM productos
)
ORDER BY precio DESC;

-- 2. Clientes que han hecho al menos un pedido
SELECT nombre, email
FROM usuarios
WHERE id IN (
    SELECT DISTINCT usuario_id
    FROM pedidos
    WHERE estado != 'cancelado'
);

-- 3. Categorías con más de 5 productos
SELECT categoria, total_productos
FROM (
    SELECT
        categoria,
        COUNT(*) AS total_productos
    FROM productos
    WHERE activo = true
    GROUP BY categoria
) AS resumen_categorias
WHERE total_productos > 5
ORDER BY total_productos DESC;

-- 4. El pedido más grande de cada usuario
SELECT
    u.nombre,
    (
        SELECT MAX(p.total)
        FROM pedidos p
        WHERE p.usuario_id = u.id
    ) AS pedido_mayor
FROM usuarios u
HAVING pedido_mayor IS NOT NULL
ORDER BY pedido_mayor DESC;
`,
  validate(code) {
    const uc = code.toUpperCase();
    const selectInSelectCount = (uc.match(/SELECT[\s\S]*?SELECT/g)||[]).length;
    if (selectInSelectCount < 1)
      return {success:false, message:'Necesitas al menos un SELECT dentro de otro SELECT.'};
    if (!uc.includes('WHERE') || !uc.match(/WHERE[\s\S]*?SELECT/))
      return {success:false, message:'Usa una subconsulta en una cláusula WHERE.'};
    if (!uc.includes(' IN (') && !uc.includes(' IN('))
      return {success:false, message:'Usa IN (SELECT ...) para filtrar con una subconsulta.'};
    if (!uc.includes('FROM (') && !uc.includes('FROM('))
      return {success:false, message:'Usa una tabla derivada: SELECT ... FROM (SELECT ...) AS alias.'};
    return {success:true, message:'¡Subconsultas SQL dominadas! Puedes resolver cualquier análisis complejo de datos. 🧩'};
  }
},

/* ---- R3 L12 ---- */
{
  id:'r3l12', route:3, number:12, title:'Cron Jobs: Automatización Programada',
  language:'Bash', editorLang:'bash', difficulty:'hard', xp:110,
  theory:`
<h3>Cron — El Scheduler de Linux</h3>
<p>Cron permite ejecutar comandos/scripts automáticamente según un horario.</p>
<pre># Formato: minuto hora dia-mes mes dia-semana comando
# ┌───── minuto (0-59)
# │ ┌─── hora (0-23)
# │ │ ┌─ día del mes (1-31)
# │ │ │ ┌ mes (1-12)
# │ │ │ │ ┌ día de la semana (0-7, 0 y 7=Dom)
# │ │ │ │ │
# * * * * * comando_a_ejecutar

# Ejemplos prácticos:
# Cada minuto
* * * * * /scripts/monitor.sh

# Cada día a las 2:30 AM
30 2 * * * /scripts/backup.sh

# Cada lunes a las 9 AM
0 9 * * 1 /scripts/reporte_semanal.sh

# El día 1 de cada mes a medianoche
0 0 1 * * /scripts/facturacion_mensual.sh

# Cada 15 minutos
*/15 * * * * /scripts/check_salud.sh

# A las 8 AM, 12 PM y 6 PM
0 8,12,18 * * * /scripts/sincronizar.sh

# Cada hora, de lunes a viernes
0 * * * 1-5 /scripts/actualizar.sh

# Gestión del crontab
# crontab -e    — editar crontab del usuario
# crontab -l    — listar crontab actual
# crontab -r    — eliminar crontab</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea el crontab de un servidor de producción:</p>
<ul>
  <li>Backup de BD cada día a las 3 AM</li>
  <li>Limpieza de logs cada domingo a medianoche</li>
  <li>Monitoreo de salud cada 5 minutos</li>
  <li>Reporte semanal los lunes a las 8 AM</li>
  <li>Renovar certificados SSL el día 1 de cada mes</li>
</ul>
</div>`,
  hint:`Los 5 campos son: minuto, hora, día-mes, mes, día-semana. <code>*</code> = cualquier valor. <code>*/5</code> = cada 5 unidades. <code>1-5</code> = del 1 al 5. <code>1,3,5</code> = en 1, 3 y 5. Los días de la semana: 0=Domingo, 1=Lunes, ..., 6=Sábado (o 7=Domingo).`,
  starterCode:`# Crontab del servidor de producción
# Editar con: crontab -e
# Ver con: crontab -l

# === BACKUPS ===
# Backup de base de datos cada día a las 3:00 AM
0 3 * * * /scripts/backup_db.sh >> /var/log/backup.log 2>&1

# Backup de archivos cada domingo a las 2 AM
0 2 * * 0 /scripts/backup_files.sh >> /var/log/backup.log 2>&1

# === LIMPIEZA ===
# Limpiar logs cada domingo a medianoche
0 0 * * 0 find /var/log -name "*.log" -mtime +30 -delete

# Limpiar caché de sesiones expiradas cada hora
0 * * * * /scripts/limpiar_sesiones.sh

# === MONITOREO ===
# Check de salud del servidor cada 5 minutos
*/5 * * * * /scripts/health_check.sh

# Monitorear disco cada 30 minutos
*/30 * * * * df -h | grep -v tmpfs | mail -s "Disco" admin@empresa.com

# === REPORTES ===
# Reporte semanal los lunes a las 8 AM
0 8 * * 1 /scripts/reporte_semanal.sh

# Estadísticas diarias a las 6 AM
0 6 * * * /scripts/estadisticas_diarias.sh

# === CERTIFICADOS SSL ===
# Renovar Let's Encrypt el día 1 de cada mes
0 0 1 * * certbot renew --quiet && systemctl reload nginx
`,
  validate(code) {
    // Check cron format (lines with 5 time fields)
    const cronLines = code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
    const validCron = cronLines.filter(l => l.match(/^[\d\*,\/\-]+\s+[\d\*,\/\-]+\s+[\d\*,\/\-]+\s+[\d\*,\/\-]+\s+[\d\*,\/\-]+\s+/));
    if (validCron.length < 4)
      return {success:false, message:`Tienes ${validCron.length} líneas de cron válidas. Necesitas al menos 5.`};
    if (!code.includes('*/'))     return {success:false, message:'Usa */n para expresar "cada n unidades" (ej: */5 = cada 5 minutos).'};
    if (!code.includes('0 3 * * *') && !code.includes('0 2 * * *') && !code.match(/\d+ \d+ \* \* \*/))
      return {success:false, message:'Incluye al menos un job diario a una hora específica.'};
    if (!code.match(/\* \* [1-9]/))
      return {success:false, message:'Añade un job mensual: 0 0 1 * * script (día 1 de cada mes).'};
    return {success:true, message:'¡Cron jobs configurados! Tu servidor ahora trabaja mientras duermes. ⏰'};
  }
},

/* ---- R3 L13 ---- */
{
  id:'r3l13', route:3, number:13, title:'Índices SQL y Optimización',
  language:'SQL', editorLang:'sql', difficulty:'hard', xp:120,
  theory:`
<h3>Índices SQL — El Arte del Rendimiento</h3>
<p>Los índices aceleran las consultas drásticamente. Sin ellos, MySQL escanea TODAS las filas.</p>
<pre>-- Crear índice simple
CREATE INDEX idx_productos_categoria
ON productos (categoria);

-- Índice único (como PRIMARY KEY pero en otra columna)
CREATE UNIQUE INDEX idx_usuarios_email
ON usuarios (email);

-- Índice compuesto (múltiples columnas)
CREATE INDEX idx_pedidos_usuario_fecha
ON pedidos (usuario_id, created_at);

-- Índice parcial (PostgreSQL/MySQL)
CREATE INDEX idx_productos_activos
ON productos (precio)
WHERE activo = true;

-- Ver índices de una tabla
SHOW INDEX FROM usuarios;  -- MySQL
SELECT * FROM pg_indexes WHERE tablename = 'usuarios'; -- PG

-- EXPLAIN: analizar el plan de ejecución
EXPLAIN SELECT * FROM pedidos WHERE usuario_id = 100;
-- Con índice: "Using index" (rápido)
-- Sin índice: "Full Table Scan" (lento)

-- Eliminar índice
DROP INDEX idx_productos_categoria ON productos;

-- Cuándo usar índices:
-- ✅ Columnas en WHERE frecuentes
-- ✅ Columnas en JOIN ON
-- ✅ Columnas en ORDER BY
-- ❌ Tablas pequeñas (el overhead no vale)
-- ❌ Columnas que cambian muy seguido</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Optimiza una base de datos de e-commerce:</p>
<ul>
  <li>Crea un índice en <code>productos.categoria</code></li>
  <li>Crea un índice único en <code>usuarios.email</code></li>
  <li>Crea un índice compuesto en <code>pedidos(usuario_id, created_at)</code></li>
  <li>Usa <code>EXPLAIN</code> para analizar una consulta</li>
  <li>Crea un índice parcial</li>
</ul>
</div>`,
  hint:`Los índices son como el índice de un libro — permiten encontrar datos sin leer todo. Usa índices compuestos cuando siempre filtras por dos columnas juntas. El orden importa: <code>idx(a, b)</code> ayuda a queries que filtran por <code>a</code> solo, o por <code>a AND b</code>, pero NO por <code>b</code> solo.`,
  starterCode:`-- Optimización con Índices SQL

-- 1. Índice en la columna de categoría (consultas frecuentes)
CREATE INDEX idx_productos_categoria
ON productos (categoria);

-- 2. Índice único en email (previene duplicados + acelera búsqueda)
CREATE UNIQUE INDEX idx_usuarios_email
ON usuarios (email);

-- 3. Índice compuesto para consultas de pedidos por usuario y fecha
CREATE INDEX idx_pedidos_usuario_fecha
ON pedidos (usuario_id, created_at DESC);

-- 4. Índice parcial: solo productos activos con precio > 0
CREATE INDEX idx_productos_activos_precio
ON productos (precio)
WHERE activo = true AND precio > 0;

-- 5. Analizar plan de ejecución CON el índice
EXPLAIN SELECT *
FROM pedidos
WHERE usuario_id = 1234
  AND created_at >= '2024-01-01'
ORDER BY created_at DESC;

-- 6. Índice para búsquedas de texto
CREATE INDEX idx_productos_nombre
ON productos USING gin(to_tsvector('spanish', nombre));

-- Verificar índices creados
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename IN ('productos', 'usuarios', 'pedidos');
`,
  validate(code) {
    const uc = code.toUpperCase();
    if (!uc.includes('CREATE INDEX'))  return {success:false, message:'Crea índices con CREATE INDEX.'};
    const idxCount = (uc.match(/CREATE\s+(UNIQUE\s+)?INDEX/g)||[]).length;
    if (idxCount < 3)                  return {success:false, message:`Tienes ${idxCount} índice(s). Crea al menos 3.`};
    if (!uc.includes('UNIQUE INDEX') && !uc.includes('CREATE UNIQUE INDEX'))
      return {success:false, message:'Crea un índice UNIQUE para columnas que deben ser únicas.'};
    if (!uc.includes('EXPLAIN'))       return {success:false, message:'Usa EXPLAIN para analizar el plan de ejecución.'};
    if (!uc.includes('WHERE') || !code.match(/CREATE INDEX[\s\S]*?WHERE/i))
      return {success:false, message:'Crea un índice parcial con WHERE.'};
    return {success:true, message:'¡Índices SQL creados! Tus consultas ahora son 100x más rápidas. 🚄'};
  }
},

/* ---- R3 L14 ---- */
{
  id:'r3l14', route:3, number:14, title:'Funciones Bash Avanzadas',
  language:'Bash', editorLang:'bash', difficulty:'hard', xp:120,
  theory:`
<h3>Funciones y Patrones Avanzados Bash</h3>
<pre>#!/bin/bash
set -euo pipefail  # modo estricto (recomendado en producción)

# Función con valor de retorno (exit codes)
verificar_servicio() {
    local servicio=$1
    if systemctl is-active --quiet "$servicio"; then
        return 0  # éxito
    else
        return 1  # error
    fi
}

# Función con múltiples retornos via echo
obtener_ip() {
    local host=$1
    local ip
    ip=$(dig +short "$host" A | head -1)
    echo "$ip"
}

# Manejo de errores avanzado
manejar_error() {
    local codigo=$?
    local linea=$1
    echo "ERROR en línea $linea, código: $codigo" >&2
    exit $codigo
}
trap 'manejar_error $LINENO' ERR

# Arrays en Bash
declare -a SERVIDORES=("web1" "web2" "db1")

for servidor in "\${SERVIDORES[@]}"; do
    echo "Procesando: $servidor"
done

# Associative arrays (mapas)
declare -A PUERTOS
PUERTOS["web"]=80
PUERTOS["https"]=443
PUERTOS["postgres"]=5432

# Procesamiento de argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --host)   HOST="$2";  shift 2 ;;
        --port)   PORT="$2";  shift 2 ;;
        --debug)  DEBUG=true; shift   ;;
        *)        echo "Arg desconocido: $1"; exit 1 ;;
    esac
done</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Crea un script de deployment avanzado:</p>
<ul>
  <li>Al menos 3 funciones con parámetros (<code>$1, $2</code>)</li>
  <li>Un array (<code>declare -a</code>) con servidores</li>
  <li>Manejo de errores con <code>trap</code></li>
  <li>Bucle que procese el array</li>
  <li>Código de retorno con <code>return 0/1</code></li>
</ul>
</div>`,
  hint:`En Bash las funciones retornan códigos de salida (0=éxito, 1+=error) con <code>return</code>, y valores via <code>echo</code>. Los arrays usan <code>declare -a</code> y se acceden con <code>\${arr[@]}</code>. El <code>trap</code> captura señales del sistema — <code>trap 'handler' ERR</code> captura cualquier error.`,
  starterCode:`#!/bin/bash
set -euo pipefail

# === CONFIGURACIÓN ===
declare -a SERVIDORES=("web-01" "web-02" "web-03")
APP_DIR="/var/www/mi-app"
BRANCH="main"
LOG="/var/log/deploy.log"

# === FUNCIONES ===

log() {
    local nivel="$1"
    local msg="$2"
    echo "[$(date '+%H:%M:%S')] [$nivel] $msg" | tee -a "$LOG"
}

verificar_dependencias() {
    local deps=("git" "node" "npm" "pm2")
    for dep in "\${deps[@]}"; do
        if ! command -v "$dep" &>/dev/null; then
            log "ERROR" "Dependencia faltante: $dep"
            return 1
        fi
        log "OK" "Dependencia OK: $dep"
    done
    return 0
}

desplegar_servidor() {
    local servidor="$1"
    local rama="\${2:-main}"

    log "INFO" "Desplegando en $servidor (rama: $rama)"

    # Simular deploy
    if ssh "$servidor" "cd $APP_DIR && git pull origin $rama && npm install && pm2 restart all"; then
        log "OK" "Despliegue exitoso en $servidor"
        return 0
    else
        log "ERROR" "Fallo el despliegue en $servidor"
        return 1
    fi
}

notificar() {
    local mensaje="$1"
    local tipo="\${2:-info}"
    log "NOTIF" "[$tipo] $mensaje"
    # Aquí iría: curl -X POST hook_url -d "{message: $mensaje}"
}

manejar_error() {
    local linea=$1
    notificar "Error en línea $linea durante el deploy" "error"
    exit 1
}

# === MAIN ===
trap 'manejar_error $LINENO' ERR

log "INFO" "=== INICIO DEL DEPLOY ==="

if verificar_dependencias; then
    log "INFO" "Todas las dependencias OK"
else
    log "ERROR" "Faltan dependencias, abortando"
    exit 1
fi

EXITOS=0
FALLOS=0

for servidor in "\${SERVIDORES[@]}"; do
    if desplegar_servidor "$servidor" "$BRANCH"; then
        ((EXITOS++))
    else
        ((FALLOS++))
    fi
done

notificar "Deploy completado: $EXITOS exitosos, $FALLOS fallidos"
log "INFO" "=== FIN DEL DEPLOY ==="
`,
  validate(code) {
    if (!code.startsWith('#!/bin/bash') && !code.includes('#!/bin/bash\n'))
      return {success:false, message:'El script debe comenzar con #!/bin/bash.'};
    if (!code.includes('declare -a'))
      return {success:false, message:'Usa declare -a para declarar un array.'};
    if (!code.includes('trap'))
      return {success:false, message:'Usa trap para manejar errores.'};
    if (!code.includes('${') || (!code.includes('@}') && !code.includes('[@]}')))
      return {success:false, message:'Itera el array con ${array[@]}.'};
    if (!code.includes('return 0') && !code.includes('return 1'))
      return {success:false, message:'Las funciones deben retornar códigos de salida: return 0 (OK) o return 1 (error).'};
    const funcCount = (code.match(/\w+\s*\(\s*\)\s*\{/g)||[]).length;
    if (funcCount < 3)
      return {success:false, message:`Solo tienes ${funcCount} función(es). Necesitas al menos 3.`};
    return {success:true, message:'¡Bash avanzado dominado! Puedes automatizar el deployment de infraestructura real. 🚀'};
  }
},

/* ---- R3 L15 ---- */
{
  id:'r3l15', route:3, number:15, title:'Configurar un Servidor nginx',
  language:'Bash', editorLang:'bash', difficulty:'hard', xp:130,
  theory:`
<h3>nginx — El Servidor Web Más Rápido</h3>
<p>nginx maneja millones de requests concurrentes. Su configuración es declarativa y elegante.</p>
<pre># Estructura básica de nginx.conf
events { worker_connections 1024; }

http {
    # Servidor virtual (VHost)
    server {
        listen 80;
        listen [::]:80;
        server_name ejemplo.com www.ejemplo.com;

        # Redirigir HTTP a HTTPS
        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name ejemplo.com;

        # SSL
        ssl_certificate     /etc/ssl/certs/ejemplo.crt;
        ssl_certificate_key /etc/ssl/private/ejemplo.key;

        root /var/www/ejemplo;
        index index.html;

        # Proxy a Node.js
        location /api/ {
            proxy_pass http://127.0.0.1:3000/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }

        # Archivos estáticos
        location /static/ {
            expires 30d;
            add_header Cache-Control "public, immutable";
        }

        # Fallback para SPA
        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}</pre>`,
  challenge:`<div class="challenge-box">
<h4>🎯 Tu Misión</h4>
<p>Configura nginx para una aplicación moderna:</p>
<ul>
  <li>Un bloque <code>server { }</code> que escuche en <code>listen 80</code></li>
  <li>Configurar <code>server_name</code></li>
  <li>Al menos 2 bloques <code>location { }</code></li>
  <li>Un <code>proxy_pass</code> para backend Node/Python</li>
  <li>Redirección HTTP → HTTPS (301)</li>
</ul>
</div>`,
  hint:`nginx usa bloques anidados. El <code>server { }</code> define un virtual host. Dentro, <code>location /path { }</code> maneja rutas específicas. <code>proxy_pass</code> reenvía las requests a tu backend. El <code>try_files $uri $uri/ /index.html</code> es esencial para SPAs de React/Vue.`,
  starterCode:`# Configuración nginx para aplicación web moderna
# Archivo: /etc/nginx/sites-available/mi-app

# Redirigir HTTP a HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name miapp.com www.miapp.com;

    # Certbot challenge (Let's Encrypt)
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Redirigir todo lo demás a HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

# Servidor principal HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name miapp.com www.miapp.com;

    # Certificados SSL
    ssl_certificate     /etc/letsencrypt/live/miapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/miapp.com/privkey.pem;

    # Seguridad SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    # Archivos estáticos del frontend (React/Vue/Next.js)
    root /var/www/mi-app/dist;
    index index.html;

    # API Backend (Node.js en puerto 3000)
    location /api/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }

    # Assets estáticos con caché larga
    location ~* \.(js|css|png|jpg|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # SPA fallback: todas las rutas van al index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Headers de seguridad
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";
}
`,
  validate(code) {
    const lc = code.toLowerCase();
    if (!lc.includes('server {') && !lc.includes('server{'))
      return {success:false, message:'Define un bloque server { } para el virtual host.'};
    const serverCount = (lc.match(/server\s*\{/g)||[]).length;
    if (serverCount < 1)
      return {success:false, message:'Necesitas al menos un bloque server { }.'};
    if (!lc.includes('listen'))     return {success:false, message:'Configura listen 80 y/o listen 443 dentro del server.'};
    if (!lc.includes('server_name')) return {success:false, message:'Configura server_name con el dominio.'};
    if (!lc.includes('location'))   return {success:false, message:'Añade bloques location { } para las diferentes rutas.'};
    const locationCount = (lc.match(/\blocation\b/g)||[]).length;
    if (locationCount < 2)          return {success:false, message:`Solo tienes ${locationCount} location. Añade al menos 2.`};
    if (!lc.includes('proxy_pass')) return {success:false, message:'Configura proxy_pass para reenviar requests al backend.'};
    if (!lc.includes('return 301') && !lc.includes('301'))
      return {success:false, message:'Añade redirección HTTP → HTTPS con return 301 https://...'};
    return {success:true, message:'¡nginx configurado! Tu servidor puede manejar millones de usuarios simultáneos. 🌐⚡'};
  }
}

] // end route3

}; // end LEVELS_DATA
