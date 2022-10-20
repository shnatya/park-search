import React from "react";
import { useDispatch } from "react-redux"
import { tripRemoved } from "./tripsSlice"


function TripCard({trip, handleReadMore, updateErrors, updateTrip}) {
    const review = new Array(trip.review).fill(true) 
    const dispatch = useDispatch()

    function handleDeleteTrip() {
        fetch(`/trips/${trip.id}`, {
            method: "DELETE"})
            .then(res => res.json())
            .then(trip => {
                if(trip.errors) {
                    updateErrors(trip.errors)}
                else{
                    dispatch(tripRemoved(trip.id))
                    updateErrors(["Trip has been deleted."])}
                })
    }
    
    function handleUpdateTrip() {
        updateTrip(trip)
        updateErrors([])
    }
    function handleClick() {
        handleReadMore(trip.facility)
        updateErrors([])
    }
    return (
        <div className="card">
            <div className="div">
                <button type="button" onClick={() => handleDeleteTrip()} className="delete-button">X</button>
            </div>
            <div>
            
                {review.map((item, index) => <span key={index}>&#127775;</span>)}
            </div>
            <button onClick={() => handleClick()} className="invisible-button">{trip.facility.name}</button> 
            <h5>{trip.visited_at}</h5>
            <div className="div">
                <h3 className="between-text">My comment: </h3> 
                <h3 className="comment-text">{trip.comment}</h3> 
            </div>
            <button type="button" onClick={handleUpdateTrip} className="trip-update">Update</button>
            
          
        </div>
    )
}

export default TripCard

/*
 function handleUpdateTrip() {
        updateErrors([])
        updateTrip(trip)
    } 
    
    return (
        <div className="card">
             <div className="div">
                <button type="button" onClick={() => handleDeleteTrip(trip)} className="delete-button">X</button>
            </div>
            <div>
                {review.map((item, index) => <span key={index}>&#127775;</span>)}
            </div>
            <button onClick={() => handleReadMore(trip.facility)} className="invisible-button">{trip.facility.name}</button> 
            <h5>{trip.visited_at}</h5>
            <div className="div">
                <h3 className="between-text">My comment: </h3> 
                <h3 className="comment-text">{trip.comment}</h3> 
            </div>
            
            <button type="button" onClick={handleUpdateTrip} className="trip-update">Update</button>
          
        </div>
    )
}

export default TripCard
    */