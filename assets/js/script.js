const cityKey = document.getElementById('cityKey');
const cityValue = document.getElementById('cityValue');
const cityClicked = document.querySelector('.cityClicked'); //added with TA
const cityClickedDisplay = document.getElementById('cityClickedDisplay');

const city = localStorage.getItem('city');
cityClickedDisplay.innerHTML += `City: ${city}<br />`;

function clickFunction (id){
localStorage.setItem('city', id)
    window.location.href='secondscreen.html#section.html'
};

function clickFunctionDecatur (id){
    localStorage.setItem('city', id)
        window.location.href='secondscreen.html#sectionDecatur'
};

function clickFunctionDowntown (id){
    localStorage.setItem('city', id)
        window.location.href='secondscreen.html#sectionDowntown'
};

function clickFunctionMidtown (id){
    localStorage.setItem('city', id)
        window.location.href='secondscreen.html#sectionMidtown'
};


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.7490, lng: -84.3880 },
    zoom: 8,
    
  });
  
  function addMarker(location){
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
  }
  addMarker({ lat: 33.7490, lng: -84.3880 });
  addMarker({ lat: 33.8373, lng: -84.4068});
  addMarker({ lat: 33.7833, lng: -84.3831});
}

