import React from 'react'

export default function Todo(props){
    const { name, description, dueDate } = props
    return (
        <div className="todo">
            <h1>To Do: { name }</h1>
            <p>Description: { description }</p>
            <button className="delete-btn">Delete</button>
        </div>
    )
}