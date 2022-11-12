import React from 'react'
import TodoItem from './TodoItem'

function TodoList({listData}) {


    const itemList = listData.map((item) => 
        <TodoItem 
            key={item.dateCreated}
            id={item.dateCreated}
            title={item.title} 
            dueDate={item.dueDate}
            description={item.description} 
            complete={item.complete}
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