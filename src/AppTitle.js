import logo from './logo.svg';
import './styles/AppTitle.css';

function AppTitle (){
    return (
        <div className="App-title">
            <h1 > Todo App</h1>
            <div>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
      </div>
    )
}

export default AppTitle;