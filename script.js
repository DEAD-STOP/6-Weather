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

  fetchWeather('Austin');