// a . Get all the countries from Asia continent /region using Filter method

var uri = "https://restcountries.com/v3.1/all"

var newInstance = new XMLHttpRequest();
newInstance.open("GET" , uri);
newInstance.send();
newInstance.onreadystatechange = function() {
    if( this.status === 200 && this.readyState === 4 ){
        var countries = JSON.parse(this.response);
        countries.filter((element) => {
            if(element.region ==="Asia"){
                console.log(element.name.common);
            }
        })
    }
    return false
}


//b. Get all the countries with a population of less than 2 lakhs using Filter method

var uri = "https://restcountries.com/v3.1/all"

var newInstance = new XMLHttpRequest();
newInstance.open("GET" , uri);
newInstance.send();
newInstance.onreadystatechange = function() {
    if( this.status === 200 && this.readyState === 4 ){
        var countries = JSON.parse(this.response);
        countries.filter((element) => {
            if(element.population <= 200000){
                console.log(element.name.common , element.population);
            }
        })
    }
    return false
}

// c . Print the following details name, capital, flag, using forEach method

var uri = "https://restcountries.com/v3.1/all"

var newInstance = new XMLHttpRequest();
newInstance.open("GET" , uri);
newInstance.send();
newInstance.onreadystatechange = function() {
    if( this.status === 200 && this.readyState === 4 ){
        var countries = JSON.parse(this.response);
        countries.forEach(element => {
            console.log(element.name , element.capital , element.flag);
        });
    }
    return false
}

// d . Print the total population of countries using reduce method

var uri = "https://restcountries.com/v3.1/all"

var newInstance = new XMLHttpRequest();
newInstance.open("GET" , uri);
newInstance.send();
newInstance.onreadystatechange = function() {
    if( this.status === 200 && this.readyState === 4 ){
        var countries = JSON.parse(this.response);
        var totalPopulation = countries.reduce((prev,curt) => {
            if ( typeof prev === 'object' ){
                return prev.population + curt.population
            }
            return prev + curt.population
        })
        console.log("Population" , totalPopulation);
    }
    return false
}

// e . Print the country that uses US dollars as currency.

var uri = "https://restcountries.com/v3.1/all"

var newInstance = new XMLHttpRequest();
newInstance.open("GET" , uri);
newInstance.send();
newInstance.onreadystatechange = function() {
    if( this.status === 200 && this.readyState === 4 ){
        var countries = JSON.parse(this.response);
        countries.forEach((element) => {
            if( element.currencies && element.currencies.USD){
                console.log(element.name.common , element.currencies);
            }
        })
    }
    return false
}