const API_KEY = "0370bfb5ab6c164dfa9bfc236a549838";
const CURRENT_WEATHER_DATA = {};

const submitButton = document.getElementById("button");
const city = document.getElementById("city");

submitButton.addEventListener("click", async function showWeatherFor(city) {
  url_to_call =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    API_KEY;
  const response = await fetch(url_to_call)
    .then((resp) => {
      console.log("In the fetch's response");
      return resp.json();
    })
    .then((data) => {
      console.log("In the second response");
      console.log(data);
      CURRENT_WEATHER_DATA = data;
    });
  return CURRENT_WEATHER_DATA;
});
