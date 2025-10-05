const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');

// Create dropdown container
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');


// const navItems = document.querySelector('.n-item');
const button = document.querySelector('.nav > div > button');

dropdown.appendChild(navItems);
dropdown.appendChild(button);


nav.appendChild(dropdown);


hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
