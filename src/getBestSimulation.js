
const {shuffle, flatten} = require('lodash')
const {drive} = require('./drive')
const {getSolutionPoints} = require('./getSolutionPoints')

const NUM_SIM = 10000

/**
 * input es un Array<Ride>
 */

exports.getBestSimulation = function (input) {
  let bestSolutionPoints = 0
  let bestSolution

  let currentSolution
  let currentSolutionPoints

  for (let i = 0; i < NUM_SIM; i++) {
    currentSolution = runSimulation(shuffle(input.rides))
    currentSolutionPoints = getSolutionPoints(currentSolution)
    if (currentSolutionPoints > bestSolutionPoints) {
      bestSolution = currentSolution
      bestSolutionPoints = currentSolutionPoints
    }
  }

  return bestSolution
}

exports.runSimulation = runSimulation

function runSimulation (ridesArray) {
  let solution = []
  let pendingRides = ridesArray
  while (pendingRides.length > 0) {
    console.log(pendingRides)
    const aux = filterGivenRides(pendingRides, solution)
    solution = [...solution, drive(pendingRides)]
    pendingRides = aux
  }
  console.log('Finished simulation with simulation', ridesArray)
  return solution
}

/**
 * Returns a new rides array, without the current solution
*/
function filterGivenRides (ridesArray, currentSolution) {
  const servicesIds = flatten(currentSolution).map(s => s.id)
  return ridesArray.filter(ride => {
    return !servicesIds.includes(ride.id)
  })
}
