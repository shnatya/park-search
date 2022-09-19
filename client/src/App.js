import './App.css';

import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import Login from './Log/Login';
import Signup from './Log/Signup'
import Intro from './Intro';
import Search from './Search';
import Header from './Header';
import ReadMore from './Facilities/ReadMore';
import MyTrips from './Trips/MyTrips';
import NewFormTrip from './Trips/NewFormTrip';


function App() {
  const [user, setUser] = useState(null)
  const [activities, setActivities] = useState([])
  const [facilities, setFacilities] = useState([])
  const [activityFacilities, setActivityFacilities] = useState([])
  const [facilitiesToDisplay, setFacilitiesToDisplay] = useState([])
  const [chosenActivity, setChosenActivity] = useState("")
  const [readAboutThisFacility, setReadAboutThisFacility] = useState({})
  const [wantToAddFacilityToTrips, setWantToAddFacilityToTrips] = useState({})

  //console.log(readAboutThisFacility)

  const navigate = useNavigate()
  
  useEffect(() => {
    fetch("/activities")
    .then(res => res.json())
    .then(data => {
      setActivities(data)
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
  })
  }, [])

  function filterFacilitiesBy(activityName) {
    setChosenActivity(activityName)
    let newArray = []
    newArray=  activityFacilities.filter(object => {
     if (object.activity.name === activityName) {
       return object
     }})
    setFacilitiesToDisplay(newArray)
  }

  function handleReadMore(facility) {
    setReadAboutThisFacility(facility)
    navigate("/read-more")
  }

  function handleAddTrip(facility) {
    setWantToAddFacilityToTrips(facility)
    navigate("/add-new-trip")
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
                   facilitiesToDisplay={facilitiesToDisplay} chosenActivity={chosenActivity} handleReadMore={handleReadMore}
                    handleAddTrip={handleAddTrip}/> } />
            <Route path="/read-more" element={<ReadMore facility={readAboutThisFacility}/>}/>
            <Route path="/trips" element={<MyTrips />}/>
            <Route path="/add-new-trip" element={<NewFormTrip facility={wantToAddFacilityToTrips}/>}/>
            <Route path="/" element={<Intro />} />
            <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

