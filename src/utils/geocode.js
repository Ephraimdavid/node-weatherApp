const request = require('request')

const geoCode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiZXBocmFpbWRhdmlkIiwiYSI6ImNrOWNyY2w3eTA1M3Yza2syc3hncG4xZTgifQ.fyA5Au4TFQUpyPM_yAXD8w&limit=1'

    request({url, json: true}, (error, { body }) => {

        if (error) {
            callback('Oops, cannot connect to server, please try again', undefined)
        } else if (body.features.length === 0) {
            callback('No data found, please check your address query and try again', undefined)
        } else {
            callback(undefined, {
                longtitude: body.features[0].center[1],
                latitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }

    })
 
}


module.exports = geoCode