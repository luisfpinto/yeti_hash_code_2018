export function getRideCost (distanceTrip1,distanceTrip2, earlyStart1, earlyStart2) {
  let totalCostTrip1 = distanceTrip1 + earlyStart1
  let totalCosTrip
  if (totalCostTrip1 < earlyStart2) {
    totalCosTrip = totalCostTrip1 + (earlyStart2 - totalCostTrip1)
  } else {
    totalCosTrip = totalCostTrip1 + distanceTrip2
  }
  return totalCosTrip
}
