
// Observera att du ska använda dig av arraymetoderna  map, filter, reduce, sort utan att förändra orginalobjektet!

//------------------ data att jobba med - tweets -------------------  //

const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'Bye bye Cov-id..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // 1. Använd Array.prototype.filter() för att ta bort kommentaren med id 823423
  


  // 2. Använd Array.prototype.map() för att lägga till <li> taggar runt varje tweet-text. Arrayen ska slås ihop till en sträng med hjälp av Array.prototype.join() som ska läggas till i ul-elementet i DOM:en (se index.html). 



  //------------------ny data att jobba med - authors -------------------  //

 const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1921, passed: 1821 },
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];

  
  // 3. Det finns en fake-författare i authors som är död före den är född! Hitta elementet genom att använda Array.prototype.filter()



  // 4. Använd Array.prototype.map för att skapa en array som innehåller endast författarnas fullständiga namn (förnamn och efternamn)


  
  // 5. Använd Array.prototype.filter() för att skapa en array för författare som föddes på 1800-talet


 
   // 6. Anvvänd Array.protoype.sort() för att skapa en aarray som innehåller författarna sorterade i bokstavsordning (stigande ordning) efter efternamn


  
   // 7. Använd Array.protoype.sort() för att skapa en aarray som innehåller författarna sorterade i fallande ordning efter hur många år de levde



  // 8. Använd Array.protype.reduce() för att skapa en array som innehåller författarnas totala ålder
  


  //------------------ny data att jobba med - players -------------------  //

 const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];


  // 9. Använd Array.prototype.some() för att ta reda på om någon spelare är äldre än 35 år?



  // 10. Använd Array.prototype.every()  för att ta reda på om alla spelare är äldre än 20 år?



  // 11. Använd Array.prototype.map() och Array.prototype.split() för att göra om 'name' så att den innehåller 'förnamn efternamn' i stället för nuvarande "efternamn, förnamn"


  
  //------------------och en sista -------------------  //

   // Bonus! 
    
   // 12. Använd Array.prototype.reduce() samt Array.prototype.includes() för att skapa en array som innehåller endast unika värden från arrayen products.
   // Lite annan variant av reduce() - istället för att börja på accumalatorn på 0, börja på en tom array och pusha in värden i den!


   // Den unika arrayen ska alltå se ut så här: ['t-shirt', 'trousers', 'polos', 'shoes', 'jewellery']
