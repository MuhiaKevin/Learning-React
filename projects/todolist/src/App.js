import React from 'react';
import './App.css';
import Todolist from './components/Todolist'
import Form from './components/Form'


// https://codepen.io/marekdano/pen/bVNYpq
// https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      todos: []
    }
    this.removeItem = this.removeItem.bind(this)
    this.toggledone = this.toggledone.bind(this)
    this.markAllDone = this.markAllDone.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this)
  }

  componentDidMount() {
    let todos = localStorage.getItem('todos') != null ? JSON.parse(localStorage.getItem('todos')) : []
    this.setState({
      todos
    })
  }




  // supdates the state with the latest values
  submithandler(event) {
    event.preventDefault();

    this.setState({
      title: '',
      todos: [...this.state.todos, {
        title: this.state.title,
        done: false
      }]
    }, () => {
      this.saveToLocalStorage()
    });


  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify([...this.state.todos]))
  }




  // marks all todo items as done
  markAllDone() {
    const todos = [...this.state.todos]
    todos.map(item =>
      item.done = item.done ? false : true
    )

    this.setState({
      todos
    }, () => {
      this.saveToLocalStorage()
    })
  }

  // removes all done todos
  // TODO: NOT WORKING THE WAY I LIKE

  removeAll() {
    const todos = [...this.state.todos]
    todos.map((item, key) =>
      item.done === true ? todos.splice(key, 1) : console.log("cannot be deleted")

    )

    this.setState({
      todos
    }, () => {
      this.saveToLocalStorage()
    })

  }

  // removes a todo item
  removeItem(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1)

    this.setState({
      todos
    }, () => {
      this.saveToLocalStorage()
    })
  }

  // removes a todo item sets the text inputed to the title state
  onTextChange(event) {
    this.setState({
      title: event.target.value
    })
  }


  // toggles a todo item as done  
  toggledone(index, doneornot) {
    let todosstate = [...this.state.todos][index].done; // get todo item done is true or false
    todosstate = todosstate ? false : true // if todo item is false then set it to true and vice versa
    const todos = [...this.state.todos]; // copy the array

    todos[index] = { ...todos[index], done: todosstate }; // copy the todo can also use Object.assign

    this.setState({
      todos
    }, () => {
      this.saveToLocalStorage()
    })

  }


  render() {
    return (

      <div className="App container">
        <div className="row">
          <div className="col">
            <h2>TODO app</h2>
            <Form
              title={this.state.title}
              submithandler={(event) => this.submithandler(event)}
              onTextChange={(event) => { this.onTextChange(event) }}
            />
            <Todolist
              title={this.state.title}
              todos={this.state.todos}
              removeItem={this.removeItem}
              toggledone={this.toggledone}
              markAllDone={this.markAllDone}
              removeAll={this.removeAll}
            />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
