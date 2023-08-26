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
    new Pelicula('Oppenheimer', 'Accion', 'fwef32f23', 'película biográfica que se centra en la vida del físico teórico Robert Oppenheimer...', true),
    new Pelicula ('The Batman', ' Action, Crimen, Drama', 'j3idofdv', 'Bruce Wayne lleva años acechando las calles de la ciudad como Batman...', true)
    // ... (resto de las películas)
];

class Tabla {
    constructor(tablaId) {
        this.tablaId = tablaId;
    }
}

let nombreTabla = new Tabla('jisah6');

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
    <button onclick='eliminarPelicula(${listaPelis.peliculaId})' style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='editar()' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;
    nuevaLista.appendChild(contenidoTabla);
});


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
    peliculas.push(new Pelicula(nombrePeliText,categoriaPeliText,peliculaId, descripcionPeliText, false));
    console.log(peliculas)
    const contenidoTabla = document.createElement('tr');
    contenidoTabla.id = peliculaId;
    contenidoTabla.innerHTML = `<td>${nombrePeliText}</td><td>${categoriaPeliText}</td><td>${descripcionPeliText}</td><td><input type="checkbox" name="Publicado" ${this.publicado ? 'checked' : ''} onclick="publicar()" /></td><td>
    <button onclick="eliminarPelicula(${id})" style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='editar()' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;
    nuevaLista.appendChild(contenidoTabla);
    document.querySelector("form").reset();
    console.log(contenidoTabla.id)
}

function eliminarPelicula(id) {
    const peliAEliminar = document.getElementById(id)
    peliAEliminar.remove()
}

function publicar(params) {
    
}




