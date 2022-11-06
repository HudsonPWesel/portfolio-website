'use-strict';
const tabItem = Array.from(document.querySelectorAll('.about__tabbed-item'));

const tabIcons = Array.from(
	document.querySelectorAll('.about__tabbed-item--icon')
);
const itemText = document.querySelector('.about__tabbed-item--text');
const tabText = Array.from(
	document.querySelectorAll('.about__tabbed-item--text')
);
const toggleClass = (elements, index, toggleClass) => {
	elements[index].classList.toggle(toggleClass);
};

// let arrowBtn = document.querySelector('.about__tabbed-item--icon');

// arrowBtn.addEventListener('click', () => {
// 	console.log(arrowBtn.classList[1].slice(-1));
// });

// const getNumberHTML = elements => {
// 	elements.forEach((element, index) => {
// 		console.log(element.classList[1].slice(-1));
// 		return element.classList[1].slice(-1);
// 	});
// };

// const allIcons = getNumberHTML(tabIcons);

// const allTabedText = getNumberHTML(
// document.querySelectorAll('.about__tabbed-item--text')
// );

// arrowBtn.classList[1].slice(-1);
// switch (arrowBtn.classList[1].slice(-1)) {
// 	case '1':
// 		arrowBtn = document.querySelector('.about__tabbed-item--icon-1');
// 		break;

// 	case '2':
// 		arrowBtn = document.querySelector('.about__tabbed-item--icon-2');
// 	default:
// 		arrowBtn = document.querySelector('.about__tabbed-item--icon-3');
// 		break;
// }

// console.log(arrowBtn.classList[1].slice(-1));

// console.log(tabText[0].classList.toggle('hidden'));

tabIcons.forEach((element, index) => {
	element.addEventListener('click', () => {
		if (index === 0) {
			// Could Export this to a function

			toggleClass(tabText, index, 'hidden');
			toggleClass(tabText, index, 'active');
			tabItem[0].style.gridRowGap = '2.5rem';
			console.log(tabItem[1]);

			// tabText[0].classList.toggle('hidden');
			// tabText[0].classList.toggle('active');

			element.style.transform = 'rotate(90deg)';

			if (tabText[0].classList.contains('hidden')) {
				element.style.transform = null;
				tabItem[0].style.gridRowGap = 0;
			}
		} else if (index === 1) {
			toggleClass(tabText, index, 'hidden');
			toggleClass(tabText, index, 'active');
			element.style.transform = 'rotate(90deg)';

			tabItem[1].style.gridRowGap = '2.5rem';

			// tabText[1].classList.toggle('hidden');
			// tabText[1].classList.toggle('active');

			if (tabText[1].classList.contains('hidden')) {
				element.style.transform = null;
				tabItem[1].style.gridRowGap = 0;
			}
		} else if (index === 2) {
			toggleClass(tabText, index, 'hidden');
			toggleClass(tabText, index, 'active');

			tabItem[2].style.gridRowGap = '2.5rem';

			element.style.transform = 'rotate(90deg)';
			if (tabText[2].classList.contains('hidden')) {
				element.style.transform = null;
				tabItem[2].style.gridRowGap = 0;
			}
		}
	});
});

// SMOOTH SCROLLING

// icon-integration__btn
// card__container

// Learn More & Integration Section
const learnBtnScrollTo = document.querySelector('.hero__link');
const integrationSection = document.querySelector('.icon-integration');

// View Integrations & Cards Section
const btnScrollTo = document.querySelector('.icon-integration__btn');
const cardScrollTo = document.querySelector(
	'.card__container--website-heading-1'
);

btnScrollTo.addEventListener('click', e => {
	e.preventDefault();
	// Relative to viewport
	const s1coords = cardScrollTo.getBoundingClientRect();

	// Scrolling Old

	/*
	window.scrollTo(
		s1coords.left + window.pageXOffset,
		s1coords.top + window.scrollY
	);

	window.scrollTo({
		left: s1coords.left + window.pageXOffset,
		top: s1coords.top + window.scrollY,
		behavior: 'smooth',
	});
	*/

	cardScrollTo.scrollIntoView({ behavior: 'smooth' });
});

learnBtnScrollTo.addEventListener('click', e => {
	e.preventDefault();
	// Relative to viewport
	const s1coords = integrationSection.getBoundingClientRect();

	integrationSection.scrollIntoView({ behavior: 'smooth' });
});
