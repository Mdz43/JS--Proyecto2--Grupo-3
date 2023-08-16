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
    new Pelicula ('The Batman', ' Action, Crimen, Drama', 'j3idofdv', 'Bruce Wayne lleva años acechando las calles de la ciudad como Batman...', false)
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
    <button onclick='eliminarPelicula("${listaPelis.peliculaId}")' style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='editar()' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;
    nuevaLista.appendChild(contenidoTabla);
});
function elegirCategoria(event){
    event.preventDefault();
}


function agregarPelicula (pelisId){
    let pelicula = peliculas.find(pelicula => pelicula.peliculaId == pelisId.id);
    peliculas.push(pelicula);
    
    const nuevaPeli = document.createElement("div");
    nuevaPeli.id = pelicula.peliculaId; //asigno la propiedad u objeto "id"
    nuevaPeli.innerHTML = `
    <h2>${pelicula.pelicula}</h2>
    <p>${pelicula.categoria}</p>
    `;
    nuevaPeli.classList.add("text-light", "bg-dark", "p-3", "m-2");
    const padrePelisTabla = document.querySelector(".tabla-pelis");
    padrePelisTabla.appendChild(nuevaPeli);
    document.querySelector("form").reset();

}

