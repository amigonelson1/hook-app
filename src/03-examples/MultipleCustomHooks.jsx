import { useCounter, useFetch } from '../hooks';
import { Chapter, LoadingChapter } from './';

export const MultipleCustomHooks = () => {

    const { counter, incrementar, decrementar, restaurar } = useCounter(1);

    const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/episode/' + counter)

    const { name, id } = !!data && data;


    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />
            {
                isLoading ?
                    <LoadingChapter />
                    : <Chapter name={name} id={id} />
            }
            <button
                className='btn btn-primary'
                onClick={e => incrementar()}>
                Siguiente
            </button>
            <button
                className='btn btn-primary'
                onClick={e => decrementar()}>
                Anterior
            </button>
            <button
                className='btn btn-primary'
                onClick={e => restaurar()}>
                Restaurar
            </button>

        </>
    )
}
