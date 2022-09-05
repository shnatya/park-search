import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom'
import Login from './Log/Login';
import Intro from './Intro';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null)
  

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  function onLogin(user) {
    setUser(user)
  }
  return (
    <div className="App">
      
      <Routes>
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/" element={<Intro />} />
          <Route path="*" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;

