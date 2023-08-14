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

//!    Tercera parte de la página de administración
/*
Cada fila de la tabla tendrà los elementos necesarios para realizar las siguientes acciones:
    -Borrar una película
    -Editar una película, debe abrir una ventana modal (igual a la de nueva película) y permitir cambiar los valores de la película.
    -Botón destacar (estrella) la película que figure como destacada, debe tener resaltada la fila de la tabla o el icono de la estrella, solo una película deberà ser destacada, y es la que aparecerá primero en la pantalla principal. La lista de favoritos debe llevar a una vista con una tabla de favoritas. Agregar una función para recorrer el array y que sólo se muestre la posición 1 en la página principal como película destacada.
*/

//TODO Borrar una película
//Teniendo en cuenta que cada película debería agregar una fila en la tabla de películas, la función de borrar película debería eliminar dicha fila.
//Debería coincidir el id/código único de cada película con el id de la fila correspondiente. CONSULTAR ESTE PUNTO

function eliminarPelicula(id) {
  //Agregar onclick="eliminarPelicula(id) al botón correspondiente"
  const peliculaEliminada = document.getElementById(id); //para que sepa cuál película eliminar, le asigno el id a la funcion
  peliculaEliminada.remove();
  alert("Película eliminada con éxito");
}
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
//TODO Destacar película
