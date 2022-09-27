import React from "react";
import { Link } from "react-router-dom";


function TripCard({trip, handleReadMore, handleDeleteTrip}) {
    const review = new Array(trip.review).fill(true) 

    function handleUpdateTrip() {

    }

    return (
        <div className="card">
             <div className="div">
                <button type="button" onClick={() => handleDeleteTrip(trip)} className="delete-button">X</button>
            </div>
            <div>
                {review.map(item => <span>&#127775;</span>)}
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