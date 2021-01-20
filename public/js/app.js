/*
             UNIX EPOCH
    CONTROL THE MEANS OF INFOMATION    
          
  ...to Mum, Siblings, Ben, Collins, Obis*3, Nora
*/
const di = document.querySelector('.myname')
const user = document.querySelector('.mybut')
const form = document.querySelector('form')
const input = document.querySelector('input')
const p = document.querySelector('.error')



form.addEventListener('submit', (e) => {
  e.preventDefault()

  const find = e.target.elements.names.value

  // fetch from existing API - 127.0.0.1:3000/states
  fetch('/states').then((response) => { // only 'then' do we have access to response
    console.log(response)
    response.json().then((data) => {
      data.States.filter((place) => {

        // if some condition - run some code

        //waiting for Request
        if (place.state === find) {

          const State = document.querySelector('.state')
          const createdAt = document.querySelector('.create')
          let counting = document.querySelector('.count')

          const population = document.querySelector('.pop')
          const population1 = document.querySelector('.pop1')
          const protest = document.querySelector('.pro')
          const protest1 = document.querySelector('.pro1')
          const lga = document.querySelector('.lg')


          const zone = document.querySelector('.zon')
          const postalCode = document.querySelector('.pos')
          const mineralResources = document.querySelector('.min')
          const capital = document.querySelector('.cap')
          const w = document.querySelector('.lga')


          //remove error msg and render reponse
          p.remove()

          State.textContent = `State: ${place.state}`
          capital.textContent = `Capital: ${place.capital}`
          createdAt.textContent = `Year Created: ${place.createdAt}`

          population.textContent = `Population A: ${place.population._2006Census} - (2006 census) `
          population1.textContent = `Population B: ${place.population._2016Projection} - (2016 projection)`
          protest.textContent = `EndSars Protest Condition: ${place.endSarsProtest.condition}`
          protest1.textContent = `No of Protest Victims: ${place.endSarsProtest.noOfVictims}`
          zone.textContent = `Geo-Political Zone: ${place.geoPoliticalZone}`
          postalCode.textContent = `Postal Code: ${place.postalCode}`

          mineralResources.textContent = `Mineral Resources discovered: ${place.mineralResources.length} (click to see List)`

          w.appendChild(lga).style.fontWeight

          // i think this is the best way to render Arrays of Mineral Resources - since what i have access to is an Array of String. 
          // manipulating this response with 'forEach' keep on re-rendering response...
          const print = place.mineralResources.map((item) => '<p>' + item + '<p>')

          const render = '<p>' + print.join('') + '<p>'
          mineralResources.addEventListener('click', (e) => {
            document.write("Refresh to go back to Home Page".fontcolor('green').fontsize('.9rem') + '<hr />' + `List of Mineral Resources in ${place.state} State` + render)
            document.close()
          })

          // when z is equal to v and t is < l loop and render
          lga.textContent = `Local Goverment Areas: ${place.LGAs.length} (click to see List) `
          const lists = place.LGAs.map((list) => '<p>' + list + '<p>')
          const open = '<p>' + lists.join('') + '<p>'

          lga.addEventListener('click', () => {
            document.write("Refresh to go back to Home Page".fontcolor('green').fontsize('.9rem') + '<hr />' + `List of Local Government Areas in ${place.state} State` + open)
            document.close()
          })

        }


      })

    })

  }).catch((err) => p.textContent = err.message)

  e.target.elements.names.value = ''
})



// //getting the users age
// const db = new Date('December 19 1995 12:12:34')
// const timeStamp = db.getFullYear()

// const now = new Date()
// const stamp = now.getFullYear()

// const age = stamp - timeStamp
