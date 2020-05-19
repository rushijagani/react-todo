import React, { PropTypes, useState, useRef } from 'react';

import './form.scss';

const TodoForm = ({ click }) => {
console.log(typeof(click));

    const [input, setInput] = useState('');
    const ref= useRef();

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = () => {
        click(input);
        setInput('');
        ref.current.focus();
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          handleSubmit();
        }
      }

    return (
    	<div className="todo-form">
            <input 
                type="text"
                name="todo-input"
                placeholder="Add Todo"
                value={input}
                ref={ref}
                onChange={handleChange}
                onKeyDown={onKeyDown}
            />
        	<button onClick={handleSubmit}> Add </button>
        </div>
    );
};

TodoForm.displayName = 'TodoForm';

TodoForm.propTypes = {
    // click: PropTypes.func,
};

export default TodoForm;
