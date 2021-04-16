import logo from './logo.svg';
import './css/AppTitle.css';

function AppTitle (){
    return (
        <div className="App-title">
            <h1 > Todo App</h1>
            <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
}

export default AppTitle;