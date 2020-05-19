import React, { PropTypes, useState } from 'react';

import './list.scss';

const TodoList = ({ value, click, completed }) => {

    const [allView, setAllView] = useState(true);
    const [completedView, setCompletedView] = useState(false);
    const hasList = value.length > 0 || completed.length > 0;
    const hasCompletedList = completed.length > 0;


    const allViewHandler = () => {
        setAllView(true);
        setCompletedView(false);
    }
    const completedViewHandler = () => {
        setCompletedView(true);
        setAllView(false);
    }


    return (
        <div className="todo__lists">
            {hasList &&
            <ul className="todo__list">
                {allView && value.map(item => (
                    <li key={item.id}>
                    {item.text}
                        <div className="todo__check-wrap"  onClick={() => click(item)}>
                            <span className="todo__check-icon"></span>
                        </div>
                    </li>
                ))}
                {hasCompletedList && completedView  && completed.map(item => (
                    <li key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
            }
            {hasList && (
                <div className="todo__cat">
                    <span onClick={allViewHandler} className={` ${allView ? `active`: ``}`}>ALL</span>
                    {hasCompletedList  &&
                        <span onClick={completedViewHandler} className={` ${completedView ? `active`: ``}`}>Completed</span>
                    }
                </div>
            ) }
        </div>
    );
};

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
    // value: PropTypes.array,
    // completed: PropTypes.array,
    // click: PropTypes.func,
};

export default TodoList;
