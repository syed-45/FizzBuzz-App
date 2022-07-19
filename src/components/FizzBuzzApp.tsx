import {useState} from 'react';

function FizzBuzz(): JSX.Element {
    const [counterValuesFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState<string[]>(['0']);

    
    
    return (
        <>
            <h1>Fizz Buzz</h1>
            <p>counter: </p>
            <button>NEXT</button>
        </>
    )
}

export default FizzBuzz