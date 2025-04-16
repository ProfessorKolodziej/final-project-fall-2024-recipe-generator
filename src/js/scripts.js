//Chat GPT: how to get this spoonacular API in so that a recipe is suggested using the selected ingredients//
document.addEventListener('DOMContentLoaded', function () {
	const images = document.querySelectorAll('.food-labels img');
	const selectedIngredients = new Set();

	images.forEach(image => {
		image.addEventListener('click', () => {
			const ingredient = image.getAttribute('data-ingredient');
			image.classList.toggle('selected');
			if (selectedIngredients.has(ingredient)) {
				selectedIngredients.delete(ingredient);
			} else {
				selectedIngredients.add(ingredient);
			}
		});
	});

	const button = document.querySelector('.get-recipe-button button');
	button.addEventListener('click', () => {
		if (selectedIngredients.size === 0) {
			alert("Please select at least one ingredient.");
			return;
		}

		const ingredients = Array.from(selectedIngredients).join(',');
		const apiKey = '8fd0aba60359483088788984d1534296';
		const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`;

		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error("API response wasn't ok");
				}
				return response.json();
			})
			.then(data => {
				if (data.length === 0) {
					alert("No recipes found. Try different ingredients.");
					return;
				}

				console.log("Recipes:", data);
				alert(`Found: ${data[0].title}`);
			})
			.catch(error => {
				console.error("Error:", error);
				alert("Error fetching recipes. Check the console for details.");
			});
	});
});