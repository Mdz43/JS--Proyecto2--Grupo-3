// Constructor para crear objetos de película
function Pelicula(pelicula, categoria, peliculaId, descripcion, publicado) {
    this.pelicula = pelicula;
        this.categoria = categoria;
        this.peliculaId = peliculaId;
        this.descripcion = descripcion;
        this.publicado = publicado;
}

// Crear algunas películas
const AdminPelis1 = new Pelicula ('Oppenheimer','Biografia','fwef32f23','película biográfica que se centra en la vida del físico teórico Robert Oppenheimer...')
const AdminPelis2 = new Pelicula ('The Batman', ' Action, Crimen, Drama', 'j3idofdv', 'Bruce Wayne lleva años acechando las calles de la ciudad como Batman...')
const AdminPelis3 = new Pelicula ('Titanic','Romance, Drama', 'dcsjd23jf','Una joven aristócrata se enamora de un artista pobre a bordo del Titanic...')
const AdminPelis4 = new Pelicula ('SpiderMan No way home', 'Fantástico. Acción. Ciencia ficción', 'ecow3oj2oj', 'Spider-Man, nuestro héroe, vecino y amigo es desenmascarado...')


// Array de películas
const peliculas = [AdminPelis1,AdminPelis2, AdminPelis3, AdminPelis4];

// Obtener el elemento de la tabla en el HTML
const tabla = document.getElementById("tablaPeliculas");

// Generar contenido HTML para la tabla
let contenidoTabla = "<tr><th>Pelicula</th><th>Categoría</th><th>Descripción</th><th>Publicado</th><th>Acciones</th></tr>";

peliculas.forEach((pelicula) => {
    contenidoTabla += `<tr><td>${pelicula.pelicula}</td><td>${pelicula.categoria}</td><td>${pelicula.descripcion}</td><td><input type="checkbox" name="Publicado" onclick="publicar" /></td><td>
    <button onclick='borrar' style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px; " alt""></button>
    <button onclick='editar' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt""></button>
    <button onclick='favoritos' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt""></button></td>
			</tr>`;
});
tabla.innerHTML = contenidoTabla;
