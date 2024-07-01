// 1.Task one

class Movie {

  constructor(title = "", director = "", rating = "PG") {
    this.title = title;
    this.director = director;
    this.rating = rating;
  }

  getPG(movies=[Movie]) {
    const filterdMovies = []
    movies.forEach((movie) => {
        if(movie.rating == "PG"){
            filterdMovies.push(movie)
        }
    })
    return filterdMovies;
  }
}

const movie1 = new Movie("Avangers", "Marval", "PG35");
const movie2 = new Movie("Spiderman", "Sony");
const movie3 = new Movie("ironMan", "Marvals");

console.log(movie1.getPG([movie1, movie2, movie3]));


// 3.Write a “person” class to hold all the details.

class Person{
    constructor(name,age,address,phone,email){
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}
const person1 = new Person("Ahamed" , 22 , "MainRoad Perambalur" , 932748384309 , "ahamed@gmail.com")
console.log(person1);

//4. write a class to calculate a Uber price
class uberRiders {
  constructor(kms = "", pricePerKms = "") {
    this.kms = kms;
    this.pricePerKms = pricePerKms;
    const priceAmount = this.kms * this.pricePerKms;
    console.log(priceAmount);
  }
}

const finalAMount = new uberRiders(20, 2);
console.log(finalAMount);
