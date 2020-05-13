const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5cd3fa8b0e5f4fce5510e816e5bbd3c7&query=' + long + ', ' + lat

request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('cannot reach server, please try again', undefined)
        } else if ( body.current === undefined) {
            callback('failed to fetch API, please check your address query', undefined)
        } else {
    // callback(`${response.body.current.weather_descriptions}: it is currently ${response.body.current.temperature} degress out but it feels like ${response.body.current.feelslike} degress out!`, undefined)
            callback(undefined, body.current.weather_descriptions + ' it is currently ' + body.current.temperature + ' degress out but it feels like ' + body.current.feelslike + ' degress out!')
        }
    })
}   
 

module.exports = forecast