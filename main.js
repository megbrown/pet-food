let dogFoodArea = document.getElementById("dog-food-area");
let catFoodArea = document.getElementById("cat-food-area");

function showDogFood(dogFoodArr) {
	dogFoodArr.map( function(currentFoodBrand) {
		dogFoodArea.innerHTML += `<h1>${currentFoodBrand.name}</h1>`;
		currentFoodBrand.types.map( function(currentType) {
			dogFoodArea.innerHTML += `<h3>${currentType.type.charAt(0).toUpperCase() + currentType.type.substr(1).replace("_", " ")}</h3>`;
			currentType.volumes.map( function(currentVolume) {
				dogFoodArea.innerHTML += `<p>${currentVolume.name}</p>`;
				dogFoodArea.innerHTML += `<h4>${currentVolume.price}</h4>`;
			});
		});
	});
}

function showCatFood(catFoodArr) {
	catFoodArr.map( function(currentFoodBrand) {
		catFoodArea.innerHTML += `<h1>${currentFoodBrand.name}</h1>`;
		currentFoodBrand.breed.map( function(currentItem) {
			catFoodArea.innerHTML += `<h3>${currentItem.kind}</h3>`;
		})
	})
}

foodObj.loadDogFood(showDogFood);
foodObj.loadCatFood(showCatFood);