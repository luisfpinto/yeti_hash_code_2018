function calcTimeBetween (init, end) {
  const {a, b} = init
  const {x, y} = end
  return Math.abs(y - b + x - a)
}

module.exports = calcTimeBetween