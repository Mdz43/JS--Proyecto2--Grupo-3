class Pelicula {
    constructor(nombrePelicula, categoria, peliculaId, descripcion, publicado) {
        this.nombrePelicula = nombrePelicula;
        this.categoria = categoria;
        this.peliculaId = peliculaId;
        this.descripcion = descripcion;
        this.publicado = publicado;
    }
}

let peliculas = [
    new Pelicula('Oppenheimer', 'Accion', 'fwef32f23', 'película biográfica que se centra en la vida del físico teórico Robert Oppenheimer...', false),
    new Pelicula('The Batman', ' Accion', 'j3idofdv', 'Bruce Wayne lleva años acechando las calles de la ciudad como Batman...', false)
];

class Tabla {
    constructor(tablaId) {
        this.tablaId = tablaId;
    }
}

function submitForm(event) {
    event.preventDefault()
}


let nombreTabla = new Tabla('Pelis');

const nuevaLista = document.createElement('table');
nuevaLista.id = nombreTabla.tablaId;
nuevaLista.classList.add('table');
nuevaLista.innerHTML = `<tr><th class="textList">Pelicula</th><th class="textList">Categoria</th><th class="textList">Descripcion</th><th>Publicado</th><th class="textList">Acciones</th></tr>`;
const padreContainer = document.getElementById('TableAdmi');
padreContainer.appendChild(nuevaLista);



peliculas.forEach(listaPelis => {
    const contenidoTabla = document.createElement('tr');
    contenidoTabla.id = listaPelis.peliculaId;
    contenidoTabla.innerHTML = `<td>${listaPelis.nombrePelicula}</td><td>${listaPelis.categoria}</td><td>${listaPelis.descripcion}</td><td><input type="checkbox" name="Publicado" ${listaPelis.publicado ? 'checked' : ''} onclick="publicar()" /></td><td>
    <button onclick='eliminarPelicula("${listaPelis.peliculaId}")' style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='editarPelicula(${listaPelis.peliculaId})' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;
    nuevaLista.appendChild(contenidoTabla);
});

class Modal {
    constructor(modalId) {
        this.modalId = modalId;
    }
}
let nombreModal = new Modal('ModalPelis');

const modalAdd = document.createElement('div')
modalAdd.id = nombreModal.modalId;
modalAdd.innerHTML = `<div id="TableAdmi"></div>
	<div class="tabla-pelis"></div>

	<table class="table" style="margin-top: 20px" id="tablaPeliculas"></table>
	<div class="agregarpeliculas d-flex justify-content-end">
		<button type="button" class="btn btn-secondary boton-agregar-peliculas" data-bs-toggle="modal"
			data-bs-target="#exampleModal" data-bs-whatever="@mdo">
			Nueva Pelicula
		</button>
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="exampleModalLabel">
							Agregar nueva pelicula
						</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="mb-3">
								<label for="nombrePeli" class="col-form-label m-1">Nombre:</label>
								<input type="text" class="form-control" id="nombrePeli" />
							</div>
							<div class="mb-3">
								<label for="descripcionPeli" class="col-form-label">Categoria:</label>
								<input type="text" class="form-control" id="categoriaPeli" />
							</div>
							<div class="mb-3">
								<label for="descripcionPeli" class="col-form-label">Descripcion:</label>
								<textarea class="form-control" id="descripcionPeli"></textarea>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
							Cancelar
						</button>
						<button type="button" class="btn btn-primary" onclick="agregarPelicula(event)">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>`
const padreContainerModal = document.getElementById('modalAddMovies');
padreContainerModal.appendChild(modalAdd);





function agregarPelicula(event) {
    event.preventDefault();
    const nombrePeli = document.getElementById("nombrePeli");
    const nombrePeliText = nombrePeli.value;
    const categoriaPeli = document.getElementById("categoriaPeli");
    const categoriaPeliText = categoriaPeli.value;
    const id = new Date().getTime();
    const peliculaId = id
    const descripcionPeli = document.getElementById("descripcionPeli");
    const descripcionPeliText = descripcionPeli.value;
    peliculas.push(new Pelicula(nombrePeliText, categoriaPeliText, peliculaId, descripcionPeliText, false));
    console.log(peliculas)
    const contenidoTabla = document.createElement('tr');
    contenidoTabla.id = peliculaId;
    contenidoTabla.innerHTML = `<td>${nombrePeliText}</td><td>${categoriaPeliText}</td><td>${descripcionPeliText}</td><td><input type="checkbox" name="Publicado" ${this.publicado ? 'checked' : ''} onclick="publicar()" /></td><td>
    <button onclick="eliminarPelicula(${id})" style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='editarPelicula(${id})' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;
    nuevaLista.appendChild(contenidoTabla);
    document.querySelector("form").reset();
    console.log(contenidoTabla.id)
    guardarEnLocalStorage(peliculas);
}
function guardarEnLocalStorage(peliculas) {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
}
function cargarPeliculasDesdeLocalStorage() {
    const peliculasGuardadas = localStorage.getItem('peliculas');
    if (peliculasGuardadas) {
        peliculas = JSON.parse(peliculasGuardadas);
    }
}

let peliculaEditandoId = null;
let modoEdicion = false;
function editarPelicula(id) {
    const peliculaIndex = peliculas.findIndex(pelicula => pelicula.peliculaId === id);

    if (peliculaIndex !== -1) {
        const pelicula = peliculas[peliculaIndex];
        const nombrePeli = document.getElementById("nombrePeli");
        const categoriaPeli = document.getElementById("categoriaPeli");
        const descripcionPeli = document.getElementById("descripcionPeli");

        // Llenar el formulario con los datos de la película
        nombrePeli.value = pelicula.nombrePelicula;
        categoriaPeli.value = pelicula.categoria;
        descripcionPeli.value = pelicula.descripcion;

        // Actualizar el botón "Guardar" eliminando el listener anterior y agregando uno nuevo
        const botonGuardar = document.querySelector("#exampleModal .btn-primary");
        botonGuardar.removeEventListener("click", guardarEdicion);
        botonGuardar.addEventListener("click", () => guardarEdicion(peliculaIndex));


        // Actualizar el título del modal
        const modalTitulo = document.querySelector("#exampleModal .modal-title");
        modalTitulo.textContent = "Editar película";

        // Mostrar el modal
        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();

    }
}
function guardarEdicion(index) {
    const nombrePeli = document.getElementById("nombrePeli").value;
    const categoriaPeli = document.getElementById("categoriaPeli").value;
    const descripcionPeli = document.getElementById("descripcionPeli").value;

    // Actualizar la película en el array
    peliculas[index].nombrePelicula = nombrePeli;
    peliculas[index].categoria = categoriaPeli;
    peliculas[index].descripcion = descripcionPeli;

    // Eliminar la fila anterior de la tabla
    const filaAnterior = document.getElementById(peliculas[index].peliculaId);
    filaAnterior.remove();

    // Agregar la nueva fila actualizada a la tabla
    const nuevaFila = document.createElement('tr');
    nuevaFila.id = peliculas[index].peliculaId;
    nuevaFila.innerHTML = `<td>${nombrePeli}</td><td>${categoriaPeli}</td><td>${descripcionPeli}</td><td><input type="checkbox" name="Publicado" ${peliculas[index].publicado ? 'checked' : ''} onclick="publicar()" /></td><td>
    <button onclick='eliminarPelicula("${peliculas[index].peliculaId}")' style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='editarPelicula("${peliculas[index].peliculaId}")' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;

    nuevaLista.appendChild(nuevaFila);







    function eliminarPelicula(id) {
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta película?");

        if (confirmacion) {
            const peliAEliminar = document.getElementById(id);
            peliAEliminar.remove();
            peliculas = peliculas.filter(pelicula => pelicula.peliculaId !== id);
            guardarEnLocalStorage(peliculas);
        }
    }

    function publicar(params) {

    }

    let peliculaEditandoId = null;
    let modoEdicion = false;
    function editarPelicula(id) {
        const peliculaIndex = peliculas.findIndex(pelicula => pelicula.peliculaId === id);

        if (peliculaIndex !== -1) {
            const pelicula = peliculas[peliculaIndex];
            const nombrePeli = document.getElementById("nombrePeli");
            const categoriaPeli = document.getElementById("categoriaPeli");
            const descripcionPeli = document.getElementById("descripcionPeli");

            // Llenar el formulario con los datos de la película
            nombrePeli.value = pelicula.nombrePelicula;
            categoriaPeli.value = pelicula.categoria;
            descripcionPeli.value = pelicula.descripcion;

            // Actualizar el botón "Guardar" eliminando el listener anterior y agregando uno nuevo
            const botonGuardar = document.querySelector("#exampleModal .btn-primary");
            botonGuardar.removeEventListener("click", guardarEdicion);
            botonGuardar.addEventListener("click", () => guardarEdicion(peliculaIndex));


            // Actualizar el título del modal
            const modalTitulo = document.querySelector("#exampleModal .modal-title");
            modalTitulo.textContent = "Editar película";

            // Mostrar el modal
            const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();

        }
    }


    function guardarEdicion(index) {
        const nombrePeli = document.getElementById("nombrePeli").value;
        const categoriaPeli = document.getElementById("categoriaPeli").value;
        const descripcionPeli = document.getElementById("descripcionPeli").value;

        // Actualizar la película en el array
        peliculas[index].nombrePelicula = nombrePeli;
        peliculas[index].categoria = categoriaPeli;
        peliculas[index].descripcion = descripcionPeli;

        // Actualizar la película en el almacenamiento local
        guardarEnLocalStorage(peliculas);

        // Eliminar la fila anterior de la tabla
        const filaAnterior = document.getElementById(peliculas[index].peliculaId);
        filaAnterior.remove();

        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
        modal.hide();

        // Limpiar el formulario
        document.querySelector("form").reset();
    }
    function agregarAlCarrusel(pelicula) {
        const carrusel = document.querySelector("#carouselSugeridas .carousel-inner");
        const nuevaPeliculaCarrusel = document.createElement("div");
        nuevaPeliculaCarrusel.className = "carousel-item"; // Ajusta las clases según tu diseño
        nuevaPeliculaCarrusel.innerHTML = `
        <div class="pelicula-info">
            <h2>${pelicula.nombrePelicula}</h2>
            <p>${pelicula.descripcion}</p>
        </div>
    `;
        carrusel.appendChild(nuevaPeliculaCarrusel);
        // Asegurarse de que la nueva película esté visible si es la única
        const items = document.querySelectorAll("#carouselSugeridas .carousel-item");
        if (items.length === 1) {
            nuevaPeliculaCarrusel.classList.add("active");
        }
    }


    function publicar(peliculaId) {
        const pelicula = peliculas.find(p => p.peliculaId === peliculaId);
        if (pelicula) {
            pelicula.publicado = !pelicula.publicado;

            // Actualizar la película en el almacenamiento local
            guardarEnLocalStorage(peliculas);

            if (pelicula.publicado) {
                agregarAlCarrusel(pelicula);
            }
        }
    }





    //! login

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
                window.location.href = "administradorWeb.html";
            } else {
                alert("Credenciales incorrectas. Inténtalo de nuevo.");
            }
        }
    });
}