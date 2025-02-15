import { useContext } from 'react';
import Main from './docs/components/main';
import './docs/style/App.css';
import { Route, Routes } from 'react-router-dom';
import Work from './docs/components/work';
import { Auth } from './docs/context/context';

export default function App() {
  const { session, sessionLoading } = useContext(Auth);
  console.log(session)
  return (
    <div className="app">
      {!sessionLoading &&
      <Routes>
        <Route path='/' element={!session?.isonline ? <Main/> : <Work/> } />
      </Routes>
      }
    </div>
  )
}