const fs = require('fs')
const processInput = require('./processInput')


fs.readdirSync('./inputs').forEach(file => {
  const input = processInput(`./inputs/${file}`)
  console.log(input)
})


