let dogFoodArea = document.getElementById("dog-food-area");
let catFoodArea = document.getElementById("cat-food-area");

dogFoodArea.innerHTML = `<h1>FOR DOGS</h1>`;
catFoodArea.innerHTML = `<h1>FOR CATS</h1>`;

function showDogFood(dogFoodArr) {
	dogFoodArr.forEach( function(currentFoodBrand) {
		dogFoodArea.innerHTML += `<h1>${currentFoodBrand.name}</h1>`;
		currentFoodBrand.types.forEach( function(currentType) {
			dogFoodArea.innerHTML += `<h3 class="type">${currentType.type.charAt(0).toUpperCase() + currentType.type.substr(1).replace("_", " ")}</h3>`;
			currentType.volumes.forEach( function(currentVolume) {
				dogFoodArea.innerHTML += `<p class="padding">${currentVolume.name}</p>`;
				dogFoodArea.innerHTML += `<h4 class="money padding">${currentVolume.price}</h4>`;
				console.log(dogFoodArr)
			});
		});
	});
}

function showCatFood(catFoodArr) {
	catFoodArr.forEach( function(currentItem) {
		catFoodArea.innerHTML += `<h1>${currentItem.name}</h1>`;
		currentItem.breed.forEach( function(currentItem) {
			catFoodArea.innerHTML += `<h3 class="breed">${currentItem.kind}</h3>`;
		})
		currentItem.types.forEach( function(currentType) {
			catFoodArea.innerHTML += `<h3 class="type">${currentType.type.charAt(0).toUpperCase() + currentType.type.substr(1).replace("_", " ")}</h3>`;
			currentType.volumes.forEach( function(currentVolume) {
				catFoodArea.innerHTML += `<p class="padding">${currentVolume.name}</p>`;
				catFoodArea.innerHTML += `<h4 class="money padding">${currentVolume.price}</h4>`;
			})
		})
	})
}

foodObj.loadDogFood(showDogFood);
foodObj.loadCatFood(showCatFood);