import { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange } = useForm({
        username: 'Kakarot',
        email: 'kakaroto@mail.com',
        password: ''
    });

    const { username, email, password } = formState;

    useEffect(() => {

    }, [])

    return (
        <>
            <h1>SimpleForm con Custom Hook</h1>
            <hr />
            <input type='text'
                name='username'
                className='form-control'
                placeholder='Username'
                defaultValue={username}
                onChange={e => onInputChange(e)}
            />
            <input type='email'
                name='email'
                className='form-control mt-2'
                placeholder='username@mail.com'
                defaultValue={email}
                onChange={onInputChange}
            />
            <input type='password'
                name='password'
                className='form-control mt-2'
                placeholder='contraseña'
                defaultValue={password}
                onChange={onInputChange}
            />
        </>
    )
}
