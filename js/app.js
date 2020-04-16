const sectionGreeting = document.querySelector('.greeting');
const sectionGameField = document.querySelector('.game-field');
const sectionWinner = document.querySelector('.winner'); 

const buttonPlay = document.querySelector('.play');
const buttonBack = document.querySelector('.back');
const buttonRestart = document.querySelector('.restart');

const card1 = document.querySelector('.card1');
const openCardImage = [
	'white url("images/5x5.png") no-repeat',
	'white url("images/2x2.png") no-repeat',
	'white url("images/3x3_2.png") no-repeat',
	'white url("images/3x3_p-3.png") no-repeat',
	'white url("images/4x4.png") no-repeat',
	'white url("images/6x6.png") no-repeat',
	'white url("images/7x7_2.png") no-repeat',
	'white url("images/10x10_2.png") no-repeat',
	'white url("images/mm.png") no-repeat',
	'white url("images/ghost_2.png") no-repeat',
];
const cards = document.querySelector('.cards');

buttonPlay.addEventListener('click', function () {
	sectionGreeting.style.display = 'none';
	sectionGameField.style.display = 'block';
});

let start = function() { 
	cards.innerHTML = '';
	
	let arrayId = fillArray();
	
	for (let i = 0; i < 12; i++) {
  
	const card = document.createElement('li');
	card.classList.add('card','shirt-color-1');
	card.setAttribute('id', arrayId[i]);
	cards.appendChild(card);
}}

buttonPlay.addEventListener('click', start);


buttonBack.addEventListener('click', function () {
	sectionGreeting.style.display = 'block';
	sectionGameField.style.display = 'none';
});

buttonRestart.addEventListener('click', function () {
	sectionGreeting.style.display = 'none';
	sectionGameField.style.display = 'block';
}); 



let displayCard = function(e) {
	if (e.target.tagName !== "LI") return;
	e.target.style.background = openCardImage[e.target.id];
	e.target.style.backgroundSize = 'cover';
	e.target.classList.add('rotation-effect');
};

cards.addEventListener('click', displayCard);

let fillArray = function () {
	let array = [];
	for (i = 1; i < 13; i++) {
	array.push((i%6)+1);

	}
	
	function compareNumeric() {
		return (Math.random()-0.5);
}
	array.sort(compareNumeric);
	
	return array;
	
}

console.log(fillArray());




	



