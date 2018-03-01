
const fs = require('fs')
const parser = require('jolicitron')

function processInput (file) {
  const input = fs.readFileSync(file, "utf8")
  const parsed = parser((save, n) => [
    "R",
    "C",
    "F",
    save("N"),
    "B",
    "T",
    n("rides", { length: "N" }, "a", "b", "x", "y", "s", "f")
  ])
  const { parsedValue } = parsed(input)
  return { parsedValue, rides: parsedValue.rides.map((ride, i) => ({ ...ride, id: i})) }
}
module.exports = processInput