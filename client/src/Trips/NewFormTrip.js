import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { tripAdded } from "./tripsSlice"
import { useNavigate} from "react-router-dom"

function NewFormTrip({user, facility, updateErrors}) {
    const [newTrip, setNewTrip] = useState({
        comment: "",
        visited_at: "",
        review: 1,
        facility_id: facility.id
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const rateArray = [1, 2, 3, 4, 5]

    function handleInput(event) {
        updateErrors([])
        setNewTrip({
            ...newTrip,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        addNewTrip(newTrip)
        setNewTrip({
            comment: "",
            visited_at: "",
            review: 1,
            facility_id: facility.id
        })
    }

    function addNewTrip(newTrip) {    
    fetch("/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...newTrip, user_id: user.id})
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        updateErrors(data.errors)
      }else {
        dispatch(tripAdded(data))
        console.log(data)
        updateErrors([`Trip has been added.`])
        navigate('/trips')
      }
    })
  }
    return (
        <>
            <h1>Add New Trip</h1>
            <div className="new-trip-form">
                <form onSubmit={handleSubmit}>
                    <h4>{facility.name}</h4>
                    <div className="div-input-order">
                        <label htmlFor="review" className="label">Review: </label> 
                        <select onChange={(event) => handleInput(event)} name="review" value={newTrip.review} > 
                            {rateArray.map((rate, index) => <option  key={index} value={rate}>{rate}</option>)}
                        </select>
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="comment" className="label">My comment: </label>
                        <input type="text" id="comment" name="comment" value={newTrip.comment} onChange={handleInput} className="input-trip"
                            placeholder="It was great!" />
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="visited_at" className="label">Visited at: </label>
                        <input type="text" id="visited_at" name="visited_at" value={newTrip.visited_at} onChange={handleInput} className="input-trip"
                            placeholder="July 2022" />
                    </div>
                    
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )

}

export default NewFormTrip

/*
function NewFormTrip({facility, addNewTrip, updateErrors}) {
    const [newTrip, setNewTrip] = useState({
        comment: "",
        visited_at: "",
        review: 1,
        facility_id: facility.id
    })
    const rateArray = [1, 2, 3, 4, 5]
    console.log(newTrip)

    function handleInput(event) {
        updateErrors([])
        setNewTrip({
            ...newTrip,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        addNewTrip(newTrip)
        setNewTrip({
            comment: "",
            visited_at: "",
            review: 1,
            facility_id: facility.id
        })
    }

    return (
        <>
            <h1>Add New Trip</h1>
            <div className="new-trip-form">
                <form onSubmit={handleSubmit}>
                    <h4>{facility.name}</h4>
                    <div className="div-input-order">
                        <label htmlFor="review" className="label">Review: </label> 
                        <select onChange={(event) => handleInput(event)} name="review" value={newTrip.review} > 
                            {rateArray.map((rate, index) => <option  key={index} value={rate}>{rate}</option>)}
                        </select>
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="comment" className="label">My comment: </label>
                        <input type="text" id="comment" name="comment" value={newTrip.comment} onChange={handleInput} className="input-trip"
                            placeholder="It was great!" />
                    </div>
                    <div className="div-input-order">
                        <label htmlFor="visited_at" className="label">Visited at: </label>
                        <input type="text" id="visited_at" name="visited_at" value={newTrip.visited_at} onChange={handleInput} className="input-trip"
                            placeholder="July 2022" />
                    </div>
                    
                    <div>
                        <button className="button-login" type="submit">Submit</button>
                    </div>
                    
                </form>
                
            </div>
        </>
    )

}

export default NewFormTrip
*/