import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const TodoForm = ({ click }) => {

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
                placeholder="Add New"
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
    click: PropTypes.func,
};

export default TodoForm;
