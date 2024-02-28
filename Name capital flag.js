//c.Print the following details name, capital, flag using forEach function

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload=function(){
    let result = JSON.parse(xhr.responseText);
    result.forEach(Output => {
        console.log(Output.name);
        console.log(Output.capital);
        console.log(Output.flag);
    });
}