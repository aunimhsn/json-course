// CSV to JSON converter

// NodeJS Module: File System
const fs = require('fs')

fs.readFile('../../db/products.csv', (err, data) => {
    if (err) throw err
    
    // Read CSV
    // https://stackoverflow.com/questions/53031531/how-can-i-convert-from-csv-to-array-json-string-in-node-js
    let csvArr = data.toString()
                 .split('\r\n')
                 .map(out => out.split(','))

    // Convert CSV to JS array of object [items]
    // https://stackoverflow.com/questions/34348937/access-to-es6-array-element-index-inside-for-of-loop
    let jsonKeys = csvArr.shift()
    let items = []
    for (const row of csvArr) {
        let item = {} 
        for (const [key, value] of jsonKeys.entries())
            item[value] = (isNaN(parseFloat(row[key]))) ? row[key] : parseFloat(row[key])

        items.push(item)
    }

    // Create JSON file from items
    fs.writeFile('../../db/products.json', 
                 JSON.stringify(items),
                 error => { 
                    if (error) throw error
                    console.log('product.csv -> products.json done!')
                })
})