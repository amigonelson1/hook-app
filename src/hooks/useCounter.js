import { useState } from 'react';


export const useCounter = (valorInicial = 10) => {
    const [counter, setCounter] = useState(valorInicial);

    const incrementar = (valor = 1) => {
        setCounter(counter + valor)
    }

    const decrementar = (valor = 1) => {
        if (counter === 1) return;
        setCounter(counter - valor)
    }

    const restaurar = () => {
        setCounter(valorInicial)
    }

    return {
        counter,
        incrementar,
        decrementar,
        restaurar,
    }
}