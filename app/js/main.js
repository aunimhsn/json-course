// Module File System
const fs = require('fs')

fs.readFile('app/db/cars.json', (err, data) => {
    if (err) throw err
    
    dataStr = data.toString()
    dataJSON = JSON.parse(dataStr)
    
// Première voiture
console.log(dataJSON.cars[0])

// La marque de seconde voiture
console.log(dataJSON.cars[1].brand)
})

// url = 'https://...'

// fetch(url)
// .then((response) => { return response.json() })
// .then((data) => {
//     // Affichage des données
//     console.log(data)
// })
