import './App.css';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PrivateOffice } from './components/private_office/PrivateOffice';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="layout" element={<Layout/>}/> 
        <Route path="private" element={<PrivateOffice/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
