// Black Mode
// elementos
const blackMode = document.getElementById('blackMode');
const root = document.firstElementChild;

// valid variable (true default for open black mode)
let validMode;

if (localStorage.getItem('validMode') === 'true') validMode = true;
else validMode = false;

const dinamicMode = () => {
	blackMode.classList.toggle('black-mode__active', validMode);

	if (validMode) {
		root.style.setProperty('--LetBgDoc', 'hsl(0, 0%, 15%)');
		root.style.setProperty('--LetColorPrimaryTwo', 'hsl(0, 0%, 95%)');

		localStorage.setItem('validMode', validMode);
		validMode = false;
	} else {
		root.style.setProperty('--LetBgDoc', 'hsl(0, 0%, 95%)');
		root.style.setProperty('--LetColorPrimaryTwo', 'hsl(223, 49%, 23%)');

		localStorage.setItem('validMode', validMode);
		validMode = true;
	}
};

dinamicMode();

blackMode.addEventListener('click', () => {
	dinamicMode();
});

// btn Back

const btnBack = document.getElementById('btnBack');

btnBack.addEventListener('click', () => {
	location.hash === '#btnBack' ? history.go(-2) : history.go(-1);
});
