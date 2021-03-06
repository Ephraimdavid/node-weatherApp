// http request = human incoming
universe.post('/earth', (req, res) => {
    res.send({
        obinna: {
            fullName: 'Agbeze Aligbo Obinna',
            dateOfBirth: 'A particular point in time',
            location: 'PRC',
            mission: 'stop the function execution',
            isPossible: true
        }
    })
})


// universe.get('/earth', (req, res) => {
//     res.send({
//         austin: {
//             fullName: 'Augustine Chukwuemeka',
//             datebirth: 'A particular point in time in the past',
//             deceased: true
//         }
//     })
// })





















//  ...for the love of a Nation!     

//            LAND OF THE RISING SUN!
app.get('/states', (req, res) => {
    res.send({
        Biafra: {
            Independence: '20',
            population: '+ 50,000,000',
            currency: ['Biafran pounds', 'kobo'],
            Region: 'west Africa',
            states: 50,
            capital: "Umuahia"
        }
    })
})
