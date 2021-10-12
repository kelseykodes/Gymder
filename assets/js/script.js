const cityKey = document.getElementById('cityKey');
const cityValue = document.getElementById('cityValue');
const cityClicked = document.querySelector('.cityClicked'); //added with logan
const cityClickedDisplay = document.getElementById('cityClickedDisplay');

// cityClicked.addEventListener('click', function(){
//   const key = cityKey.value;
//   const value = cityClicked.id;
//   console.log(key);
//   console.log(value);
//   if (key && value) {
//     localStorage.setItem(key, value);
//     location.reload();
//   }
//   window.location.href='screen2.html' //added with logan
// });

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