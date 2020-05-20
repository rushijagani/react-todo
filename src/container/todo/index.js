import React, { useState } from 'react';

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
	const addItemHandler = (it) => {
		const addItem = items.filter(item => item.id !== it.id);
		setItems(addItem);
		const completedItem = items.filter(item => item.id === it.id);
		setCompletedItems(completedItems.concat(completedItem));
	}
	const removeItemHandler = (it) => {
		setItems(items.filter(item => item.id !== it.id));
		setCompletedItems(completedItems.filter(item => item.id !== it.id));
	}

    return (
			<>
				<div className="todo__wrapper">
					<h1 className="todo__heading">TODO List</h1>
					<TodoForm click={submitTodo} />
					<TodoList 
						items={items}
						completed={completedItems}
						add={addItemHandler}
						remove={removeItemHandler}
					/>
				</div>
				<a href="https://github.com/rushijagani/react-todo">
					<svg width={80} height={80} viewBox="0 0 250 250" style={{position: 'absolute', top: '0px', fill: 'rgb(255, 255, 255)', right: '0px'}}>
					<path d="M0 0l115 115h15l12 27 108 108V0z" fill="#24292e" />
					<path d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" style={{transformOrigin: '130px 106px'}} />
					<path d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z" />
					</svg>
				</a>
			</>
    );
};

ToDo.displayName = 'ToDo';

export default ToDo;
