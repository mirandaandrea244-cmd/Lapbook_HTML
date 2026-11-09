// ===== DATOS DEL LAPBOOK (edita aquí los textos) =====
const T = [
{id:'html',em:'🏗️',n:'HTML',sub:'El esqueleto',c:'#e44d26',r:'-3deg',
 concepto:'HTML (HyperText Markup Language) es el lenguaje de marcado que da estructura a una página: le dice al navegador qué es un título, un párrafo, una imagen o un enlace.',
 elementos:[['<h1>','Título principal de la página'],['<p>','Párrafo de texto'],['<a href>','Enlace a otra página'],['<img src>','Inserta una imagen'],['<ul><li>','Listas con viñetas'],['<form>','Formulario para enviar datos'],['<div>','Caja contenedora para agrupar']],
 ventajas:[['🌍','Universal','Todos los navegadores lo entienden.'],['📚','Fácil de aprender','Etiquetas simples y legibles.'],['🆓','Gratis y abierto','No necesitas licencias.'],['🔎','Buen SEO','Una estructura clara ayuda a buscadores.']],
 func:'El navegador lee el archivo .html de arriba hacia abajo, convierte cada etiqueta en un nodo del árbol DOM y lo dibuja en pantalla.',
 kind:'web',
 code:`<h1>¡Hola, mundo! 🌎</h1>
<p>Esta es mi <b>primera</b> página.</p>
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
<a href="#">Un enlace</a>`},
{id:'css',em:'🎨',n:'CSS',sub:'El estilo',c:'#2965f1',r:'2deg',
 concepto:'CSS (Cascading Style Sheets) controla cómo se ve el HTML: colores, tipografías, tamaños, espacios y animaciones.',
 elementos:[['selector','A quién se aplica: p, .clase, #id'],['propiedad','Qué cambia: color, margin, font-size'],['valor','Cómo cambia: red, 20px, center'],['flexbox','Alinea elementos en fila o columna'],['grid','Cuadrículas de filas y columnas'],['@media','Estilos distintos según el tamaño de pantalla'],['animation','Movimiento sin JavaScript']],
 ventajas:[['💅','Diseño bonito','Separa la apariencia del contenido.'],['♻️','Reutilizable','Un archivo estiliza muchas páginas.'],['📱','Responsive','Se adapta a celular y PC.'],['⚡','Rápido de cambiar','Cambias un color y se actualiza todo.']],
 func:'El navegador une el HTML con las reglas CSS (cascada y especificidad) y calcula cómo pintar cada elemento.',
 kind:'web',
 code:`<h1 class="titulo">Hola CSS</h1>
<button class="btn">Pásame el mouse</button>
<style>
 body{font-family:sans-serif;text-align:center}
 .titulo{color:#2965f1;font-size:2rem}
 .btn{background:#ff6b6b;color:#fff;border:0;padding:12px 20px;border-radius:30px;transition:.3s}
 .btn:hover{transform:scale(1.2) rotate(-4deg);background:#f7b731}
</style>`},
{id:'js',em:'⚡',n:'JavaScript',sub:'La acción',c:'#d9a600',r:'-2deg',
 concepto:'JavaScript es el lenguaje de programación de la web: hace que la página reaccione a clics, valide formularios y cambie sin recargar.',
 elementos:[['variables','let y const guardan datos'],['funciones','Bloques de código reutilizables'],['if / else','Toman decisiones'],['for / while','Repiten acciones'],['eventos','click, input, submit...'],['DOM','document.querySelector() modifica la página'],['fetch','Pide datos a un servidor']],
 ventajas:[['🕹️','Interactividad','Botones, juegos, menús, animaciones.'],['🖥️','Corre en el navegador','No necesita instalar nada.'],['🌐','Gran comunidad','Miles de librerías y ayuda.'],['🔁','Full stack','También funciona en servidores (Node.js).']],
 func:'El motor del navegador ejecuta el código, escucha eventos del usuario y modifica el DOM en tiempo real.',
 kind:'web',
 code:`<h2 id="n">0</h2>
<button id="b">¡Suma uno! ➕</button>
<script>
 let cont = 0;
 document.getElementById('b').addEventListener('click', () => {
   cont++;
   document.getElementById('n').textContent = cont;
   if (cont % 5 === 0) alert('🎉 ¡Llegaste a ' + cont + '!');
 });
</script>`},
{id:'jinja',em:'🧪',n:'Jinja',sub:'Plantillas dinámicas',c:'#8e44ad',r:'3deg',
 concepto:'Jinja es un motor de plantillas de Python (usado en Flask). Permite escribir HTML con variables, condiciones y bucles que se llenan con datos del servidor.',
 elementos:[['{{ variable }}','Muestra un valor'],['{% for %}','Repite un bloque por cada elemento'],['{% if %}','Muestra algo solo si se cumple una condición'],['{% extends %}','Hereda una plantilla base'],['{% block %}','Zona que cada página puede reemplazar'],['{{ x|upper }}','Filtros que transforman datos'],['{# #}','Comentarios']],
 ventajas:[['🧬','Herencia','Un layout base para todas las páginas.'],['🔄','HTML dinámico','Lista de datos sin copiar y pegar.'],['🛡️','Escapa HTML','Ayuda a evitar ataques XSS.'],['🧹','Código ordenado','Separa lógica (Python) de vista (HTML).']],
 func:'Flask recibe una petición, ejecuta Python, envía los datos a render_template() y Jinja devuelve un HTML final ya completo.',
 kind:'sim',
 code:`<!-- templates/index.html -->
<h1>Hola, {{ nombre|upper }}</h1>
<ul>
{% for f in frutas %}
  <li>{{ f }}</li>
{% endfor %}
</ul>
{% if frutas|length > 2 %}
  <p>¡Mucha fruta! 🍓</p>
{% endif %}

# app.py: render_template('index.html',
#   nombre='ana', frutas=['🍎 Manzana','🍌 Banano','🍇 Uva'])`,
 out:`<h1>Hola, ANA</h1><ul><li>🍎 Manzana</li><li>🍌 Banano</li><li>🍇 Uva</li></ul><p>¡Mucha fruta! 🍓</p>`},
{id:'sql',em:'🗄️',n:'SQL',sub:'Los datos',c:'#16a085',r:'-3deg',
 concepto:'SQL (Structured Query Language) sirve para crear, consultar, modificar y borrar datos guardados en bases de datos relacionales (tablas).',
 elementos:[['SELECT','Elegir columnas a mostrar'],['FROM','De qué tabla'],['WHERE','Filtrar filas'],['INSERT INTO','Agregar un registro'],['UPDATE','Modificar registros'],['DELETE','Eliminar registros'],['JOIN','Unir tablas relacionadas']],
 ventajas:[['🧱','Datos organizados','Tablas con filas y columnas.'],['🔐','Integridad','Claves primarias y foráneas evitan errores.'],['🚀','Consultas potentes','Filtra millones de datos en segundos.'],['🏢','Estándar','MySQL, PostgreSQL, SQLite y más.']],
 func:'Tu aplicación envía una consulta, el gestor de base de datos la analiza, busca en las tablas y devuelve solo las filas pedidas.',
 kind:'sim',
 code:`SELECT nombre, edad
FROM estudiantes
WHERE edad >= 15
ORDER BY edad DESC;`,
 out:`<table><tr><th>nombre</th><th>edad</th></tr><tr><td>Luis</td><td>17</td></tr><tr><td>Ana</td><td>16</td></tr><tr><td>Sofi</td><td>15</td></tr></table><small>3 filas devueltas (Mateo, 14 años, quedó fuera por el WHERE)</small>`}
];
// ===== LÓGICA DEL LAPBOOK =====
const $=s=>document.querySelector(s), esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const SEC=[['📖','Concepto'],['🧩','Elementos'],['⭐','Ventajas'],['⚙️','Funcionalidad'],['🧪','Ejemplo']];
const VIAJE=[['🖱️','Pide','El navegador pide la página al servidor.'],['🧪','Jinja arma','Flask y Jinja mezclan la plantilla con los datos.'],['🗄️','SQL busca','La base de datos devuelve la información.'],['🎨','Se ve','HTML estructura, CSS decora y JS da vida.']];
const RETOS=[
 {q:'¿Qué lenguaje da la estructura a una página?',o:['HTML','CSS','SQL'],a:0},
 {q:'¿Qué etiqueta crea un enlace?',o:['<img>','<a>','<p>'],a:1},
 {q:'¿Cómo se muestra una variable en Jinja?',o:['{{ nombre }}','<nombre>','$nombre'],a:0},
 {q:'¿Qué comando de SQL consulta datos?',o:['INSERT','DELETE','SELECT'],a:2},
 {q:'¿Qué lenguaje hace que un botón reaccione al clic?',o:['CSS','JavaScript','HTML'],a:1}];
let cur=0,pg=0,rot=0,ri=0;

// Título de colores
const cl=['#ff6b4a','#4d8bff','#f5b700','#b06cff','#3ec6a0'];
$('#mega').innerHTML=[...'LAPBOOK WEB'].map((c,i)=>c===' '?' ':`<span style="color:${cl[i%5]}">${c}</span>`).join('');

// Abrir / cerrar carpeta
document.querySelectorAll('.door').forEach(d=>d.onclick=()=>{$('#lap').classList.add('open');$('#hint').textContent='✨ ¡Toca una bolsita, gira la ruleta o abre un sobre!'});
$('#shut').onclick=()=>{$('#lap').classList.remove('open');$('#hint').textContent='👇 Toca la carpeta para abrirla'};

// Bolsitas
T.forEach((t,i)=>{const b=document.createElement('button');b.className='pk';b.style.setProperty('--c',t.c);
 b.innerHTML=`<span class="em">${t.em}</span><span>${t.n}<small>${t.sub}</small></span>`;b.onclick=()=>openBook(i);$('#pockets').appendChild(b)});

// Viaje de una página (tarjetas que se voltean)
$('#fold').innerHTML=VIAJE.map(v=>`<button class="flip"><i class="f"><span>${v[0]}</span>${v[1]}</i><i class="b">${v[2]}</i></button>`).join('');
document.querySelectorAll('#fold .flip').forEach(f=>f.onclick=()=>f.classList.toggle('on'));

// Ruleta
$('#wheel').style.background=`conic-gradient(${T.map((t,i)=>`${t.c} ${i*72}deg ${(i+1)*72}deg`).join(',')})`;
$('#wheel').innerHTML=T.map((t,i)=>`<span style="transform:translate(-50%,-50%) rotate(${36+72*i}deg) translateY(-64px)">${t.em}</span>`).join('');
$('#spin').onclick=()=>{const i=Math.floor(Math.random()*T.length),c=36+72*i;
 rot=Math.ceil(rot/360)*360+1440+(360-c);$('#wheel').style.transform=`rotate(${rot}deg)`;$('#spin').disabled=true;
 setTimeout(()=>{$('#spin').disabled=false;burst();openBook(i)},3100)};

// Sobres
$('#reto').onclick=()=>{const r=RETOS[ri++%RETOS.length],n=$('#note');n.hidden=false;
 n.innerHTML=`<b>✉️ Reto</b><p>${esc(r.q)}</p>`+r.o.map((o,k)=>`<button class="op" data-k="${k}">${esc(o)}</button>`).join('')+'<b id="fb"></b>';
 n.querySelectorAll('.op').forEach(b=>b.onclick=()=>{const ok=+b.dataset.k===r.a;b.classList.add(ok?'ok':'no');$('#fb').textContent=ok?'🎉 ¡Correcto!':'🤔 Casi, ¡intenta otra!';if(ok)burst()})};
$('#comp').onclick=()=>{const n=$('#note');n.hidden=false;
 n.innerHTML='<b>💌 Mi compromiso</b><p>Me comprometo a practicar un poquito cada día y crear algo nuevo.</p><button class="op" id="yes">Me comprometo 💪</button>';
 $('#yes').onclick=()=>{burst();$('#yes').textContent='¡Genial, a programar! 🚀'}};

function burst(){for(let i=0;i<26;i++){const s=document.createElement('span');s.className='conf';s.textContent=['⭐','🎉','💖','✨','🌈'][i%5];
 s.style.left=Math.random()*100+'vw';s.style.animationDelay=Math.random()*.6+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),3200)}}

// ===== Mini libro =====
function openBook(i){cur=i;pg=0;$('#modal').hidden=false;render(true)}
function go(k){if(k<0||k>4||k===pg)return;pg=k;render(true)}
$('#x').onclick=()=>$('#modal').hidden=true;
$('#prev').onclick=()=>go(pg-1);$('#next').onclick=()=>go(pg+1);
$('#dots').onclick=e=>{const b=e.target.closest('.bm');if(b)go(+b.dataset.k)};
document.onkeydown=e=>{if($('#modal').hidden)return;if(e.key==='Escape')$('#modal').hidden=true;if(e.key==='ArrowRight')go(pg+1);if(e.key==='ArrowLeft')go(pg-1)};

function render(turn){const t=T[cur];$('#modal').style.setProperty('--c',t.c);
 $('#pl').innerHTML=`<div><div class="bigem">${t.em}</div><h2>${t.n}</h2><p>${t.sub}</p><small>Página ${pg+1} de 5</small></div>`;
 const pr=$('#pr');pr.innerHTML=`<h3>${SEC[pg][0]} ${SEC[pg][1]}</h3><div id="body"></div>`;
 $('#dots').innerHTML=SEC.map((s,k)=>`<button class="bm${k===pg?' on':''}" data-k="${k}" title="${s[1]}">${s[0]}</button>`).join('');
 body(t,$('#body'));
 if(turn){pr.classList.remove('turn');void pr.offsetWidth;pr.classList.add('turn')}}

function body(t,c){
 if(pg===0)c.innerHTML=`<p>${t.concepto}</p>`;
 if(pg===3)c.innerHTML=`<p>${t.func}</p>`;
 if(pg===1){c.innerHTML=`<p>Toca cada elemento:</p><div class="chips">${t.elementos.map((e,k)=>`<button class="chip" data-k="${k}">${esc(e[0])}</button>`).join('')}</div><div class="say" id="say">👆 Elige uno.</div>`;
  c.querySelectorAll('.chip').forEach(ch=>ch.onclick=()=>{c.querySelectorAll('.chip').forEach(x=>x.classList.remove('on'));ch.classList.add('on');$('#say').textContent=t.elementos[ch.dataset.k][1]})}
 if(pg===2){c.innerHTML=`<p>Toca las tarjetas para voltearlas:</p><div class="flips">${t.ventajas.map(v=>`<button class="flip"><i class="f"><span>${v[0]}</span>${v[1]}</i><i class="b">${v[2]}</i></button>`).join('')}</div>`;
  c.querySelectorAll('.flip').forEach(f=>f.onclick=()=>f.classList.toggle('on'))}
 if(pg===4){
  if(t.kind==='web'){c.innerHTML=`<textarea id="code" spellcheck="false">${esc(t.code)}</textarea><button class="run" id="go">▶ Ejecutar</button><iframe id="view" title="Resultado" sandbox="allow-scripts allow-modals"></iframe>`;
   const run=()=>$('#view').srcdoc=$('#code').value;$('#go').onclick=run;run()}
  else{c.innerHTML=`<pre>${esc(t.code)}</pre><button class="run" id="go">▶ Ejecutar</button><div class="out" id="res">Pulsa Ejecutar para ver el resultado.</div>`;$('#go').onclick=()=>$('#res').innerHTML=t.out}}}
