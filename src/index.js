var getRideCost = require('./getRideCost')
var checkIfPossible = require('./checkIfPossibleRide')
var calcTimeBetween = require('./calcTimeBetween')

exports.drive(input) {
  let time = 0
  let position = {a: 0, b: 0}
  return input.map(ride => {
    const cost = getRideCost(time, position, ride)
    if (!checkIfPossible(cost, time, ride.f)) return null

    time = cost
    position = {a: ride.x, b: ride.y}

    return {
      id: ride.id,
      pickUpTime: cost - calcTimeBetween({a: ride.a, b: ride.b}, {x: ride.x, y: ride.y})
        cost,
      ride,
    }
  }).filter(r => !!r)
}