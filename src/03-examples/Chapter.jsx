import React from 'react'

export const Chapter = ({name, id}) => {

    return (
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>
                {name}
            </p>
            <footer className='blockquote-footer mt-1'>
                capitulo: {id}
            </footer>
        </blockquote>
    )
}
