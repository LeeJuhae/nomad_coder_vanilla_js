const API_KEY = "871e0749298f4ab3050e979e503c4fbd";
const COORDS = 'coords';

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
}

function handleGeoError(){
	console.log("Can't access geo location");
}

function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage. getItem(COORDS);
	if (loadedCoords === null){
		askForCoords();
	}else{
		//getWeather
	}
}

function init(){
	loadCoords();
}

init();
