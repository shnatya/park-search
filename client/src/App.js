import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom'
import Login from './Log/Login';
import Signup from './Log/Signup'
import Intro from './Intro';
import Search from './Search';
import Header from './Header';


function App() {
  const [user, setUser] = useState(null)
  const [activities, setActivities] = useState([])
  const [facilities, setFacilities] = useState([])
  const [activityFacilities, setActivityFacilities] = useState([])
  const [facilitiesToDisplay, setFacilitiesToDisplay] = useState([])
  
  useEffect(() => {
    fetch("/activities")
    .then(res => res.json())
    .then(data => {
      setActivities(data)
      console.log(data)
    })
    .catch(errors => console.log(errors))
  }, []) 

  useEffect(() => {
    fetch("/facilities")
    .then(res => res.json())
    .then(data => {
      setFacilities(data)
      //console.log(data)
    })
    .catch(errors => console.log(errors))
  }, []) 

  useEffect(()=> {
    fetch("/activity_facilities")
    .then(res => res.json())
    .then(data => {
      setActivityFacilities(data)
    console.log(data)
  })
  }, [])

  function filterFacilitiesBy(activityName) {
    let newArray = []
    newArray=  activityFacilities.filter(object => {
     if (object.activity.name === activityName) {
       console.log(object)
       return object
     }})
    setFacilitiesToDisplay(newArray)
    console.log(newArray)
  }

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

  function loadHeader() {
    return (
    <div>
        <Header user={user} resetUser={resetUser}  />
    </div>
    )
  }


  return (
    <>
      {(user === null || user.id === undefined) ? null : loadHeader()}
      <div className="App">
        <Routes>
            <Route path="/login" element={<Login onLogin={onLogin}/>} />
            <Route path="/signup" element={<Signup onLogin={onLogin}/>} />
            <Route path="/search" element={<Search activities={activities} filterFacilitiesBy={filterFacilitiesBy}
                   facilitiesToDisplay={facilitiesToDisplay}
            /> } />
            <Route path="/" element={<Intro />} />
            <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

