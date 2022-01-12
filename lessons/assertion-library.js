const {sum, subtract} = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)


result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

expect(3).toBeGreaterThan(2)
expect(2).toBeLessThan(3)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
    toBeGreaterThan(expected) {
      if (expected >= actual) {
        throw new Error(`${actual} is not greater then ${expected}`)
      }
    },
    toBeLessThan(expected) {
      if (expected <= actual) {
        throw new Error(`${actual} is not less then ${expected}`)
      }
    }
  }
}
