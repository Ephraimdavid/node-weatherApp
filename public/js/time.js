// const fs = require('fs')


//check staffs consistency
 const time = moment()

 const setTime = time.format('MMMM Do YYYY, h:mm:ss a')

//  const savedNotes = (time) => {
//     const notesJSON = JSON.stringify(time)
//     fs.writeFileSync('time.json', notesJSON)
// }

//checking workers time.JS
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target.fullName.value)
  console.log(`SignedIn: ${e.target.myTime.value}`)
   console.log(setTime)
  console.log(e.target.myDate.value)
  // savedNotes(time)
})