var calcTimeBetween = require('./calcTimeBetween')

export function getRideCost (currentTime, currPosition, ride) {
  let timeToWait = 0
  // Ver distancia de un punto donde estoy al inicio del siguiente
  let distanceToInitial = calcTimeBetween(currPosition, [ride.a, ride.b])
  // Ver si tengo que esperar para empezar el siguiente viaje
  if (ride.s - (currentTime + distanceToInitial) > 0) {
    timeToWait = ride.s - currentTime + distanceToInitial
  }
  // Total de ir a recoger al nota y hacer el viaje
  return distanceToInitial + timeToWait + calcTimeBetween([ride.a, ride.b], [ride.x, ride.y])
}
