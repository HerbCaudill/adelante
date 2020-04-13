const { isEven } = require("./divisibility.js")
const test = require("tape")

test("isEven", (t) => {
  t.equal(isEven(2), true, "2 should be even")
  t.end()
})
