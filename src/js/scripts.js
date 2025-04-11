//chat gpt prompt: javascript to make the pictures outline in glowing red when clicked on to show they are selected without using onclick, use event listener instead
document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('.food-labels img');
	images.forEach(image => {
		image.addEventListener('click', () => {
			image.classList.toggle('selected');
		});
	});
});

