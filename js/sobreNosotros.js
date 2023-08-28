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
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante Fullstack en RollingCodeSchool', 'https://github.com/marioematias', 'https://www.linkedin.com/in/mario-ezequiel-mat%C3%ADas-gonza-9556a9268/', "../assets/foto-mario-matias.jpeg", 'Foto de perfil del integrante Mario E. Matías'),
    new Integrante('Matias Vizcarra', '22 años', 'Estudiante FullStack en RollingCodeSchool.', 'https://github.com/MattVizcarra', 'l', "../assets/foto-matias-vizcarra.jpg", "Foto de perfil del integrante Matias Vizcarra"),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
]
integrantes.forEach(integrante => {
    const newMemberCard = document.createElement('div')
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
