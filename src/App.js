import logo from './logo.svg';
import './App.css';
import MyTick from './components/MyTick';

function App() {
  console.log("App 컴포넌트"); /* JSX 형식으로 return 필요 */
  return ( /* return 되는 것은 태그 1개 (1개의 태그 속에 여러개의 태그가 존재) */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MyTick />
    </div>
  );
}

export default App;
// 컴포넌트의 기본형식
// 내가 만든 정의 태그는 반드시 대문자로 시작