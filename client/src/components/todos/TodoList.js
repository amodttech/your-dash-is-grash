import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {

    const itemArray = [
        {id: 1, title: "first todo", date: Date.now(), description: "some dummy text for a description"},
        {id: 2, title: "second todo", date: Date.now(), description: "some dummy text for a description"},
        {id: 3, title: "third todo", date: Date.now(), description: "some dummy text for a description"},
        {id: 4, title: "fourth todo", date: Date.now(), description: "some dummy text for a description"},
]

    const itemList = itemArray.map((item) => 
        <TodoItem 
            id={item.id}
            title={item.title} 
            date={item.date} 
            description={item.description} 
        />
    )


  return (
    <div>
        <ul>
            {itemList}
        </ul>
    </div>
  )
}

export default TodoList