import React, { PropTypes, useState } from 'react';

import TodoForm from './form';
import TodoList from './list';

import './todo.scss';

const ToDo = () => {

	const [items, setItems] = useState([]);
	const [completedItems, setCompletedItems] = useState([]);


	const submitTodo = (input) => {
		if (!input) {
			return;
		  }
		const newItem = {
			text: input,
			id: Date.now()
		};
		setItems(items.concat(newItem));
		
	}
	const onClickHandler = (it) => {
        setItems(items.filter((item) => {
			if(item.id === it.id){
				const oldItem = item;
				setCompletedItems(completedItems.concat(oldItem));
			}
            if(item.id !== it.id){
				return item;
			}
		}));
		
    }

    return (
    	<div className="todo__wrapper">
			<h1 className="todo__heading">TODO List</h1>
    		<TodoForm click={submitTodo} />
    		<TodoList value={items} click={onClickHandler} completed={completedItems} />
			
    	</div>
    );
};

// ToDo.displayName = 'ToDo';

ToDo.propTypes = {
    // className: PropTypes.string,
};

export default ToDo;
