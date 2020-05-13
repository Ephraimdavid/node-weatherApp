const path = require('path')
const express = require('express')
const hbs = require('hbs')

const forecastFunc = require('./utils/forecast')
const geoCodeFunc = require('./utils/geocode')

const app = express()
 console.log(app)
//define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPaths = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPaths)

//setup static directory to serve
app.use(express.static(publicDir))


app.get( '', (req, res) => {
    res.render('index', {
        title: 'Weather App', 
        name: 'Ephraim David'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ephraim David'
    })
}) 

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Ephraim David',
        helpMsg: 'Dear user, if you need any help dont fail to contact me!'
    })
})

app.get('/history', (req, res) => {

    if (!req.query.personal) {
      return  res.send({
            Error: 'you are not allowed to view this information'
        })
    }
    res.send({
        History:{
            name: 'Ephraim David',
            age: 24,
            likes: ['SBEB', 'coding'],
            required: ['ok i might appear to be wicked or selfish but thats me! But the truth is that am a nice guy living in an alpha Society'],
            target: 'intercept CBN API'
        },
        Besties: {
            name: '2nd Lt Ben',
            otherName: ['Nora', 'Ella', 'Collins', 'Ernest', 'Madukaife', 'NwankwoJr', 'Lato-Babe', 'Naria-BamBam', 'OBO', 'Chika']
        }
    })
})


app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'you must provide an address term'
        })

    }

    geoCodeFunc(req.query.address, ( error, { latitude, longtitude, location } = {}) => {
      if (error) {
        return  res.send({ error })
      }
        forecastFunc(longtitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
         res.send({
             forecast: forecastData,
             location,
            address: req.query.address
        })

       })
        
    })
   
   
}) 

app.get('/product', (req, res) => {

    if (!req.query.search) {
       return  res.send({
         error: 'you must provide a search term'
        })
    }

    res.send({
        product: [{name: 'football', prize: 3000}]
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Ephraim David',
        errorMesg: 'Page not Found! look forward to a better society!'
    })
})



app.get('*',(req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'Ephraim David',
        errorMesg: 'page not found!'
    })
})

app.listen(3000, () => {
    console.log('serving @ port: 3000')
})


// const express = require('express')


// const app = express()


// app.get('/', (req, res) => {
//     res.send('Hello Nora from Earth!!')
// })



// app.listen(3000, () => {
//     console.log('port 3000 on!!!')
// })

