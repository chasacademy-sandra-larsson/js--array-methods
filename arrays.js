

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




  // Array.prototype.findIndex() och Array.prototype.slice()
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
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1941 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];


  // Använd Array.prototype.map
  // 4. Skapa en array med varje författares för- och efternamn från arrayen authors
   
  
  
  // Array.prototype.filter()
  // 5. Filtrera arrayen authors utifrån författaren som föddes på 1800-talet



  // Array.prototype.findIndex()
  // 6. Det finns en fake-författare i authors - som är död före den är född! Hitta elementet!



  // Array.protype.splice() 
  // 7. Ta bort fake-författaren som du hittade i 3). I nästommande övningar använder du den nya arrayen utan fake-författaren



  // Array.protoype.sort()
  // 8. Sortera arrayen i stigande ordning utifrån födelseår - äldst till yngst



  // Array.protoype.sort()
  // 9. Sortera arrayen utifrån hur många år varje författare har levt - från flest år till minst år
  
  
  
  
  // Array.protype.reduce()
  // 10.. Beräkna hur totala antalet år som ALLA författare har levt



  //------------------ny data att jobba med - players -------------------  //

 const players = [
    { name: 'Modrić, Luka', year: 1985 },
    { name: 'Christian, Eriksen', year: 1992 },
    { name: 'Griezmann, Antoine', year: 1991 },
    { name: 'Achraf, Hakimi', year: 1998 },
    { name: 'Martínez, Lautaro', year: 1997 }
  ];


  // Array.prototype.some() 
  // 11. Finns det någon spelare som är äldre än 35 år?


  // Array.prototype.every() 
  // 12. Är alla spelare äldre än 20 år?


  // Array.prototype.map()
  // 13. Gör om så name skrivs "förnamn efernamn" iställer för nuvarande "efternamn, förnamn"
   
