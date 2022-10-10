import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter basename='react'>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <Routes>
          <Route path="/" exact element={<div>首页</div>} />
          <Route path="/about" exact element={<div>关于</div>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
