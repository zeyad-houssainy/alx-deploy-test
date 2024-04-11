import logo from "./Holberton-Logo.jpg";
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" placeholder="Enter your Email" autoComplete="email" />
          <label htmlFor="password">password: </label>
          <input type="password" name="password" id="password" placeholder="Enter your Password" autoComplete="current-password" />
          <button>ok</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
