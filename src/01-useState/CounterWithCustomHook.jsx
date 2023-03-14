import { useCounter } from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const { counter, incrementar, decrementar, restaurar } = useCounter();

    return (
        <>
            <h1>CounterWithCustomHook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => incrementar(2)}>+1</button>
            <button className="btn btn-primary" onClick={restaurar}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrementar(2)}>-1</button>
        </>
    )
}
