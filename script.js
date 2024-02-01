const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05877aa488msh5cecbe5e048a21ep175be8jsn4adbbbf5347d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", () => {
	e.preventDefault
	getWeather(e.city.value)
})

getWeather("Delhi")




// const getWeather = async (city) => {
// 	cityName.innerHTML = city
// 	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': '05877aa488msh5cecbe5e048a21ep175be8jsn4adbbbf5347d',
// 			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 		}
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		console.log(result);

// 		cloud_pct.innerHTML = response.cloud_pct
// 		temp.innerHTML = response.temp
// 		feels_like.innerHTML = response.feels_like
// 		humidity.innerHTML = response.humidity
// 		min_temp.innerHTML = response.min_temp
// 		max_temp.innerHTML = response.max_temp
// 		wind_speed.innerHTML = response.wind_speed
// 		wind_degrees.innerHTML = response.wind_degrees
// 		sunrise.innerHTML = response.sunrise
// 		sunset.innerHTML = response.sunset


// 	} catch (error) {
// 		console.error(error);
// 	}


// submit.addEventListener("click", () => {
// 	e.preventDefault{ }
// 	getWeather(e.city.value)
// })

// getWeather("Delhi")