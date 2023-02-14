import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap';
import "./style.css";
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Form className="align-items-center d-flex position-relative input-area "
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }
            }>

            <Form.Control
                ref={inputRef}
                className="box__input  border-0 px-4  rounded-pill "
                id="inlineFormInput"
                placeholder="Enter The task"
                value={todo}
                onChange={
                    (e) => {
                        setTodo(e.target.value);
                    }
                }

            />
            <Button type="submit" className="position-absolute go-btn border-0 rounded-circle text-light">Go</Button>
        </Form>
    )
}

export default InputField