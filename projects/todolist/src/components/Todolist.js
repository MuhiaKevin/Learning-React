import React from 'react'
import TodoItem from './TodoItem'

function Todolist(props) {

    return (
        <div className="container">
            <h3>My todos</h3>
            <ul className="list-group">
                <div className="row">
                    <div className="col-sm-6">
                        <button onClick={() => props.markAllDone()} type="submit" style={{ margin: "20px" }} className={props.todos.length !== 0 ? "btn btn-warning" : "disappear"}>Mark All as Done</button>

                    </div>
                    <div className="col-sm-6">
                        <button onClick={() => props.removeAll()} type="submit" style={{ margin: "20px" }} className={props.todos.length !== 0 ? "btn btn-danger" : "disappear"}>Remove Done todos</button>
                    </div>
                </div>
                {props.todos.map((item, key) => {
                    return (
                        <TodoItem
                            item={item}
                            index={key}
                            removeItem={props.removeItem}
                            toggledone={props.toggledone}
                        />
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default Todolist