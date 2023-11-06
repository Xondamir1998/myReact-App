import { useState } from "react";
import "./App.css";

const Text = ({ todoNote }) => {
  return (
    <div className="text">
      {todoNote}
    </div>
  );
}

function App() {
  const [todoNote, setTodoNote] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const getUserValue = () => {
    if (editingIndex !== null) {
      const newTodoList = [...todoList];
      newTodoList[editingIndex] = todoNote;
      setTodoList(newTodoList);
      setEditingIndex(null);
    } else {
      setTodoList([...todoList, todoNote]);
    }
    setTodoNote('');
  }

  const clearAll = () => {
    setTodoList([]);
    setEditingIndex(null);
  }

  const deleteCurrent = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    setEditingIndex(null);
  }

  const editCurrent = (index) => {
    setTodoNote(todoList[index]);
    setEditingIndex(index);
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Todo App</h1>
        <div className="display">
          <input
            type="text"
            id="user_text"
            placeholder="Add your new todo"
            value={todoNote}
            onChange={(e) => setTodoNote(e.target.value)}
          />
          <button id="btn1" onClick={getUserValue}>
            +
          </button>
        </div>

        <div className="value_text">
          {todoList.map((todo, index) => (
            <div key={index} className="value_section">
              <Text todoNote={todo} />
              <i className="fa-solid fa-pen-to-square" onClick={() => editCurrent(index)}></i>
              <i className="fa-solid fa-trash-can" onClick={() => deleteCurrent(index)}></i>
            </div>
          ))}
        </div>

        <div className="option">
          <span>You have</span>&nbsp;<span className="n">{todoList.length}</span>&nbsp;
          <span>pending tasks</span>
          <button id="btn2" onClick={clearAll}>Clear all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
