/*
             UNIX EPOCH
    CONTROL THE MEANS OF INFOMATION    
          
  ...to Mum, Siblings, Ben, Collins, Obis*3, Nora
*/
const form = document.querySelector('form')
const input = document.querySelector('input')
const p = document.querySelector('.error')



  form.addEventListener('submit', (e) => {
    e.preventDefault()

  const find = e.target.elements.names.value
  
    // fetch from existing API
      fetch('/states').then((response) => { // only 'then' do we have access to response
        response.json().then((data) => {
          data.filter((place) => {

    // if some condition - run some code

       if (find !== String) {
      p.textContent = 'Error! Please type any of the 36 States in Nigeria; begin with Capital Letter'
       } 
       
       //waiting for Request
       if (place.state === find) {
       
        const State = document.querySelector('.state')
        const create = document.querySelector('.create')
        const pop  = document.querySelector('.pop')
        const pop1 = document.querySelector('.pop1')
        const lga = document.querySelector('.lg')

        const w = document.querySelector('.lga')
        const zon = document.querySelector('.zon')
        const pos = document.querySelector('.pos')
        const min = document.querySelector('.min')
        const cap = document.querySelector('.cap')
        let counting = document.querySelector('.count')
        //remove error msg and render reponse
        p.remove()
        State.textContent =`State: ${place.state}`
        cap.textContent = `Capital: ${place.capital}`
        create.textContent = `Year Created: ${place.creation}`

        pop.textContent = `Population A: ${place.population[0]} - (2006 census) `
        pop1.textContent = `Population B: ${place.population[1]} - (2016 projection)`
        zon.textContent = `Geo-Political Zone: ${place.zone}`
        pos.textContent = `Postal Code: ${place.postalCode}`

    min.textContent = `Mineral Resources discovered: ${place.mineralResources.length} (click to see List)`
    const run = [08376453827262526] 
      

       for(let count = 0 * (0110 / 0110 * 112255); count < run.length; count++) {
       counting.textContent = Math.floor(Math.random() * run[count--])
       }       
    w.appendChild(lga).style.fontWeight 

// i think this is the best way to render Arrays of Mineral Resources - since what i have access to is an Array of String. 
// manipulating this response with 'forEach' keep on re-rendering response...
 const print = place.mineralResources.map((item) => '<p>' + item + '<p>')
       
   const render = '<p>' + print.join(' ') + '<p>'
        // const home = '<a>' + '</a>'

     min.addEventListener('click', (e) => {
     document.write( "Refresh to go back to Home Page".fontcolor('green').fontsize('.9rem') + '<hr />' + `List of Mineral Resources in ${place.state} State` + render)
       
      })
         

        // i run this code but 'before' elements dont leave
        // place.mineralResources.forEach((p, index) => {
        //  if (place.mineralResources.length ) {
        //     const z = document.createElement('p')
        //   z.textContent =`${index + 1} ${p}`
        //   locall.append(z)
         
        //   }
        // })

      // when z is equal to v and t is < l loop and render
        lga.textContent = `Local Goverment Areas: ${place.LGAs.length} (click to see List) `
        const lists = place.LGAs.map((list) => '<p>' + list + '<p>')
        const open = '<p>' + lists.join('') + '<p>'

      lga.addEventListener('click', () => {
     if (place.state) {
        document.write( "Refresh to go back to Home Page".fontcolor('green').fontsize('.9rem') + '<hr />' + `List of Local Government Areas in ${place.state} State` + open)
     }
      })
         
          } 
          

        })

      })
      
    })
 
})

