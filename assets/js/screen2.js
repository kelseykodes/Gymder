var ApiKey='ac6ee46d74fff945f4929327853f7573';
var today = moment().format('MMM. Do, YYYY - hh:mm A'); 
$('#currentDay').text(today);
var tempEl = document.querySelector('#temp');
var windspeedEl = document.querySelector('#windspeed');
var humidityEl = document.querySelector('#humidity');
var title = document.getElementById('#title');
var btnBuckhead = document.getElementById('#buckhead');

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
          tempEl.innerHTML = ' ' + data.main.temp + ' °F';
          humidityEl.innerHTML = ' ' + data.main.humidity + '%'
          windspeedEl.innerHTML = ' ' + data.wind.speed + ' mph';
        });
};
getAtlantaWeather();
  
//BUCKHEAD 3 GYMS
let buckheadHtml = `<div class='card'>
<h2>${'Buckhead'}</h2>
<img src='./assets/img/Buckhead/Windy Hill/aYkKfGN0_400x400.jpeg' class='images'>
<p>${'Windy Hill Athletic Club'}</p>
<p>${'Address: 135 Interstate N Pkwy, Atlanta, GA 30339'}</p>
<p>${'Phone:(770) 746-0214'}</p>
<p>${'Hours: 6AM - 11PM'}</p>
<img src='./assets/img/Buckhead/Barrys/Barrys-Bootcamp-Signage.jpeg' class='images'>
<p>${'This is gym two. It sucks and so do I at javascript.'}</p>
<img src='./assets/img/Buckhead/Sculpthouse/SculptHouse_-01_1152.png' class='images'>
<p>${'This is gym three. It sucks and so do I at javascript.'}</p>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!"/>'}
</div>
`
document.getElementById('section').innerHTML = buckheadHtml

//DECATUR 3 GYMS
let decaturHtml = `<div class='card'>
<h2>${'Decatur'}</h2>
<img src='./assets/img/Decatur/laFitness/1060.jpeg' class='images'>
<p>${'This is gym one. Fill in more info about gym one.'}</p>
<img src='./assets/img/Decatur/snapFitness/download.png' class='images'>
<p>${'This is gym two. Fill in more info about gym two.'}</p>
<img src='./assets/img/Decatur/strengthCondition/download.png' class='images'>
<p>${'This is gym three. Fill in more info about gym three.'}</p>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!"/>'}
</div>
`
document.getElementById('sectionDecatur').innerHTML = decaturHtml


//DOWNTOWN 3 GYMS
let  downtownHtml = `<div class='card'>
<h2>${'Downtown'}</h2>
<img src='./assets/img/Downtown/bodyArchitects/download.png' class='images'>
<p>${'This is gym one. Fill in more info about gym one.'}</p>
<img src='./assets/img/Downtown/orangeTheory/Screen Shot 2021-10-12 at 3.56.58 PM.png' class='images'>
<p>${'This is gym two. Fill in more info about gym two.'}</p>
<img src='./assets/img/Downtown/sweatEquity/300768.jpeg' class='images'>
<p>${'This is gym three. Fill in more info about gym three.'}</p>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!"/>'}
</div>
`
document.getElementById('sectionDowntown').innerHTML = downtownHtml

//MIDTOWN 3 GYMS
let  midtownHtml = `<div class='card'>
<h2>${'Midtown'}</h2>
<img src='./assets/img/Midtown/blast/1519890076834.jpeg' class='images'>
<p>${'This is gym one. Fill in more info about gym one.'}</p>
<img src='./assets/img/Midtown/lionsDen/download.png' class='images'>
<p>${'This is gym two. Fill in more info about gym two.'}</p>
<img src='./assets/img/Midtown/stellerBodies/Screen Shot 2021-10-12 at 4.03.34 PM.png' class='images'>
<p>${'This is gym three. Fill in more info about gym three.'}</p>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!"/>'}
</div>
`
document.getElementById('sectionMidtown').innerHTML = midtownHtml


// const cityKey = document.getElementById('cityKey');
// const cityValue = document.getElementById('cityValue');
// const cityClicked = document.getElementById('cityClicked');
// const cityClickedDisplay = document.getElementById('cityClickedDisplay');

// cityClicked.onclick = function(){
//   const key = cityKey.value;
//   const value = cityValue.value;

//   console.log(key);
//   console.log(value);

//   if (key && value) {
//     localStorage.setItem(key, value);
//     location.reload();
//   }
// };

// for (var i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     cityClickedDisplay.innerHTML += `${key}: ${value}<br />`;

