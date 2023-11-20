if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiKey = "53dc33560bde41179c370502230611";
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Process and display the weather data.
                console.log("Weather Data:", data);
                // Update your webpage with the weather data here.
            })
            .catch(error => console.error("Error fetching weather data:", error));
    });
} else {
    console.log("Geolocation is not available in this browser.");
}



