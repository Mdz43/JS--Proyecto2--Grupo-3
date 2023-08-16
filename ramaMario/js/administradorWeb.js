/*
Requerimientos mínimos de la web de administración:
El navbar debe ser igual al de la página principal.
Botón para agregar nuevas películas, debe abrir una ventana modal con todos los campos necesarios para agregar una nueva película. (ver mockup de ventana modal)
Tabla de películas, muestra todas las películas disponibles en el sitio, cada película y/o serie tiene los siguientes campos
    Codigo: numero unico
    Pelicula: Nombre de pelicula
    Categoría: Nombre de la categoría a la cual pertenece.
    Descripcion: Descripcion breve de la trama.
    Publicado: campo booleano para indicar si la película está publicada (disponible en el sitio) o no.
*/
// Constructor para crear objetos de película
class Pelicula {
  constructor(pelicula, categoria, peliculaId, descripcion, publicado) {
    this.pelicula = pelicula;
    this.categoria = categoria;
    this.peliculaId = peliculaId;
    this.descripcion = descripcion;
    this.publicado = publicado;
  }
}
//const id = new Date().getTime();//se crea la propiedad ID
//peliculaId.id = id;//se asigna la propiedad ID a cada película
// Crear algunas películas
const AdminPelis1 = new Pelicula('Oppenheimer', 'Biografia', 'fwef32f23', 'película biográfica que se centra en la vida del físico teórico Robert Oppenheimer...')
const AdminPelis2 = new Pelicula('The Batman', ' Action, Crimen, Drama', 'j3idofdv', 'Bruce Wayne lleva años acechando las calles de la ciudad como Batman...')
const AdminPelis3 = new Pelicula('Titanic', 'Romance, Drama', 'dcsjd23jf', 'Una joven aristócrata se enamora de un artista pobre a bordo del Titanic...')
const AdminPelis4 = new Pelicula('SpiderMan No way home', 'Fantástico. Acción. Ciencia ficción', 'ecow3oj2oj', 'Spider-Man, nuestro héroe, vecino y amigo es desenmascarado...')
// Array de películas
const peliculas = [AdminPelis1, AdminPelis2, AdminPelis3, AdminPelis4];
// Obtener el elemento de la tabla en el HTML
const tabla = document.getElementById("tablaPeliculas");
// Generar contenido HTML para la tabla
let contenidoTabla = "<tr><th>Pelicula</th><th>Categoría</th><th>Descripción</th><th>Publicado</th><th>Acciones</th></tr>";
peliculas.forEach((pelicula) => {
  contenidoTabla += `
  <tr>
    <td>${pelicula.pelicula}</td>
    <td>${pelicula.categoria}</td>
    <td>${pelicula.descripcion}</td>
    <td><input type="checkbox" name="Publicado" onclick="publicar" /></td>
    <td><button onclick='eliminarPelicula(${peliculaId.id})' style="background-color: white; margin: 2px"><img src='https://image.freepik.com/iconos-gratis/basura_318-10194.jpg' style="width: 20px; height: auto;  padding-bottom: 3px; " alt""></button>
    <button onclick='editarPelicula(${peliculaId.id})' style="background-color: white; margin: 2px"><img src='https://th.bing.com/th/id/OIP.PLqDNx6b4VoRann2-_z4pwHaHc?pid=ImgDet&rs=1' style="width: 20px; height: auto;  padding-bottom: 3px;" alt""></button>
    <button onclick='favoritos()' style="background-color: white; margin: 2px"><img src='https://logodix.com/logo/600060.jpg' style="width: 20px; height: auto;  padding-bottom: 3px;" alt""></button></td>
  </tr>`;
});
tabla.innerHTML = contenidoTabla;
//!    Tercera parte de la página de administración
//TODO Borrar una película
//Teniendo en cuenta que cada película debería agregar una fila en la tabla de películas, la función de borrar película debería eliminar dicha fila.
//Debería coincidir el id/código único de cada película con el id de la fila correspondiente. CONSULTAR ESTE PUNTO





function eliminarPelicula(peliculaId) {
  //Agregar función al botón correspondiente
  const peliculaEliminada = document.getElementById(peliculaId); //para que sepa cuál película eliminar, le asigno el id a la funcion
  peliculaEliminada.remove();
  alert("Película eliminada con éxito");
  // Borrar la película del array peliculas
  //peliculas.splice(2, 1); // El primer argumento es el índice del elemento a borrar, el segundo es el número de elementos a borrar
}
//ES NECESARIO AGREGAR UN SPLICE PARA MODIFICAR EL ARRAY?
/*
Cada fila de la tabla tendrà los elementos necesarios para realizar las siguientes acciones:
    -Borrar una película
    -Editar una película, debe abrir una ventana modal (igual a la de nueva película) y permitir cambiar los valores de la película.
    -Botón destacar (estrella) la película que figure como destacada, debe tener resaltada la fila de la tabla o el icono de la estrella, solo una película deberà ser destacada, y es la que aparecerá primero en la pantalla principal. La lista de favoritos debe llevar a una vista con una tabla de favoritas. Agregar una función para recorrer el array y que sólo se muestre la posición 1 en la página principal como película destacada.
*/
/*
  Hola, tu función para eliminar una película podría ser efectiva si haces coincidir el id de la fila con el id de la película a eliminar, pero hay algunas cosas que podrías mejorar. Por ejemplo:

  En lugar de usar el atributo id, que debe ser único para cada elemento en el HTML, podrías usar el atributo data-id, que te permite asignar un valor personalizado a cada elemento sin afectar el estilo o el comportamiento. Así, podrías tener varias filas con el mismo data-id si pertenecen a la misma película.
  En lugar de pasar el id como parámetro de la función, podrías pasar el evento del clic y obtener el id desde el botón que lo disparó. Así, podrías usar la misma función para todos los botones sin tener que escribir el id manualmente en cada uno.
  En lugar de usar document.getElementById para obtener la fila que quieres eliminar, podrías usar event.target.parentNode.parentNode, que te devuelve el padre del padre del botón, es decir, la fila. Así, podrías evitar posibles errores si hay otros elementos con el mismo id en el HTML.

function eliminarPelicula(event) {
   // Obtener el botón que disparó el evento
  var boton = event.target;
   // Obtener el id de la película desde el atributo data-id del botón
  var id = boton.dataset.id;
   // Obtener la fila que contiene el botón
  var fila = boton.parentNode.parentNode;
   // Eliminar la fila
  fila.remove();
  alert("Película eliminada con éxito");
}
  */
//TODO Editar una película
/*
const updateUser = () => {
  let userName = prompt('ingrese el usuario que desea modificar');
  let userUpdate = prompt('ingrese el nuevo usuario').toLocaleLowerCase();
  let userPosition = dataBase.indexOf(userName);
  if (dataBase.includes(userName)) {
    dataBase.splice(userPosition, 1, userUpdate);
    alert('Usuario modificado correctamente')
  } else {
    alert('Usuario no encontrado')
  }
  console.log(dataBase)
}
*/
//TODO Destacar película
