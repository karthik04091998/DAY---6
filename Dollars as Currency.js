//e.Print the country that uses US dollars as currency.
const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function(){
    let result = JSON.parse(xhr.response)
    let answer = result.filter((dummy) => (dummy.currencies !== undefined)) 
    let realanswer = answer.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    } 
    })
    console.log(realanswer.length, realanswer[0].currencies);
}

