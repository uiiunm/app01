import logo from './logo.svg';
import './App.css';

function App() {
  return ( /* return 되는 것은 태그 1개 (1개의 태그 속에 여러개의 태그가 존재) */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
