import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import "./style.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='container d-flex  '>
            <div className='todos d-flex '>
              <span className="todos-heading">Active Tasks</span>
              {
                todos.map((todo) => (<SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />))
              }
            </div>
            <div className='todos remove d-flex '>
            <span className="todos-heading">Completed Tasks</span>
              {
                todos.map((todo) => (<SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />))
              }
            </div>
        
        </div>
    )
}

export default TodoList