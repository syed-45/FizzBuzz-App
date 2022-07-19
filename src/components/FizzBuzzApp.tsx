import { useState } from "react";

function FizzBuzz(): JSX.Element {

  const [counterValuesFromCurrentRender, queueRerenderWithNewCounterValues] =
    useState(0);
//   const [storedValuesFromCurrentRender, queueRerenderWithNewStoredValues] =
//     useState<string[]>([]);

/*
    [val,updateVal] = useState(0)
    fizzArray = [0]

    buttonClick() {
        val++

        IF val MOD 3 = 0 AND val mod 5 = 0 {
            APPEND fizzArray WITH 'fizzbuzz'
            UPDATE updateVal WITH 'fizzbuzz'
        }
        Else If (val MOD 3 = 0) {
            APPEND fizzArray WITH 'fizz'
        }
    }
*/
  const handleNextValue = () => {
    queueRerenderWithNewCounterValues(counterValuesFromCurrentRender + 1);
  };




  return (
    <>
      <h1>Fizz Buzz</h1>
      <p>counter: {counterValuesFromCurrentRender}</p>
      <button onClick={handleNextValue}>NEXT</button>
    </>
  );
}

export default FizzBuzz;
