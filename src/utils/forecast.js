const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0c63aee3c657cc65335a578b07883797&query=' +
        latitude + ',' + longitude + '&units=m'

    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (false === body.success) {
            callback('Unable to find location!')
        } else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const weather_descriptions = body.current.weather_descriptions[0]

            callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees outside.`)
        }
    })
}

module.exports = forecast
