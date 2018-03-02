const {getServicePoints} = require('./getServicePoints')

exports.getSolutionPoints = function (vehiclesArrays, bonus) {
  // Array with the points performed per vehicle

  const pointsPerVehicle = vehiclesArrays.map(services => {

    // Calc points earned for each service a vehicle has taken
    return services.reduce((acc, service) => {
      return acc + getServicePoints(service.ride, service.pickUpTime, bonus)
    }, 0)
  }).filter(a => !!a)
  const result = pointsPerVehicle.reduce((acc, points) => acc + points, 0)
   ('result', result, pointsPerVehicle)
  return result
}
