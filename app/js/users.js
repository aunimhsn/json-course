// Module File System
const fs = require('fs')

fs.readFile('app/db/users.json', (err, data) => {
    if (err) throw err
    
    let dataStr = data.toString()
    let dataJSON = JSON.parse(dataStr)

    // Suppression du second utilisateur
    dataJSON.users.splice(1, 1)
    fs.writeFileSync('app/db/users.json', JSON.stringify(dataJSON))
})


