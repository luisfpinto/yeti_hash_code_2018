function calcTimeBetween (init, end) {
  const {x: x1, y: y1} = init
  const {x: x2, y: y2} = end
  return y2 - y1 + x2 - x1
}

module.exports = calcTimeBetween