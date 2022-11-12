import React from 'react'

function TodoItem({id, title, dueDate, description, complete}) {


  return (
    <li>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>due date: {dueDate}</p>
        <p>description: {description}</p>
        <p>complete: {complete ? `complete` : `incomplete`}</p>
    </li>
  )
}

export default TodoItem