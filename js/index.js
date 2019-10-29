// Variables

const html = document.querySelector('html');
const body = document.querySelector('body');
// Logo
const logo = document.querySelector('.logo-heading');
// Navigation
const nav = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('a');
// Intro
const intro = document.querySelector('.intro');
const headerImage = document.querySelector('.intro img');
const headline = document.querySelector('.intro h2');
const headerText = document.querySelector('.intro p');
// Main Content
const destinationImg = document.querySelector('.destination-img');
// Footer
const footer = document.querySelector('.footer');

// Fun, fun, functions
(function() {
	navLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.stopPropagation();
			event.preventDefault();
			link.style.border = '1px dashed grey';
		});
		link.addEventListener('focus', (event) => {
			event.stopPropagation();
			link.style.color = 'deeppink';
		});
	});
})();

// Event listeners
window.addEventListener('scroll', () => body.style.color = 'darkturquoise');

window.onload = () => {
	console.log('Page is fully loaded');
};

window.addEventListener('resize', () => {
	destinationImg.style.display = 'none';
});
