import { useState } from 'react';


export const CounterApp = () => {

    const [estado, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const { counter1, counter2, counter3 } = estado;

    const addCounter1 = () => {
        setCounter({
            ...estado,
            counter1: counter1 + 1,
        })
    }

    return (
        <>
            <h2>CounterApp</h2>
            <h3>Counter1: {counter1}</h3>
            <h3>Counter2: {counter2}</h3>
            <h3>Counter3: {counter3}</h3>
            <hr />
            <button className='btn' onClick={addCounter1}>+1</button>
        </>
    )
}
