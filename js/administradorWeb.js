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
    new Pelicula('The Batman', ' Action, Crimen, Drama', 'j3idofdv', 'Bruce Wayne lleva años acechando las calles de la ciudad como Batman...', false)
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
    <button onclick='agregarFav(id)' style="background-color: white; margin: 2px" id="botfav"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt=""></button></td>`;
    nuevaLista.appendChild(contenidoTabla);
});

// En relación a la función agregarPelicula, creo que hay un error en la línea 49, donde se usa el parámetro pelisId para buscar una película en el array peliculas. Sin embargo, el parámetro pelisId no se corresponde con el id de ninguna película, ya que es un número generado aleatoriamente por la función Date().getTime().

// Una posible solución sería pasar el id de la película que se quiere agregar como argumento de la función agregarPelicula, en lugar de generar uno nuevo. Por ejemplo:

// function agregarPelicula(peliculaId) {     let pelicula = peliculas.find(pelicula => pelicula.peliculaId == peliculaId);     // ... (resto del código) }

// function agregarPelicula(pelisId) {
//     let pelicula = peliculas.find(pelicula => pelicula.peliculaId == pelisId);
//     peliculas.push(pelicula);
//     const nuevaPeli = document.createElement("div");
//     const id = new Date().getTime();//se crea la propiedad ID con un número aleatorio
//     nuevaPeli.id = id; //asigno la propiedad "id"
//     nuevaPeli.innerHTML = `
//     <h2>${pelicula.pelicula}</h2>
//     <p>${pelicula.categoria}</p>
//     `;
//     nuevaPeli.classList.add("text-light", "bg-dark", "p-3", "m-2");
//     const padrePelisTabla = document.querySelector(".tabla-pelis");
//     padrePelisTabla.appendChild(nuevaPeli);
//     document.querySelector("form").reset();
// }
function agregarPelicula(peliculaId) {
    //function login(event) {
    //event.preventDefault(); //! todos los formularios tienen evento por default que refresca la página
    let pelicula = peliculas.find(pelicula => pelicula.peliculaId == peliculaId);
    peliculas.push(pelicula);
}
function eliminarPelicula(id) {
    const peliculaEliminada = document.getElementById(id); //para que sepa cuál película eliminar, le asigno el id a la funcion
    peliculaEliminada.remove();
    alert("Película eliminada con éxito");
    //Las películas originales del array no se eliminan efectivamente con este método
}