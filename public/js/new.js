

fetch('http://localhost:3000/covid?search').then((response) => {
    response.json().then((data) => {
        console.log(data.Besties.otherName)
    })
})