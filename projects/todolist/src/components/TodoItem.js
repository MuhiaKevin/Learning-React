import React from 'react'

function TodoItem(props) {
    
    return (
        <li key={props.index} className="list-group-item">
            <div className={props.item.done ? 'done' : 'undone'}>
                <span onClick={() => props.toggledone(props.index, props.item.done )} className="glyphicon glyphicon-ok icon" ></span>
                {props.item.title}
                <button onClick={() => props.removeItem(props.index)} type="button" className="close">&times;</button>
            </div>
        </li>
    )
}

export default TodoItem