// Función para generar los elementos del carrusel de películas sugeridas
function generateCarousel(category) {
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel-item container carrusel-sugeridas1 active"; // Solo la primera categoría será activa por defecto

  const row = document.createElement("div");
  row.className = "row d-flex justify-content-center mx-1";

  // Aquí debes agregar las imágenes y enlaces correspondientes para cada película en la categoría
  // Puedes usar un bucle para simplificar esto

  carouselItem.appendChild(row);

  return carouselItem;
}

// Función para configurar los elementos de la página
function setupPage() {
  const carouselContainer = document.querySelector("#carouselSugeridas");

  // Aquí llamamos a la función generateCarousel para cada categoría y la agregamos al carrusel
  const categories = ["CATEGORIA 1", "CATEGORIA 2", "CATEGORIA 3"];
  for (const category of categories) {
    const carouselItem = generateCarousel(category);
    carouselContainer.appendChild(carouselItem);
  }
}

// Llamamos a la función de configuración cuando se cargue la página
window.onload = setupPage;

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

const $submit = document.getElementById("submit"),
    $Password = document.getElementById("Password"),
    $Username = document.getElementById("Username"),
    $Visible = document.getElementById("Visible");

document.addEventListener("change", (e) => {
    if (e.target === $Visible) {
        if ($Visible.checked === false) $Password.type = "password";
        else $Password.type = "text";
    }
});

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        e.preventDefault();
        
        const usernameValue = $Username.value.trim();
        const passwordValue = $Password.value;

        if (usernameValue === "" || passwordValue === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        // Verificar las credenciales del administrador
        if (usernameValue === "admin@gmail.com" && passwordValue === "admin123") {
            window.location.href = "http://127.0.0.1:5500/pages/administradorWeb.html";
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    }
});


