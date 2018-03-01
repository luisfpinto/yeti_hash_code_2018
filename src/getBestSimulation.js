
const {shuffle, flatten} = require('lodash')
const {drive} = require('./drive')
const {getSolutionPoints} = require('./getSolutionPoints')

const NUM_SIM = 10

/**
 * input es un Array<Ride>
 */

exports.getBestSimulation = function (input) {
  let bestSolutionPoints = 0
  let bestSolution = []

  let currentSolution = 0
  let currentSolutionPoints = 0

  for (let i = 0; i < NUM_SIM; i++) {

    let simulation = {
      ...input,
      rides: shuffle(input.rides)
    }
    currentSolution = runSimulation(simulation)
    currentSolutionPoints = getSolutionPoints(currentSolution)

    console.log(currentSolutionPoints)
    if (currentSolutionPoints > bestSolutionPoints) {
      bestSolution = currentSolution
      bestSolutionPoints = currentSolutionPoints
    }
  }

  return bestSolution
}

exports.runSimulation = runSimulation

function runSimulation (input) {
  let solution = []
  let pendingRides = input.rides
  const F = input.parsedValue.F
  console.log(input)

  for (let i = 0; i < F; i++) {
    const aux = filterGivenRides(pendingRides, solution)
    solution = [...solution, drive(pendingRides)]
    pendingRides = filterGivenRides(pendingRides, solution)
  }
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
