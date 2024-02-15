import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state)=>state.todos);
    console.log(todos)
  return (
    <ul className='list-group mt-5'>
        {todos.map(
            (todo)=>{
                <Todo key={todo.id} id={todo.id} title={todo.title}/>
            }
        )}
    </ul>
  )
}

export default TodoList
