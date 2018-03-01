import getRidePoints from './getRidePoints'

export function getSolutionPoints (vehiclesArrays, bonus) {
  // Array with the points performed per vehicle
  const pointsPerVehicle = vehiclesArrays.map(vehicle => {
    // Calc points earned for each service a vehicle has taken
    return vehicles.services.reduce(acc, service => {
      return acc + getServicePoints(service.ride, service.pickUpTime, bonus)
    }, 0)
  })

  return pointsPerVehicle.reduce((acc, points) => acc + points, 0)
}