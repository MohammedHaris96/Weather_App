window.addEventListener("load", () => {
  let longitude;
  let latitude;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimeZone = document.querySelector(".location-timezone");
  let timeZone = document.querySelector(".time");

  //Get the location of the user and save the
  // coordinates in Longitute and latitude

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // values of the coordinates will be saved in Longitute and latitude;
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;

      //api injected from browser.

      const api = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=c1591d7eef074f5fa88d6ec92f8a5e37&lang=eng`;

      //fetching data from api

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          console.log(data.data[0].temp);
          console.log(data.data[0].weather.description);

          //Set DOM elements from the API

          temperatureDegree.textContent = data.data[0].temp;
          temperatureDescription.textContent = data.data[0].weather.description;
          locationTimeZone.textContent = data.data[0].city_name;
          timeZone.textContent = data.data[0].timezone;
        });
    });
  }
});
