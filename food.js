var Products = ( function(oldDogFood){
	var dogFoodArr = [];
	var catFoodArr = [];

	foodObj = Object.create(null);

	foodObj.loadDogFood = function(callbackToInvoke) {
		var loader = new XMLHttpRequest();
		loader.addEventListener("load", function() {
			dogFoodArr = JSON.parse(this.responseText).dog_brands;
			callbackToInvoke(dogFoodArr)
		});
		loader.open("GET", "data/dog.json");
		loader.send();
	}

	foodObj.loadCatFood = function(callbackToInvoke) {
		var loader = new XMLHttpRequest();
		loader.addEventListener("load", function() {
			catFoodArr = JSON.parse(this.responseText).cat_brands;
			callbackToInvoke(catFoodArr)
		});
		loader.open("GET", "data/cat.json");
		loader.send();
	}

	return oldDogFood;

}());