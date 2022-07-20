import { useState } from "react";
import fizzBuzzFunc from "./fizzbuzzlogic"

function FizzBuzz(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(1);
    
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<string[]>([]);

  const handleNextValue = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);

    const fizzbuzzValue = fizzBuzzFunc(counterValueFromCurrentRender)
    queueRerenderWithNewStoredValues([...storedValuesFromCurrentRender, fizzbuzzValue])
    
  };

  return (
    <>
      <h1>Fizz Buzz</h1>
      <p>counter: {storedValuesFromCurrentRender}</p>
      <button onClick={handleNextValue}>NEXT</button>
    </>
  );
}

export default FizzBuzz;
