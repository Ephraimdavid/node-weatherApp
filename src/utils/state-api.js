//  ...for the love of a Nation!     

 //            LAND OF THE RISING SUN!
app.get('/states', (req, res) => {
    res.send({
        Nigeria: {
            Independence: 1960,
            population: 180000,
            currency: ['naria', 'kobo'],
            Region: 'west Africa',
            states: 36
        },
        state: {
            name: 'Abia',
            capital: 'Umuahia',
            creation: 1991,
            population: '',
            LGA: [],
            zone: 'south East'
        }
    })
})