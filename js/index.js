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
const button = document.querySelectorAll('.btn');
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

//Body text changes color when window is scrolled.
//1
window.addEventListener('scroll', () => (body.style.color = 'darkturquoise'));

//Logs message when page is fully loaded.
//2
window.onload = () => {
	console.log('Page is fully loaded');
};
//Destination image disappears when window is resized
//3
window.addEventListener('resize', () => {
	destinationImg.style.display = 'none';
});

//Changes top paragraph text when down key is pressed
//4
html.addEventListener('keydown', () => {
	headerText.textContent = 'Hop in - we have candy!';
});
//Changes background color on mouse wheel movement
//5
html.addEventListener('wheel', () => {
	html.style.background = 'mintcream';
});

//Changes background color of nav when hovered over
nav.addEventListener('pointerover', (event) => {
	event.stopPropagation();
	nav.style.background = 'lightcyan';
});

//Changes font when hovered over, and then back when pointer is off
//6
logo.addEventListener('pointerover', () => {
	logo.style.fontFamily = 'Roboto';
});
//7
logo.addEventListener('pointerout', () => {
	logo.style.fontFamily = 'Indie Flower';
});

//Changes background color of button on click
//8
button.forEach((button) =>
	button.addEventListener('click', () => {
		button.style.background = 'hotpink';
	}),
);

//Blurs the content upon focus
// headline.addEventListener(
// 	'scroll',
// 	(event) => {
// 		event.target.style.background = 'pink';
// 	},
// 	true,
// );

// headline.addEventListener(
// 	'blur',
// 	(event) => {
// 		event.target.style.background = '';
// 	},
// 	true,
// );

// headline.addEventListener('select', () => {
// 	event.stopPropagation();
// 	headline.style.fontSize = '5rem';
// });

//Changes color of h2 when double-clicked
//9
headline.addEventListener('dblclick', () => {
	headline.style.fontSize = '4rem';
	headline.style.color = '#FFB349';
});

//Changes color of footer when mouse enters the area
//10
footer.addEventListener('mouseenter', () => {
	footer.style.background = '#62AC6E';
});

// Changes font when dragging an element
// headerText.addEventListener('drag', (event) => {}, false);
