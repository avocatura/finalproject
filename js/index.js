
const callAPI = function(health="") {
	//Call Recipe API
	var searchInput = $('#textbox').val();
	var request = new XMLHttpRequest();
	request.open('GET', "https://api.edamam.com/search?q=" + searchInput + "&app_id=b40b6efd&app_key=cfd561e15f8582929790d74b3e930dee&to=100&health=vegan" + health);
	request.send();
	request.onload = function() {
	var x = JSON.parse(request.response);
	console.log(request.response);

	//Toggle loader class hidden on loading of the API
	var promiseApi = new Promise(function(resolve, reject) {
	if (request.status === 200) {
		resolve($("#loader").toggleClass("hidden"));
		$("div.container").toggleClass("faded");
		console.log("Success");
	}
	else {
		reject(alert("Sorry, this page failed to load."));
		console.log("failure");
	};
	});
	
	//Clear html from previous searches
	$(".recipe").remove();

	//Check to see if any results were found. If not alert the user to try a new query.
	if (x.hits.length === 0) {
		alert("Sorry, no results matched your search");
	} else {
		//Add the search results to the dom
		for (let i = 0; i < 99; i++) {
		$(".container").append( `
		<div class="recipe">
			<h2> ${x.hits[i].recipe.label} </h2>
			<img src=${x.hits[i].recipe.image} alt="">
			<a href=${x.hits[i].recipe.url} target="_blank">${x.hits[i].recipe.source}</a>
		</div>
		`);
		};
	};
	};
};

//window.onload = callAPI; ;

//Call callAPI function on search icon click
$("#searchIcon").click(function() {
	$("#loader").toggleClass("hidden");
	$("div.container").toggleClass("faded");
	callAPI();
});
//Call callAPI function is the enter key is pressed within the search bar
$("#textbox").keyup(function(event){
	if (event.keyCode === 13) {
		$("#searchIcon").click();
	}
});
//Toggle the visibility of the dropdown box when the refine button is clicked
$(".dropdown button").click(function() {
	$("#dropdownBox").toggleClass("show");
})

$("#refinedSearch").click(function() {
	$("#loader").toggleClass("hidden");
	$("div.container").toggleClass("faded");
	if (($("input:checkbox:checked").length) === 4) {
		let health = "health=vegan&health=vegetarian";
		callAPI(health);
	} else if ($("#vegan").is(":checked")&&($("#vegetarian").is(":checked"))){
		let health = "health=vegan&health=vegetarian";
		callAPI(health);
	} else if ($("#vegetarian").is(":checked")) {
		let health ="health=vegetarian";
		callAPI(health);
	}  else {let health = ""; callAPI()};
});
