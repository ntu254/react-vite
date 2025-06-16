import React from 'react';
import './components/todo/todo.css'; // Import CSS file
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import logo from './assets/react.svg';

const App = () => {
  return (
    <div className="todo-container">

      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-img'>
        <img className='logo' src={logo} />
      </div>
    </div>
  )
}
export default App;