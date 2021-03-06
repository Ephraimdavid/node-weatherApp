const jsDiv = document.createElement('div')
const select = document.createElement('select')
const option = document.createElement('option')
const htmlDiv = document.querySelector('#push')


document.querySelector('#drop-down').addEventListener('change', (e) => {
    const i = e.target.value
    fetch('/states').then((response) => {
        response.json().then((data) => {
        
            data.States.filter((result) => {
                if (i === result.state) {
                     option.textContent = result.LGAs
                     select.appendChild(option)  
                     jsDiv.appendChild(select)
                     htmlDiv.appendChild(jsDiv)
                     select.addEventListener('change', (e) => {
                         console.log(e.target.value)
                     })
                }
            })
            
       })
    })
    
})
