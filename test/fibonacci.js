const fib = require('../lib/fibonacci')
const assert = require('assert')

describe('fibonacci tests', () => {
  it('should work', () => {
    assert(fib(1), 1)
    assert(fib(2), 1)
    assert(fib(3), 2)
    assert(fib(4), 3)
  })
})
