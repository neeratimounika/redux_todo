import React, { useState } from 'react'

const Todo = (id,title) => {
 const[editing,setEditing] =useState(false);
 const [newTitle,setNewTitle]=useState('');

  return (
 <div>
  {
    editing?(
      <div className='form-group' >
        <input type='text' className='form-control'/>
        <button className='btn btn secondary'>save</button>
        </div>
    ):(
    <li className='group-item'>
        <p>{title}</p>
      <div className='actions'>
        <button className='btn btn-warning'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
        </div>

    </li>

    )
  }

 </div>
  )
}

export default Todo
