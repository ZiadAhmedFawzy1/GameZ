import Main from './docs/components/main';
import './docs/style/App.css';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </div>
  )
}