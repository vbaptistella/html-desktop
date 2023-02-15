const startButton = document.getElementById('startButton');
const startMenu = document.getElementById('startMenu');

function nodify(html) {
	var template = document.createElement('template');
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
}

startButton.addEventListener('click', () => startMenu.classList.contains('open') ? startMenu.classList.remove('open') : startMenu.classList.add('open'))