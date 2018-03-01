const fs = require('fs')
const processInput = require('./processInput')

// For each file in inputs direcory
fs.readdirSync('./inputs').forEach(file => {
  const input = processInput(`./inputs/${file}`)
  const {F} = input
  let output = ''
  console.log(typeof(F))
  for (let i = 0; i < F; i++) {
    output.concat(`${i + 1} ${i}\n`)
    // fs.appendFile(`outputs/output_${file}`, `${i + 1} ${i}\n`, function(err) {
    //   if (err) return console.log(err)
    //   console.log("Appended!")
    // })
  }
})


// const fs = require("fs")
// const processInput = require("./processInput")

// // For each file in inputs direcory
// fs.readdirSync("./inputs").forEach(file => {
//   const input = processInput(`./inputs/${file}`)
//   const { F } = input
//   console.log(F, file)
//   for (let i = F; i < F; i++) {
//     fs.appendFile(`outputs/output_${file}`, `siii`, function(err) {
//       if (err) return console.log(err)
//       console.log("Appended!")
//     })
//   }
// })


