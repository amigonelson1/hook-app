import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>SimpleForm con Custom Hook</h1>
            <hr />
            <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type='email'
                name='email'
                className='form-control mt-2'
                placeholder='username@mail.com'
                value={email}
                onChange={onInputChange}
            />
            <input
                type='password'
                name='password'
                className='form-control mt-2'
                placeholder='contraseña'
                value={password}
                onChange={onInputChange}
            />
            <button className='btn btn-primary mt-2'
                onClick={onResetForm}>
                Limpiar
            </button>
        </>
    )
}
