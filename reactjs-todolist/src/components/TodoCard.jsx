import React from 'react'

export default function TodoCard(props) {

    const { children, handleDeleteTodo, handleEditTodo, index } = props

    return (
        <li className='todoItem'>
            {children}
            <div>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash"></i>
                </button>


            </div>
        </li>
    )
}
