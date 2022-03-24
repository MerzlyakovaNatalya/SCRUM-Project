import './App.css';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="layout" element={<Layout/>}/> 
      </Routes>
    </div>
    </>
  );
}

export default App;
