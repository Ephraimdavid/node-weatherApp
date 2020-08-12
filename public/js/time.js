// const newTable = document.querySelector('.new_table')
// const button = document.querySelector('button')

//   // {name: 'Obinna', height: 1648, place: 'Abakaliki'}
//   const mountain = [{
//     state: 'Ebonyi',
//     Created: 1996,
//     Capital: 'Abakaliki'
//   },{
//     state: 'Abia', 
//     created: 1991,
//     Capital: 'Umuahia'
//   }]


//   const generateTableHead = (table, data) => {
//     const tHead = table.createTHead()
//     const row = tHead.insertRow()

//     for ( let key of data ) {
//       let th = document.createElement('th')
//       let text =  document.createTextNode(key)
//       th.appendChild(text)
//       row.appendChild(th)
//     }
//   }
//   const table = document.querySelector('table')
//   let data = Object.keys(mountain[0])

//   const generateTable = (table, data) => {
//     for (let element of data) {
//       let row = table.insertRow()

//       for ( let key in element ) {
//         let cell = row.insertCell()
//         const text = document.createTextNode(element[key])
//         cell.appendChild(text)
//       }
//     }
//   }


// generateTable(table, mountain)
//   generateTableHead(table, data)

// console.log(generateTableHead(table))



//   // const tbl = document.createElement('table')
//   // const tblBody = document.createElement('tbody')

//   // for (let i = 0; i < 1; i++) {
//   //   let row = document.createElement('tr')

//   //   for ( let j = 0; j < 1; j++) {

//   //     let cell = document.createElement('td')
//   //     let cellText = document.createTextNode('State')

//   //     cell.appendChild(cellText)
//   //     row.appendChild(cell)
//   //   }
//   //   tblBody.appendChild(row)
//   // }



const div = document.createElement('div')
let start = document.querySelector('.count')
const but = document.querySelector('form')
const input1 = document.querySelector('input')
const p = document.createElement('p')

// const run = [08376453827262526] 

   but.addEventListener('submit', (e) => {
     e.preventDefault()
    const count = input1.value
    
    for(let i = 0; i < count.length; i++) {
      p.textContent = Math.floor(Math.random() * count[i--])
      div.appendChild(p)
      start.appendChild(div)
      }  
   })     

   console.log('shutting Earth down', count)