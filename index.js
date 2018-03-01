const parser = require('jolicitron')
const fs = require('fs')

const file = fs.readFileSync('sample.in', 'utf8')
console.log(file)

const parsed = jolicitron((save, n) => [
  save('Ori'),
  save('Dest'),
  save('i'),
  n('paths', { length: 'i' })
])

console.log(parsed(file))
