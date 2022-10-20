import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from "./Trips/tripsSlice" 
import { userLogin, userLogout } from "./Log/usersSlice" 
import Login from './Log/Login';
import Signup from './Log/Signup'
import Intro from './Intro';
import Search from './Search';
import Header from './Header';
import ReadMore from './Facilities/ReadMore';
import MyTrips from './Trips/MyTrips';
import NewFormTrip from './Trips/NewFormTrip';
import UpdateTripForm from './Trips/UpdateTripForm';

function App() {
  const [errors, setErrors] = useState([])
  const [activities, setActivities] = useState([])
  const [activityFacilities, setActivityFacilities] = useState([])
  const [facilitiesToDisplay, setFacilitiesToDisplay] = useState([])
  const [chosenActivity, setChosenActivity] = useState("")
  const [readAboutThisFacility, setReadAboutThisFacility] = useState({})
  const [wantToAddFacilityToTrips, setWantToAddFacilityToTrips] = useState({})
  const [switchButtons, setSwitchButtons] = useState("search")
  const [updateThisTrip, setUpdateThisTrip] = useState([])

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  
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

  useEffect(() => retrieveUser()
  , [])

  function handleSwitchButtons(button) {
    setSwitchButtons(button)
  }

  function passNewFacility(facility) {
    setWantToAddFacilityToTrips(facility)
    navigate("/add-new-trip")
  }

  function updateTrip(trip) {
    setUpdateThisTrip(trip)
    navigate('/update-trip')
  }

  function retrieveUser(){
      fetch("/me")
      .then(res => res.json())
      .then(user => {
        dispatch(userLogin(user))
        dispatch(fetchTrips())
      })
  }

  function resetUser(){
    dispatch(userLogout())
    updateErrors([])
    setChosenActivity("")
    setFacilitiesToDisplay([])
  }

  function loadHeader() {
    return (
    <div>
        <Header resetUser={resetUser}  errors={errors} updateErrors={updateErrors} handleSwitchButtons={handleSwitchButtons}/>
    </div>
    )
  }

  return (
    <>
      {(user === null || user.id === undefined) ? null : loadHeader()}
      <div className="App">
        <Routes>
            <Route path="/login" element={<Login loadHeader={loadHeader}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search activities={activities} filterFacilitiesBy={filterFacilitiesBy}
                   facilitiesToDisplay={facilitiesToDisplay} chosenActivity={chosenActivity} handleReadMore={handleReadMore}
                    passNewFacility={passNewFacility} /> } />
            <Route path="/read-more" element={<ReadMore facility={readAboutThisFacility} passNewFacility={passNewFacility}
                    switchButtons={switchButtons}/>}/>
            <Route path="/trips" element={<MyTrips handleReadMore={handleReadMore} updateErrors={updateErrors} updateTrip={updateTrip}/>}/>
            <Route path="/add-new-trip" element={<NewFormTrip facility={wantToAddFacilityToTrips} updateErrors={updateErrors}/>}/>
            <Route path="/update-trip" element={<UpdateTripForm updateThisTrip={updateThisTrip} updateErrors={updateErrors}/>}/>
            <Route path="/" element={<Intro />} />
            <Route path="*" element={<Intro />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

