var calcTimeBetween = require('./calcTimeBetween')

exports.getRideCost = function (currentTime, currPosition, ride) {
  let timeToWait = 0
  // Ver distancia de un punto donde estoy al inicio del siguiente
  let distanceToInitial = calcTimeBetween(currPosition, {x: ride.a, y: ride.b})

  // Ver si tengo que esperar para empezar el siguiente viaje
  if (ride.s - (currentTime + distanceToInitial) > 0) {
    timeToWait = ride.s - currentTime + distanceToInitial
  }
  // Total de ir a recoger al nota y hacer el viaje
  return distanceToInitial + timeToWait + calcTimeBetween({a: ride.a, b: ride.b}, {x: ride.x, y: ride.y})
}
