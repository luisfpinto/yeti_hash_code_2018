const calcTimeBetween = require('./calcTimeBetween')

exports.getServicePoints = function (ride, pickUpTime, bonus) {
  const distance = calcTimeBetween({a: ride.a, b: ride.b}, {x: ride.x, y:ride.y})

  if (pickUpTime + distance > ride.f) return 0

  const hasBonus = ride.s === pickUpTime ? bonus : 0
  return distance + hasBonus
}
