const { isEven } = require("./index.js")
const test = require("tape")

test("isEven", (t) => {
  t.equal(isEven(2), true, "2 is even")
  t.equal(isEven(3), false, "3 is not even")
  t.equal(isEven(1234), true, "1234 is even")
  t.end()
})
