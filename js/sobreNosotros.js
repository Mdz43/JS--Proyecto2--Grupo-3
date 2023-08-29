class Integrante {
    constructor(name, age, ocupation, gitPerfil, linkedinPerfil, photo, alt) {
        this.name = name;
        this.age = age;
        this.ocupation = ocupation;
        this.gitPerfil = gitPerfil;
        this.linkedinPerfil = linkedinPerfil;
        this.photo = photo;
        this.alt = alt;
    }
}
let integrantes = [
    new Integrante('Mario E. Matías', '30 años', '- Estudiante Fullstack en RollingCodeSchool <br> - Socio-Gerente en SEMED SRL', 'https://github.com/marioematias', 'https://www.linkedin.com/in/mario-ezequiel-mat%C3%ADas-gonza-9556a9268/', "../assets/foto-mario-matias.jpeg", 'Foto de perfil del integrante Mario E. Matías'),
    new Integrante('Matias Vizcarra', '22 años', '- Estudiante FullStack en RollingCodeSchool', 'https://github.com/MattVizcarra', 'https://www.linkedin.com/in/matias-alexis-vizcarra-galv%C3%A1n-75a1a8232/', "../assets/foto-matias-vizcarra.jpg", "Foto de perfil del integrante Matias Vizcarra"),
    new Integrante('Franco Maidana', '22 años', '- Estudiante Fullstack en RollingCodeSchool <br> - Encargado de establecimiento comercial familiar', 'https://github.com/Francomaidana12', 'www.linkedin.com/in/franco-esteban-maidana-118658287', "../assets/foto-franco-maidana", "Foto de perfil del integrante Franco Maidana"),
    new Integrante('Lautaro Miranda', '24 años', 'Estudiante Fullstack en RollingCodeSchool <br> - Gerente en MacDonalds', 'https://github.com/Mdz43', 'www.linkedin.com/in/lautaro-hernan-miranda-3b01ba281', "../assets/foto-lautaro-miranda.jpeg", "Foto de perfil del integrante Lautaro Miranda"),
]
integrantes.forEach(integrante => {
    const newMemberCard = document.createElement('div');
    newMemberCard.id = integrante.name;
    newMemberCard.classList.add('card', 'shadow', 'p-3', 'm-3', 'rounded', 'd-flex');
    newMemberCard.style.width = '14rem';
    newMemberCard.innerHTML = `
    <img src=${integrante.photo} class="card-img-top rounded" alt="${integrante.alt}">
    <div class="card-body">
        <h5 class="card-title">${integrante.name}</h5>
        <p class= "text-light">${integrante.age}</p>
        <p class="card-text">${integrante.ocupation}</p>
        <br>
        <a href="${integrante.gitPerfil}" class="card-link link-info">Git</a><br>
        <a href="${integrante.linkedinPerfil}" class="card-link link-info">LinkedIn</a>
    </div>
    `
    const padreContainer = document.querySelector('main');
    padreContainer.appendChild(newMemberCard)
}
)

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