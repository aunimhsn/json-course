// Module File System
const fs = require('fs')

fs.readFile('../../db/weather.json', (err, data) => {
    if (err) throw err

    let dataStr = data.toString()
    let weatherData = JSON.parse(dataStr)

    // 1. Modifier la valeur de  "sea_level" en 1156.
    weatherData.main.sea_level = 1156

    // 2. Supprimer la propriété "description" de "weather".
    delete weatherData.weather.description

    // 3. Trouver à quelle date correspond "sunrise" puis enlever 15 minutes.
    let sunriseDate = new Date(weatherData.sys.sunrise * 1000)
    console.log(`Sunrise: ${sunriseDate}`)

    weatherData.sys.sunrise -= 15 * 60
    let sunriseDateUpdated = new Date(weatherData.sys.sunrise * 1000)
    console.log(`Sunrise updated: ${sunriseDateUpdated}`)

    // 4. Ajouter dans "main" la température en Celsius.
    // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    const ABSOLUTE_ZERO = -273.15

    let celsiusTemp = Math.round((weatherData.main.temp + absoluteZero) * 100) / 100
    weatherData.main.celsius_temp = celsiusTemp

    let celsiusTempMax = Math.round((weatherData.main.temp_max + absoluteZero) * 100) /100
    weatherData.main.celsius_temp_max = celsiusTempMax

    let celsiusTempMin = Math.round((weatherData.main.temp_min + absoluteZero) * 100) /100
    weatherData.main.celsius_temp_min = celsiusTempMin

    // Bonus 1.
    // https://bobbyhadz.com/blog/javascript-convert-seconds-to-hh-mm-ss
    let durationSecond = weatherData.sys.sunset - weatherData.sys.sunrise
    let time = new Date(durationSecond * 1000)
                    .toISOString()
                    .slice(11, 19)
    weatherData.sys.dayDurationSeconds = durationSecond
    weatherData.sys.dayDurationTime = time

            
    // Create JSON file from weatherData
    fs.writeFile('../../db/weatherUpdated.json', 
                 JSON.stringify(weatherData),
                 error => { if (error) throw error })
})