//d.Print the total population of countries using reduce function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function(){
    let result = JSON.parse(xhr.responseText);
    let total = result.reduce((acc,curr) =>{
        return acc + curr.population;
    },0);
    console.log(total);
}