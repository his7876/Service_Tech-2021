import logo from './logo.svg';
import './App.css';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header title = "메인화면"></Header>
      <Header title = "거래 내역 조회"></Header>
      </header>
    </div>
  );
}

export default App;
