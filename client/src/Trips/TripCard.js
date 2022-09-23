import React from "react";
import { useNavigate } from "react-router-dom";


function TripCard({trip}) {
    const review = new Array(trip.review).fill(true) 
    
    function handleUpdateTrip() {

    }
    return (
        <div className="card">
             <div className="div">
                
                <button type="button" onClick={handleUpdateTrip} className="delete-button">X</button>
            </div>
            <div>
                {review.map(item => <span>&#127775;</span>)}
            </div>
            <h2>{trip.facility.name}</h2>
            <h3 className="between-text">My comment: {trip.comment}</h3> 
            <button type="button" onClick={handleUpdateTrip} className="trip-update">Update</button>
          
        </div>
    )
}

export default TripCard