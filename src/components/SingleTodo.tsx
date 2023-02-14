import React, { useState } from 'react';
import { Todo } from '../model';
import Form from 'react-bootstrap/Form';


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [editTodo, setEditTodo] = useState(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

 
  return (

    <Form className='single-todos d-flex justify-content-between align-items-center'>
      {edit ? (
        <Form.Control type="text"  />
      ) :
        todo.isDone ? (
          <s className='single-todos-text'>{todo.todo}</s>
        ) :
          (<span className='single-todos-text'>{todo.todo}</span>)
      }

      <div className='d-flex gap-2 todo-icons'>
        <span> <i className='bx bx-edit-alt bx-tada-hover border-light border p-1 rounded-circle '
          onClick={
            () => {
              if (!edit && !todo.isDone) {
                setEdit(!edit)
              }
            }
          }
        ></i> </span>
        <span><i className='bx bxs-trash bx-tada-hover border-light border p-1 rounded-circle' onClick={() => handleDelete(todo.id)} ></i></span>
        <span><i className='bx bx-check bx-tada-hover border-light border p-1 rounded-circle' onClick={() => handleDone(todo.id)} ></i></span>
      </div>
    </Form>
    

  )
}

export default SingleTodo;