// Tuodaan filesystem-moduuli ohjelmaan
var fs = require("fs");


// Kirjoitetaan data-muuttuja tiedostoon
var data = fs.readFileSync('example.txt');
data += fs.readFileSync('examble.txt');

// console.log(data.toString());

fs.writeFile('combiningfile.txt', data, (err) => {
    if (err) throw err;
    console.log("Yhdistelmätiedosto on tallennettu...");
})