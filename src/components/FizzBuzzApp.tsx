import { useState } from "react";
import fizzBuzzFunc from "./fizzbuzzlogic";

function FizzBuzz(): JSX.Element {
  const [counter, setCounter] =
    useState(1);

  const [storedCounts, setStoredCounts] =
    useState<string[]>([]);

  const handleNextValue = () => {
    setCounter(counter + 1);

    const fizzbuzzValue = fizzBuzzFunc(counter);
    setStoredCounts([
      ...storedCounts,
      fizzbuzzValue + " ",
    ]);
  };

  return (
    <>
      <h1>FizzBuzz</h1>
      <p>counter: {storedCounts}</p>
      <button onClick={handleNextValue}>NEXT</button>
    </>
  );
}

export default FizzBuzz;
