// Do the below programs in anonymous function & IIFE

// 1 .Print odd numbers in an array

var arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ] ; 

(function (i = []){
  i.forEach((element) => {
    if( element % 2 !== 0 ){
        console.log(element)
    }
  });
})(arr)

// 2 . Convert all the strings to title caps in a string array

(function() {
    // Define the array of strings
    let stringArray = ["hello world", "javascript programming", "convert to title caps"];
  
    // Function to convert a string to title case
    function toTitleCase(str) {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
  
    // Convert each string to title caps
    let titleCapsArray = stringArray.map(toTitleCase);
  
    // Print the result
    console.log(titleCapsArray);
  })();

//   3 . Sum of all numbers in an array

(function (){
    var totalSum = [ 1 , 2 , 3 , 4 , 5 ]

    var total = 0 ; 
    for ( i = 0 ; i < totalSum.length ; i++ ){
        total += totalSum[i]
    }
    console.log(total)
})

// 4 . Return all the prime numbers in an array

(function() {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i * i <= num; i++) { 
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let primeNumbers = [];
    for (let i = 0; i < numberArray.length; i++) {
      if (isPrime(numberArray[i])) {
        primeNumbers.push(numberArray[i]); 
      }
    }
  
    console.log(primeNumbers);
  })();

// 5 . Return median of two sorted arrays of the same size.

(function() {
    let arr1 = [1, 3, 5, 7, 9];
    let arr2 = [2, 4, 6, 8, 10];
  
    function medianOfSortedArrays(arr1, arr2) {
      let combinedArray = arr1.concat(arr2);
      combinedArray.sort((a, b) => a - b);
      let length = combinedArray.length;
      if (length % 2 === 0) {
        return (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
      } else {
        return combinedArray[Math.floor(length / 2)];
      }
    }
  
    let median = medianOfSortedArrays(arr1, arr2);
  
    console.log(median);
  })();
  
//   6 . Remove duplicates from an array

(function() {
    let arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5, 6, 1];
  
    function removeDuplicates(arr) {
      let uniqueArray = [];
      for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
          uniqueArray.push(arr[i]);
        }
      }
      return uniqueArray;
    }
  
    let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
    console.log(arrayWithoutDuplicates);
  })();
  
   