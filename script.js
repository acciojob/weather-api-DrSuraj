//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    var getCurrentWeatherBtn = document.getElementById('getCurrentWeatherBtn');
    var weatherDataDiv = document.getElementById('weatherData');

    getCurrentWeatherBtn.addEventListener('click', function () {
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        var apiKey = 'YOUR_API_KEY';
        var cityName = 'London';
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        // Make a request to the OpenWeatherMap API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update the weather data in the HTML
                var weatherDescription = data.weather[0].description;
                weatherDataDiv.innerText = `Current weather in ${cityName}: ${weatherDescription}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherDataDiv.innerText = 'Failed to fetch weather data.';
            });
    });
});
