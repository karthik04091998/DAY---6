
//b.Get all the countries with a population of less than 2 lakhs using Filter function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let result = JSON.parse(xhr.responseText);
    const Populaton = result.filter((pop)=>{
        return pop.population<200000;
    })
console.log(Populaton);
}
 