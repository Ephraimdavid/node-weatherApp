const jsDiv = document.createElement('div')
const select = document.createElement('select')
const option = document.createElement('option')
const htmlDiv = document.querySelector('#push')

    // TESTING....

document.querySelector('#drop-down').addEventListener('change', (e) => {
    const i = e.target.value

    fetch('/states').then((response) => {
        response.json().then((data) => {

            data.States.filter((result) => {
                if (i === result.state) {
                    const returnValue = result.LGAs.map((item) => item)
                    option.textContent = returnValue.join(', ')

                    select.appendChild(option)
                    select.classList.add('dropdown')
                    jsDiv.appendChild(select)
                    htmlDiv.appendChild(jsDiv)
                }
            })
            
        })
    })

})
