const theKey = `f843a7920383c594518d52947c4bbf83`;
const apiRootUrl = 'https://api.openweathermap.org';

async function fetchWeather(location) {
    var { lat } = location;
    var { lon } = location;
    const apiUrl = `${apiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${theKey}`;
  
    await fetch(apiUrl)
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .catch(function (err) {
        console.error(err);
      });
  }
async function fetchCoords(search) {
    var apiUrl = `${apiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
  
    await fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
            fetchWeather(data[0]);
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  fetchCoords('Austin');