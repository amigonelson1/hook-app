import { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Kakarot',
        email: 'kakaroto@mail.com',
    });

    useEffect(() => {

    }, [])


    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input
                type='text'
                name='username'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={e => onInputChange(e)}
            />
            {(username === 'Kakaroto') && <Message />}
            <input
                type='email'
                name='email'
                className='form-control mt-2'
                placeholder='username@mail.com'
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
