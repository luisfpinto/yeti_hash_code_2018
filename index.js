const fs = require('fs')
const processInput = require('./src/processInput')

// For each file in inputs direcory
fs.readdirSync('./inputs').forEach(file => {
  const input = processInput(`./inputs/${file}`)
  const solution = getBestSimulation(input)
  const output = solution.reduce((acc, vehicleServices) => {
    const servicesString = vehicleServices.map(service => ' ' + service.id)
    return acc + `${vehicleServices.length}${servicesString}\n`
  }, '')
  fs.writeFileSync(`outputs/output_${file}`, output)
  console.log("Finished with ", `outputs/output_${file}`)
})