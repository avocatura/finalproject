
var callAPI = function() {
	//Call Recipe API
	let health = "";
	var searchInput = $('#textbox').val();
	var request = new XMLHttpRequest();
	request.open('GET', "https://api.edamam.com/search?q=" + searchInput + "&app_id=b40b6efd&app_key=cfd561e15f8582929790d74b3e930dee&to=100" + health);
	request.send();
	request.onload = function() {
	var x = JSON.parse(request.response);
	console.log(request.response);
	console.log(x.hits[0].recipe);

	
	//Clear html from previous searches
	$(".recipe").remove();
	//Add the search results to the dom
	for (let i = 0; i < 99; i++) {
	$(".container").append( `
	<div class="recipe">
		<h2> ${x.hits[i].recipe.label} </h2>
		<img src=${x.hits[i].recipe.image} alt="">
		<a href=${x.hits[i].recipe.shareAs} target="_blank">${x.hits[i].recipe.source}</a>
	</div>
	`);
	};
	};
};

$("#searchIcon").click(callAPI);

$(".dropdown button").click(function() {
	$("#dropdownBox").toggleClass("show");
})

$("#refinedSearch").click(function() {
	if ($("#vegan").is(":checked")){
		let health = "&health=vegan";
		callAPI;
	} else {let health = ""; callAPI};
});



	// var promiseApi = new Promise(function(resolve, reject) {
	// if (request.status === 200) {
	// 	resolve($("body").toggleClass("loader"));
	// 	console.log("Success");
	// }
	// else {
	// 	reject(alert("Sorry, this page failed to load."));
	// 	console.log("failure");
	// };
	// });

