import {Component} from 'react';
import './css/App.css';
import AppTitle from './AppTitle';
import Form from './Form';

class App extends Component {
  render() {
    return (
    <div> 
      <header className="App-header">
       <AppTitle />
       <Form />
      </header>
    </div>

    )
  }
}


export default App;
