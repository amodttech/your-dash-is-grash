import React from 'react'

function TodoItem({id, title, date, description}) {



  return (
    <li>
        {id}
        {title}
        {date}
        {description}
    </li>
  )
}

export default TodoItem