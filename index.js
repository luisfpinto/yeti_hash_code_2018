const parser = require("jolicitron")
const fs = require("fs")

const file = fs.readFileSync("inputs/a_example.in", "utf8")
console.log(file)

const parsed = parser((save, n) => [
  "R",
  "C",
  "F",
  save("N"),
  "B",
  "T",
  n("rides", { length: "N" }, "a", "b", "x", "y", "s", "f")
])
const { parsedValue } = parsed(file)
console.log(parsedValue)
