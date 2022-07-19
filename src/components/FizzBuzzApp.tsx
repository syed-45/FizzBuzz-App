import { useState } from "react";

function FizzBuzz(): JSX.Element {

  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<string[]>([]);


  const handleNextValue = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
    queueRerenderWithNewStoredValues([
        ...storedValuesFromCurrentRender,
        counterValueFromCurrentRender.toString(),
      ]);
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
