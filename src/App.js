import {Component} from 'react';
import './styles/App.css';
import AppTitle from './AppTitle';
import Form from './Form';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
    <div> 
      <header className="App-header">
       <AppTitle />
       <Form />
      </header>
      <TodoList />
    </div>

    )
  }
}


export default App;
