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
let buckheadHtml = `<div class='card' style="width: 600px;" >
<h2>${'Buckhead'}</h2>
<img src='./assets/img/Buckhead/Windy Hill/aYkKfGN0_400x400.jpeg' class='images'>
<fieldset class="spa">
<legend>${'Windy Hill Athletic Club'}</legend>
<div>${'Address: 135 Interstate N Pkwy, Atlanta, GA 30339'}</div>
<div>${'Phone: (770) 746-0214'}</div>
<div>${'Hours: 6AM - 11PM'}</div>
</fieldset>
<img src='./assets/img/Buckhead/Barrys/Barrys-Bootcamp-Signage.jpeg' class='images'>
<fieldset class="spa">
<legend>${'Barrys Boot Camp'}</legend>
<div>${'Address: 303 East Paces Ferry Rd NE, Atlanta, GA 30305'}</div>
<div>${'Phone: (404) 846-2880'}</div>
<div>${'Hours: 5AM - 9PM'}</div>
</fieldset>
<img src='./assets/img/Buckhead/Sculpthouse/SculptHouse_-01_1152.png' class='images'>
<fieldset class="spa">
<legend>${'SculptHouse Buckhead'}</legend>
<div>${'Address: 303 East Paces Ferry Rd NE, Atlanta, GA 30305'}</div>
<div>${'Phone: (470) 553-0080'}</div>
</fieldset>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!" class="goba"/>'}
</div>
`
document.getElementById('section').innerHTML = buckheadHtml
//DECATUR 3 GYMS
let decaturHtml = `<div class='card' style="width: 600px;" >
<h2>${'Decatur'}</h2>
<img src='./assets/img/Decatur/laFitness/1060.jpeg' class='images'>
<fieldset class="spa">
<legend>${'LA Fitness'}</legend>
<div>${'Address: 1496 Church St, Decatur, GA 30030'}</div>
<div>${'Phone: (404) 267-2723'}</div>
<div>${'Hours: 5AM - 9PM'}</div>
</fieldset>
<img src='./assets/img/Decatur/snapFitness/download.png' class='images'>
<fieldset class="spa">
<legend>${'Snap Fitness'}</legend>
<div>${'Address: 137 S McDonough St, Decatur, GA 30030'}</div>
<div>${'Phone: (678) 705-1439'}</div>
<div>${'Hours: 10AM - 2PM & 4AM - 7PM'}</div>
</fieldset>
<img src='./assets/img/Decatur/strengthCondition/download.png' class='images'>
<fieldset class="spa">
<legend>${'Decatur Strength & Conditioning'}</legend>
<div>${'Address: 701 Church St, Decatur, GA 30030'}</div>
<div>${'Phone: (404) 370-1763'}</div>
<div>${'Hours: 5:30AM - 7PM'}</div>
</fieldset>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!" class="goba"/>'}
</div>
`
document.getElementById('sectionDecatur').innerHTML = decaturHtml
//DOWNTOWN 3 GYMS
let  downtownHtml = `<div class='card' style="width: 600px;" >
<h2>${'Downtown'}</h2>
<img src='./assets/img/Downtown/bodyArchitects/download.png' class='images'>
<fieldset class="spa">
<legend>${'The Body Architects'}</legend>
<div>${'Address: 400 W Peachtree St NW Suite #4, Atlanta, GA 30308'}</div>
<div>${'Phone: (305) 930-6659'}</div>
<div>${'Hours: 6AM - 9PM'}</div>
<fieldset>
<img src='./assets/img/Downtown/orangeTheory/Screen Shot 2021-10-12 at 3.56.58 PM.png' class='images'>
<fieldset class="spa">
<legend>${'Orange Theory'}</legend>
<div>${'Address: 933 Peachtree St NE Atlanta, GA 30309 '}</div>
<div>${'Phone: (404) 747-7107'}</div>
<div>${'Hours: 4:30AM - 9PM'}</div>
</fieldset>
<img src='./assets/img/Downtown/sweatEquity/300768.jpeg' class='images'>
<fieldset class="spa">
<legend>${'Sweat Equity Fitness Of Atlanta'}</legend>
<div>${'Address: 10 Jackson St SE, Atlanta, GA 30312'}</div>
<div>${'Phone: (404) 480-0432'}</div>
<div>${'Hours: 5:30AM - 9PM'}</div>
</fieldset>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!" class="goba"/>'}
</div>
`
document.getElementById('sectionDowntown').innerHTML = downtownHtml
//MIDTOWN 3 GYMS
let  midtownHtml = `<div class='card' style="width: 600px;" >
<h2>${'Midtown'}</h2>
<img src='./assets/img/Midtown/blast/1519890076834.jpeg' class='images'>
<fieldset class="spa">
<legend>${'BLAST Midtown'}</legend>
<div>${'Address: 100 6th St NE, Atlanta, GA 30308'}</div>
<div>${'Phone: (678) 701-0619'}</div>
<div>${'Hours: 5AM - 7:30PM'}</div>
</fieldset>
<img src='./assets/img/Midtown/lionsDen/download.png' class='images'>
<fieldset class="spa">
<legend>${'Lions Den Fitness'}</legend>
<div>${'Address: 900 Peachtree St NE, Atlanta, GA 30309'}</div>
<div>${'Phone: (678) 835-8699'}</div>
<div>${'Hours: 6AM - 7:30PM'}</div>
</fieldset>
<img src='./assets/img/Midtown/stellerBodies/Screen Shot 2021-10-12 at 4.03.34 PM.png' class='images'>
<fieldset class="spa">
<legend>${'Stellar Bodies Midtown'}</legend>
<div>${'Address: 44 12th St NE, Atlanta, GA 30309'}</div>
<div>${'Phone: (404) 467-1060'}</div>
<div>${'Hours: 6AM - 7PM'}</div>
</fieldset>
<div> ${'<input type="button" onclick= window.location.href="index.html" value="Go back and choose another city!" class="goba"/>'}
</div>
`
document.getElementById('sectionMidtown').innerHTML = midtownHtml
















