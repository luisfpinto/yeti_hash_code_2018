
const calcTimeBetween = require('./calcTimeBetween')

/**
 * Returns true if the the passenger will be available
 * to be picked up, negative is late, possitive is waiting
 * zero is perfect
 */
exports.getPassengerWaitingTime = function (currentTime, vehiclePostion, ride) {
  const pickUpTime = currentTime + calcTimeBetween(vehiclePostion, {x: ride.a, y: ride.b})
  return ride.s - pickUpTime
}