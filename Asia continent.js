
// A.Get all the countries from Asia continent /region using Filter function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest;

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();
xhr.onload = function(){
    let result = JSON.parse(xhr.responseText);
    let asia = result.filter((countries) =>{
         if(countries.region ==='Asia'){
            return countries.name;
         }
    })
console.log(result);
}