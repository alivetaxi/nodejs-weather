const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxpdmV0YXhpIiwiYSI6ImNrd3JtNWU1ZDB4emsydnM2MmZrNmR2ZjIifQ.SR8ZYR3-ZkDJtdCp8qyVwg&limit=1'

    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service!')
        } else if (0 === body.features.length) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode
