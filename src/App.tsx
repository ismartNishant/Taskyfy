
import './App.css';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
    console.log(todos)
  }

  return (
    <div className='d-flex flex-column app align-items-center'>
        <span className='logo text-light   my-3 text-center'>TASkYFY</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd} />
     
        <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  )
}
export default App;