const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e){
    e.preventDefault();

    fetch(baseURL) //fetch returns a promise
        .then(result => result.json()) //json returns a promise
        .then(json => {
            console.log(json);
            displayRockets(json);
        })
}        

function displayRockets(rockets) {
    rockets.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    })
}