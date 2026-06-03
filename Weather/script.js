const apiKey = "ab0e2315d591659eaff3b2b8505d09b0";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {

    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("cityName").innerText =
        data.name;

        document.getElementById("temperature").innerText =
        `${data.main.temp} °C`;

        document.getElementById("description").innerText =
        data.weather[0].description;

    }

    catch(error){

        alert("City not found");

    }

});