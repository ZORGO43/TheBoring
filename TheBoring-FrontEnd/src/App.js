import './App.css';
import { Routes, Route } from 'react-router-dom';
import "./bear.css"
import MadGame from './Mad';
import Home from './home';
import Chat from './chat';
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = false

function App() {

  

  return (

    <div className='bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-me-mad" element={<MadGame />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>

  );
}

export default App;
