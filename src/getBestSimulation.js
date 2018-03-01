
const {uniqBy, shuffle, flatten} = require('lodash')
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

function runSimulation (input) {
  let solution = []
  let pendingRides = input.rides
  const F = input.parsedValue.F
  console.log(input)

  for (let i = 0; i < F; i++) {
    const aux = filterGivenRides(pendingRides, solution)
    solution = [...solution, drive(pendingRides)]

    console.log('car iteration %i', i)

    console.log('===')
    console.log(solution)
    console.log(aux)
    console.log('===')
    pendingRides = filterGivenRides(pendingRides, solution)
  }
  console.log('Finished simulation with simulation', solution)
  return solution
}

/**
 * Returns a new rides array, without the current solution
*/
function filterGivenRides (ridesArray, currentSolution) {
  const servicesIds = flatten(currentSolution).map(s => s.id)

  // console.log('===!=!"3-1')
  // console.log(ridesArray)
  // console.log(currentSolution)
  // console.log(servicesIds)
  // console.log('===!=!"3-1')

  return ridesArray.filter(ride => {
    return !servicesIds.includes(ride.id)
  })
}
