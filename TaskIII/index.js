let animals = ['dogs', 'cats', 'rabbits', 'mice'];
const checka = ['a'];
let results = '';
let noAResults = ''; 

for (let animal of animals) {
    const containsA = animal.includes(checka[0]); 
    results += `${animal}: ${containsA}<br>`;
    
   
    if (!containsA) {
        noAResults += `${animal}<br>`;
    }
}


document.getElementById('result').innerHTML = results;

if (noAResults) {
    document.getElementById('noAResults').innerHTML = `Animals without 'a':<br>${noAResults}`;
} 
