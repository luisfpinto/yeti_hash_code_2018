exports.checkIfPossibleRide = function (rideCost, currentTime, latestFinish) {
  return (rideCost + currentTime) <= latestFinish
}
