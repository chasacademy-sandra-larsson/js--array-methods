

//------------------ data att jobba med - tweets -------------------  //

const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'Bye bye Cov-id..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Array.prototype.find()
  // 1. Hitta kommentaren med id 823423



  // Array.prototype.findIndex() och Array.prototype.splice()
  // 2. Hitta kommentaren med id 2039842 och ta sedan bord den kommentaren



  // Array.prototype.map() och Array.prototype.join()
  // 3. Generera HTML för en ul-lista är varje li innehåller värdet i 'text'. Lägg till ul-listan på index.html


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

  // Array.prototype.findIndex() och Array.protype.splice() 
  // 4. Det finns en fake-författare i authors - som är död före den är född! Hitta elementet och ta bort det med Array.prototype.splice()!



  // Använd Array.prototype.map
  // 5. Skapa en array med varje författares för- och efternamn från arrayen authors
   
  
  
  // Array.prototype.filter()
  // 6. Filtrera arrayen authors utifrån författare som föddes på 1800-talet



  // Array.protoype.sort()
  // 7. Sortera arrayen i stigande ordning utifrån födelseår - äldst till yngst



  // Array.protoype.sort()
  // 8. Sortera arrayen utifrån hur många år varje författare har levt - från flest år till minst år
  
  
  
  
  // Array.protype.reduce()
  // 9. Beräkna hur totala antalet år som ALLA författare har levt



  //------------------ny data att jobba med - players -------------------  //

 const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];


  // Array.prototype.some() 
  // 10. Finns det någon spelare som är äldre än 35 år?


  // Array.prototype.every() 
  // 11. Är alla spelare äldre än 20 år?


  // Array.prototype.map() och Array.prototype.split()
  // 12. Gör om så att 'name' skrivs "förnamn efernamn" istället för nuvarande "efternamn, förnamn"


  //------------------och en sista -------------------  //

   // Bonus! Kan komma att behövas på inlämningsuppgiftens VG-del
    
   // Array.prototype.reduce() och Array.prototype.includes()
   // 13. M h a recuce() skapa en ny array som innehåller representerade kategorier i products. Acculumulatorn kan även börja från en tom array!
   
   const products = ['t-shirt', 'trousers', 'polos', 'shoes', 'jewellery', 'trousers','shoes', 'trousers',  'jewellery',  'trousers', 'polos', 't-shirt', 't-shirt']

