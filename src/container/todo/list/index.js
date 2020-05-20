import React, { useState } from 'react';
import PropTypes from 'prop-types';


import './list.scss';

const TodoList = ({ items, add, completed, remove }) => {

    const [activeView, setActiveView] = useState(true);
    const [completedView, setCompletedView] = useState(false);
    const hasList = items.length > 0 || completed.length > 0;
    const allList =  (Number)(items.length + completed.length);

    const activeViewHandler = () => {
        setActiveView(true);
        setCompletedView(false);
    }
    const completedViewHandler = () => {
        setCompletedView(true);
        setActiveView(false);
    }
    
    const noItems = <span className="todo__no-items">There are no items.</span>;

    const allListResult = items.length ? items.map(item => (
        <li key={item.id}>
        {item.text}
            <a href="/#" className="todo__action-wrap" title="Complete" onClick={() => add(item)}>
                <span className="todo__action-check-icon"></span>
            </a>
            <a href="/#" className="todo__action-wrap close" title="Remove" onClick={() => remove(item)}>
                <span className="todo__action-close-icon"></span>
            </a>
        </li>
    )) : noItems;

    const allCompletedListResult = completed.length ? completed.map(item => (
        <li key={item.id}>
            {item.text}
            <a href="/#" className="todo__action-wrap close" title="Remove" onClick={() => remove(item)}>
                <span className="todo__action-close-icon"></span>
            </a>
        </li>
    )) : noItems;

    const itemCount = <span>{allList > 1 ? ` ${allList} items` : ` ${allList} item`}</span>;


    return (
        hasList && (
        <div className="todo__lists">
            <div className="todo__cat">
                <div className="todo__counter">{itemCount}</div>
                <a href="/#" onClick={activeViewHandler} className={`todo__cat-list ${activeView ? `active`: ``}`}>ALL</a>
                <a href="/#" onClick={completedViewHandler} className={`todo__cat-list ${completedView ? `active`: ``}`}>Completed</a>
            </div>
            <ul className="todo__list">
                {activeView && allListResult }
                {completedView && allCompletedListResult }
            </ul>
            </div>
        )
    );
};

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
    value: PropTypes.array,
    completed: PropTypes.array,
    add: PropTypes.func,
    remove: PropTypes.func,
};

export default TodoList;
