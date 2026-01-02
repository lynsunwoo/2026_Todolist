import React from 'react';
import '../css/TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  

  return (
    <main className="todo_list_template">
      <div className="title">
        오늘의 할일 
      </div>

      <section className="form-wrapper">
        {form}
      </section>

      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  )
}

export default TodoListTemplate;