import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom'
import Login from './Log/Login';
import Signup from './Log/Signup'
import Intro from './Intro';
import Search from './Search';


function App() {
  const [user, setUser] = useState(null)
  const [activity, setActivity] = useState([])
  
  useEffect(() => {
    fetch("/activities")
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(errors => console.log(errors))
  }, []) 

  useEffect(() => retrieveUser()
  , [])

  function retrieveUser(){
      fetch("/me")
      .then(res => res.json())
      .then(user => {
        setUser(user)
      })
  }

  function onLogin(user) {
    setUser(user)
  }

  function resetUser(){
    setUser(null)
  }
  return (
    <>
      
      <div className="App">
        <Routes>
            <Route path="/login" element={<Login onLogin={onLogin}/>} />
            <Route path="/signup" element={<Signup onLogin={onLogin}/>} />
            <Route path="/search" element={<Search resetUser={resetUser} }/>} />
            <Route path="/" element={<Intro />} />
            <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

