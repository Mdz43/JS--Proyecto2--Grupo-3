class Integrante {
    constructor(name, age, ocupation, gitPerfil, linkedinPerfil, photo) {
        this.name = name;
        this.age = age;
        this.ocupation = ocupation;
        this.gitPerfil = gitPerfil;
        this.linkedinPerfil = linkedinPerfil;
        this.photo = photo;
    }
}
let integrantes = [
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
    new Integrante('Mario E. Matías', '30 años', 'Gerente en SEMED SRL - Estudiante en RollingCodeSchool', 'g', 'l',),
]
integrantes.forEach(integrante => {
    const newMemberCard = document.createElement('div')
    newMemberCard.id = integrante.name;
    newMemberCard.classList.add('card', 'shadow', 'p-3', 'm-3', 'bg-body-tertiary', 'rounded');
    newMemberCard.style.width = '18rem';
    newMemberCard.innerHTML = `
    <img src=${integrante.photo} class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${integrante.name}</h5>
        <p class= "text-dark">${integrante.age}</p>
        <p class="card-text">${integrante.ocupation}</p>
        <br>
        <a href="${integrante.gitPerfil}" class="card-link link-info">Git</a><br>
        <a href="${integrante.linkedinPerfil}" class="card-link link-info">LinkedIn</a>
    </div>
    `
    const padreContainer = document.querySelector('main');
    padreContainer.appendChild(newMemberCard)
})
