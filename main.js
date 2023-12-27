// Toggle search box visibility on clicking the search icon
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

// Toggle navigation menu visibility on clicking the menu icon
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

// Close menu and search box on scrolling
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Add shadow to the header when scrolling
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
