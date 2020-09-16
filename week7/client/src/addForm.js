import React, { useState } from 'react'

export default function AddTodoForm(props){
    const initInputs = { name: "", description: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleChange(e){
        e.preventDeafult()
        props.addTodo(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="To Do"
            value={inputs.todo}
            onChange={hanldeChange}
            placeholder="To Do"/>
            <input/>

        </form>
    )
    }