import fizzBuzzFunc from "./fizzbuzzlogic";

test("fizzbuzz should be returned in following manner: 1, 2, 'fizz', 4, 'buzz', ... , 13, 14, 'fizzbuzz', 16, ...", () => {
  expect(fizzBuzzFunc(1)).toBe("1");
  expect(fizzBuzzFunc(33)).toBe("Fizz");
  expect(fizzBuzzFunc(100)).toBe("Buzz");
  expect(fizzBuzzFunc(60)).toBe("FizzBuzz");
});
