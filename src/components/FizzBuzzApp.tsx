import { useState } from "react";

function FizzBuzz(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(1);
  const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
    useState<string[]>([]);

  const handleNextValue = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);

    if (
      counterValueFromCurrentRender % 5 === 0 &&
      counterValueFromCurrentRender % 3 === 0
    ) {
      queueRerenderWithNewStoredValues([
        ...storedValuesFromCurrentRender,
        "FizzBuzz ",
      ]);
    } else if (counterValueFromCurrentRender % 3 === 0) {
      queueRerenderWithNewStoredValues([
        ...storedValuesFromCurrentRender,
        "Fizz ",
      ]);
    } else if (counterValueFromCurrentRender % 5 === 0) {
      queueRerenderWithNewStoredValues([
        ...storedValuesFromCurrentRender,
        "Buzz ",
      ]);
    } else {
      queueRerenderWithNewStoredValues([
        ...storedValuesFromCurrentRender,
        counterValueFromCurrentRender.toString() + " ",
      ]);
    }
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
