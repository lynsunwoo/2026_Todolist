import React, { useState } from 'react';

const TodoItem = ({ id, text, checked, onToggle, onRemove, onUpdate }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleRemove = (e) => {
    e.stopPropagation();
    //이벤트 버블링 방지 (자식 요소에서 발생한 이벤트가 부모 조상으로 계속 올라가는 현상)
    //이벤트 확산을 방지한다. 삭제부분 이벤트에 넣어주면 onRemove만 실행되고 부모의 onToggle은 실행되지 않는다.
    onRemove(id); //해당 글을 삭제
  }
  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      finishEdit();
    }
    if (e.key === 'Escape') {
      setEditText(text);
      setIsEditing(false);
    }
  };
  const finishEdit = () => {
    onUpdate(id, editText);
    setIsEditing(false);
  };


  return (
    <div
      className="todo-item"
      onClick={() => {
        if (!isEditing) {
          onToggle(id); // todo-item 클릭 → 체크 토글
        }
      }}
    >

      {/* 텍스트 / 수정 영역 */}
      <div className="todo_content">

        {/* ✅ 체크 아이콘은 텍스트 기준 */}
        {checked && !isEditing && (
          <span className="check_mark">📌</span>
        )}

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={finishEdit}
            onClick={(e) => e.stopPropagation()}
            autoFocus
          />
        ) : (
          <span className={`todo_label ${checked ? 'checked' : ''}`}>
            {text}
          </span>
        )}
      </div>

      {/* 수정 버튼 */}
      <div className="edit" onClick={handleEdit}>
        <button className="edit_btn">수정</button>
      </div>

      {/* 삭제 버튼 */}
      <div className="remove" onClick={handleRemove}>
        ❌
      </div>
    </div>

  );
};

export default TodoItem;