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
        <div className='todos d-flex justify-content-between flex-wrap'>
            {
                todos?.map((t) =>
                    <SingleTodo
                        todo={t}
                        todos={todos}
                        key={t.id}
                        setTodos={setTodos}
                    />
                )

            }
        </div>
    )
}

export default TodoList