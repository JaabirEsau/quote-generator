let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
     '"The road to success and the road to failure are almost exactly the same."- Colin R. Davis',
     '"We love to play in the snow."- Saadiq Ryklief',
     '"Sometimes you gonna play with balls ."- Sajjaad Francis',
     '"I want all the money so that i can become foolish ."- Sergio Pillay',
     '"Here lies your quote [ read again]......"- Jaabir Esau',
     '"A qoute a day keeps ISIS at bay."- Usama Bin ladin',
     '"When i look to the future i see nothing ."- Your friendly neighbour Peter Griffin',
    
];


btn.addEventListener('click', function(){
    var randomQoute = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQoute;
})