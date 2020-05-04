import React from 'react'

function Form(props){
    return(
        <div>
            <form onSubmit={(event)=> props.submithandler(event)}  className="form-inline">
                <input className="form-control" id="newTodo" onChange={(event)=>{props.onTextChange(event)}} type="text" placeholder="Enter to do item" value={props.title} required/>
                <button type="submit"  className="btn btn-primary">Add todo item</button>
            </form>
        </div>
    )
}

export default Form