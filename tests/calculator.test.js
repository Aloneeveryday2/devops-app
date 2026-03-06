const { add } = require("../src/calculator");

test("addition de deux nombres", () => {
  expect(add(2, 3)).toBe(5);
});