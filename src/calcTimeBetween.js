function calcTimeBetween (init, end) {
  const {a, b} = init
  const {x, y} = end
  return y - b + x - a
}

module.exports = calcTimeBetween