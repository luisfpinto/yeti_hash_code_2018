export function checkIfPossibleRide (getRideCost, currentTime, latestFinish) {
  return (getRideCost + currentTime) <= latestFinish
}
