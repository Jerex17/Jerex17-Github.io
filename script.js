const listaCategorias = document.getElementById("listaCategorias");
const productosContenedor = document.getElementById("productos");
const buscador = document.getElementById("buscador");
const btnFiltrar = document.getElementById("btnFiltrar");
const precioMinInput = document.getElementById("precioMin");
const precioMaxInput = document.getElementById("precioMax");
const btnCarrito = document.getElementById("btnCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");

let categoriaSeleccionada = "cuerda";
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productos = [
  // CATEGORÍA: CUERDA
  { id: 1, nombre: "Yamaha Guitarra Electroacústica", categoria: "cuerda", marca: "Yamaha", precio: 400.00, descripcion: "Perfecta para Grabciones.", img: "yamahaP2.jpg" },
  { id: 2, nombre: "Roland Piano<br>Digital", categoria: "cuerda", marca: "Roland", precio: 1200.00, descripcion: "Con sonidos realistas.", img: "Roland_Digital.jpg" },
  { id: 3, nombre: "Stentor Violín<br>Profesional", categoria: "cuerda", marca: "Stentor", precio: 450.00, descripcion: "Sonido cálido y claro.", img: "violin_stentor.jpg" },
  { id: 4, nombre: "Kala Ukelele<br>Soprano", categoria: "cuerda", marca: "Kala", precio: 90.00, descripcion: "Compacto y alegre.", img: "ukelele-soprano-kala.jpg" },
  { id: 5, nombre: "Ibanez Guitarra Eléctrica", categoria: "cuerda", marca: "Ibanez", precio: 600.00, descripcion: "Ideal para rock y metal.", img: "Ibanez_electrica.jpg" },
  { id: 6, nombre: "Dunlop Capo Pro", categoria: "cuerda", marca: "Dunlop", precio: 30.00, descripcion: "Para cambios rápidos de tono.", img: "capo.jpg" },
  { id: 7, nombre: "Snark Air<br>Afinador Cromático", categoria: "cuerda", marca: "Snark", precio: 15.00, descripcion: "Alta precisión.", img: "cromatico.jpg" },
  { id: 24, nombre: "Yamaha Guitarra Clásica", categoria: "cuerda", marca: "Yamaha", precio: 350.00, descripcion: "Ideal para música clásica.", img: "yamahaP.jpg" },
  { id: 25, nombre: "Roland Piano Portátil", categoria: "cuerda", marca: "Roland", precio: 900.00, descripcion: "Compacto y fácil de transportar.", img: "RPD.jpg" },
  { id: 26, nombre: "Stentor Violín Estudiante", categoria: "cuerda", marca: "Stentor", precio: 280.00, descripcion: "Perfecto para principiantes.", img: "violin-stentor-student.jpg" },
  { id: 27, nombre: "Snark Afinador Clip", categoria: "cuerda", marca: "Snark", precio: 18.00, descripcion: "Para guitarra y otros instrumentos.", img: "afinador.jpg" },
  { id: 28, nombre: "Dunlop Rockman<br>Guitar Ace", categoria: "cuerda", marca: "Dunlop", precio: 40.00, descripcion: " Amplificador de auriculares.", img: "Rockman.jpg" },
  { id: 31, nombre: "Kala Ukelele Concert", categoria: "cuerda", marca: "Kala", precio: 130.00, descripcion: "Un poco más grande que el soprano, con buen tono.", img: "KalaConcert.jpg" },
  { id: 33, nombre: "Guitarra Clásica Yamaha", categoria: "cuerda", marca: "Yamaha", precio: 250.00, descripcion: "Perfecta para estudiantes.", img: "Guitarra_clasica.jpg" },
  { id: 45, nombre: "Piano Casio<br>PX-S3100", categoria: "cuerda", marca: "Casio", precio: 750.00, descripcion: "Ultra delgado y moderno.", img: "Cprivia.jpg" },
  { id: 60, nombre: "Piano Casio PX-770", categoria: "cuerda", marca: "Casio", precio: 700.00, descripcion: "Con mueble integrado para el hogar.", img: "Cprivia770.webp" },
  { id: 35, nombre: "Capo Dunlop", categoria: "cuerda", marca: "Dunlop", precio: 22.00, descripcion: "Compatible con varios instrumentos de cuerda.", img: "capouniversal.jpg" },
  { id: 38, nombre: "Snark two Funtion", categoria: "cuerda", marca: "Snark", precio: 25.00, descripcion: "Afinador cromático y metrónomo", img: "afinador-y-metronomo.jpg" },
  { id: 42, nombre: "Piano Casio<br>CT-X700", categoria: "cuerda", marca: "Casio", precio: 300.00, descripcion: "Ideal para principiantes con funciones educativas.", img: "pianocasio1.jpg" },
  { id: 68, nombre: "Casio Celviano<br>AP-270", categoria: "cuerda", marca: "Casio", precio: 1000.00, descripcion: "Piano digital con sonido realista.", img: "casioap270.jpg" },
  // CATEGORÍA: VIENTO
  { id: 8, nombre: "Yamaha<br>Flauta Dulce Alto", categoria: "viento", marca: "Yamaha", precio: 45.00, descripcion: "Para estudiantes.", img: "Flautadulce.jpg" },
  { id: 9, nombre: "Selmer<br>Saxofón Alto", categoria: "viento", marca: "Selmer", precio: 950.00, descripcion: "Sonido brillante.", img: "Saxofontenor.jpg" },
  { id: 10, nombre: "Bach<br>Trompeta", categoria: "viento", marca: "Bach", precio: 780.00, descripcion: "Ideal para bandas.", img: "Bachtrompeta.jpg" },
  { id: 11, nombre: "Buffet<br>Clarinete", categoria: "viento", marca: "Buffet", precio: 650.00, descripcion: "Sonido cálido.", img: "Buffetclarinete.jpg" },
  { id: 20, nombre: "LP<br>Flauta Traversa", categoria: "viento", marca: "Yamaha", precio: 350.00, descripcion: "Sonido dulce y expresivo.", img: "Flautatransversa.jpg" },
  { id: 21, nombre: "Selmer<br>Saxofón Tenor", categoria: "viento", marca: "Selmer", precio: 1200.00, descripcion: "Potente y versátil.", img: "saxofontenor2.jpg" },
  { id: 22, nombre: "Bach Trombón", categoria: "viento", marca: "Bach", precio: 900.00, descripcion: "Instrumento de viento con vara.", img: "Bachtrombone.jpg" },
  { id: 23, nombre: "Buffet Boquilla Clarinete", categoria: "viento", marca: "Buffet", precio: 75.00, descripcion: "Mejora el sonido.", img: "bachclarinete.jpg" },
  { id: 30, nombre: "Selmer Saxofón Soprano", categoria: "viento", marca: "Selmer", precio: 1100.00, descripcion: "Sonido claro y brillante.", img: "sopranoselmer.jpg" },
  { id: 34, nombre: "Bach Trombón Tenor", categoria: "viento", marca: "Bach", precio: 850.00, descripcion: "Instrumento de viento de gran proyección.", img: "bachtrombone24.jpg" },
  { id: 36, nombre: " Yamaha Flauta Barroca", categoria: "viento", marca: "Yamaha", precio: 420.00, descripcion: "Para músicos clásicos y barrocos.", img: "Berrocayamaha.jpg" },

  // CATEGORÍA: PERCUSIÓN
  { id: 12, nombre: "Mapex Batería Acústica", categoria: "percusion", marca: "Mapex", precio: 800.00, descripcion: "Ideal para profesionales.", img: "Mapex.webp" },
  { id: 13, nombre: "Meinl Cajón<br>Flamenco", categoria: "percusion", marca: "Meinl", precio: 180.00, descripcion: "Ideal para acústicos.", img: "Cajonpercusion.jpg" },
  { id: 14, nombre: " Toca Djembe<br>Africano", categoria: "percusion", marca: "Toca", precio: 210.00, descripcion: "Percusión tradicional.", img: "Djembe.jpg" },
  { id: 15, nombre: "LP Congas", categoria: "percusion", marca: "LP", precio: 520.00, descripcion: "Perfectas para salsa y merengue.", img: "lpCongas.webp" },
  { id: 16, nombre: "Mapex Crash 18\"", categoria: "percusion", marca: "Mapex", precio: 150.00, descripcion: "Sonido brillante para momentos destacados.", img: "mapex18.jpg" },
  { id: 17, nombre: "Vic Firth Baquetas Profesionales", categoria: "percusion", marca: "Vic Firth", precio: 25.00, descripcion: "Perfectas para batería.", img: "baquetasVic.jpg" },
  { id: 18, nombre: "Toca Darbuka", categoria: "percusion", marca: "Toca", precio: 175.00, descripcion: "Percusión de mano con sonido distintivo.", img: "toca1.jpg" },
  { id: 19, nombre: "LP Cencerro", categoria: "percusion", marca: "LP", precio: 60.00, descripcion: "Ideal para ritmos<br>latinos.", img: "lpCencerros.jpg" },
  { id: 29, nombre: "Meinl Bongos Mini", categoria: "percusion", marca: "Meinl", precio: 170.00, descripcion: "Con gran sonido para principiantes.", img: "MeinlB.jpg" },
  { id: 32, nombre: "Toca Djembe<br>Pro stand", categoria: "percusion", marca: "Toca", precio: 230.00, descripcion: "Stand de alta calidad.", img: "toca2.avif" },
  { id: 37, nombre: "Caja Flamenca Meinl", categoria: "percusion", marca: "Meinl", precio: 240.00, descripcion: "Sonido profundo para flamenco.", img: "cajonpro.png" },
    { "id": 39, "nombre": "Sabian<br>Crash 16\"", "categoria": "percusion", "marca": "Sabian", "precio": 170.00, "descripcion": "Sonido cálido y brillante.", img: "Sabian-CYMBAL-SBR-16-CRASH.jpg" },
    { "id": 40, "nombre": "Zildjian Hi-Hat 14\"", "categoria": "percusion", "marca": "Zildjian", "precio": 300.00, "descripcion": "Sonido profesional y brillante.", "img": "hi-hat14.webp" },
    { "id": 41, "nombre": "Tambor Yamaha<br>Recording Custom", "categoria": "percusion", "marca": "Yamaha", "precio": 250.00, "descripcion": " Aluminio 14” x 6,5”.", "img": "yamahatarola.webp" },
    { "id": 44, "nombre": "Sabian SBR O-Zone Crash 16\"", "categoria": "percusion", "marca": "Sabian", "precio": 200.00, "descripcion": "Sonido aireado y trashy.", "img": "Sabianplatillo.jpg" },
    { "id": 46, "nombre": "Zildjian Trash 18\"", "categoria": "percusion", "marca": "Zildjian", "precio": 200.00, "descripcion": "Con perforaciones para un sonido crudo.", "img": "platillo18s.jpg" },
    { "id": 47, "nombre": " Alexis Black<br>nitro mesh", "categoria": "percusion", "marca": "Alexis", "precio": 200.00, "descripcion": "Bateria realista y profesional", "img": "alexis1.png" },
    { "id": 49, "nombre": "Sabian AA Series 14\"", "categoria": "percusion", "marca": "Sabian", "precio": 240.00, "descripcion": "Hi-Hat Sonido<br>definido y controlado.", "img": "Sabian_AA.webp" },
    { "id": 54, "nombre": "Alesis Debut Kit", "categoria": "percusion", "marca": "Alexis", "precio": 225.00, "descripcion": "Bateria Diseñada<br>para principiantes", "img": "alexis2.webp" },
    { "id": 50, "nombre": "Mapex Batería Rock", "categoria": "percusion", "marca": "Mapex", "precio": 950.00, "descripcion": "Diseñada para<br>escenarios grandes.", "img": "MapexRock.jpg" },
    { "id": 53, "nombre": "Mapex Batería<br>Jazz Fusion", "categoria": "percusion", "marca": "Mapex", "precio": 850.00, "descripcion": "Ideal para jazz moderno.", "img": "mapexjazz.jpg" },
    { "id": 52, "nombre": "Tambora Lp", "categoria": "percusion", "marca": "LP", "precio": 190.00, "descripcion": "PEerfecta para Merengue y Salsa.", "img": "TamboraLp.jpg" },
    { "id": 56, "nombre": "Sabian SBR<br>Splash 10\"", "categoria": "percusion", "marca": "Sabian", "precio": 110.00, "descripcion": "Para rellenos rápidos.", "img": "splashsbr.webp" },
    { "id": 43, "nombre": "Zildjian K<br>Splash 10\"", "categoria": "percusion", "marca": "Zildjian", "precio": 115.00, "descripcion": "Ideal para acentos rápidos.", "img": "zsplash10.jpg" },
    { "id": 57, "nombre": "SABIAN 18\" XSR Fast Crash Cymbal", "categoria": "percusion", "marca": "Sabian", "precio": 190.00, "descripcion": "Sonido explosivo", "img": "Sabian18.webp" },
    { "id": 65, "nombre": "Sabian China 18\"", "categoria": "percusion", "marca": "Sabian", "precio": 185.00, "descripcion": "Impacto<br>seco y agresivo.", "img": "sabianchina18.jpg" },
    { "id": 69, "nombre": "Zildjian China 18\"", "categoria": "percusion", "marca": "Zildjian", "precio": 195.00, "descripcion": "Sonido<br>explosivo y corto.", "img": "zildjian18.jpg" },
    { "id": 62, "nombre": "Sabian SBR RIDE 20\"", "categoria": "percusion", "marca": "Sabian", "precio": 215.00, "descripcion": "Resonancia clara y duradera.", "img": "sabian-sbr-ride-20.jpg" },
    { "id": 67, "nombre": "Zildjian ZBT<br>RIDE 20\"", "categoria": "percusion", "marca": "Zildjian", "precio": 210.00, "descripcion": "Ideal para jazz y rock.", "img": "Zidjian20.jpg" },
    { "id": 63, "nombre": "Meinl Trash Crash 18\"", "categoria": "percusion", "marca": "Meinl", "precio": 210.00, "descripcion": "Perfecto para todos los géneros.", "img": "meinl18.jpg" },
    { "id": 59, "nombre": "Yamaha Stage Custom", "categoria": "percusion", "marca": "Yamaha", "precio": 980.00, "descripcion": "Alta calidad para<br>estudio y escenario.", "img": "YamahaStage.jpg" },
    { "id": 61, "nombre": "Yamaha Rydeen", "categoria": "percusion", "marca": "Yamaha", "precio": 870.00, "descripcion": "Buena opción para principiantes avanzados.", "img": "YamahaRydeen.jpg" },
    { "id": 66, "nombre": "Yamaha Live<br>Custom Hybrid Oak", "categoria": "percusion", "marca": "Yamaha", "precio": 1500.00, "descripcion": "Diseñada para músicos profesionales.", "img": "yamahalive.jpg" }
];

function actualizarMarcas() {
  const marcasUnicas = [...new Set(
    productos
      .filter(p => p.categoria === categoriaSeleccionada)
      .map(p => p.marca)
  )];

  const contenedorMarcas = document.getElementById("contenedorMarcas");
  contenedorMarcas.innerHTML = "";

  marcasUnicas.forEach(marca => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" class="marca" value="${marca}"> ${marca}`;
    contenedorMarcas.appendChild(label);
  });

  contenedorMarcas.onclick = (e) => {
    if (e.target.classList.contains("marca")) {
      mostrarProductos();
    }
  };
}

function mostrarProductos() {
  const textoBusqueda = buscador.value.trim().toLowerCase();
  const precioMin = parseFloat(precioMinInput.value) || 0;
  const precioMax = parseFloat(precioMaxInput.value) || Infinity;

  const marcasCheckboxes = document.querySelectorAll("#contenedorMarcas .marca");
  const marcasSeleccionadas = [...marcasCheckboxes]
    .filter(chk => chk.checked)
    .map(chk => chk.value);

  const filtrados = productos.filter(p => {
    const enCategoria = p.categoria === categoriaSeleccionada;
    const enMarca = marcasSeleccionadas.length ? marcasSeleccionadas.includes(p.marca) : true;
    const enPrecio = p.precio >= precioMin && p.precio <= precioMax;
    const enBusqueda = p.nombre.toLowerCase().includes(textoBusqueda) || p.descripcion.toLowerCase().includes(textoBusqueda);
    return enCategoria && enMarca && enPrecio && enBusqueda;
  });

  productosContenedor.innerHTML = "";

  if (filtrados.length === 0) {
    productosContenedor.innerHTML = "<p>No hay productos que coincidan.</p>";
    return;
  }

  filtrados.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}" />
      <h4>${producto.nombre}</h4>
      <p>${producto.descripcion}</p>
      <div class="precio">$${producto.precio.toFixed(2)}</div>
      <button class="btnAgregar" data-id="${producto.id}" style="background: #ffc107; color: white;">Agregar</button>
    `;
    productosContenedor.appendChild(div);
  });
}

productosContenedor.onclick = (e) => {
  if (e.target.classList.contains("btnAgregar")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    agregarAlCarrito(id);
  }
};

listaCategorias.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    [...listaCategorias.children].forEach(li => li.classList.remove("activo"));
    e.target.classList.add("activo");
    categoriaSeleccionada = e.target.getAttribute("data-categoria");
    actualizarMarcas();
    mostrarProductos();
  }
});

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const enCarrito = carrito.find(item => item.id === id);
  if (enCarrito) {
    enCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cantidadCarrito.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarMarcas();
  mostrarProductos();
  actualizarCarrito();
});


buscador.addEventListener("input", mostrarProductos);
btnFiltrar.addEventListener("click", mostrarProductos);
