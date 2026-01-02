import React, { useRef, useState } from 'react';
import './css/App.css';
import './css/Form.css';
import './css/TodoListTemplate.css';
import './css/TodoItem.css';
import TodoListTemplate from "./component/TodoListTemplate";
import Form from './component/Form'; //입력양식 컴포넌트
import TodoItemList from './component/TodoItemList'; // 출력리스트
import TodoItem from './component/TodoItem'; // 출력리스트 개당 요소

function App() {
  //리액트 훅(HOOKS)를 사용할 때 useState 작성하면 목록에 뜨고 alt + 클릭시 해당 훅이 문서의 첫번째에 자동으로 추가 작성된다.
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([
    { id: 0, text: '리액트 학습하기', checked: false },
    { id: 1, text: '투두리스트 만들기', checked: true },
    { id: 2, text: '리액트 어려워요', checked: false },
  ]);

  const nextId = useRef(3); //0-2 까지 배열이 있기 때문에 3부터 고정값으로 사용

  //입력한 값을 상태 변수에 담는다.
  const handleChange = (e) => {
    setInputs(e.target.value);
  }

  //사용자가 마우스 이벤트 없이 엔터키를 누르면 입력이 되도록
  const handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      handleCreate();
    }
  }

  //4. 삭제기능
  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //5. 체크기능
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }
  //3. 입력을 위한 기능
  const handleCreate = () => {
    if (!inputs.trim()) return; //유효성 검사

    const newTodo = {
      id: nextId.current++, //현재 아이디 값에 증가 시킨다.
      text: inputs, //내용은 압룍헌 값
      checked: false, //체크 허용여부 (기본값 비활성화)
    };

    setTodos(todos.concat(newTodo));
    //[배열명].concat([배열명]);
    //두개의 문자열을 하나의 문자열로 만들어주는 역할
    setInputs('');
  };

  return (
    <TodoListTemplate>
      < Form
        value={inputs}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />

      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoListTemplate>
  );
}

export default App;
