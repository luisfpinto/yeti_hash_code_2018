import {getDistance} from './getDistance'

export function getRidePoints (ride, pickUpTime, bonus) {
  const distance = getDistance(ride)

  if (pickUpTime + distance > ride.f) return 0

  const hasBonus = ride.s === pickUpTime ? bonus : 0
  return distance + hasBonus
}