function fizzBuzzFunc(currentVal: number): string {
  if (currentVal % 5 === 0 && currentVal % 3 === 0) {
    return "FizzBuzz";
  } else if (currentVal % 3 === 0) {
    return "Fizz";
  } else if (currentVal % 5 === 0) {
    return "Buzz";
  } else {
    return currentVal.toString() + "";
  }
}

export default fizzBuzzFunc;
