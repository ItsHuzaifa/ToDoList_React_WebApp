import React from 'react'

export const TodoItem = (props) => {
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" onClick={() => { props.onSelect(props.id); }} />
                <li> {props.item} </li>
            </div>
        </>
    )
}
