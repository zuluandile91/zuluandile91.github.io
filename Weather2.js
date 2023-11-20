const apiKey = "53dc33560bde41179c370502230611";
const apiUrl = `https://www.weatherapi.com/?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process and display the weather data.
    })
    .catch(error => console.error("Error fetching weather data:", error));