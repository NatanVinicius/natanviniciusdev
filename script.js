const menuElements = document.querySelectorAll('.menu-header ul li a');
const arrowUpElement = document.querySelector('.arrow-up i');
const btnViewMore = document.querySelector('.btn-view-more');
const btnMobileElement = document.querySelector('.mobile');

//FUNÇÕES

const idElementOnClick = (event) => {
    event.preventDefault();
    document.querySelector('.menu-header').classList.remove('menu-opener');
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section-70,
        behavior: "smooth"
    });
}

const viewMoreProjects = (e) => {
    e.preventDefault();
    const projectsAreaElement = document.querySelector('.projects-area');

    if(projectsAreaElement.clientHeight === 380) {
        projectsAreaElement.classList.add('height-area-projects');
        btnViewMore.innerHTML = 'Ver menos';
    } else {
        projectsAreaElement.classList.remove('height-area-projects');
        btnViewMore.innerHTML = 'Ver mais';
    };

};

const openMenuMobile = (ev) => {
    ev.preventDefault();

    const menuMobileElement = document.querySelector('.menu-header');
    if(menuMobileElement.clientHeight == 0) {
        menuMobileElement.classList.add('menu-opener');
    } else {
        menuMobileElement.classList.remove('menu-opener');
    };
}

// EVENTOS

menuElements.forEach((item) => {
    item.addEventListener('click', idElementOnClick);
});

btnViewMore.addEventListener('click', viewMoreProjects);

arrowUpElement.addEventListener('click', idElementOnClick);

btnMobileElement.addEventListener('click', openMenuMobile);
