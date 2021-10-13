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