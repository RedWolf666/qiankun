import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function render() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
//如果是独立运行的话就直接运行render
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
//子组件的协议已经规定好了
export async function bootstrap() { }
export async function mount() {
  render()
}
export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
