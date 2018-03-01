export function checkIfPossibleRide (rideCost, currentTime, latestFinish) {
  return (rideCost + currentTime) <= latestFinish
}
