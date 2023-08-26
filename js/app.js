console.log("asdad")
class Movies{
    constructor(){
        this.idMovie = [];
        this.nameMovie = [];
        this.descriptionMovie = [];
        this.categoryMovieAction = [];
        this.categoryMovieComedy = [];
        this.categoryMovieRomance = [];
    }

    // generarIdMovie(){
    //     const id = new Date().getTime(); //numero unico
    //     idMovie.id = id;
    //     this.idMovie.push(id)
    //     console.log(id);
    // }

    elegirCategoriaAccion(){
        this.categoryMovieAction.push()
    }
}

function agregarPelicula(event) { 
    event.preventDefault();
    
    const nombrePeli = document.getElementById("nombrePeli");
    const nombrePeliText = nombrePeli.value;
    const nuevaPeli = document.createElement("div");
    const id = new Date().getTime(); //numero unico
    nuevaPeli.id = id; //asigno la propiedad u objeto "id"
    console.log(id);
    const descripcionPeli = document.getElementById("descripcionPeli");
    const descripcionPeliText = descripcionPeli.value;
    nuevaPeli.innerHTML = `
    <h2>${nombrePeliText}</h2>
    <p>${descripcionPeliText}</p>
    `;
    nuevaPeli.classList.add("text-light", "bg-dark", "p-3", "m-2");
    const padrePelisTabla = document.querySelector(".tabla-pelis");
    padrePelisTabla.appendChild(nuevaPeli);
    document.querySelector("form").reset();

}


// function agregarPelicula (pelisId){
//     let pelicula = peliculas.find(pelicula => pelicula.peliculaId == pelisId.id);
//     peliculas.push(pelicula);
    
//     const nuevaPeli = document.createElement("div");
//     nuevaPeli.id = pelicula.peliculaId; //asigno la propiedad u objeto "id"
//     nuevaPeli.innerHTML = `
//     <h2>${pelicula.pelicula}</h2>
//     <p>${pelicula.categoria}</p>
//     `;
//     nuevaPeli.classList.add("text-light", "bg-dark", "p-3", "m-2");
//     const padrePelisTabla = document.querySelector(".tabla-pelis");
//     padrePelisTabla.appendChild(nuevaPeli);
//     document.querySelector("form").reset();

// }




