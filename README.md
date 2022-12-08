# Öva Javascript Arraymetoder

1. Gå till index.js 
2. Jobba övning för övning
3. När du använder map, filter, reduce etc öva även på att skriva arrowfunktioner. 
  
  
const numbers = [1,2,3,4,11]

 const filteredNumbers = numbers.filter((element) => {
   return element > 10 ;
 })


// Eller med implicit return
const filteredNumbers = numbers.filter(element => element > 10)


//Istället för 
const filteredNumbers = numbers.filter(function(element) {
  return element > 10;
})
