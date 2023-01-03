const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c7129c4dd3msh5f536ff1a180a11p1e3121jsnc7783e8056ad",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
