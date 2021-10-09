var ApiKey='ac6ee46d74fff945f4929327853f7573';
var today = moment().format('MMM. Do, YYYY - hh:mm A'); 
$('#currentDay').text(today);
var tempEl = document.querySelector('#temp');
var windspeedEl = document.querySelector('#windspeed');
var humidityEl = document.querySelector('#humidity');
var title = document.getElementById('#title');

var getAtlantaWeather = function (Atlanta) {
  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=' + ApiKey + '&units=imperial';
  console.log(getAtlantaWeather);


  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
      
  .then(function (data) {
          console.log(data);
          //should display weather elements
          tempEl.textContent = ' ' + data.main.temp + ' °F';
          humidityEl.textContent = ' ' + data.main.humidity + '%'
          windspeedEl.textContent = ' ' + data.wind.speed + ' mph';
        });
};
getAtlantaWeather();