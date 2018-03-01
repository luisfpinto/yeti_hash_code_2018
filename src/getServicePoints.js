import calcTimeBetween from './calcTimeBetween'

export function getServicePoints (ride, pickUpTime, bonus) {
  const distance = calcTimeBetween(ride)

  if (pickUpTime + distance > ride.f) return 0

  const hasBonus = ride.s === pickUpTime ? bonus : 0
  return distance + hasBonus
}