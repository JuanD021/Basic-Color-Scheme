const colorForm = document.querySelector('.color__form');
const colorInput = document.querySelector('color__input');
const colorModeInput = document.querySelector('.color__mode');
const colorOptions = document.querySelectorAll('.color__option');
const colorCodes = document.querySelectorAll('.color__code');

let randomColor = Math.floor(Math.random() * 16777215)
	.toString(16)
	.padStart(6, '0');

colorForm.addEventListener('submit', function (event) {
	event.preventDefault();

	const colorData = new FormData(colorForm);
	const seedColor = colorData.get('seedColor');
	const modeColor = colorData.get('modeColor');

	console.log(seedColor.slice(1));
	console.log(modeColor);

	fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.slice(1)}&mode=${modeColor}&count=5`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			data.colors.forEach((color, index) => {
				colorOptions[index].style.backgroundColor = color.hex.value;
				colorCodes[index].textContent = color.hex.value;
			});
		})
		.catch((error) => console.error('Error fetching color scheme:', error));
});
