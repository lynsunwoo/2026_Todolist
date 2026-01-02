import React, { useState } from 'react';

const TodoItem = ({ id, text, checked, onToggle, onRemove }) => {

  const handleRemove=(e)=>{
    e.stopPropagation(); 
    //이벤트 확산을 방지한다. 삭제부분 이벤트에 넣어주면 onRemove만 실행되고 부모의 onToggle은 실행되지 않는다.
    onRemove(id); //해당 글을 삭제
  }
  return (
    <div className="todo-item" onClick={()=> onToggle(id)}>
      <div className="remove" onClick={handleRemove}>
        &times;
      </div>
      <div className={`todo_text${checked ? 'checked' : ''}`}>
        <div>
          {text}{checked && <span className="check_mark">o</span>}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;