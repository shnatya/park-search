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
  const [trips, setTrips] = useState([])
  const [errors, setErrors] = useState([])
  const [activities, setActivities] = useState([])
  const [facilities, setFacilities] = useState([])
  const [activityFacilities, setActivityFacilities] = useState([])
  const [facilitiesToDisplay, setFacilitiesToDisplay] = useState([])
  const [chosenActivity, setChosenActivity] = useState("")
  const [readAboutThisFacility, setReadAboutThisFacility] = useState({})
  const [wantToAddFacilityToTrips, setWantToAddFacilityToTrips] = useState({})
  const [switchButtons, setSwitchButtons] = useState("search")

  console.log(trips)

  const navigate = useNavigate()
  
  function updateErrors(newErrors) {
    setErrors(newErrors)
  }

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
      console.log(data)
      setActivityFacilities(data)
  })
  }, [])

  function requestUserTrips() {
    fetch("users/trips")
    .then(res => res.json())
    .then(data => {
      setTrips(data)
      console.log(data)
    })
    .catch(errors => console.log(errors))
  }
   

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

  function passNewFacility(facility) {
    setWantToAddFacilityToTrips(facility)
    navigate("/add-new-trip")
  }

  function addNewTrip(newTrip) {    
    fetch("/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...newTrip, user_id: user.id})
    })
    .then(brr => brr.json())
    .then(data => {
      if(data.errors){
        updateErrors(data.errors)
      }else {
        setTrips([...trips, data])
        console.log(data)
        updateErrors([`Trip has been added.`])
        navigate('/trips')
      }
    })
  }
  
  useEffect(() => retrieveUser()
  , [])

  function handleSwitchButtons(button) {
    setSwitchButtons(button)
  }

  function retrieveUser(){
      fetch("/me")
      .then(res => res.json())
      .then(user => {
        setUser(user)
        requestUserTrips()
      })
  }

  function onLogin(user) {
    setUser(user)
  }

  function resetUser(){
    setUser(null)
    updateErrors([])
    setChosenActivity("")
    setFacilitiesToDisplay([])
  }

  function loadHeader() {
    return (
    <div>
        <Header user={user} resetUser={resetUser}  errors={errors} updateErrors={updateErrors} handleSwitchButtons={handleSwitchButtons}/>
    </div>
    )
  }


  return (
    <>
      {(user === null || user.id === undefined) ? null : loadHeader()}
      <div className="App">
        <Routes>
            <Route path="/login" element={<Login onLogin={onLogin} requestUserTrips={requestUserTrips}/>} />
            <Route path="/signup" element={<Signup onLogin={onLogin} requestUserTrips={requestUserTrips}/>} />
            <Route path="/search" element={<Search activities={activities} filterFacilitiesBy={filterFacilitiesBy}
                   facilitiesToDisplay={facilitiesToDisplay} chosenActivity={chosenActivity} handleReadMore={handleReadMore}
                    passNewFacility={passNewFacility} /> } />
            <Route path="/read-more" element={<ReadMore facility={readAboutThisFacility} passNewFacility={passNewFacility}
                    switchButtons={switchButtons}/>}/>
            <Route path="/trips" element={<MyTrips trips={trips} handleReadMore={handleReadMore}/>}/>
            <Route path="/add-new-trip" element={<NewFormTrip facility={wantToAddFacilityToTrips} addNewTrip={addNewTrip}
             updateErrors={updateErrors}/>}/>
            <Route path="/" element={<Intro />} />
            <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

