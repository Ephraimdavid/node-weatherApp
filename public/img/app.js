const htmlDiv = document.querySelector('.response_data')
const form = document.querySelector('form')
const jsDiv = document.createElement('div')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const p4 = document.createElement('p')
const p5 = document.createElement('p')
const p6 = document.createElement('p')
const p7 = document.createElement('p')

const createResponseList = (value) => {
    const p = document.createElement('p')
    p.textContent = value
    return p
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = e.target.elements.names.value

        fetch('/states').then((response) => {
            response.json().then((datas) => {
            
            datas.forEach((data) => {
               
                if (data.state === inputValue) {
                    p1.textContent = data.state
                    p4.textContent = data.population[0]

                    data.LGAs.forEach( async (text, index) => {
                        const p = await document.createElement('p')
                        p.textContent = `${index + 1} ${text}`
                       await jsDiv.appendChild(p)
                    })
                    console.log(data)
                    
                }
                jsDiv.appendChild(p1)
                jsDiv.appendChild(p2)
                jsDiv.appendChild(p3)
                jsDiv.appendChild(p4)
                htmlDiv.appendChild(jsDiv)
            })

            
            })
        }).catch((e) => console.log(`Error ${e}`))
    })

    


// const getDataFunc = async (API) => {
//    const fetchData = await accessAPI(API)

//    const returnValue = fetchData.json()
//    console.log(returnValue)
// }

// getDataFunc(fetch('/states'))