import React from 'react';
import TodoItem from './TodoItem';
//출력 하는 컴포넌트


const TodoItemList = ({todos, onToggle, onRemove, onUpdate}) => {
  return (
    <>
      {todos.map(({ id, text, checked }) => (
        <TodoItem
        key={id}
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        onUpdate={onUpdate}
        />
      ))}
    </>
  )
}

export default TodoItemList;