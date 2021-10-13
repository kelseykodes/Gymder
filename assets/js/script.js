const cityKey = document.getElementById('cityKey');
const cityValue = document.getElementById('cityValue');
const cityClicked = document.querySelector('.cityClicked'); //added with TA
const cityClickedDisplay = document.getElementById('cityClickedDisplay');
const city = localStorage.getItem('city');
//cityClickedDisplay.innerHTML += `City: ${city}<br />`; there is an error /
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
    center: { lat: 33.7913403, lng: -84.3880 },
    zoom: 12,
  });
  function addMarker(location){
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
  }
  addMarker({ lat: 33.83858, lng: -84.374427 });
  addMarker({ lat: 33.84112 , lng: -84.3754});
  addMarker({ lat: 33.90317, lng: -84.465653});
  addMarker({ lat: 33.7913403, lng: -84.2858788});
  addMarker({ lat: 33.768516 , lng: -84.296495});
  addMarker({ lat: 33.7785242 , lng: -84.2946342});
  addMarker({ lat: 33.765482 , lng: -84.3879434});
  addMarker({ lat: 33.7800741 , long: -84.3839653});
}
