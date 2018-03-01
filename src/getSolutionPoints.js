const {getServicePoints} = require('./getServicePoints')

exports.getSolutionPoints = function (vehiclesArrays, bonus) {
  // Array with the points performed per vehicle
  const pointsPerVehicle = vehiclesArrays.map(vehicle => {
    // Calc points earned for each service a vehicle has taken
    return vehicle.services.reduce((acc, service) => {
      return acc + getServicePoints(service.ride, service.pickUpTime, bonus)
    }, 0)
  })

  return pointsPerVehicle.reduce((acc, points) => acc + points, 0)
}
