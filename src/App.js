import {Component} from 'react';
import './styles/App.css';
import AppTitle from './AppTitle';
import Form from './Form';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todoList: [
      
    ]
}

removeCharacter = (index) => {
  const {todoList} = this.state

  this.setState({
      todoList: todoList.filter((todoItem, i) =>{
          return i !== index
      })
  })
}

  handleSubmit = (todoItem) => {
    this.setState({todoList: [...this.state.todoList, todoItem]})
}
  render() {
    const {todoList} = this.state;
    return (
    <div> 
      <header className="App-header">
       <AppTitle />
       <Form handleSubmit={this.handleSubmit} />
      </header>
      <TodoList list={todoList}/>
    </div>

    )
  }
}


export default App;
